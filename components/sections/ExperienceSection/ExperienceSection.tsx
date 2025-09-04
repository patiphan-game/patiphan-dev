import { CalendarDays, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/components/animation/useScrollAnimation";
import { TextAnimate } from "@/components/animation/textAnimation";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Engineer (Intern)",
    company: "Skooldio",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
    description: [
      "Built fullstack features for a monorepo project using React, Nest.js, and GraphQL.",
      "Applied Domain-Driven Design to deliver real-world use cases.",
      "Deployed and monitored services with GCP Cloud Build and Cloud Run.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Apollo Client",
      "Nest.js",
      "GraphQL",
      "GCP",
    ],
    links: [{ label: "Skooldio.com", url: "https://skooldio.com" }],
  },
  {
    title: "Software Engineer (Part-Time)",
    company: "Center of Specialty Innovation, Bangkok University",
    period: "Oct 2024 – Jan 2025",
    location: "Remote",
    description: [
      "Developed a stroke patient website with Next.js and React Context API.",
      "Implemented JWT authentication and RESTful APIs with Express and PostgreSQL.",
      "Ensured smooth data flow and high code quality in collaboration with senior engineers.",
    ],
    technologies: ["Next.js", "TypeScript", "Express", "PostgreSQL", "JWT"],
    links: [{ label: "Cosi.bu.ac.th", url: "https://cosi.bu.ac.th" }],
  },
];

//

function ExperienceSection() {
  const { ref, controls } = useScrollAnimation();
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-5 flex flex-col justify-center lg:mx-0">
        <div className="mx-5 flex flex-col md:mx-0">
          <TextAnimate text="Professional Experience" type="fadeIn" />
          <p className="mb-8 text-sm md:mb-10 md:text-base">
            <span className="text-xl text-sky-500">●</span> A summary of my
            professional roles and the things I’ve made.
          </p>
        </div>
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 h-full w-[1px] transform bg-black dark:bg-slate-200"></div>

              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="mb-10 flex w-full items-start justify-start"
                >
                  {/* Timeline spacer */}
                  <div className="order-1 hidden w-5/12"></div>

                  {/* Icon */}
                  <div className="z-20 order-1 mr-4 mt-24 flex h-8 w-10 items-center rounded-full bg-gray-800 shadow-xl dark:bg-slate-100 sm:w-9">
                    <div className="relative flex h-full w-full items-center justify-center">
                      <Briefcase
                        size={18}
                        className={
                          idx === 0
                            ? "spin text-sky-500 dark:text-sky-600"
                            : "text-white dark:text-black"
                        }
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="order-1 w-full rounded-lg bg-white px-6 py-5 shadow-md transition hover:shadow-lg dark:bg-[#030711] dark:shadow-xl dark:shadow-slate-900">
                    <h3 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">
                      {exp.title}
                    </h3>
                    <h4 className="mb-2 text-sm font-semibold text-gray-600 dark:text-slate-300">
                      {exp.company}
                    </h4>
                    <div className="mb-3 flex flex-wrap gap-4 text-xs text-gray-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                      {exp.links && exp.links.length > 0 && (
                        <span className="flex items-center gap-1">
                          {exp.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sky-500 underline hover:text-sky-700"
                            >
                              {link.label}
                            </a>
                          ))}
                        </span>
                      )}
                    </div>
                    <ul className="mb-3 list-disc space-y-1 pl-5">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm leading-snug dark:text-slate-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={`${idx}-${techIndex}`}
                          variant="outline"
                          className="px-2 py-0.5 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
export default ExperienceSection;
