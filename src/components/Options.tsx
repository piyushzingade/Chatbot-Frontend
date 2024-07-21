import React from 'react';
import { FaBook, FaGraduationCap, FaRegClipboard, FaBriefcase } from 'react-icons/fa';

const options = [
    { label: "Course Registration Help", icon: <FaRegClipboard className="text-orange-500 text-4xl mb-2" /> },
    { label: "Internship Opportunities", icon: <FaBriefcase className="text-orange-500 text-4xl mb-2" /> },
    { label: "Library Resources", icon: <FaBook className="text-pink-500 text-4xl mb-2" /> },
    { label: "Graduation Requirements", icon: <FaGraduationCap className="text-orange-500 text-4xl mb-2" /> },
];

const Options: React.FC = () => {
    return (
        <div className="flex flex-col  mt-8">
            <div className="flex items-start mb-4">
                <FaRegClipboard className="text-blue-500 text-2xl mr-2" />
                <span className="text-lg text-gray-700 font-semibold">Get Started</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {options.map(option => (
                    <div
                        key={option.label}
                        className="bg-white border border-gray-200 rounded-md p-4 flex flex-col items-start w-48 shadow hover:shadow-lg transition-shadow"
                    >
                        {option.icon}
                        <p className="text-gray-800 text-lg font-semibold">{option.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Options;
