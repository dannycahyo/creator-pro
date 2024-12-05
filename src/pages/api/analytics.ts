import type { NextApiRequest, NextApiResponse } from "next";
import {
  geminiApiClient,
  fileManager,
} from "@src/utils/geminiApiClient";
import formidable from "formidable";
import { parse } from "csv-parse";
import fs from "fs";
import {
  TikTokAnalytics,
  AnalyticsResponse,
} from "@src/types/Analytics";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<AnalyticsResponse | { error: string }>,
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to parse form data" });
    }

    const file = files.csvFile;
    const range = fields.range?.[0] || "7 days";

    if (!file) {
      return res.status(400).json({ error: "No CSV file uploaded" });
    }

    const filePath = file[0].filepath;

    try {
      // First, parse the CSV to get the chart data
      const csvData = fs.readFileSync(filePath, "utf-8");
      const records: TikTokAnalytics[] = [];
      const parser = parse(csvData, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        bom: true, // Handle BOM characters
        quote: '"', // Specify quote character
        relax_quotes: true, // Be more forgiving with quotes
        delimiter: ",", // Explicitly set delimiter
      });

      for await (const record of parser) {
        records.push({
          Date: record.Date?.trim(),
          "Video Views": parseInt(
            record["Video Views"]?.trim() || "0",
          ),
          "Profile Views": parseInt(
            record["Profile Views"]?.trim() || "0",
          ),
          Likes: parseInt(record.Likes?.trim() || "0"),
          Comments: parseInt(record.Comments?.trim() || "0"),
          Shares: parseInt(record.Shares?.trim() || "0"),
        });
      }

      // Upload the CSV file using FileManager from utils
      const uploadResponse = await fileManager.uploadFile(filePath, {
        mimeType: "text/csv",
        displayName: `tiktok_analytics_${new Date().toISOString()}.csv`,
      });

      // Generate content using the model from utils
      const result = await geminiApiClient.generateContent([
        {
          fileData: {
            mimeType: uploadResponse.file.mimeType,
            fileUri: uploadResponse.file.uri,
          },
        },
        {
          text: `Analyze the following TikTok engagement data over ${range}. 
                 Identify trends in video views, likes, comments, and shares, 
                 and explain why some days might perform better than others. 
                 Please provide the analysis in the following format:
                 
                 1. Key Trends:
                 - List the main trends observed
                 
                 2. Performance Analysis:
                 - Detailed analysis of metrics
                 
                 3. Recommendations:
                 - Actionable insights based on the data`,
        },
      ]);

      const analysis = result.response.text();

      res.status(200).json({
        analysis,
        chartData: records,
      });
    } catch (error) {
      console.error("Error analyzing data:", error);
      res.status(500).json({ error: "Failed to analyze data" });
    } finally {
      // Clean up the temporary file
      fs.unlinkSync(filePath);
    }
  });
};

export default handler;
