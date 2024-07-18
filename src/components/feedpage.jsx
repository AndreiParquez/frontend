import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons from react-icons
import avatar from '../assets/axie.png';
import Sidebar from './sidebar';

const FeedPage = () => {
  const [postInput, setPostInput] = useState('');

  const handleInputChange = (event) => {
    setPostInput(event.target.value);
  };

  return (
    <div className="flex min-h-screen md:mt-16 lg:mt-10 mt-16 bg-orange-400 text-sm">
      <Sidebar />
      <div className="md:ml-64 flex-1 p-4 md:p-3 lg:p-10 bg-orange-400">
        <div className="darkblue p-3 rounded-lg text-white m-2">
          <div className="flex justify-center items-center">
            <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full m-2" />
            <p className="text-sm font-bold">Andrei Parqz</p>
            <select className="text-xs h-7 px-5 blue rounded-md ml-2">
              <option value="option1">dApp1</option>
              <option value="option2">dApp2</option>
              <option value="option3">dApp3</option>
            </select>
            <div className="flex items-center ml-auto">
              <button className="w-8 h-8 rounded-full  text-white flex items-center justify-center">
                <FaChevronLeft className="h-4 w-4" /> {/* Using react-icons */}
              </button>
              <div className="bg-red-700 text-white font-bold text-lg px-4 py-2 mx-2 rounded-lg">
                5
              </div>
              <button className="w-8 h-8 rounded-full  text-white flex items-center justify-center">
                <FaChevronRight className="h-4 w-4" /> {/* Using react-icons */}
              </button>
            </div>
          </div>
          <div className="px-10">
            <textarea
              value={postInput}
              onChange={handleInputChange}
              className="w-full p-2 blue text-white text-xs border-gray-300 rounded-lg shadow-lg placeholder:text-xs placeholder:text-white resize-none"
              placeholder="Tap here to rate your dApp..."
              rows={postInput.split('\n').length}
            />
          </div>

          <div className="flex justify-end items-center space-x-2 mt-5">
            <p className="text-xs">Create an article</p>
            <button className="px-5 h-8 rounded-md bg-blue-500 text-white flex items-center justify-center">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
