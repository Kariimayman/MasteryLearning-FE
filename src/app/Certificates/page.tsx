"use client"; // This is a client component 👈🏽

import CertificatesPage from "../pages/certificatespage";
import { RecoilRoot } from "recoil";

export default function Certificates() {
    return (
        <RecoilRoot>
            <CertificatesPage />
        </RecoilRoot>

    );
}
