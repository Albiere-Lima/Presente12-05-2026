export type SenderType = 'bot' | 'user' | 'system';

export interface ChatMessage {
  id: number;             
  sender: SenderType;      
  text: string;          
  
  
  delay?: number; 
  

  isEnigma?: boolean; 
  expectedAnswers?: string[];
  errorReply?: string;
}