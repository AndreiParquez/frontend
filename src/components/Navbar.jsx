import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import logo from '../assets/2.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    };
    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className='fixed top-0 left-0 w-full blue text-white  z-50'>
            <div className='flex justify-between items-center md:px-24 h-16 mx-auto px-4'>
                <div className='flex'>
                <img src={logo} alt="Game Logo" className="w-8 h-8" />
                <a className=' text-xl flex items-center'>
                    knowyour<span className='text-orange-500'>d</span><span className='text-blue-800'>app</span>
                </a></div>
                <ul className='hidden md:flex gap-12 cursor-pointer text-sm'>
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
                <div onClick={toggleNav} className='md:hidden z-30'>
                    {nav ? <AiOutlineClose size={30} className='text-orange-500' /> : <IoMenu size={30} className='text-orange-500' />}
                </div>
            </div>
            <div className={`fixed top-0 right-0 w-full h-full bg-white flex justify-center items-center transform ${nav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
                <ul className='text-center font-semibold text-2xl text-black space-y-8 mt-10'>
                    <li><Link to="/" onClick={closeNav}>Home</Link></li>
                    <li><Link to="/about" onClick={closeNav}>About</Link></li>
                    <li><Link to="/rankings" onClick={closeNav}>Rankings</Link></li>
                    <li><Link to="/dapp" onClick={closeNav}>Contribute</Link></li>
                    <li><Link to="/rankings" onClick={closeNav}>Whitepaper</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
