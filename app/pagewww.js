import Hero from '@/components/hero';
import JobSection from '@/components/jobSection';
import Navbar from '@/components/navbar';





export default function Home({jobs}) {
console.log(jobs)
  return (
    <main className="bg-gray-100 h-screen w-screen flex flex-col gap-4 items-center">
      <Navbar/>
     <Hero/>
     <JobSection/>
    </main>
  )
}
