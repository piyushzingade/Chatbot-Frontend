import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center flex flex-col items-center mb-8 m-4 p-4">
      <img
        src="./src/assets/download.jpeg"
        alt="MVLU Logo"
        className="h-32 w-22 mb-4"
      />
      <h1 className="text-3xl font-bold">
        Welcome to <span className="text-purple-900">MVLU College Bot</span>
      </h1>
      <p className="text-lg text-customGray">
        How can I help you today?
      </p>
    </header>
  );
}

export default Header;
