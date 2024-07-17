import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import logo from '../assets/2.png';
import avatar from '../assets/cj.png';
import cover from '../assets/cover.png';
import { HomeIcon, ChatBubbleBottomCenterTextIcon, FireIcon, Cog6ToothIcon, InformationCircleIcon, PencilIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    };
    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className='fixed top-0 left-0 w-full blue text-white z-50'>
            <div className='flex md:justify-between items-center md:px-10 h-16 mx-auto px-4'>
                <div onClick={toggleNav} className='md:hidden z-30'>
                    {nav ? <AiOutlineClose size={30} className='text-orange-500' /> : <IoMenu size={30} className='text-orange-500' />}
                </div>
                <div className='flex mx-auto md:mx-0'>
                    <img src={logo} alt="Game Logo" className="h-8" />
                    <a className='text-xl flex items-center'>
                        knowyour<span className='text-orange-500'>d</span><span className='textwhite'>app</span>
                    </a>
                </div>
                <ul className='hidden md:flex gap-10 cursor-pointer text-sm'>
                    <li className='relative group'>
                        <Link to="/" onClick={closeNav}>Home</Link>
                        <span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
                    </li>
                    <li className='relative group'>
                        <Link to="/about" onClick={closeNav}>About</Link>
                        <span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
                    </li>
                    <li className='relative group'>
                        <Link to="/rankings" onClick={closeNav}>Rankings</Link>
                        <span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
                    </li>
                    <li className='relative group'>
                        <Link to="/dapp" onClick={closeNav}>Contribute</Link>
                        <span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
                    </li>
                    <li className='relative group'>
                        <Link to="/rankings" onClick={closeNav}>Whitepaper</Link>
                        <span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
                    </li>
                </ul>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full darkblue flex flex-col justify-center items-start transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
            <div className="bg-zinc-900  mt-4   w-full overflow-hidden">
                <div className="bg-cover bg-center  h-28" style={{ backgroundImage: `url(${cover})` }}></div>
                <div className="p-3">
                    <div className="flex items-center mt-[-60px] space-x-2">
                    <img src={avatar} alt="profile" className="w-20 h-20 rounded-full border-4 border-zinc-900 mt-5" />
                    <h1 className="text-center text-xl  font-bold mt-9">Andrei R. Parquez</h1>
                    </div>
                    <div className="flex justify-center items-center m-4">
                    <div className="flex mb-5 ml-2 space-x-6">
                        <div className='text-center'>
                        <p className='text-sm font-bold'>120</p>
                        <p className='text-xs'>Reviews</p>
                        </div>
                        <div className='text-center'>
                        <p className='text-sm font-bold'>120</p>
                        <p className='text-xs'>Upvotes</p>
                        </div>
                        <div className='text-center'>
                        <p className='text-sm font-bold'>120</p>
                        <p className='text-xs'>Curations</p>
                        </div>
                        <div className='text-center'>
                        <p className='text-sm font-bold'>120</p>
                        <p className='text-xs'>Reputation</p>
                        </div>
                    </div>
                   
                    </div>
                    <button className="w-1/2 h-11 mx-auto font-bold bg-blue-500 text-white rounded-lg mt-5 flex justify-center items-center">
                    <PencilIcon className="w-5 h-5 mr-2 font-bold" />
                    Edit Profile
                    </button>
                </div>
            </div>
        <nav className="mt-1 w-full">
          <a href="#" className="flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white">
            <HomeIcon className="w-7 h-7 mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white">
            <FireIcon className="w-7 h-7 mr-3" />
            Explore
          </a>
          <a href="#" className="flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white">
            <ChatBubbleBottomCenterTextIcon className="w-7 h-7 mr-3" />
            Feed
          </a>
          <a href="#" className="flex items-center text-center justify-center text-black font-bold py-2.5 px-7 bg-orange-400 m-5 mx-9 rounded-lg transition duration-200 hover:bg-blue-800 hover:text-white">
            Curate Now
          </a>
          <a href="#" className="flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white">
            <Cog6ToothIcon className="w-7 h-7 mr-3" />
            Settings
          </a>
          <a href="#" className="flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white">
            <InformationCircleIcon className="w-7 h-7 mr-3" />
            About
          </a>
        </nav>
            </div>
        </div>
    );
};

export default Navbar;
