"use client";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ActivitySection from "@/components/sections/ActivitySection/ActivitySection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import EducationSection from "@/components/sections/EducationSection/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection/ProjectSection";
import SkillSection from "@/components/sections/SkillSection/SkillSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load
  }, []);
  return (
    <div className="mx-auto flex flex-col gap-24 md:gap-32 sm:max-w-2xl lg:max-w-5xl">
      <AboutSection />
      <SkillSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <ActivitySection />
      <ContactSection />
    </div>
  );
}
