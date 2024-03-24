"use client"; // This is a client component 👈🏽
import AdminHomePage from "../pages/adminhomepage";
import { RecoilRoot } from "recoil";

export default function AdminHome() {
    return (
        <RecoilRoot>
            <AdminHomePage />
        </RecoilRoot>

    );
}
