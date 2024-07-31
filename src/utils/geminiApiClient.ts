const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
export const geminiApiClient = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
