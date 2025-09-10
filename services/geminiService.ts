
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MURAKAMI_SYSTEM_PROMPT } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function generateMurakamiPoem(prompt: string): Promise<string> {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `お題：${prompt}`,
      config: {
        systemInstruction: MURAKAMI_SYSTEM_PROMPT,
        temperature: 0.8,
        topP: 0.95,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("API returned no text.");
    }
    return text;
  } catch (error) {
    console.error("Error generating poem with Gemini API:", error);
    throw new Error("Failed to generate poem.");
  }
}
