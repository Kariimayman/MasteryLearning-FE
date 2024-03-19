import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import { isMobile } from "@/components/states";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Loading from "@/components/loading";
import CourseCard from "@/components/coursecard";
import Programimg from "@/images/firstimage.png"
export default function CheckOutPage() {
    const [getIsMobile, setIsMobile] = useRecoilState(isMobile);
    const [activeTab, setActiveTab] = useState(true); // Initial active tab

    const [loading, setLoading] = useState(true); // New loading state

    useEffect(() => {
        setIsMobile(window.innerWidth < 950)
        const handleResize = () => setIsMobile(window.innerWidth < 950);
        setLoading(false);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Cleanup function
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="max-w-full">
            {getIsMobile ? <NavbarMobile /> : <Navbar />}
            <div className="flex flex-col items-center justify-center h-auto pb-10">

                <div className="flex items-center justify-center w-[90vw] w-full flex items-center justify-center ">
                    <div className="w-full flex flex-col items-center md:flex-row ">
                        <div className="w-full flex items-center justify-center sm:px-0 px-10">
                            <div className="w-full rounded-lg shadow-2xl p-5 sm:w-1/2 text-[#54595f] text-2xl  ">
                                <p className="text-left py-10 font-bold border-b border-b-7 border-black">Your Order</p>
                                <div className="flex py-10">
                                    <p className="font-bold">Course:</p>
                                    <p className="flex-grow text-right ">دبلوم التربية الخاصة</p>
                                </div>
                                <div className="flex py-10">
                                    <p className="mr-2 font-bold">Final Price:</p>
                                    <p>30 $</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full  flex-col px-5">
                            <div className="flex flex-col w-full  justify-center  mx-auto  bg-gray-100 rounded-2xl shadow-xl ">
                                <div className="flex justify-center font-sans text-white item-center ">
                                    <button
                                        className={`py-5 w-full  text-xl sm:text-3xl hover:bg-[#1BBBA4] ${activeTab === true ? ' bg-[#1BBBA4]' : 'bg-[#E2EDEF] text-black'
                                            }`}
                                        onClick={() => setActiveTab(true)}
                                    >
                                        Offline payment
                                    </button>
                                    <button
                                        className={`py-5 w-full text-xl sm:text-3xl hover:bg-[#1BBBA4] ${activeTab === false ? ' bg-[#1BBBA4]' : 'bg-[#E2EDEF] text-black'
                                            }`}
                                        onClick={() => setActiveTab(false)}
                                    >
                                        Stride
                                    </button>
                                    <div>

                                    </div>
                                </div>
                                <div className="text-black py-10 font-sans  text-xl sm:text-2xl">
                                    {activeTab ? (
                                        <div className="px-5 sm:px-10 text-[#54595f] leading-loose font-sans">  {/* Added responsive padding classes */}
                                            <ul>
                                                <li className="text-[#1BBBA4]">First Step:</li>
                                                <li className="pl-3 text-xl list-disc">Send cash to this Vodafone Cash wallet</li>
                                                <li className="pl-3 text-xl pb-5">+20101111111</li>
                                                <li className="pl-3 text-xl list-disc"> Bank Transaction to this bank account</li>
                                                <li className="pl-3 text-xl pb-5">+20101111111</li>
                                                <li className="text-[#1BBBA4]"> Second Step:</li>
                                                <li className="pl-3 text-xl list-disc"> Send the recipt to this number</li>
                                                <li className="pl-3 text-xl">+20101111111</li>
                                            </ul>

                                        </div>
                                    ) : (
                                        <div className="px-5 sm:px-10 text-[#54595f] leading-loose font-sans">  {/* Added responsive padding classes */}
                                            <p className="text-[#1BBBA4] text-center">Coming Soon</p>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" pt-10">
                    <button onClick={() => (location.href = "/")} className="px-10 py-5  my-10 text-3xl mt-4 bg-blue-700 rounded-full hover:bg-blue-600 shadow-2xl">
                        Complete Purchase
                    </button>
                </div>
            </div>
        </div>

    )
}