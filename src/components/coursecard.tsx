import Link from 'next/link';
import React from 'react';
interface CardProps {
    imageUrl: string;
    title: string;
    price: number;
    onClick?: () => void; // Optional function for button click
}
const CourseCard: React.FC<CardProps> = ({ imageUrl, title, price, onClick }) => {
    return (
        <Link href={"/Course"}>
            <div className="w-full p-4 rounded overflow-hidden shadow-md ">
                <img loading='lazy' className="w-full h-48 object-cover" src={imageUrl} alt={title} />
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-black py-2">{title}</h2>
                    <div className="flex justify-between items-center my-5"> {/* Corrected placement */}
                        <div className="w-1/2 flex flex-row py-2 gap-2">
                            <p className='line-through line-through-offset-[10px] decoration-[3px] text-gray-700  font-sans text-xl w-1/5'>${30}</p>
                            <p className="text-gray-700   text-2xl">${price.toFixed(2)}</p>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={onClick}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default CourseCard;