import { GraduationCap } from "lucide-react";

function EducationSection() {
  return (
    <div className="mx-5 my-20 flex justify-center lg:mx-0">
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 h-full w-0.5 transform bg-black dark:bg-slate-200 lg:left-1/2 lg:-translate-x-1/2"></div>

            {/* Education Item 1 - Right side on lg screens, left on small */}
            <div className="mb-8 flex w-full items-start justify-start lg:flex-row-reverse lg:items-center lg:justify-between">
              <div className="order-1 hidden w-5/12 lg:block"></div>
              <div className="z-20 order-1 mr-4 mt-14 flex h-8 w-10 items-center rounded-full dark:bg-slate-100 bg-gray-800 shadow-xl sm:w-9 lg:mr-0 lg:mt-0 lg:w-8">
                <div className="relative">
                  <h3 className="mx-auto text-lg ml-[6px] font-semibold text-white">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-green-500"
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
              <div className="order-1 w-full rounded-lg bg-white dark:bg-[#030711] dark:shadow-slate-900 dark:shadow-xl px-6 py-4 shadow-lg lg:w-5/12">
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
                Relevent Coursework : Data Stucture, Object Oriented Programming, Software Engineering
                </p>
              </div>
            </div>

            {/* Education Item 2 - Left side on all screens */}
            <div className=" flex w-full flex-row items-start justify-start lg:items-center lg:justify-between">
              <div className="order-1 hidden w-5/12 lg:block"></div>
              <div className="z-20 order-1 mr-4 mt-14 flex h-8 w-10 items-center rounded-full dark:bg-slate-100 bg-gray-800 shadow-xl sm:w-9 lg:mr-0 lg:mt-0 lg:w-8">
                <h3 className="mx-auto text-lg font-semibold text-white">
                  <GraduationCap size={18} className="dark:text-black" />
                </h3>
              </div>
              <div className="order-1 w-full rounded-lg bg-white dark:bg-[#030711] dark:shadow-slate-900 dark:shadow-xl px-6 py-4 shadow-lg lg:w-5/12">
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
                Lay the foundation of mathematical skills and enhancing logical for me!
                </p>
              </div>
            </div>

            {/* You can add more education items following the same pattern, alternating between the two structures above */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationSection;
