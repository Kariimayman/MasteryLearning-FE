"use client"; // This is a client component 👈🏽

import CoursePage from "../pages/CoursePage";
import { RecoilRoot } from "recoil";

export default function Course() {
    return (
        <RecoilRoot>
            <CoursePage />
        </RecoilRoot>

    );
}
