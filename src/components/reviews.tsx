import React from 'react';
import "../app/pages/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageCarousel1 from "@/images/review (1).jpg"
import imageCarousel2 from "@/images/review (2).jpg"
import imageCarousel3 from "@/images/review (3).jpg"
import imageCarousel4 from "@/images/review (4).jpg"
import imageCarousel5 from "@/images/review (5).jpg"
const images = [
    imageCarousel1.src,
    imageCarousel2.src,
    imageCarousel3.src,
    imageCarousel4.src,
    imageCarousel5.src
];
import { isMobile } from './states';
import { useRecoilState } from 'recoil';
const Reviews = () => {
    const [getIsMobile, setIsMobile] = useRecoilState(isMobile);

    return (
        <div className="flex flex-col items-center justify-center my-20 drop-shadow-xl">
            <p className="text-center text-4xl py-5 font-medium font-sans text-zinc-500">أراء العملاء</p>
            <Carousel useKeyboardArrows={true} showStatus={false} showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} swipeable={true} interval={2000} centerMode centerSlidePercentage={getIsMobile ? 100 : 33.33}>
                {images.map((image, index) => (
                    <div className="slide pb-10 drop-shadow-xl" key={index}>
                        <img
                            loading='lazy'
                            alt="Image Description"
                            src={image}
                            style={{ width: "80%", height: "auto" }}
                        />
                    </div>
                ))}
            </Carousel>

        </div>
    );
};

export default Reviews;