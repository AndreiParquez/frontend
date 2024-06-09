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
    const images = [image2, image3, image4, image5];

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
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
        <div className="flex">
            {/* Sidebar */}
            <div className="fixed top-16 left-0 h-full .blue text-white overflow-y-auto sidebar">
                <ul className="w-16 md:w-56 flex flex-col items-center md:items-center py-4">
                    <li className="flex items-center p-3">
                        <CgGames className="text-2xl md:text-3xl mr-0 md:mr-2" />
                        <span className="hidden md:inline">Games</span>
                    </li>
                    {/* Add more sidebar items as needed */}
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-grow ml-16 md:ml-56 md:p-4 p-2 md:mt-20 mt-16">
                {/* Add your main content here */}
                <div className="bg-white shadow-md rounded-md p-4 md:p-6">
                    <h2 className="md:text-2xl text-sm font-bold mb-2 md:mb-4">
                        Unveil the <span className="text-yellow-300">space</span>, Explore the <span className="text-orange-300">dApps</span>
                    </h2>
                    {/* Search bar */}
                    <div className="flex items-center mb-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <AiOutlineSearch className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <h2 className="md:text-xl text-sm font-semibold mb-2 md:mb-4">Top blockchain games</h2>
                    <p className="text-gray-700 text-sm">This is a sample card content. You can add any content here.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto text-sm">
                            <thead className="mb-10">
                                <tr className="border-b-4 border-indigo-300">
                                    <th className="text-sm fon">Rankings</th>
                                    <th>Name</th>
                                    <th>Token Logo</th>
                                    <th>Token Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="flex justify-center items-center">
                                        1. <img src={logo} alt="Game Logo" className="w-8 h-8" />
                                    </td>
                                    <td className="text-center">Axie Infinity</td>
                                    <td className="flex justify-center items-center">
                                        <img src={tlogo} alt="Token Logo" className="w-8 h-8" />
                                    </td>
                                    <td className="text-center">$10</td>
                                </tr>
                                <tr>
                                    <td className="flex justify-center items-center">
                                        2. <img src={logo} alt="Game Logo" className="w-8 h-8" />
                                    </td>
                                    <td className="text-center">Axie Infinity</td>
                                    <td className="flex justify-center items-center">
                                        <img src={tlogo} alt="Token Logo" className="w-8 h-8" />
                                    </td>
                                    <td className="text-center">$10</td>
                                </tr>
                                <tr>
                                    <td className="flex justify-center items-center">
                                        3. <img src={logo} alt="Game Logo" className="w-8 h-8" />
                                    </td>
                                    <td className="text-center">Axie Infinity</td>
                                    <td className="flex justify-center items-center">
                                        <img src={tlogo} alt="Token Logo" className="w-8 h-8" />
                                    </td>
                                    <td className="text-center">$10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-md p-4 md:p-6 my-3">
                    <h2 className="md:text-xl text-sm font-semibold mb-2 md:mb-4">Featured Game</h2>
                    <img
                        src={featuredGameScreenshot}
                        alt="Featured Game Screenshot"
                        className="md:w-3/4 rounded-md md:mx-36 mb-2"
                        onClick={() => handleImageClick(featuredGameScreenshot)}
                    />
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <img src={image2} alt="Image 2" className="rounded-md" onClick={() => handleImageClick(image2)} />
                        <img src={image3} alt="Image 3" className="rounded-md" onClick={() => handleImageClick(image3)} />
                        <img src={image4} alt="Image 4" className="rounded-md" onClick={() => handleImageClick(image4)} />
                        <img src={image5} alt="Image 5" className="rounded-md" onClick={() => handleImageClick(image5)} />
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-md p-4 md:p-6">
                    <h2 className="md:text-xl text-sm font-semibold mb-2 md:mb-4">Featured Games</h2>
                    <div className="relative">
                        <button
                            onClick={handlePrevClick}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full shadow-md focus:outline-none z-10"
                        >
                            <AiOutlineLeft />
                        </button>
                        <div className="flex transition-transform duration-500 ease-in-out transform">
                            {displayedImages().map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Carousel Image ${index}`}
                                    className="w-full md:w-96 rounded-md md:m-2"
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                        </div>
                        <button
                            onClick={handleNextClick}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full shadow-md focus:outline-none"
                        >
                            <AiOutlineRight />
                        </button>
                    </div>
                </div>



                 {/* Two-column layout for desktop, single-column for mobile */}
                 <div className="bg-white shadow-md rounded-md p-4 md:p-6 mb-3 mt-3 flex flex-col md:flex-row">
                    {/* Big card on the left */}
                    <div className="md:w-2/3 md:pr-4 mb-4 md:mb-0">
                        <div className="bg-gray-200 rounded-md p-4 h-full">
                            <h3 className="text-sm md:text-lg font-semibold mb-2">Big Card</h3>
                            <p>This is a big card. Add your content here.</p>
                        </div>
                    </div>
                    {/* Three smaller cards on the right */}
                    <div className="md:w-1/3 flex flex-col space-y-4">
                        <div className="bg-gray-200 rounded-md p-4">
                            <h3 className="md:text-lg text-sm font-semibold mb-2">Recently Added</h3>
                            <p>This is a small card. Add your content here.</p>
                        </div>
                        <div className="bg-gray-200 rounded-md p-4">
                            <h3 className="md:text-lg text-sm font-semibold mb-2">Best Rated</h3>
                            <p>This is a small card. Add your content here.</p>
                        </div>
                        <div className="bg-gray-200 rounded-md p-4">
                            <h3 className="md:text-lg text-sm font-semibold mb-2">Most Popular</h3>
                            <p>This is a small card. Add your content here.</p>
                        </div>
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
