import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import { isMobile } from "@/components/states";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import CourseTest from "@/images/CourseTest.jpeg"
import OurPrograms from "@/images/OurPrograms.png"
import CourseCard from "@/components/coursecard";
import Loading from "@/components/loading";

import coursedesc from "@/images/coursedesc.png"
import coursedesc2 from "@/images/coursedesc2.png"
import coursedesc3 from "@/images/coursedesc3.png"
import coursedesc4 from "@/images/coursedesc4.png"
import aftercourseiscomplete from "@/images/aftercourseiscomplete.png"
export default function CoursePage() {
    const [activeTab, setActiveTab] = useState(true); // Initial active tab
    const [getIsMobile, setIsMobile] = useRecoilState(isMobile);
    const [loading, setLoading] = useState(true); // New loading state

    const course = {
        id: 1,
        price: 99,
        title: "دبلوم التربية الخاصة",
        description: "استعد للانغماس في عالم الشحن اللاسلكي مع دورتنا المميزة ستقودك هذه الدورة إلى رحلة شاملة لفهم أحدث تقنيات الشحن والتحولات في هذا المجال المثير. ستتعلم كيفية اختيار واستخدام شواحن الطاقة بفعالية، وتحسين أداء البطارية، وتكوين مفاهيم الشحن الذكي. بالإضافة إلى ذلك، ستحصل على إشارات حول التقنيات المستقبلية لتكنولوجيا الشحن. انضم إلينا اليوم واجعل تجربة الشحن تكون سلسة ومتقدمة",
        curriculum: ["المحاضرة الاولى", "المحاضرة الثانية", "المحاضرة الثالثة"]
        ,
        lectures: ["تعريف ذوي الاحتياجات الخاصة", "سيكولوجية ذوي الاحتياجات الخاصة", "تشخيص ذوي الاحتياجات الخاصة", "والمقاييس النفسية"],
        studentscount: 2,
        lecturescount: 2,
        hourscount: 2,
        Language: " عربية",
        tempcount: 2,
        Complition: ["شهادة + بطاقة معتمدة من الخارجية البريطانية باجتياز ( دبلوم التربية الخاصة). (يمكن توثيقها من سفارة أي دولة برسوم إضافية) ", "رصيد 100شهادة مجانية باعتماد ماستري يتم استخراجها لمتدربينك ( بدون رسوم إضافية ) ", "إرسال شهاداتك عبر شركات الشحن السريع ( بدون رسوم إضافية ) ", "الحصول على تسجيل للمحاضرات مدى الحياة يمكنك الرجوع إليه في اي وقت."],


    }

    useEffect(() => {
        setIsMobile(window.innerWidth < 950)
        const handleResize = () => setIsMobile(window.innerWidth < 950);

        window.addEventListener('resize', handleResize);
        setLoading(false);

        return () => window.removeEventListener('resize', handleResize); // Cleanup function
    }, []);
    if (loading) {
        return <Loading />; // Render a loading indicator while computing the initial value
    }
    return (
        <div className="max-w-full">
            {!getIsMobile ? <Navbar /> : <NavbarMobile />}
            <div className="flex flex-col items-center justify-center h-auto pb-10">
                <div className="flex items-center justify-center w-[90vw]">
                    <div className="w-full flex flex-col items-center md:flex-row">
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <img
                                loading='lazy'
                                className='w-full object-cover h-full'
                                alt="Image"
                                src={CourseTest.src}
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center md:px-10 pb-10">
                            <h1 className='text-[#1BBBA4] font-sans text-center text-5xl py-10 font-bold'>{course.title}</h1>
                            <div className="bg-[#E2EDEF] rounded-2xl p-5 px-10 shadow-xl border border-black ">
                                <div className="flex justify-center gap-4">  {/* Center both h1 and h2 horizontally */}
                                    <h1 className='text-black font-sans text-3xl pb-5' >${course.price}</h1>
                                    <h2 className='line-through line-through-offset-[10px] -mr-10 decoration-[3px] text-black font-sans text-xl pb-5'>${course.price + 50}</h2>
                                </div>
                                <div className="flex justify-center">  <button className="bg-[#6ec1e4] hover:bg-[#6eeeee] items-center  text-xl text-white px-5 py-5 rounded-full font-sans">Buy Now</button>
                                </div>
                            </div>
                            <p className="text-xl leading-loose text-black text-center font-sans pb-10 -mb-20 pt-5"> {course.description} </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-[80vw] mx-auto  bg-gray-100 rounded-2xl shadow-xl ">
                <div className="flex justify-center item-center ">
                    <button
                        className={`py-5 w-full text-[#54595f] font-sans text-3xl sm:text-xl hover:bg-[#6ec1e4] ${activeTab === true ? ' bg-[#6ec1e4]' : 'bg-[#E2EDEF]'
                            }`}
                        onClick={() => setActiveTab(true)}
                    >
                        المنهج الدراسي
                    </button>
                    <button
                        className={`py-2 w-full text-[#54595f] font-sans text-3xl md:text-5xl hover:bg-[#6ec1e4] ${activeTab === false ? ' bg-[#6ec1e4]' : 'bg-[#E2EDEF]'
                            }`}
                        onClick={() => setActiveTab(false)}
                    >
                        مشاهدة المحاضرات
                    </button>
                    <div>

                    </div>
                </div>
                <div className="text-black py-10 font-sans  text-xl sm:text-2xl">
                    {activeTab ? (
                        <div className="px-5 sm:px-10">  {/* Added responsive padding classes */}
                            {course.lectures.map((lecture, index) => (
                                <div key={index} className="flex justify-end item-center leading-loose ">
                                    <ul>
                                        <li>{lecture}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="px-10 sm:px-5">  {/* Added responsive padding classes */}
                            {course.curriculum.map((curriculum, index) => (
                                <div key={index} className="flex justify-end item-center hover:bg-gray-400 cursor-pointer" onClick={() => (location.href = "/Course")}>
                                    <ul>
                                        <li>{curriculum}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center pt-10">
                <button className="px-10 py-5 pb-7 text-3xl mt-4 bg-red-600 rounded-full font-sans hover:bg-red-500">
                    مميزات الدورة
                </button>
            </div>
            <div className="flex flex-row items-center justify-between sm:px-10 md:px-33.33 lg:px-60 py-10">

                <div className="flex flex-col items-center hover:transform " >
                    <img loading='lazy' src={coursedesc.src} alt="Image 1" className=" w-full  bg-no-repeat bg-center bg-cover rounded" />
                    <div>
                        <p className="sm:text-l md:text-xl lg:text-2xl  text-center text-black  font-sans ">عدد الطلاب </p>
                        <p className="sm:text-l md:text-xl lg:text-2xl text-center text-black  font-sans ">{course.studentscount}</p>

                    </div>

                </div>
                <div className="flex flex-col items-center " >
                    <img loading='lazy' src={coursedesc2.src} alt="Image 2" className="w-full  bg-no-repeat bg-center bg-cover rounded" />
                    <p className="sm:text-l md:text-xl lg:text-2xl  text-black  font-sans">اللغة</p>
                    <p className="sm:text-l md:text-xl lg:text-2xl  text-black  font-sans">{course.Language}</p>

                </div>
                <div className="flex flex-col items-center" >
                    <img loading='lazy' src={coursedesc3.src} alt="Image 3" className="w-full  bg-no-repeat bg-center bg-cover rounded" />
                    <div>
                        <p className="sm:text-l md:text-xl lg:text-2xl  text-center text-black  font-sans ">المدة الزمنية   </p>
                        <p className="sm:text-l md:text-xl lg:text-2xl text-center text-black  font-sans ">{course.hourscount}</p>

                    </div>
                </div>
                <div className="flex flex-col items-center ">
                    <img loading='lazy' src={coursedesc4.src} alt="Image 4" className="w-full  bg-no-repeat bg-center bg-cover rounded" />
                    <div className="bg-[]">
                        <p className="sm:text-l md:text-xl lg:text-2xl  text-center text-black  font-sans ">المحاضرات   </p>
                        <p className="sm:text-l md:text-xl lg:text-2xl text-center text-black  font-sans ">{course.lecturescount}</p>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto pb-10">
                <div className="rounded-[100px] flex items-center justify-center w-[90vw] border bg-purple-200 ">
                    <div className="w-full flex flex-col items-center md:flex-row">
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <img
                                loading='lazy'
                                className='w-full object-cover h-full'
                                alt="Image"
                                src={aftercourseiscomplete.src}
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-end  px-5  py-20">
                            <h1 className='text-black font-sans text-right text-4xl pb-5'>
                                في هذا البرنامج تحصل على
                            </h1>
                            <div className="text-black font-sans text-right text-xl leading-loose">  {/* Added responsive padding classes */}
                                {course.Complition.map((Complition, index) => (
                                    <div key={index} className="pb-5" >
                                        <ul>
                                            <li>{Complition}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => (location.href = "/ProgramsPage")} className="px-10 py-5 pb-7  my-10 text-3xl mt-4 bg-gradient-to-r font-sans hover:from-green-500 hover:to-blue-500 from-green-600 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    تصفح كل البرامج
                </button>
            </div>

        </div >
    )
}