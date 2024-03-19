import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import { isMobile } from "@/components/states";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Loading from "@/components/loading";

export default function SignUpPage() {
    const [getIsMobile, setIsMobile] = useRecoilState(isMobile);
    const [loading, setLoading] = useState(true); // New loading state
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const email = formData.get('email')
        const phonenumber = formData.get('phonenumber')
        const country = formData.get('country')
        const password = formData.get('password')
        const confirmpassword = formData.get('confirmpassword')
        console.log(username)
        console.log(email)
        console.log(phonenumber)
        console.log(password)
        console.log(country)
        console.log(password)
        console.log(confirmpassword)


        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

    }
    useEffect(() => {
        setIsMobile(window.innerWidth < 950)
        const handleResize = () => setIsMobile(window.innerWidth < 950);
        setLoading(false);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Cleanup function
    }, []);
    if (loading) {
        return <Loading />; // Render a loading indicator while computing the initial value
    }
    return (
        <div className="max-w-full">
            {getIsMobile ? <NavbarMobile /> : <Navbar />}
            <div className="flex justify-center items-center py-10">
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full rounded-lg shadow-2xl p-10 sm:w-1/2">
                    <label className="text-black py-2 w-3/4 text-right font-sans">اسم المستخدم </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                    />

                    <label className="text-black py-2 w-3/4 text-right font-sans"> البريد الالكتروني</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                    />

                    <label className="text-black py-2 w-3/4 text-right font-sans"> رقم التليفون </label>
                    <input
                        type="tel"
                        name="phonenumber"
                        placeholder="Phone Number"
                        required
                        className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                    />

                    <label className="text-black py-2 w-3/4 text-right font-sans">  الدولة </label>
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        required
                        className="mb-4 w-3/4 text-black rounded-md border border-gray-300 px-2 py-2 text-left text-sm"
                    />

                    <label className="text-black py-2 w-3/4 text-right font-sans">كلمة المرور</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="w-3/4 rounded-md text-black border border-gray-300 px-2 py-2 text-left text-sm"
                    />

                    <label className="text-black py-2 w-3/4 text-right font-sans">تأكيد كلمة المرور </label>
                    <input
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        required
                        className="w-3/4 rounded-md text-black border border-gray-300 px-2 py-2 text-left text-sm"
                    />
                    <button type="submit" className="inline-flex font-sans items-center px-4 mt-10 py-2 bg-blue-500 hover:bg-blue-700 text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:bg-red">
                        انشاء حساب
                    </button>
                </form>
            </div>

        </div>
    )
}