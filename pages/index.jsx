import "../app/globals.css";
import Hero from "@/components/hero";
import JobSection from "@/components/jobSection";
import useJobsStore from "@/stores/jobStore";
import Navbar from "@/components/navbar";
import { getToken } from "@/apiCalls";
import { redirect } from "next/navigation";

export default function Home() {
  const authToken = getToken();

  return (
    <main className="bg-gray-100 h-screen w-screen flex flex-col gap-4 items-center">
      <Navbar />
      <Hero />
      <JobSection />
    </main>
  );
}
