"use client"; // This is a client component 👈🏽
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import logo from '../images/Logo-1.png'
const NavItem = ({ text, location, isActive }: any) => {
  return (
    <Link href={location} className={`grow text-center  font-sans  ${isActive ? 'text-green-500' : ''} transition-colors`}>
      {text}
    </Link>
  );
};


function NavigationBar() {
  const router = useRouter();

  const handleClick = (text: any) => () => {
    console.log(`${text} clicked`);
  };


  const navigationItems = [
    { text: "طرق الدفع", location: "/payment" },
    { text: "الشهادات", location: "/certificate" },
    { text: "من نحن", location: "/about us" },
    { text: "برامجنا", location: "/program" },
    { text: "الرئيسية", location: "/" },

  ];

  return (
    <header className="flex flex-col  items-center justify-between px-16 py-5 bg-white max-md:flex-wrap max-md:px-5 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl shadow-md">
      <nav className="flex flex-row text-gray-600 items-center max-md:flex-wrap max-md:max-w-full h-full w-full">
        <div className="flex items-center -mr-20">
          <button className="bg-blue-400 text-white px-9 py-4 rounded-l -mr-7  font-sans">انشاء حساب</button>
          <div className="w-10 h-10 bg-white 200 rounded-full flex items-center justify-center mx-2 z-20">
            <span className="text-black">او</span>
          </div>
          <button className="bg-green-400 text-white px-9 py-4 rounded-r -ml-7  font-sans "> تسجيل دخول</button>
        </div>
        <div className="flex gap-5 justify-center items-center my-auto text-3xl text-zinc-800 max-md:flex-wrap max-md:max-w-full flex-grow px-40 -mr-20">
          {navigationItems.map((item, index) => (
            <NavItem key={index} text={item.text} location={item.location} isActive={router} />
          ))}
        </div>
        <div className="flex overflow-hidden relative flex-col items-center pt-12 aspect-square w-[150px] ml-auto -mt-6 -ml-6">
          <img loading="lazy" src={logo.src} alt="Logo" sizes='100% auto' />
        </div>
      </nav>
    </header>


  );

}

export default NavigationBar;