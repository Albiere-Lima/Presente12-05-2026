import React, { useState } from 'react';
<<<<<<< HEAD
import { ChatWindow } from './features/chat/components/ChatWindow';
=======
import { ChatWindow } from './features/chat/components/chatWindow';
>>>>>>> 4362840ec81a77e69e3a917faee56cfc24af2b36
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