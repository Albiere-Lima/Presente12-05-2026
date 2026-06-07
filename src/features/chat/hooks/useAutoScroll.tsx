import { useEffect, useRef } from 'react';

export function useAutoScroll(dependency: any) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [dependency]);

  return messagesEndRef;
}