import { GoogleGenAI } from "@google/genai";
import { ChatMessage, StepData } from '../types';

// Initialize the client only if the key exists. 
// In a real app, you would handle the missing key UI gracefully.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string,
  currentStep: StepData
): Promise<string> => {
  if (!apiKey) {
    return "API Key ontbreekt. Controleer je configuratie.";
  }

  try {
    const modelId = 'gemini-2.5-flash'; 
    
    // Construct a specific system instruction based on the step and phase
    const systemInstruction = `
      Je bent een AI-tutor voor studenten in het hoger onderwijs (HBO/WO).
      De student bevindt zich in de fase: "${currentStep.phase}".
      De specifieke stap in het leerproces is: "${currentStep.title}".
      
      Jouw specifieke rol en instructie is: ${currentStep.aiRole}

      ALGEMENE RICHTLIJNEN:
      - Antwoord altijd in het Nederlands.
      - Wees behulpzaam maar neem het leerproces niet over.
      - Stimuleer metacognitie (denken over het leren).
      - Gebruik Markdown voor opmaak (lijstjes, vetgedrukt) waar nodig.
      - Houd antwoorden beknopt en relevant.
    `;

    // Format history for the API
    // We limit history context to keeping it focused, though 2.5 flash has a large window.
    // The SDK expects history in a specific format if using chat sessions, 
    // but here we are doing a single turn request with history included manually 
    // or using the chat helper. Let's use the chat helper.

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Balance between creativity and strict adherence
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "Er ging iets mis bij het genereren van een antwoord.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, er is een fout opgetreden bij de AI-service. Probeer het later opnieuw.";
  }
};