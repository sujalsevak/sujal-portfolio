import dynamic from 'next/dynamic';

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
// import Grid from "@/components/Grid"; // <-- REMOVE or COMMENT OUT this line

import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const FloatingNav = dynamic(() => import('@/components/ui/FloatingNav').then(mod => mod.FloatingNav), { ssr: false });
// Dynamically import Grid as well
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid /> {/* This is now the dynamically loaded Grid component */}
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}