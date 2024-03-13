import React from 'react';
import backgroundImage from '../images/joinnow.jpg';

const JoinNow = () => {
  return (
    <div className="w-full h-[35vh] bg-cover bg-center relative flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage.src})` }}></div>
      <div className="relative z-5 text-center text-white mt-40">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-3 rounded shadow-xl self-center transform -translate-y-1 font-sans">انضم الان</button>
      </div>
    </div>
  );
};

export default JoinNow;
