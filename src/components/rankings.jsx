import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { CgGames } from 'react-icons/cg';

import featuredGameScreenshot from '../assets/Axie-Infinity.jpeg';
import image2 from '../assets/axie.png';
import image3 from '../assets/axie1.jpg';
import image4 from '../assets/axie.png';
import image5 from '../assets/axie1.jpg';
import logo from '../assets/axie-infinity-logo.png';
import tlogo from '../assets/images.png';

const Rankings = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        { src: image2, title: 'Game 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam,' },
        { src: image3, title: 'Game 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam,' },
        { src: image4, title: 'Game 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam,' },
        { src: image5, title: 'Game 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam,' }
    ];

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleImageClick = (image) => {
        setSelectedImage(image.src);
    };

    const closeImageView = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const displayedImages = () => {
        const numberOfImages = window.innerWidth >= 768 ? 3 : 1;
        const endIndex = currentImageIndex + numberOfImages;
        return images.slice(currentImageIndex, endIndex).concat(images.slice(0, endIndex > images.length ? endIndex - images.length : 0));
    };

    return (
        <div className="flex bg-orange-500 text-white px-1 p-4 md:px-28">
            {/* Main content */}
            <div className="flex-grow p-2 md:mt-20 mt-16 justify-center">
                {/* Add your main content here */}
                <div className="blue shadow-md rounded-md p-4 flex-grow md:p-6 ">
                    <nav className="mb-4 w-full">
                        <ul className="flex justify-start md:justify-between space-x-4 overflow-x-auto whitespace-nowrap text-sm text-white ">
                            <li className="flex-shrink-0 border-b-4 border-b-orange-600"><a href="#">All Categories</a></li>
                            <li className="flex-shrink-0"><a href="#">Games</a></li>
                            <li className="flex-shrink-0"><a href="#">DeFi</a></li>
                            <li className="flex-shrink-0"><a href="#">Gaming</a></li>
                            
                          
                        </ul>
                    </nav>

                    {/* Search bar */}
                    <div className="flex items-center mb-4 text-sm">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-4 pr-4 py-2 blue rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <AiOutlineSearch className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
        
                    <div className="overflow-x-auto max-w-[335px] sm:max-w-[100px] lg:max-w-full md:max-w-full">
                        <table className="md:w-full w-[600px] md:text-sm text-xs">
                            <thead className="mb-20">
                                <tr className="border-y-2 border-indigo-100">
                                    <th className='p-2'>Rank</th>
                                    <th>Name</th>
                                    <th>Blockchain</th>
                                    <th>UAW</th>
                                    <th>UAW%</th>
                                    <th>Volume</th>
                                    <th>24hour UAW</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-4 border-indigo-300 py-4">
                                    <td className="text-center font-bold">1.</td>
                                    <td className="flex justify-center items-end"> <img src={logo} alt="Game Logo" className="h-10" />Axie Infinity</td>
                                    <td className="text-center">Etheruim</td>
                                    <td className="text-center">116k</td>
                                    <td className="text-center">1.6m</td>
                                    <td className="text-center text-red-600">-1.6m</td>
                                    <td className="flex justify-center">
                                        <svg viewBox="0 0 200 100" className="w-16 h-8">
                                            <polyline points="0,80 20,50 40,30 60,40 80,60 100,20 120,40 140,40 160,60 180,80 200,90" fill="none" stroke="white" strokeWidth="4" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className="border-b-4 border-indigo-300 py-4">
                                    <td className="text-center font-bold">2.</td>
                                    <td className="flex justify-center items-end"> <img src={logo} alt="Game Logo" className="h-10" />Axie Infinity</td>
                                    <td className="text-center">Etheruim</td>
                                    <td className="text-center">116k</td>
                                    <td className="text-center">1.6m</td>
                                    <td className="text-center text-red-600">-1.6m</td>
                                    <td className="flex justify-center">
                                        <svg viewBox="0 0 200 100" className="w-16 h-8">
                                            <polyline points="0,80 20,50 40,30 60,40 80,60 100,20 120,40 140,40 160,60 180,80 200,90" fill="none" stroke="white" strokeWidth="4" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className="border-b-4 border-indigo-300 py-4">
                                    <td className="text-center font-bold">3.</td>
                                    <td className="flex justify-center items-end"> <img src={logo} alt="Game Logo" className="h-10" />Axie Infinity</td>
                                    <td className="text-center">Etheruim</td>
                                    <td className="text-center">116k</td>
                                    <td className="text-center">1.6m</td>
                                    <td className="text-center text-red-600">-1.6m</td>
                                    <td className="flex justify-center">
                                        <svg viewBox="0 0 200 100" className="w-16 h-8">
                                            <polyline points="0,80 20,50 40,30 60,40 80,60 100,20 120,40 140,40 160,60 180,80 200,90" fill="none" stroke="white" strokeWidth="4" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className="border-b-4 border-indigo-300 py-4">
                                    <td className="text-center font-bold">4.</td>
                                    <td className="flex justify-center items-end"> <img src={logo} alt="Game Logo" className="h-10" />Axie Infinity</td>
                                    <td className="text-center">Etheruim</td>
                                    <td className="text-center">116k</td>
                                    <td className="text-center">1.6m</td>
                                    <td className="text-center text-red-600">-1.6m</td>
                                    <td className="flex justify-center">
                                        <svg viewBox="0 0 200 100" className="w-16 h-8">
                                            <polyline points="0,80 20,50 40,30 60,40 80,60 100,20 120,40 140,40 160,60 180,80 200,90" fill="none" stroke="white" strokeWidth="4" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className="border-b-4 border-indigo-300 py-4">
                                    <td className="text-center font-bold">5.</td>
                                    <td className="flex justify-center items-end"> <img src={logo} alt="Game Logo" className="h-10" />Axie Infinity</td>
                                    <td className="text-center">Etheruim</td>
                                    <td className="text-center">116k</td>
                                    <td className="text-center">1.6m</td>
                                    <td className="text-center text-red-600">-1.6m</td>
                                    <td className="flex justify-center">
                                        <svg viewBox="0 0 200 100" className="w-16 h-8">
                                            <polyline points="0,80 20,50 40,30 60,40 80,60 100,20 120,40 140,40 160,60 180,80 200,90" fill="none" stroke="white" strokeWidth="4" />
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                

                

                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={closeImageView}
                    >
                        <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rankings;
