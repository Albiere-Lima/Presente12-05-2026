export type SenderType = 'bot' | 'user';

export interface Message {
  id: number;
  sender: SenderType;
  text: string;
  isEnigma?: boolean;
  expectedAnswer?: string;
}