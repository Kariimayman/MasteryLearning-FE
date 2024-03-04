import React from 'react';
import backgroundImage from '../images/joinnow.jpg';

const JoinNow = () => {
  return (
    <div className="w-full h-[45vh] bg-cover bg-center relative flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage.src})`,backgroundSize: '100% auto', opacity: 1 }}
      ></div>

      <div className="relative z-10 text-center text-white mt-40">
        <button className="bg-yellow-500 text-white px-6 py-3 rounded shadow-xl transform -translate-y-1  font-sans ">انضم الان</button>
      </div>
    </div>
  );
};

export default JoinNow;
