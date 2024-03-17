"use client"; // This is a client component 👈🏽
import PaymentMethodsPage from "../pages/paymentmethodspage";
import { RecoilRoot } from "recoil";

export default function PaymentMethods() {
    return (
        <RecoilRoot>
            <PaymentMethodsPage />
        </RecoilRoot>

    );
}
