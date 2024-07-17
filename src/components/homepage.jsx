import React from 'react';

import Sidebar from './sidebar';
import Footer from './footer';

const Homepage = () => {
  return (
    <>
    <div className="flex min-h-screen mt-11 text-sm">
      <Sidebar />
      <div className="md:ml-64 flex-1 p-10 text-2xl font-bold bg-orange-400">
        Welcome to the Homepage!
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Homepage;
