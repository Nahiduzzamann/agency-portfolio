"use client";
import { useRef } from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import MissionVision from "@/components/MissionVision";
import Header from "@/components/ui/header";

export type handleClick = (sectionId: string) => void;

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleClick: handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header handleClick={handleClick} />
      <Hero />
      <div id="solutionservices" ref={sectionRef}>
        <Features />
      </div>

      <Zigzag />
      <Testimonials />
      <div id="missionVision" ref={sectionRef}>
        <MissionVision />
      </div>
      <div id="contact" ref={sectionRef}>
        <Newsletter />
      </div>
    </>
  );
}
