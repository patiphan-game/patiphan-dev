import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ActivitySection from "@/components/sections/ActivitySection/ActivitySection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16">
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ActivitySection />
      <ContactSection />
    </div>
  );
}
