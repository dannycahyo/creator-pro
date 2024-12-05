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
  // TODO: Implement method checking
  // HINT: Verify request method is POST

  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to parse form data" });
    }

    // TODO: Extract CSV file and range from the request
    // HINT: Get files.csvFile and fields.range

    // TODO: Validate CSV file presence
    // HINT: Return 400 if no file is uploaded

    try {
      // TODO: Read and parse the CSV file
      // HINT: Use fs.readFileSync and csv-parse
      const records: TikTokAnalytics[] = [];

      // TODO: Configure and implement CSV parsing
      // HINT: Use parse with appropriate options for handling CSV data

      // TODO: Process CSV records
      // HINT: Convert string values to numbers where appropriate

      // TODO: Upload CSV to FileManager
      // HINT: Use fileManager.uploadFile with appropriate metadata

      // TODO: Generate analysis using Gemini API
      // HINT: Call geminiApiClient.generateContent with file data and analysis prompt

      // TODO: Return analysis and chart data
      // HINT: Send response with parsed records and AI analysis
    } catch (error) {
      console.error("Error analyzing data:", error);
      res.status(500).json({ error: "Failed to analyze data" });
    } finally {
      // TODO: Clean up temporary file
      // HINT: Use fs.unlinkSync
    }
  });
};

export default handler;
