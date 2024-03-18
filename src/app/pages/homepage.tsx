import Navbar from "@/components/navbar";
import JoinNow from "@/components/joinnow";
import Category from "@/components/categories";
import imageCarousel1 from "@/images/imagecarousel1.jpg"
import imageCarousel2 from "@/images/imagecarousel2.jpg"
import imageCarousel3 from "@/images/imagecarousel3.jpg"
import imageCarousel4 from "@/images/imagecarousel4.jpg"
import imageCarousel5 from "@/images/imagecarousel5.jpg"
const images = [
    imageCarousel1.src,
    imageCarousel2.src,
    imageCarousel3.src,
    imageCarousel4.src,
    imageCarousel5.src
];
import { Carousel } from "react-responsive-carousel";
import TextWithButton from "@/components/textwithbutton";
import "./carousel.min.css";
import CourseCard from "@/components/coursecard";
import Reviews from "@/components/reviews";
import { isMobile } from "@/components/states";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import NavbarMobile from "@/components/navbarmobile";
import HalfImage from "@/components/halfimage";

export default function Homepage() {
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
        <div className="max-w-[100vw]">
            {getIsMobile ? <NavbarMobile /> : <Navbar/> }            
            <JoinNow />
            <Category />
            <Carousel useKeyboardArrows={true} showStatus={false} showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} swipeable={true} interval={2000} centerMode centerSlidePercentage={getIsMobile ? 100 : 33.33}>
                {images.map((image, index) => (
                    <div className="slide py-5" key={index}>
                        <img
                            alt="Image Description"
                            src={image}
                            style={{ width: "80%", height: "auto" }}
                        />
                    </div>
                ))}
            </Carousel>
            <TextWithButton />
            <Carousel useKeyboardArrows={true} showStatus={false} showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} swipeable={true} interval={2000} centerMode centerSlidePercentage={getIsMobile ? 100 : 33.33}>
                {images.map((image, index) => (
                    <div key={index} className="slide px-10 py-2"
                    >
                        <CourseCard imageUrl={image}
                            title="Product Name"
                            price={19.99}
                            onClick={() => {
                                // Handle button click (e.g., navigate to a payment page)
                            }} />
                    </div>

                ))}
            </Carousel>
            <Reviews />
            <HalfImage />

        </div>

    );
}
