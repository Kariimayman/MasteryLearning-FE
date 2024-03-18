import React from 'react';

const TextWithButton = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-20">
            <p className="sm:text-xl md:text-2xl lg:text-4xl text-blue-800 pt-5 font-light font-sans pl-20  w-full">_______________________________________________</p>

            <p className="text-center text-4xl text-blue-800 pt-5 font-medium font-sans">المعرفة قوة، والتعلُم هو ضمانك للحرية</p>
            <p className="text-right sm:text-xl md:text-2xl lg:text-4xl text-blue-800 pt-5 font-light font-sans pr-20 w-full">_______________________________________________</p>
            <p className="text-center text-4xl text-blue-800 pt-5 font-normal font-sans pb-5"> عزز مهاراتك، وحرر حياتك</p>

            <button onClick={() => (location.href = "/ProgramsPage")} className="px-10 py-5 pb-7  my-10 text-3xl mt-4 bg-gradient-to-r font-sans hover:from-green-500 hover:to-blue-500 from-green-600 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                تصفح كل البرامج
            </button>
        </div>
    );
};

export default TextWithButton;