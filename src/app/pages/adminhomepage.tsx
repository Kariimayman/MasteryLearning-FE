import Link from 'next/link';
import { FormEvent, useEffect, useState } from "react";
import CreateOrEditCourse from '@/components/createoreditcourse';
export interface Course {
    id: string,
    price: string,
    title: string,
    description: string,
    curriculum: string[],
    studentscount: string,
    lecturescount: string,
    hourscount: string,
    Language: string,
    tempcount: string,
    category: string,
    Complition: string[],

}
export default function AdminHomePage() {
    let courses = [
        {
            id: "1",
            price: "99",
            category: "دبلومات تدريبية",
            title: "دبلوم التربية الخاصة",
            description: "استعد للانغماس في عالم الشحن اللاسلكي مع دورتنا المميزة ستقودك هذه الدورة إلى رحلة شاملة لفهم أحدث تقنيات الشحن والتحولات في هذا المجال المثير. ستتعلم كيفية اختيار واستخدام شواحن الطاقة بفعالية، وتحسين أداء البطارية، وتكوين مفاهيم الشحن الذكي. بالإضافة إلى ذلك، ستحصل على إشارات حول التقنيات المستقبلية لتكنولوجيا الشحن. انضم إلينا اليوم واجعل تجربة الشحن تكون سلسة ومتقدمة",
            curriculum: ["المحاضرة الاولى", "المحاضرة الثانية", "المحاضرة الثالثة"]
            ,
            lectures: ["تعريف ذوي الاحتياجات الخاصة", "سيكولوجية ذوي الاحتياجات الخاصة", "تشخيص ذوي الاحتياجات الخاصة", "والمقاييس النفسية"],
            studentscount: "2",
            lecturescount: "2",
            hourscount: "2",
            Language: " عربية",
            tempcount: "2",
            Complition: ["شهادة + بطاقة معتمدة من الخارجية البريطانية باجتياز ( دبلوم التربية الخاصة). (يمكن توثيقها من سفارة أي دولة برسوم إضافية) ", "رصيد 100شهادة مجانية باعتماد ماستري يتم استخراجها لمتدربينك ( بدون رسوم إضافية ) ", "إرسال شهاداتك عبر شركات الشحن السريع ( بدون رسوم إضافية ) ", "الحصول على تسجيل للمحاضرات مدى الحياة يمكنك الرجوع إليه في اي وقت."],

        },
        {
            id: "2",
            price: "99",
            category: "ماجستير مهني",
            title: "دبلوم علم النفس الايجابي",
            description: "استعد للانغماس في عالم الشحن اللاسلكي مع دورتنا المميزة ستقودك هذه الدورة إلى رحلة شاملة لفهم أحدث تقنيات الشحن والتحولات في هذا المجال المثير. ستتعلم كيفية اختيار واستخدام شواحن الطاقة بفعالية، وتحسين أداء البطارية، وتكوين مفاهيم الشحن الذكي. بالإضافة إلى ذلك، ستحصل على إشارات حول التقنيات المستقبلية لتكنولوجيا الشحن. انضم إلينا اليوم واجعل تجربة الشحن تكون سلسة ومتقدمة",
            curriculum: ["المحاضرة الاولى", "المحاضرة الثانية", "المحاضرة الثالثة"]
            ,
            lectures: ["تعريف ذوي الاحتياجات الخاصة", "سيكولوجية ذوي الاحتياجات الخاصة", "تشخيص ذوي الاحتياجات الخاصة", "والمقاييس النفسية"],
            studentscount: "1",
            lecturescount: "1",
            hourscount: "1",
            Language: " عربية",
            tempcount: "1",
            Complition: ["شهادة + بطاقة معتمدة من الخارجية البريطانية باجتياز ( دبلوم التربية الخاصة). (يمكن توثيقها من سفارة أي دولة برسوم إضافية) ", "رصيد 100شهادة مجانية باعتماد ماستري يتم استخراجها لمتدربينك ( بدون رسوم إضافية ) ", "إرسال شهاداتك عبر شركات الشحن السريع ( بدون رسوم إضافية ) ", "الحصول على تسجيل للمحاضرات مدى الحياة يمكنك الرجوع إليه في اي وقت."],

        },
    ]

    const users = [
        {
            username: "user 1",
            email: "test1",
            phonenumber: "test1",
            country: "test1",
            courses: ["1", "2"],
        },
        {
            username: "user 2",
            email: "test2",
            phonenumber: "test2",
            country: "test2",
            courses: ["2", "3"],

        },
        {
            username: "user 3",
            email: "test3",
            phonenumber: "test3",
            country: "test3",
            courses: ["3", "4"],
        }
    ]
    const requests = [
        {
            userid: "1",
            username: "User 1",
            coursetitle: "دبلوم التربية الخاصة",
            courseid: "1",

        },
        {
            userid: "1",
            username: "User 3 ",
            coursetitle: "دبلوم علم النفس الايجابي  ",
            courseid: "1",
        },
    ]


    const [showUsers, setShowUsers] = useState(false);
    const [ShowCourses, setShowCourses] = useState(false);
    const [ShowRequests, setShowRequests] = useState(false);
    const [ShowForm, setShowForm] = useState(false);
    const [ShoweditForm, setShoweditForm] = useState(false);

    const [studentCount, setstudentCount] = useState(users.length);
    const [courseCount, setcourseCount] = useState(courses.length);
    const [editCourse, setEditCourse] = useState<Course>({
        id: "",
        price: "",
        title: "  ",
        description: "",
        category: "",
        curriculum: [""]
        ,
        studentscount: "",
        lecturescount: "",
        hourscount: "",
        Language: " ",
        tempcount: "",
        Complition: [""],
    });


    function handleDeleteCourse(id: string) {

    }
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="flex items-center justify-center py-4 bg-gray-800 text-white font-bold text-xl">
                Admin Portal
            </header>
            <main className="flex flex-col px-10 py-8">
                <div className="grid grid-cols-2">

                    <button
                        onClick={() => { setShowUsers(!showUsers), setShowCourses(false) }}
                        type="button"
                        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 shadow"
                    >
                        <span className="mr-2 text-xl">Students:</span>
                        <span>{studentCount}</span>
                    </button>


                    <button
                        onClick={() => { setShowCourses(!ShowCourses), setShowUsers(false) }}
                        type="button"
                        className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6  shadow"
                    >
                        <span className="mr-2 text-xl">Courses:</span>
                        <span>{courseCount}</span>
                    </button>
                </div>
                <div>
                    {showUsers ? (<div className="w-full overflow-auto shadow  text-black ">
                        <table className="w-full min-w-full text-center divide-y divide-gray-200 ">
                            <thead>
                                <tr className="bg-blue-500 text-gray-300 font-bold text-sm py-2">
                                    <th className="px-6">Username</th>
                                    <th className="px-6">Email</th>
                                    <th className="px-6">Phone Number</th>
                                    <th className="px-6">Country</th>
                                    <th className="px-6">Courses</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100 text-center">
                                        <td className="px-6 py-4 ">{user.username}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.phonenumber}</td>
                                        <td className="px-6 py-4">{user.country}</td>
                                        <td className="px-6 py-4">
                                            {user.courses.length > 0 ? (
                                                user.courses.join(', ') // Join courses with comma and space
                                            ) : (
                                                '-' // Display '-' if no courses
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>) : (<></>)}
                </div>
                <div>
                    {ShowCourses ? (
                        <div className="w-full overflow-auto  shadow  text-black">
                            <table className="w-full min-w-full text-center divide-y divide-gray-200">
                                <thead>
                                    <tr className="bg-green-500 text-gray-300 font-bold text-sm py-2">
                                        <th className="px-6">ID</th>
                                        <th className="px-6">Price</th>
                                        <th className="px-6">Title</th>
                                        <th className="px-6">EDIT</th>
                                        <th className="px-6">DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-100 text-center">
                                            <td className="px-6 py-4">{course.id}</td>
                                            <td className="px-6 py-4 ">{course.price}</td>
                                            <td className="px-6 py-4">{course.title}</td>
                                            <td className="px-6 py-4"><button className='bg-green-600 text-white px-5 py-2' onClick={() => { setEditCourse(course), setShowForm(false), setShoweditForm(!ShoweditForm) }}>edit</button></td>
                                            <td className="px-6 py-4"><button className='bg-red-600 text-white px-5 py-2' onClick={() => handleDeleteCourse(course.id)}>delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (<></>)}
                </div>
                <button
                    onClick={() => { setShowRequests(!ShowRequests) }}
                    type="button"
                    className="flex items-center mt-5 justify-center bg-gray-600 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded shadow"
                >
                    <span className="mr-2 text-xl">User Requests</span>
                </button>
                <div>
                    {ShowRequests ? (
                        <div className="w-full overflow-auto  shadow  text-black">
                            <table className="w-full min-w-full text-center divide-y divide-gray-200">
                                <thead>
                                    <tr className="bg-gray-600 text-white font-bold text-sm py-2">
                                        <th className="px-6">USERNAME</th>
                                        <th className="px-6">COURSE TITLE</th>
                                        <th className="px-6">ACCEPT</th>
                                        <th className="px-6">REJECT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map((request, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-100 text-center">
                                            <td className="px-6 py-4">{request.username}</td>
                                            <td className="px-6 py-4 ">{request.coursetitle}</td>
                                            <td className="px-6 py-4"><button className='bg-green-600 text-white px-5 py-2' onClick={() => { }}>Accept</button></td>
                                            <td className="px-6 py-4"><button className='bg-red-600 text-white px-5 py-2' onClick={() => { }}>Reject</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (<></>)}
                </div>
                <button
                    onClick={() => { setShowForm(!ShowForm), setShoweditForm(false) }}
                    type="button"
                    className="flex items-center mt-5 justify-center bg-gray-600 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded shadow"
                >
                    <span className="mr-2 text-xl">Create Course</span>
                </button>
                {ShowForm ? (<CreateOrEditCourse id={''} category={""} price={''} title={''} description={''} curriculum={[]} studentscount={''} lecturescount={''} hourscount={''} Language={''} tempcount={''} Complition={[]} />) : (<></>)}
                {ShoweditForm ? (<CreateOrEditCourse {...editCourse} />) : (<></>)}

            </main >
        </div >
    )
}
