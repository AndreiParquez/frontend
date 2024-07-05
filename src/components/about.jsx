// src/About.js
import React from 'react';
import hero1 from '../assets/reviewteam 1.png';
import hero2 from '../assets/tracker 1.png';
import icon1 from '../assets/dao.png';
import icon2 from '../assets/2tokens.png';
import icon3 from '../assets/badge.png';


const About = () => {
  return (
    <div className="flex-grow md:p-4 p-2 md:mt-20 mt-16 space-y-20">
      <div className="flex flex-col md:flex-row gap-10 px-60 text-black">
        <div className="flex-1 rounded bg-yellow clipped-bg-yellow p-10">
          <h1 className="font-bold text-lg">Discoverability & Tracking</h1>
          <p className="text-sm mt-2">
            <p className="font-bold text-sm">Expert Analysis & Data Aggregation:</p>
            We curate and rank dApps based on a comprehensive evaluation, ensuring you discover the best options.
          </p>
          <div className="flex mt-3">
            <p className="text-sm mt-2">
              <p className="font-bold text-sm">Discoverability & Reliability: </p>
              A higher ranking indicates a dApp's potential and user trust, making it easier to find trustworthy projects.
            </p>
            <img src={hero2} className="w-28 max-w-md mx-auto" />
          </div>
          <p className="text-sm mt-2">
            <p className="font-bold text-sm">Trending & Unique Gems:</p>
            We also showcase trending dApps and those with unique features, keeping you at the forefront of innovation
          </p>
        </div>
        <div className="flex-1 rounded clipped-bg-yellow2 bg-yellow p-10">
          <h1 className="font-bold text-lg">Credible Data Aggregation & QA dApp Reviewer</h1>
          <p className="text-sm mt-2">
            Rather than focusing solely on surface-level metrics like social scores, a comprehensive approach involves collecting all important and relevant data, both on and off-chain
          </p>
          <div className="flex mt-3">
          <img src={hero1} className="w-28 max-w-md mx-auto" />
          <p className="text-sm mt-2">
            On top of the data analytics, we also have an onboard QA reviewer team that reviews dApps manually. The platform will also provide an opportunity for the users in the community to be part of the reviewer team.
          </p>
          
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row gap-10 px-60 text-white">
        <div className="flex-1 rounded p-10 text-center space-y-6 ">
        <img src={icon1} className="w-40 max-w-md mx-auto" />
          <p className='font-bold text-md'>DAO COUNCIL</p>
          <p className=' text-sm'>KYD provides a decentralized approach through the KYD Council, a Decentralized Autonomous Organization (DAO) council established to foster user participation and shape the platform's future.</p>
          
        </div>
        <div className="flex-1 rounded p-10 text-center space-y-6 ">
        <img src={icon3} className="w-32 max-w-md mx-auto" />
          <p className='font-bold text-md'>BADGE SYSTEM</p>
          <p className=' text-sm'>KYD rewards valuable contributions and fosters trust with a tiered badge system.
Users: Earn badges for participation, fostering a stronger community.
Developers: Earn badges for high-scoring dApps, KYC verification, and platform engagement. These badges signal trust, quality, and dedication to users.</p>
          
        </div>
        <div className="flex-1 rounded p-10 text-center space-y-6 ">
        <img src={icon2} className="w-32 max-w-md mx-auto" />
          <p className='font-bold text-md'>TWO TOKEN, POWERFUL ECOSYSTEM</p>
          <p className=' text-sm'>$DP (DApps Points): This utility token rewards you for valuable contributions like reviews and upvotes. Earn $DP and fuel your engagement within the KYD community.
          $KYD (KnowYourDapp Token): The platform's core, Proof-of-Stake (PoS) token with dual functionality for Governance and Utility of the platform.</p>
          
        </div>
      </div>
      
    </div>
  );
};

export default About;
