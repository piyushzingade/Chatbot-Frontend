import React from 'react';
import { FiArrowUp } from 'react-icons/fi'; // Importing the icon from react-icons

const ChatInput: React.FC = () => {
    return (
        <div className="relative w-[800px] h-[200px] bg-white p-4 rounded-lg shadow-md mt-4">
            <div className="relative h-full">
                <textarea
                    className="w-full h-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-transparent border-none resize-none"
                    placeholder="Who is the principal of the college?"
                ></textarea>
                <button className="absolute top-2 right-2 flex items-center bg-blue-600 text-white p-2 rounded-md">
                    <FiArrowUp className="h-5 w-5" />
                </button>
                <div className="absolute bottom-2 left-2 text-gray-300 text-xs pointer-events-none">
                    MVLUBOT 0.1 (Beta)
                </div>
                <div className="absolute bottom-2 right-14 text-gray-300 text-xs pointer-events-none">
                    Use shift + return for new line
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
