import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is not set");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const fileManager = new GoogleAIFileManager(
  process.env.GEMINI_API_KEY,
);

const geminiApiClient = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export { geminiApiClient, fileManager };
