"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We use this scroll progress specifically for the overlay sections
  // The canvas internal logic uses its own scroll container calculation.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-[#121212] min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* 
        This is the 500vh container wrapping the canvas and overlay.
        Both the canvas and the overlay track the scroll progress of this container.
      */}
      <div ref={containerRef} className="relative w-full h-[500vh]">
        <ScrollyCanvas progress={scrollYProgress} />
        <Overlay progress={scrollYProgress} />
      </div>

      <Skills />
      <Projects />
    </main>
  );
}
