import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import { isMobile } from "@/components/states";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import paymentmethod from "@/images/paymentmethod.jpg"
import Ragahy from "@/images/Ragahy.jpg"
import FAB from "@/images/FAB.png"
import SNB from "@/images/SNB.jpg"
import BankMisr from "@/images/BankMisr.jpg"
import BAM from "@/images/BAM.jpg"
import MoneyGram from "@/images/MoneyGram.png"
import Visa from "@/images/Visa.png"
import VodafoneCash from "@/images/VodafoneCash.png"
import Loading from "@/components/loading";



export default function PaymentMethodsPage() {
    const [getIsMobile, setIsMobile] = useRecoilState(isMobile);
    const [loading, setLoading] = useState(true); // New loading state

    useEffect(() => {
        setIsMobile(window.innerWidth < 950)
        const handleResize = () => setIsMobile(window.innerWidth < 950);
        setLoading(false);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Cleanup function
    }, []);
    if (loading) {
        return <Loading />; // Render a loading indicator while computing the initial value
    }
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
                                src={paymentmethod.src}
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center  px-5">
                            <h1 className='text-[#1BBBA4] font-sans text-center text-5xl pb-10'>اﻟﺘﺤﻘﻖ ﻣﻦ اﻟﺸﻬﺎدات</h1>
                            <h1 className='text-[#1BBBA4] font-sans text-center text-5xl pb-10'> _____________ </h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full flex flex-col items-end pt-10 px-10 bg-[#1BBBA4]">
                <div className="slide px-10 py-10 bg-white rounded-[100px] shadow-2xl outline outline-2 outline-black mt-[15vh]">
                    <img src={Ragahy.src} alt="Rounded Image" className="position: relative z-1 rounded-full w-1/2 h-50 m-auto -mt-[15vh] outline outline-2 outline-black" />
                    <h1 className='text-[#1BBBA4] font-sans text-right text-3xl pb-10'>
                        اﻟﺮاﺟﺤﻲ
                    </h1>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        باسم
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>
                        سعد ﻣﺤﻤﺪ ﺳﻌﺪ اﻟﺸﻬﺮاﻧﻲ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        ﺣﺴﺎب رﻗﻢ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-l pb-10 '>
                        130000010006080396987
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻳﺒﺎن
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-l pb-10'>
                        SA2180000130608010396987
                    </h2>
                    <div className=" py-10 bg-black rounded-[100px]">
                        <h2 className='text-white font-sans text-center text-l '>
                            يرجى ﺗﺄ ﻛﻴــﺪ ﻋﻤﻠﻴــﺔ الدفع مع خدمة العملاء
                        </h2>
                    </div>
                </div>

                <div className="slide px-10 py-10 bg-white rounded-[100px] shadow-2xl outline outline-2 outline-black mt-[15vh]">
                    <img src={FAB.src} alt="Rounded Image" className="position: relative z-1 rounded-full w-1/2 h-50 m-auto -mt-[15vh] outline outline-2 outline-black" />

                    <h1 className='text-[#1BBBA4] font-sans text-right text-3xl pb-10'>
                        ﺑﻨﻚ أﺑﻮﻇبي اﻷول
                    </h1>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>


                        باسم
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>


                        ماسـتري ﻟﻠﺘﻨﻤﻴﺔ واﻟﺘﺪرﻳﺐ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        ﺣﺴﺎب رﻗﻢ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-l pb-10 '>
                        005623690001
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻳﺒﺎن
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-l pb-10'>
                        EG650019050100000005623690001
                    </h2>
                    <div className="py-10 bg-black rounded-[100px]">
                        <h2 className='text-white font-sans text-center text-l '>
                            يرجى ﺗﺄ ﻛﻴــﺪ ﻋﻤﻠﻴــﺔ الدفع مع خدمة العملاء
                        </h2>
                    </div>
                </div>

                <div className="slide px-10 py-10 bg-white rounded-[100px] shadow-2xl outline outline-2 outline-black mt-[15vh]">
                    <img src={SNB.src} alt="Rounded Image" className="position: relative z-1 rounded-full w-1/2 h-50 m-auto -mt-[15vh] outline outline-2 outline-black" />

                    <h1 className='text-[#1BBBA4] font-sans text-right text-3xl pb-10'>
                        اﻻﻫلي اﻟﺴﻌﻮدي
                    </h1>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        باسم
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>
                        سعد ﻣﺤﻤﺪ ﺳﻌﺪ اﻟﺸﻬﺮاﻧﻲ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        ﺣﺴﺎب رﻗﻢ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-l pb-10 '>
                        20872589000102
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻳﺒﺎن
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-l pb-10'>
                        SA4710000020872589000102
                    </h2>
                    <div className="py-10 bg-black rounded-[100px]">
                        <h2 className='text-white font-sans text-center text-l '>
                            يرجى ﺗﺄ ﻛﻴــﺪ ﻋﻤﻠﻴــﺔ الدفع مع خدمة العملاء
                        </h2>
                    </div>
                </div>

                <div className="slide px-10 py-10 bg-white rounded-[100px] shadow-2xl outline outline-2 outline-black mt-[15vh]">
                    <img src={BankMisr.src} alt="Rounded Image" className="position: relative z-1 rounded-full w-1/2 h-50 m-auto -mt-[15vh] outline outline-2 outline-black" />

                    <h1 className='text-[#1BBBA4] font-sans text-right text-3xl pb-10'>
                        ﺑﻨﻚ ﻣصر
                    </h1>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻻﺳﻢ ﺑﺎﻟﻌﺮﺑﻴﺔ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>
                        محمد ﻃﺎرق ﻳﺤﻴﻰ زﻛﺮﻳﺎ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻻﺳﻢ ﺑﺎﻻﻧﺠﻠيزي
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10 '>
                        Mohamed Tarek Yehia Zakaria
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻟﺪوﻟﺔ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>
                        ﻣصر - Egypt
                    </h2>
                    <div className="py-10 bg-black rounded-[100px]">
                        <h2 className='text-white font-sans text-center text-l '>
                            يرجى ﺗﺄ ﻛﻴــﺪ ﻋﻤﻠﻴــﺔ الدفع مع خدمة العملاء
                        </h2>
                    </div>
                </div>

                <div className="slide px-10 py-10 bg-white rounded-[100px] shadow-2xl outline outline-2 outline-black mt-[15vh]">
                    <img src={BAM.src} alt="Rounded Image" className="position: relative z-1 rounded-full w-1/2 h-50 m-auto -mt-[15vh] outline outline-2 outline-black" />

                    <h1 className='text-[#1BBBA4] font-sans text-right text-3xl pb-10'>
                        اﻟﺒﻨﻚ اﻻﻫلي اﻟﻤصري
                    </h1>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻻﺳﻢ ﺑﺎﻟﻌﺮﺑﻴﺔ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>
                        محمد ﻃﺎرق ﻳﺤﻴﻰ زﻛﺮﻳﺎ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻻﺳﻢ ﺑﺎﻻﻧﺠﻠيزي
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10 '>
                        Mohamed Tarek Yehia Zakaria
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻟﺪوﻟﺔ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>
                        ﻣصر - Egypt
                    </h2>
                    <div className="py-10 bg-black rounded-[100px]">
                        <h2 className='text-white font-sans text-center text-l '>
                            يرجى ﺗﺄ ﻛﻴــﺪ ﻋﻤﻠﻴــﺔ الدفع مع خدمة العملاء
                        </h2>
                    </div>
                </div>

                <div className="slide px-10 py-10 bg-white rounded-[100px] shadow-2xl outline outline-2 outline-black mt-[15vh]">
                    <img src={MoneyGram.src} alt="Rounded Image" className="position: relative z-1 rounded-full w-1/2 h-50 m-auto -mt-[15vh] outline outline-2 outline-black bg-white" />

                    <h1 className='text-[#1BBBA4] font-sans text-right text-3xl pb-10'>
                        ﻣﻮﻧﻲ ﺟﺮام
                    </h1>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻻﺳﻢ ﺑﺎﻟﻌﺮﺑﻴﺔ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>
                        محمد ﻃﺎرق ﻳﺤﻴﻰ زﻛﺮﻳﺎ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻻﺳﻢ ﺑﺎﻻﻧﺠﻠيزي
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10 '>
                        Mohamed Tarek Yehia Zakaria
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>
                        اﻟﺪوﻟﺔ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-10'>
                        ﻣصر - Egypt
                    </h2>
                    <div className="py-10 bg-black rounded-[100px]">
                        <h2 className='text-white font-sans text-center text-l '>
                            يرجى ﺗﺄ ﻛﻴــﺪ ﻋﻤﻠﻴــﺔ الدفع مع خدمة العملاء
                        </h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5 px-10 bg-[#1BBBA4]">
                <div className="slide w-full  px-10 py-10 bg-white rounded-[100px] shadow-2xl outline outline-2 outline-black mt-[15vh]">
                    <img src={Visa.src} alt="Rounded Image" className="position: relative z-1 rounded-full w-1/2 h-50 m-auto -mt-[15vh] outline outline-2 outline-black bg-white" />

                    <h1 className='text-[#1BBBA4] font-sans text-right text-3xl pb-10'>

                        ﺑﻄﺎﻗﺔ اﺋﺘﻤﺎن
                    </h1>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-[36vh]'>

                        VISA - Master Card
                    </h2>
                    <div className="py-10 bg-black rounded-[100px]">
                        <h2 className='text-white font-sans text-center text-l '>
                            يرجى ﺗﺄ ﻛﻴــﺪ ﻋﻤﻠﻴــﺔ الدفع مع خدمة العملاء
                        </h2>
                    </div>
                </div>
                <div className="slide w-full px-10 py-10 bg-white rounded-[100px] shadow-2xl outline outline-2 outline-black mt-[15vh]">
                    <img src={VodafoneCash.src} alt="Rounded Image" className="position: relative z-1 rounded-full w-1/2 h-50 m-auto -mt-[15vh] outline outline-2 outline-black bg-white" />

                    <h1 className='text-[#1BBBA4] font-sans text-right text-3xl pb-10'>

                        ﻓﻮداﻓﻮن ﻛﺎش
                    </h1>
                    <h2 className='text-[#54595f] font-sans text-right text-2xl pb-5'>

                        تحويـﻞ ﻋلى ﻣﺤﻔﻈﺔ رﻗﻢ
                    </h2>
                    <h2 className='text-[#54595f] font-sans text-right text-xl pb-[30vh]'>
                        01094689790
                    </h2>

                    <div className="py-10 bg-black rounded-[100px]">
                        <h2 className='text-white font-sans text-center text-l '>
                            يرجى ﺗﺄ ﻛﻴــﺪ ﻋﻤﻠﻴــﺔ الدفع مع خدمة العملاء
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}