import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import { isMobile } from "@/components/states";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import aboutus from "@/images/aboutus.jpg"
export default function AboutUsPage() {
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
        return <div>Loading...</div>; // Render a loading indicator while computing the initial value
    }
    return (
        <div className="max-w-full">
            {getIsMobile ? <NavbarMobile /> : <Navbar />}
            <div className="flex flex-col items-center justify-center h-auto pb-10">
                <div className="rounded-[100px] flex items-center justify-center w-[90vw]">
                    <div className="w-full flex flex-col items-center md:flex-row">
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <img
                                loading='lazy'
                                className='w-full object-cover h-full'
                                alt="Image"
                                src={aboutus.src}
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-end  px-5">
                            <h1 className='text-black font-sans text-right text-5xl pb-5'>ﻋﻦ</h1>
                            <h1 className='text-[#1BBBA4] font-sans text-right text-5xl pb-10'>اكادمية ماستري</h1>
                            <p className="text-xl leading-loose text-black text-right font-sans pb-10">
                                تم انشاء ماستري على رؤية ورسالة ذات طابع مستقبلي، حيث تم تشكيل فريق عمل يجمع بين روح الشباب وخبرة الكبار وبذلك نضمن أن تكون الأفكار مواكبة للحداثة والتطور، في ذات الوقت يحدها رؤية عميقة للخبراء في مجال التدريب، وتقوم ماستري يتقديم الخدمات التعليمية المعتادة ولكن بأسلوب حديث يمزج بين التدريب النظري والخبرة المهنية والعملية، وتهدف ماستري ان تكون الرائدة في مجال التدريب الاحترافي والتطوير المهني والاستشارات والخدمات التعليمية المتنوعة على أسس علمية وعملية مدروسه لقصد اكتساب المهارات بمختلف التخصصات، وتكون معكم يداً بيد في أي مكان بالعالم لتلبية رغباتكم بتقديم الاستشارات والتدريبات بكل ما تحتاجونه من المناهج التعليمية التي تثقل معارفكم قبل خوض الجانب العملي، لتجعلكم مؤهلين وقادرين على المنافسة والمرونة بلا حدود في سوق العمل بعد تزويدكم بالمعرفة، وتطمح ماستري بالمساهمه في فتح الأسواق الاستثمارية للافراد من خلال تدريبهم على إدارة المشروعات وتقديم الخدمات المناسبه لهم
                            </p>
                            <h1 className='text-[#ECC644] font-sans text-right text-5xl pb-10'>رسالتنا</h1>
                            <p className="text-xl leading-loose text-black text-right font-sans pb-20">
                                إعداد كوادر مهنية متخصصة بمختلف المجالات وتأهيلهم لسوق العمل، وجعلهم قادرين على المنافسة من خلال تنمية مهاراتهم العلـمـية والتطبيقية، وجعل التعليم عن بعد بمتناول الجميع وفق برامج تدريبة ذات كفاءة عالية
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-10 -mt-20 pb-5">
                <div className="w-full px-[5vw] rounded-[70px] bg-[#1BBBA4] py-5">
                    <h1 className='text-[#424243] font-sans text-right text-5xl pb-10'>رؤيتنا</h1>
                    <p className="text-2xl leading-loose text-white text-right font-sans pb-10">
                        نسعى لنكون من الأوائل في تنمية وتدريب الأفراد والقطاعات لرفع قدراتهم الإنتاجية ومستواهم العلمي والعملي                </p>
                </div>
            </div>


        </div>
    )
}