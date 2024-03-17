import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import { isMobile } from "@/components/states";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Certificates from "@/images/certificates.jpg";
export default function CertificatesPage() {
    const [getIsMobile, setIsMobile] = useRecoilState(isMobile);
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        setIsMobile(window.innerWidth < 950)
        const handleResize = () => setIsMobile(window.innerWidth < 950);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Cleanup function
    }, []);
    return (
        <div className="max-w-full">
            {getIsMobile ? <NavbarMobile /> : <Navbar />}
            <div className="flex flex-col items-center justify-center h-auto pb-10">
                <div className="flex items-center justify-center w-[90vw]">
                    <div className="w-full flex flex-col items-center md:flex-row">
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <img
                                className='w-full object-cover h-full'
                                alt="Image"
                                src={Certificates.src}
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-end  px-5">
                            <h1 className='text-[#1BBBA4] font-sans text-right text-5xl pb-10'>اﻟﺘﺤﻘﻖ ﻣﻦ اﻟﺸﻬﺎدات</h1>
                            <p className="text-xl leading-loose text-black text-right font-sans pb-10">
                                ﻫﻨﺎ ﻳﻤﻜﻨﻚ إدﺧﺎل ﻛﻮد اﻟﺸﻬﺎدة ﻟﻠﺘﺤﻘﻖ ﻣﻦ اﻟﺒﻴﺎﻧﺎت اﻟﺨﺎﺻﺔ ﺑﻬﺎ ﺳﺘﺠﺪ اﻟﻜﻮد ﻓﻲ أﺳﻔﻞ اﻟﺸﻬﺎدة
                            </p>
                            <h1 className='text-[#ECC644] font-sans text-right text-4xl pb-10'>اﻟﺮﺟﺎء ﻛﺘﺎﺑﺔ ﻛﻮد اﻟﺸﻬﺎدة ﻫﻨﺎ</h1>
                            <input
                                type="text"
                                placeholder="Enter Certificate Code"
                                className="w-full text-black px-3 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}