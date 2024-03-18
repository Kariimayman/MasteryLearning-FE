import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import { isMobile } from "@/components/states";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import OurPrograms from "@/images/OurPrograms.png"
import CourseCard from "@/components/coursecard";
export default function ProgramsPage() {
    const courses = [
        { imageUrl: OurPrograms.src, title: "Test Course", price: 20 },
        { imageUrl: OurPrograms.src, title: "Test Course", price: 20 },
        { imageUrl: OurPrograms.src, title: "Test Course", price: 20 },
        { imageUrl: OurPrograms.src, title: "Test Course", price: 20 },
        { imageUrl: OurPrograms.src, title: "Test Course", price: 20 },
        { imageUrl: OurPrograms.src, title: "Test Course", price: 20 },
        { imageUrl: OurPrograms.src, title: "Test Course", price: 20 },
        { imageUrl: OurPrograms.src, title: "Test Course", price: 20 },
    ]
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
            <div className=" w-full bg-no-repeat bg-center bg-cover -mt-8">
                <img src={OurPrograms.src} alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
                {courses.map((course, index) => (
                    <div key={index} className="slide px-10 py-2">
                        <CourseCard imageUrl={course.imageUrl}
                            title={course.title}
                            price={course.price}
                            onClick={() => {
                                // Handle button click (e.g., navigate to a payment page)
                            }} />
                    </div>
                ))}
            </div>
        </div>
    )
}