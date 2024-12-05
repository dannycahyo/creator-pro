import { geminiApiClient } from "@src/utils/geminiApiClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "Input is required" });
  }

  try {
    const prompt = `Generate a detailed technical script for a content creator based on the following input: ${input}`;
    const result = await geminiApiClient.generateContent(prompt);
    const response = await result.response;
    const script = response.text();
    res.status(200).json({ script });
  } catch (error) {
    console.error("Error generating script:", error);
    res.status(500).json({ error: "Failed to generate script" });
  }
}
