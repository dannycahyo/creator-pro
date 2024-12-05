import type { NextApiRequest, NextApiResponse } from "next";
import { geminiApiClient } from "@src/utils/geminiApiClient";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to parse form data" });
    }

    const file = files.audioFile;
    if (!file) {
      return res
        .status(400)
        .json({ error: "No audio file uploaded" });
    }

    const filePath = file[0].filepath;
    const mimeType = file[0].mimetype;

    try {
      const base64Buffer = fs.readFileSync(filePath);
      const base64AudioFile = base64Buffer.toString("base64");

      const result = await geminiApiClient.generateContent([
        {
          inlineData: {
            mimeType: mimeType ?? "audio/mp3",
            data: base64AudioFile,
          },
        },
        {
          text: "Translate the speech to Bahasa Indonesia (Indonesian Language)",
        },
      ]);

      const translatedText = result.response.text();
      res.status(200).json({ translatedText });
    } catch (error) {
      console.error("Error generating transcription:", error);
      res
        .status(500)
        .json({ error: "Failed to generate transcription" });
    } finally {
      // Clean up the temporary file
      fs.unlinkSync(filePath);
    }
  });
};

export default handler;
