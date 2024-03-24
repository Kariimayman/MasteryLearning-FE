import { Course } from "@/app/pages/adminhomepage";
import { FormEvent, useState } from "react";
export default function CreateOrEditCourse(course: Course = {} as Course) {
    const [editCourse, setCourseData] = useState<Course>(course);
    const [Error, setError] = useState(""); // New loading state
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const title = formData.get('title')
        const price = formData.get('price')
        const pricebeforediscount = formData.get('pricebeforediscount')
        const category = formData.get('category')

        const description = formData.get('description')
        const curriculum = formData.get('curriculum')?.toString().split('\n').map((line) => line.trim()) // Trim whitespace
            .filter((line) => line !== '')
        const studentscount = formData.get('studentscount')
        const lecturescount = formData.get('lecturescount')
        const hourscount = formData.get('hourscount')
        const tempcount = formData.get('tempcount')
        const Complition = formData.get('Complition')?.toString().split('\n').map((line) => line.trim()) // Trim whitespace
            .filter((line) => line !== '')

        console.log(title)
        console.log(price)
        console.log(pricebeforediscount)
        console.log(category)
        console.log(description)
        console.log(curriculum)
        console.log(studentscount)
        console.log(lecturescount)
        console.log(hourscount)
        console.log(tempcount)
        console.log(Complition)

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}),
        })

    }
    return (
        <div className="flex justify-center items-center py-10 ">
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full rounded-lg shadow-2xl p-10 ">
                <div className='grid grid-cols-2  w-full'>
                    <div className='flex flex-col items-center w-full'>
                        <label className="text-black py-2 w-3/4 font-sans">Title</label>
                        <input
                            defaultValue={editCourse?.title}
                            type="text"
                            name="title"
                            placeholder="title"
                            required
                            className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                        />
                    </div >
                    <div className='flex flex-col items-center w-full'>
                        <label className="text-black py-2 w-3/4  font-sans">Category</label>
                        <input
                            defaultValue={editCourse?.category}
                            type="text"
                            name="category"
                            placeholder="category"
                            required
                            className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                        />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <label className="text-black py-2 w-3/4  font-sans">Price</label>
                        <input
                            defaultValue={editCourse?.price}
                            type="text"
                            name="price"
                            placeholder="price"
                            required
                            className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                        />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <label className="text-black py-2 w-3/4  font-sans">Price Before Discount</label>
                        <input
                            defaultValue={editCourse?.price}
                            type="text"
                            name="pricebeforediscount"
                            placeholder="price before discount"
                            required
                            className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                        />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <label className="text-black py-2 w-3/4  font-sans">Students Count </label>
                        <input
                            defaultValue={editCourse?.studentscount}

                            type="text"
                            name="studentscount"
                            placeholder="studentscount"
                            required
                            className="w-3/4 rounded-md text-black border border-gray-300 px-2 py-2 text-left text-sm"
                        />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <label className="text-black py-2 w-3/4  font-sans"> Lectures Count   </label>
                        <input
                            defaultValue={editCourse?.lecturescount}
                            type="text"
                            name="lecturescount"
                            placeholder="lecturescount"
                            required
                            className="w-3/4 rounded-md text-black border border-gray-300 px-2 py-2 text-left text-sm"
                        />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <label className="text-black py-2 w-3/4 font-sans">Hours Count</label>
                        <input
                            defaultValue={editCourse?.hourscount}
                            type="text"
                            name="hourscount"
                            placeholder="hourscount"
                            required
                            className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                        />
                    </div>

                    <div className='flex flex-col items-center w-full'>

                        <label className="text-black py-2 w-3/4 font-sans">Temp Count</label>
                        <input
                            defaultValue={editCourse?.tempcount}
                            type="text"
                            name="tempcount"
                            placeholder="tempcount"
                            required
                            className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                        />
                    </div>

                </div>
                <div className='flex flex-col items-center w-full'>
                    <label className="text-black py-2 w-3/4  font-sans"> Description  </label>
                    <textarea
                        defaultValue={editCourse?.description}
                        name="description"
                        placeholder="description"
                        required
                        className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-5 text-left text-sm"
                    />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <label className="text-black py-2 w-3/4  font-sans">  Curriculum </label>
                    <textarea
                        defaultValue={editCourse?.curriculum?.map((item) => item + "\n\n").join('')}
                        name="curriculum"
                        placeholder="curriculum"
                        required
                        className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-5 text-left text-sm"
                    />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <label className="text-black py-2 w-3/4 font-sans">Complition</label>
                    <textarea
                        defaultValue={editCourse?.Complition?.map((item) => item + "\n").join('')}
                        name="Complition"
                        placeholder="Complition"
                        required
                        className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-5 text-left text-sm"
                    />
                </div>
                <button type="submit" className="inline-flex font-sans items-center px-4 mt-10 py-2 bg-blue-500 hover:bg-blue-700 text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:bg-red">
                    Complete
                </button>

                {Error !== "" ? <p className="text-red-600 text-xl  rounded-lg m-auto p-10  text-center">{Error} </p> : <></>}
            </form>

        </div>
    );
};