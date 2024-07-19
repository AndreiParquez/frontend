import React, { useState } from 'react';
import avatar from '../assets/axie.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    { value: 'option1', label: 'dApp1', img: avatar },
    { value: 'option2', label: 'dApp2', img: avatar },
    { value: 'option3', label: 'dApp3', img: avatar },
  ];

  return (
    <div className=" relative w-36 text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-7 px-5 blue text-white rounded-2xl font-bold py-4 flex items-center justify-center w-full"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption === 'option1' && (
          <img src={avatar} alt="avatar" className="w-6 h-6   border-white rounded-full mr-2" />
        )}
        {options.find(option => option.value === selectedOption).label}
        <ChevronDownIcon className="w-7 h-7 ml-2 " />
      </button>
      {isOpen && (
        <ul className="absolute w-full  flex flex-col justify-center overflow-hidden mx-auto bg-white text-black shadow-lg rounded-md mt-2 z-10" role="listbox">
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="p-2 flex items-center justify-center hover:bg-gray-400 cursor-pointer"
              role="option"
              aria-selected={selectedOption === option.value}
            >
              {option.img && (
                <img src={option.img} alt="avatar" className="w-6 h-6 md:border-4 border-2 border-white rounded-full mr-2" />
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
