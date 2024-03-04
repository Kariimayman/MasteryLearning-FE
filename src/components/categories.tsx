
import masters from '../images/masters.png'
import certificates from '../images/firstimage.png'
import diploma from '../images/diploma.png'
import services from '../images/services.png'

const Category = () => {
    const handleClick = () => {
        // Add your logic for the click event
        console.log("Div Clicked!");
    };
    return (
        <div className="flex flex-row items-center justify-between px-60 py-10">
            <div className="flex flex-col items-center" onClick={handleClick}  style={{ cursor: 'pointer' }}>
                <img src={certificates.src} alt="Image 1" className="w-24 h-24 object-cover rounded" />
                <p className="mt-2 text-2xl text-black  font-sans ">الشهادات</p>
            </div>
            <div className="flex flex-col items-center" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={services.src} alt="Image 2" className="w-24 h-24 object-cover rounded" />
                <p className="mt-2 text-2xl text-black  font-sans ">خدمات</p>
            </div>
            <div className="flex flex-col items-center" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={masters.src} alt="Image 3" className="w-24 h-24 object-cover rounded" />
                <p className="mt-2 text-2xl text-black  font-sans ">دبلومات تدريبية</p>
            </div>
            <div className="flex flex-col items-center" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={diploma.src} alt="Image 4" className="w-24 h-24 object-cover rounded" />
                <p className="mt-2 text-2xl text-black  font-sans ">ماجستير مهني</p>
            </div>
        </div>



    );
};

export default Category;