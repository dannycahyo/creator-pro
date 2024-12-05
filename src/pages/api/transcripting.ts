import type { NextApiRequest, NextApiResponse } from "next";
import { geminiApiClient } from "@src/utils/geminiApiClient";
import formidable from "formidable";
import fs from "fs";

// NOTE: This configuration is required for handling file uploads in Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: Implement method checking
  // HINT: Check if the request method is POST, if not return 405

  // Initialize formidable for parsing form data
  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to parse form data" });
    }

    // TODO: Get the audio file from the parsed files
    // HINT: The file will be in files.audioFile

    // TODO: Validate that a file was uploaded
    // HINT: Return 400 if no file is present

    // TODO: Get the file path and mime type
    // HINT: These will be in file[0].filepath and file[0].mimetype

    try {
      // TODO: Read the file and convert it to base64
      // HINT: Use fs.readFileSync and toString("base64")
      // TODO: Call Gemini API to transcribe the audio
      // HINT: Use geminiApiClient.generateContent with the following structure:
      /*
        [
          { inlineData: { mimeType, data: base64AudioFile } },
          { text: "Translate the speech to Bahasa Indonesia" }
        ]
      */
      // TODO: Extract and return the translated text
      // HINT: Use result.response.text()
    } catch (error) {
      console.error("Error generating transcription:", error);
      return res
        .status(500)
        .json({ error: "Failed to generate transcription" });
    } finally {
      // TODO: Clean up the temporary file
      // HINT: Use fs.unlinkSync
    }
  });
};

export default handler;
