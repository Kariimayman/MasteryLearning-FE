"use client"; // This is a client component 👈🏽

import CheckOutPage from "../pages/checkoutpage";
import { RecoilRoot } from "recoil";

export default function CheckOut() {
    return (
        <RecoilRoot>
            <CheckOutPage />
        </RecoilRoot>

    );
}
