import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#0f0f1e] p-5 pb-0 sticky top-0 flex justify-between items-center z-10 h-[10vh]">
      <div className="text-2xl font-bold flex justify-between items-center">
        <img src='/logo1.png' className='w-12'></img>
        <a href="/" className="text-white">Millenium Falcon</a>
      </div>
      <nav>
      </nav>
    </header>
  );
};

export default Header;
