import AboutSection from "@/components/sections/AboutSection"
import ActivitySection from "@/components/sections/ActivitySection"
import ContactSection from "@/components/sections/ContactSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectSection from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <div className="flex max-w-5xl flex-col gap-16 mx-auto">
      <AboutSection/>
      <ExperienceSection/>
      <ProjectSection/>
      <ActivitySection/>
      <ContactSection/>
    </div>
  );
}