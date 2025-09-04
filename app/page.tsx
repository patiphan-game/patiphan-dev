"use client";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ActivitySection from "@/components/sections/ActivitySection/ActivitySection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import EducationSection from "@/components/sections/ExperienceSection/ExperienceSection";
import ExperienceSection from "@/components/sections/ExperienceSection/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection/ProjectSection";
import SkillSection from "@/components/sections/SkillSection/SkillSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to the top on page load
    }, 100); // Delay of 100ms
  }, []);
  return (
    <div className="mx-auto flex flex-col gap-24 sm:max-w-2xl md:gap-32 lg:max-w-5xl">
      <section id="about" className="section">
        <AboutSection />
      </section>
      <SkillSection />
      <section id="experience" className="section">
        <ExperienceSection />
      </section>
      <section id="project" className="section">
        <ProjectSection />
      </section>
      <section id="activity" className="section">
        <ActivitySection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
