import React from 'react';
import landing from '../assets/landing.png';
import token from '../assets/token.png';
import token2 from '../assets/token2.png';

function Index() {
    return (
        <div className='relative h-full overflow-hidden blue md:p-4 p-2'>
            <div className="bg-orange-400 rounded-full   absolute top-[-300px] right-[-200px] z-10 shadow-lg md:h-[1000px] md:w-[1000px] lg:h-[1200px] lg:w-[1200px] h-[1200px] lg:w-[1200px]"></div>
            <div className="flex flex-col   md:flex-row justify-center">
                <div className="h-screen  z-20 w-full md:w-6/12 md:h-[700px] flex space-y-6 flex-col justify-center items-center px-7 md:px-2">
                    <p className='text-white text-[30px] md:text-[40px] lg:text-[50px] font-semibold text-center'>
                        Your <span className='text-orange-500 font-extrabold'>Social Platform </span> for dApps
                    </p>

                    <p className='text-white text-center text-sm md:text-base'>Discover, discuss, and contribute to the dApp revolution.</p>
                    <p className='text-white text-center text-sm md:text-base'>Curate your favorite dApps, engage with the community, review and earn $DP.</p>

                    <div className='flex space-x-4'>
                        <button className='bg-orange-500 text-black rounded-lg p-2 font-bold text-sm md:text-base'>Go to Home</button>
                        <button className='bg-white text-black rounded-lg p-2 font-bold text-sm md:text-base'>Explore dApps!</button>
                    </div>
                </div>

                <div className="h-screen z-20 w-full  md:w-6/12 md:h-[700px] relative ">
                    <img src={landing} alt="Game Logo" className="w-full left-10 md:left-5 rounded-2xl absolute bottom-0 md:bottom-32 lg:bottom-0 2xl:bottom-0 " />
                    <img src={token} alt="Token 1" className="w-1/5 md:w-1/3 lg:w-1/5 float-animation-1 absolute left-10  md:bottom-96 lg:bottom-[460px] md:left-0" />
                    <img src={token2} alt="Token 2" className="w-1/3 md:w-1/4 lg:w-1/5 float-animation-2 absolute bottom-0 md:bottom-52 lg:bottom-0 right-10 md:right-6" />
                    <img src={token} alt="Token 3" className="w-1/3 md:w-1/6 lg:w-1/5 float-animation-3 absolute bottom-0 md:bottom-52 lg:bottom-0 " />
                    <img src={token2} alt="Token 4" className="w-1/3 md:w-1/4 lg:w-1/6 float-animation-4 absolute  md:bottom-96 lg:bottom-[300px] right-10 md:right-28" />
                </div>
            </div>
        </div>
    );
}

export default Index;
