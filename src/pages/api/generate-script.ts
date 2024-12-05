import { geminiApiClient } from "@src/utils/geminiApiClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // TODO: Implement method checking
  // HINT: Verify that the request method is POST

  // TODO: Extract the input from request body
  // HINT: Use req.body.input

  // TODO: Validate the input
  // HINT: Check if input exists, return 400 if not

  try {
    // TODO: Create a prompt for the Gemini API
    // HINT: Use a template string that asks for a technical script based on the input

    // TODO: Call Gemini API and get the response
    // HINT: Use geminiApiClient.generateContent and extract the text from the response

    // TODO: Return the generated script
    // HINT: Send response with status 200 and the script in JSON format
    res.status(200).json({
      script: "The API implementation is still incomplete!",
    });
  } catch (error) {
    console.error("Error generating script:", error);
    res.status(500).json({ error: "Failed to generate script" });
  }
}
