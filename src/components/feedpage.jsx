import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons from react-icons
import avatar from '../assets/axie.png';

const FeedPage = () => {
  return (
    <div className='mt-10'>
        <div className="bg-blue-500 rounded-lg m-2">
            <div className="flex">
                <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full m-2"/>
                <p className='text-sm font-bold'>Andrei Parqz</p>
                <select className="text-sm h-10 rounded-md ml-2">
                    <option value="option1">dApp1</option>
                    <option value="option2">dApp2</option>
                    <option value="option3">dApp3</option>
                </select>
                <div className="flex items-center ml-auto">
                    <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <FaChevronLeft className="h-4 w-4" /> {/* Using react-icons */}
                    </button>
                    <div className="bg-white text-blue-500 font-bold text-lg px-4 py-2 mx-2 rounded-lg">
                        
                    </div>
                    <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <FaChevronRight className="h-4 w-4" /> {/* Using react-icons */}
                    </button>
                </div>
            </div>
            <div className="px-10">
                <input type="text" className="w-full p-2  text-sm border-gray-300 rounded-lg shadow-lg" placeholder="What's on your mind?"/>
            </div>
        </div>
    </div>
  );
}

export default FeedPage;
