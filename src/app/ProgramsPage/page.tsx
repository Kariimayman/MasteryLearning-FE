"use client"; // This is a client component 👈🏽

import ProgramsPage from "../pages/programspage";
import { RecoilRoot, useRecoilState } from "recoil";

export default function Programs() {

    return (
        <RecoilRoot>
            <ProgramsPage />
        </RecoilRoot>
    );
}
