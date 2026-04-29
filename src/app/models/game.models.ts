export interface Case {
  id: string;
  title: string;
  description: string;
  victim: string;
  location: string;
  date: string;
  suspects: Suspect[];
  evidence: Evidence[];
  truth: Truth;
}

export interface Suspect {
  id: string;
  name: string;
  role: string;
  alibi: string;
  secrets: string[];
}

export interface Evidence {
  id: string;
  name: string;
  description: string;
  type: 'physical' | 'document' | 'photo' | 'testimony';
  location: string;
  discovered: boolean;
}

export interface Truth {
  killer: string;
  motive: string;
  method: string;
  keyEvidence: string[];
}

export interface Message {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface GameState {
  phase: 'briefing' | 'investigation' | 'tension' | 'resolution' | 'gameover';
  currentCase: Case | null;
  messages: Message[];
  evidence: Evidence[];
  corruption: number;
  timeRemaining: number;
  isGlitch: boolean;
  eventTriggered: boolean;
}

export interface OpenRouterRequest {
  model: string;
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
  temperature: number;
}

export interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}