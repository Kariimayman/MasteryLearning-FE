"use client"; // This is a client component 👈🏽
import SignUpPage from "../pages/signuppage";
import { RecoilRoot } from "recoil";

export default function SignUp() {
    return (
        <RecoilRoot>
            <SignUpPage />
        </RecoilRoot>

    );
}
