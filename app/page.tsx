"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

// Composants browser-only (lazy load, pas de SSR)
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const ProjectDesign = dynamic(
  () => import("@/components/ProjectDesign").then((mod) => mod.ProjectDesign),
  { ssr: false }
);

const TimelineExperience = dynamic(
  () =>
    import("@/components/TimelineExperience").then(
      (mod) => mod.TimelineExperience
    ),
  { ssr: false }
);

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });

// Composants pure UI / pas de DOM spécifique
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Education from "@/components/Education";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <ProjectDesign />
        <TimelineExperience />
        <RecentProjects />
        {/* <Clients /> */}
        <Education />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
