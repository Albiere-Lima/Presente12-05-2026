import React, { useState } from 'react';
import { ChatWindow } from './features/chat/components/ChatWindow';
import { RomanticScreen } from './features/surprise/components/RomanticScreen';

export function App() {

  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <>
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      {!isUnlocked ? (
        <ChatWindow onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <RomanticScreen />
      )}
    </div>
    </>
  );
}