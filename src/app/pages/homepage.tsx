import Navbar from "@/components/navbar";
import JoinNow from "@/components/joinnow";
import Category from "@/components/categories";
import ImageCarousel from "@/components/imagecarousel";
import imageCarousel1 from "@/images/imagecarousel1.jpg"
import imageCarousel2 from "@/images/imagecarousel2.jpg"
import imageCarousel3 from "@/images/imagecarousel3.jpg"
import imageCarousel4 from "@/images/imagecarousel4.jpg"
import imageCarousel5 from "@/images/imagecarousel5.jpg"



export default function Homepage() {
    const images = [imageCarousel1.src,imageCarousel2.src,imageCarousel3.src, imageCarousel4.src, imageCarousel5.src];
    return (
        <>
            <Navbar />
            <JoinNow />
            <Category/>
            <ImageCarousel images={images}/>
        </>

    );
}
