"use client"; // This is a client component 👈🏽
import LoginPage from "../pages/loginpage";
import { RecoilRoot } from "recoil";

export default function Login() {
    return (
        <RecoilRoot>
            <LoginPage />
        </RecoilRoot>

    );
}
