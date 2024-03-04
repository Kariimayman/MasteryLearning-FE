"use client"; // This is a client component 👈🏽
import { useRouter } from 'next/navigation'
import Homepage from "./pages/homepage";
export default function Home() {
  const router = useRouter()
  return (
    <Homepage/>
  );
}
