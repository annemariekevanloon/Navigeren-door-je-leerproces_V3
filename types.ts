export enum RegulationPhase {
  PREPARATION = "Voorbereidingsfase",
  EXECUTION = "Uitvoeringsfase",
  REFLECTION = "Reflectiefase"
}

export interface StepData {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  questions: string[];
  phase: RegulationPhase;
  aiRole: string;
  aiPromptSuggestions: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}