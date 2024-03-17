"use client"; // This is a client component 👈🏽
import AboutUsPage from "../pages/aboutuspage";
import { RecoilRoot } from "recoil";

export default function AboutUs() {
    return (
        <RecoilRoot>
            <AboutUsPage />
        </RecoilRoot>

    );
}
