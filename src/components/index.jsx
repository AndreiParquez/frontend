import React from 'react';
import landing from '../assets/landing.png';
import token from '../assets/token.png';
import token2 from '../assets/token2.png';

function Index() {
    return (
        <div className='relative h-screen overflow-hidden blue md:p-4 p-2 '>
            <div className="bg-orange-400 rounded-full h-[1200px] w-[1200px] absolute top-[-300px] right-[-200px] z-10 shadow-lg">
            </div>
            <div className="flex ">

                <div className="h-screen z-20 w-4/12  flex space-y-6 flex-col justify-center items-center px-7">
                <p className='text-white text-[50px] font-semibold text-center'>Your <span className='text-orange-500 font-extrabold'>Social Platform </span> for dApps</p>

                <p className='text-white text-center text-sm'>Discover, discuss, and contribute to the dApp revolution.</p>
                <p className='text-white text-center text-sm'>Curate your favorite dApps, engage with the community, review and earn $DP.</p>

                <div className='flex space-x-4'>
                    <button className='bg-orange-500 text-black rounded-lg p-2 font-bold text-sm'>Go to Home</button>
                    <button className='bg-white text-black rounded-lg p-2 font-bold text-sm'>Explore dApps!</button>
                </div>
                
                </div>
                <div className="h-screen z-20 w-8/12 ">
                <img src={landing} alt="Game Logo" className="w-full max-w-2xl absolute bottom-0 left-1/2" />
                <img src={token} alt="Token 1" className="h-60 max-w-xl float-animation-1 relative left-28" />
                <img src={token2} alt="Token 2" className="h-48 max-w-xl float-animation-2 absolute right-28" />
                <img src={token} alt="Token 3" className="h-56 max-w-xl float-animation-3 absolute bottom-16" />
                <img src={token2} alt="Token 4" className="h-48 max-w-xl float-animation-4 absolute bottom-0 right-28" />
                
                
                </div>

            </div>


        </div>
    );
}

export default Index;
