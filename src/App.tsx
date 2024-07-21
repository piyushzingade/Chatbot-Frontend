// src/App.tsx
import React from 'react';
import Header from './components/Header';
import ChatInput from './components/ChatInput';
import Options from './components/Options';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <Header />
      <ChatInput />
      <Options />
    </div>
  );
}

export default App;
