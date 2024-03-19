// components/MobileNavbar.tsx

import React, { useState } from 'react';
import logo from "@/images/Logo-1.png"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import menuicon from "@/images/menuicon.png"
import carticon from "@/images/carticon.png"
import closeicon from "@/images/closeicon.png"

const NavItem = ({ text, location }: any) => {
    const isActive = usePathname() === location; // Direct comparison
    return (
        <Link href={location} className={`grow text-2xl text-center hover:text-green-500 font-sans  ${isActive ? 'text-green-500' : 'text-zinc-500'} transition-colors`}>
            {text}
        </Link>
    );
};

const navigationItems = [
    { text: "الرئيسية", location: "/" },
    { text: "برامجنا", location: "/ProgramsPage" },
    { text: "من نحن", location: "/AboutUs" },
    { text: "الشهادات", location: "/Certificates" },
    { text: "طرق الدفع", location: "/PaymentMethods" },
    { text: "تسجيل دخول", location: "/SignUp" },
    { text: "انشاء حساب", location: "/Login" },


];
const NavbarMobile = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className={`flex items-center justify-between px-16 py-5 ${isMenuOpen ? '' : 'bg-white max-md:flex-wrap max-md:px-5 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl drop-shadow-xl mb-10'}`}>
            <button onClick={toggleMenu} className="flex items-center justify-center ">
                <img src={menuicon.src} className="w-[10vw] h-15" />
            </button>

            <Link href={"/"} className="flex items-center justify-center">
                <img src={logo.src} alt="Logo" className="w-[25vw] h-15" />
            </Link>

            <Link href={"/"} className="flex items-center justify-center">
                <img src={carticon.src} className="w-[10vw] h-15" />
            </Link>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 h-full">
                    <div className="flex justify-start h-full bg-white max-w-[50vw]">
                        <div className="bg-white w-64">
                            <div className="grid grid-cols-1 gap-3  justify-center my-20 max-md:flex-wrap max-md:max-w-full ">
                                <button className=" flex items-center justify-center " onClick={() => setMenuOpen(false)}>
                                    <img loading='lazy' src={closeicon.src} alt="Logo" className="w-10 h-15" />
                                </button>
                                {navigationItems.map((item, index) => (
                                    <NavItem key={index} text={item.text} location={item.location} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            )}
        </div>
    );
};

export default NavbarMobile;
