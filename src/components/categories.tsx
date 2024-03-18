
import masters from '../images/masters.png'
import certificates from '../images/firstimage.png'
import diploma from '../images/diploma.png'
import services from '../images/services.png'

const Category = () => {
    return (
        <div className="flex flex-row items-center justify-between sm:px-10 md:px-33.33 lg:px-60 py-10">
            <div className="flex flex-col items-center cursor-pointer hover:transform " onClick={() => (location.href = "/Certificates")}>
                <img loading='lazy' src={certificates.src} alt="Image 1" className="w-24 h-24 object-cover rounded hover:translate-y-2" />
                <p className="mt-2 sm:text-l md:text-xl lg:text-2xl  text-black  font-sans ">الشهادات</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:transform " onClick={() => (location.href = "/AboutUs")}>
                <img loading='lazy' src={services.src} alt="Image 2" className="w-24 h-24 object-cover rounded hover:translate-y-2" />
                <p className="mt-2 sm:text-l md:text-xl lg:text-2xl  text-black  font-sans">خدمات</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:transform " onClick={() => (location.href = "/ProgramsPage")}>
                <img loading='lazy' src={diploma.src} alt="Image 3" className="w-24 h-24 object-cover rounded hover:translate-y-2" />
                <p className="mt-2 sm:text-l md:text-xl lg:text-2xl  text-black  font-sans">دبلومات تدريبية</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:transform " onClick={() => (location.href = "/ProgramsPage")}>
                <img loading='lazy' src={masters.src} alt="Image 4" className="w-24 h-24 object-cover rounded hover:translate-y-2" />
                <p className="mt-2 sm:text-l md:text-xl lg:text-2xl  text-black  font-sans ">ماجستير مهني</p>
            </div>
        </div>



    );

};

export default Category;