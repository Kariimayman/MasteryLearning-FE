"use client"; // This is a client component 👈🏽
import React from 'react';
import Link from 'next/link';
import logo from '../images/Logo-1.png'
import { usePathname } from 'next/navigation'

const NavItem = ({ text, location }: any) => {
  const isActive = usePathname() === location; // Direct comparison
  return (
    <Link href={location} className={`grow sm:text-l md:text-xl lg:text-3xl text-center hover:text-green-500 font-sans  ${isActive ? 'text-green-500' : ''} transition-colors`}>
      {text}
    </Link>
  );
};


function NavigationBar() {
  const navigationItems = [
    { text: "طرق الدفع", location: "/PaymentMethods" },
    { text: "الشهادات", location: "/Certificates" },
    { text: "من نحن", location: "/AboutUs" },
    { text: "برامجنا", location: "/ProgramsPage" },
    { text: "الرئيسية", location: "/" },

  ];

  return (
    <header className="flex flex-col  items-center justify-between px-16 py-5 bg-white max-md:flex-wrap max-md:px-5 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl drop-shadow-xl mb-10">
      <nav className="flex flex-row text-gray-600 items-center max-md:flex-wrap max-md:max-w-full h-full w-full ">
        <div className="flex items-center -mr-20">
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-9 py-4 rounded-l -mr-7  font-sans">انشاء حساب</button>
          <div className="w-10 h-10 bg-white 200 rounded-full flex items-center justify-center mx-2 z-20">
            <span className="text-black">او</span>
          </div>
          <button className="bg-green-500 hover:bg-green-400 text-white px-9 py-4 rounded-r -ml-7  font-sans "> تسجيل دخول</button>
        </div>
        <div className="flex gap-3  justify-center items-center my-auto  text-zinc-500 max-md:flex-wrap max-md:max-w-full flex-grow -mr-20 px-20">
          {navigationItems.map((item, index) => (
            <NavItem key={index} text={item.text} location={item.location} />
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