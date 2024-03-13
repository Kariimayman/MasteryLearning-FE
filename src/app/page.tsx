"use client"; // This is a client component 👈🏽
import Homepage from "./pages/homepage";
import { RecoilRoot } from 'recoil';
export default function Home() {
  return (
    <RecoilRoot>
      <Homepage/>
    </RecoilRoot>
  );
}
