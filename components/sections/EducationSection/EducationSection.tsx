import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/components/animation/useScrollAnimation";
import { TextAnimate } from "@/components/animation/textAnimation";

function EducationSection() {
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
        {/* | "fadeIn"
  | "fadeInUp"
  | "popIn"
  | "shiftInUp"
  | "rollIn"
  | "whipIn"
  | "whipInUp"
  | "calmInUp" */}
          <TextAnimate text="Academic Journey" type="fadeIn" />
          <p className="mb-8 text-sm md:mb-10 md:text-base">
            <span className="text-xl text-sky-500">●</span> An overview of my
            academic path, including degrees, certifications, and relevant
            coursework.
          </p>
        </div>
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 h-full w-0.5 transform bg-black dark:bg-slate-200"></div>

              {/* Education Item 1 - Right side on lg screens, left on small */}
              <div className="mb-8 flex w-full items-start justify-start">
                <div className="order-1 hidden w-5/12"></div>
                <div className="z-20 order-1 mr-4 mt-14 flex h-8 w-10 items-center rounded-full bg-gray-800 shadow-xl dark:bg-slate-100 sm:w-9">
                  <div className="relative">
                    <h3 className="mx-auto ml-[6px] text-lg font-semibold text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-sky-500"
                      >
                        <path d="M12.56 20.82a.964.964 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.592 7.592 0 0 1 12 3c2 0 3.919.785 5.333 2.181 5.181 5.116.056 12.196-4.773 15.64" />
                        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                      </svg>
                      <svg
                        className="absolute inset-0 ml-[3px] h-full w-full animate-ping text-green-500"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.56 20.82a.964.964 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.592 7.592 0 0 1 12 3c2 0 3.919.785 5.333 2.181 5.181 5.116.056 12.196-4.773 15.64" />
                        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                      </svg>
                    </h3>
                  </div>
                </div>
                <div className="order-1 w-full rounded-lg bg-white px-6 py-4 shadow-lg dark:bg-[#030711] dark:shadow-xl dark:shadow-slate-900">
                  <h3 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">
                    Bangkok University
                  </h3>
                  <h4 className="mb-2 text-sm font-semibold text-gray-600 dark:text-slate-300">
                    Technology and Innovation - Computer Science
                  </h4>
                  <time className="mb-2 block text-xs font-normal leading-none text-gray-500 dark:text-slate-400">
                    2022 - Present
                  </time>
                  <p className="text-sm leading-snug text-gray-700 dark:text-slate-300">
                    Relevent Coursework : Data Stucture, Object Oriented
                    Programming, Software Engineering
                  </p>
                </div>
              </div>

              {/* Education Item 2 - Left side on all screens */}
              <div className="flex w-full flex-row items-start justify-start">
                <div className="order-1 hidden w-5/12"></div>
                <div className="z-20 order-1 mr-4 mt-14 flex h-8 w-10 items-center rounded-full bg-gray-800 shadow-xl dark:bg-slate-100 sm:w-9">
                  <h3 className="mx-auto text-lg font-semibold text-white">
                    <GraduationCap size={18} className="dark:text-black" />
                  </h3>
                </div>
                <div className="order-1 w-full rounded-lg bg-white px-6 py-4 shadow-lg dark:bg-[#030711] dark:shadow-xl dark:shadow-slate-900">
                  <h3 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">
                    Debsirin Nonthaburi School
                  </h3>
                  <h4 className="mb-2 text-sm font-semibold text-gray-600 dark:text-slate-300">
                    Mathematic and English Program
                  </h4>
                  <time className="mb-2 block text-xs font-normal leading-none text-gray-500 dark:text-slate-400">
                    2018 - 2022
                  </time>
                  <p className="text-sm leading-snug text-gray-700 dark:text-slate-300">
                    Lay the foundation of mathematical skills and enhancing
                    logical for me!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
}

export default EducationSection;
