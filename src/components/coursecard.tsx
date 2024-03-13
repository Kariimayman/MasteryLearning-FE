import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    price: number;
    onClick?: () => void; // Optional function for button click
}

const CourseCard: React.FC<CardProps> = ({ imageUrl, title, price, onClick }) => {
    return (
        <div className="w-full p-4 rounded overflow-hidden shadow-md ">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="mt-6">
                <h2 className="text-xl font-bold text-black py-2">{title}</h2>
                <div className="flex justify-between items-center my-5"> {/* Corrected placement */}
                    <p className="text-gray-700  py-2 pl-5 text-2xl">${price.toFixed(2)}</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onClick}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;