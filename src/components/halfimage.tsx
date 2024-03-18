import React from 'react';
import homefooter from "@/images/homefooter.png"
const HalfImage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto pb-10">
            <div className="rounded-[100px] flex items-center justify-center w-[90vw] border bg-[#FFE7A9] ">
                <div className="w-full flex flex-col items-center md:flex-row">
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <img
                            loading='lazy'
                            className='w-full object-cover h-full'
                            alt="Image"
                            src={homefooter.src}
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-end  px-5 py-5">
                        <h1 className='text-[#DB7118] font-sans text-right text-5xl pb-5'>الكورسات​</h1>
                        <h1 className='text-[#5A513F] font-sans text-right text-5xl pb-10'>تعلم من الخبراء</h1>
                        <p className="text-xl leading-loose text-[#5A513F] text-right font-sans pb-10">اكتشف المهارات الأكثر طلبا في السوق، وتمتع بقدر أكبر من الحرية المالية، وانتقل بحياتك المهنية للمستوى الأعلى، من خلال التعلم من خبرائنا المحترفين، واللي بيجمعوا بين المعرفة العلمية، والخبرة العملية في مجالهم، ودي أهم ميزة بتعظم القيمة اللي بنقدمها لك.
                            لأننا مش بنقدم لك مجرد معلومات نظرية تقدر تتعلمها من أي مكان، لكننا بنقدم لك سنين من الخبرة والنجاح من خلال مدربينا المستعدين لتعليمك كل المهارات اللي بتطلبها الشركات باحترافية وكفاءة عالية</p>
                        <button className="bg-[#DB7118] hover:bg-yellow-400 text-3xl text-white px-5 py-5 rounded-full shadow-xl self-center transform -translate-y-1 font-sans">انضم الان</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default HalfImage;