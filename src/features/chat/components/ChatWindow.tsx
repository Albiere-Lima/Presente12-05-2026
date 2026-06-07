import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage } from '../types/chatMessage';
import roteiroJson from '../../enigmas/roteiro.json';

const roteiro: ChatMessage[] = (roteiroJson as any).roteiro || [];

interface ChatWindowProps {
  onUnlock: () => void;
}

export function ChatWindow({ onUnlock }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (currentStep >= roteiro.length) {
      const timer = setTimeout(() => onUnlock(), 2000);
      return () => clearTimeout(timer);
    }

    const nextMessage = roteiro[currentStep];

    if (nextMessage.sender === 'bot') {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, nextMessage]);
        setIsTyping(false);
    
        if (!nextMessage.isEnigma) {
          setCurrentStep((prev) => prev + 1);
        }
      }, nextMessage.delay || 1500);

      return () => clearTimeout(timer);
    }
  }, [currentStep, onUnlock]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    
    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMsg]);
    const answer = inputValue.toLowerCase().trim();
    setInputValue('');

    const currentBotMessage = roteiro[currentStep];

    if (currentBotMessage?.isEnigma) {
      const isCorrect = currentBotMessage.expectedAnswers?.some(
        (ans) => ans.toLowerCase() === answer
      );

      if (isCorrect) {
   
        setCurrentStep((prev) => prev + 1);

      } else {
   
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, sender: 'bot', text: currentBotMessage.errorReply || 'Erro.' }
          ]);
        }, 500);

      }
    }
  };

  return (
    <>
    <div style={{ backgroundColor: '#000', color: '#0f0', height: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'monospace' }}>
      
      <div style={{ padding: '20px', borderBottom: '1px solid #0f0', textAlign: 'center' }}>
        <h2>Desaparecimento De Albiere</h2>
      </div>
      
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
            <span style={{ opacity: 0.5 }}>{msg.sender === 'bot' ? '[SISTEMA]' : '[CAMILY]'}</span>
            <p style={{ margin: '5px 0 0 0', backgroundColor: msg.sender === 'user' ? '#0f0' : 'transparent', color: msg.sender === 'user' ? '#000' : '#0f0', padding: '8px', borderRadius: '4px', border: msg.sender === 'bot' ? '1px solid #0f0' : 'none' }}>
              {msg.text}
            </p>
          </div>
        ))}

        {isTyping && (
          <div style={{ alignSelf: 'flex-start', color: '#0f0', opacity: 0.7 }}>
            [SISTEMA] processando dados...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} style={{ padding: '20px', borderTop: '1px solid #0f0', display: 'flex' }}>
        <span style={{ marginRight: '10px', alignSelf: 'center' }}>{'>'}</span>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isTyping}
          autoFocus
          style={{ flex: 1, backgroundColor: 'transparent', border: 'none', color: '#0f0', outline: 'none', fontFamily: 'monospace', fontSize: '16px' }} 
          placeholder={isTyping ? "Aguarde a liberação..." : "Digite o código e aperte Enter..."}
        />
      </form>
    </div>
    </>
  );
}