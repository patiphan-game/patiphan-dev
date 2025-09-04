// Frontend Logos
import Nextjs from "./SvgLogo/frontend/nextjs.svg";
import React from "./SvgLogo/frontend/react.svg";
import Tailwind from "./SvgLogo/frontend/tailwind.svg";
import TypeScript from "./SvgLogo/frontend/typescript.svg";

// Backend Logos
import Express from "./SvgLogo/backend/express.svg";
import NestJS from "./SvgLogo/backend/nestjs.svg";
import Golang from "./SvgLogo/backend/golang.svg";
import GraphQL from "./SvgLogo/backend/graphql.svg";

// Database Logos
import PostgreSQL from "./SvgLogo/database/postgresql.svg";
import Firebase from "./SvgLogo/database/firebase.svg";

// DevOps Logos
import Docker from "./SvgLogo/devops/docker.svg";
import Git from "./SvgLogo/devops/git.svg";

// Problem Solving Logos
import Cpp from "./SvgLogo/probsolve/cpp.svg";
import Python from "./SvgLogo/probsolve/python.svg";

import { motion } from "framer-motion";

function SkillSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
    >
      <div className="">
        {/* Mobile & Tablet */}
        <div className="text-sm lg:hidden">
          <div className="flex flex-col gap-14 sm:grid sm:grid-cols-2 sm:gap-x-0 sm:gap-y-14 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Front-end Development
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-flow-col">
                <div className="flex w-24 flex-col items-center gap-2">
                  <Nextjs className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Next.js</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <React className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">React</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Tailwind className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Tailwind</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <TypeScript className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Typescript</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Back-end Development
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-flow-col">
                <div className="flex w-24 flex-col items-center gap-2">
                  <NestJS className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">NestJS</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Express className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Express</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Golang className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Golang</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <GraphQL className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">GraphQL</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Database
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4">
                <div className="flex w-24 flex-col items-center gap-2">
                  <PostgreSQL className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">PostgreSQL</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Firebase className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Firebase</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Devops & Tools
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4">
                <div className="flex w-24 flex-col items-center gap-2">
                  <Docker className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Docker</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Git className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Git</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Problem Solving
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4">
                <div className="flex w-24 flex-col items-center gap-2">
                  <Cpp className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">C++</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Python className="transition-transform duration-200 hover:scale-125" />
                  <div className="dark:text-slate-300">Python</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden text-sm lg:mx-0 lg:flex lg:flex-col">
          <div className="relative flex justify-center border-b border-slate-400 pb-6 dark:border-slate-600">
            <div className="mr-20 flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Front-end Development
              </div>
              <div className="grid grid-cols-4 gap-4 dark:text-slate-300">
                <div className="flex w-24 flex-col items-center gap-2">
                  <Nextjs
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>Next.js</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <React
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>React</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200 hover:scale-125"
                  >
                    <g clipPath="url(#clip0_46_315)">
                      <path
                        d="M33.32 0H10.5825C5.04244 0 0.5513 4.6063 0.5513 10.2885V33.6089C0.5513 39.2911 5.04244 43.8974 10.5825 43.8974H33.32C38.8601 43.8974 43.3513 39.2911 43.3513 33.6089V10.2885C43.3513 4.6063 38.8601 0 33.32 0Z"
                        fill="#242938"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4278 18.8622C15.4308 14.7469 17.939 12.6891 21.9513 12.6891C27.97 12.6891 28.7224 17.3189 31.7317 18.0905C33.7382 18.6051 35.4935 17.8335 36.9981 15.7756C35.9952 19.8908 33.487 21.9487 29.4747 21.9487C23.456 21.9487 22.7036 17.3189 19.6943 16.5473C17.6878 16.0327 15.9325 16.8043 14.4278 18.8622ZM6.90442 28.1218C7.90739 24.0066 10.4155 21.9487 14.4278 21.9487C20.4466 21.9487 21.1989 26.5785 24.2083 27.3501C26.2147 27.8647 27.97 27.0931 29.4747 25.0352C28.4718 29.1504 25.9636 31.2083 21.9513 31.2083C15.9325 31.2083 15.1802 26.5785 12.1708 25.8069C10.1644 25.2923 8.40911 26.0639 6.90442 28.1218Z"
                        fill="url(#paint0_linear_46_315)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_46_315"
                        x1="15.013"
                        y1="12.6891"
                        x2="28.3317"
                        y2="31.4931"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#32B1C1" />
                        <stop offset="1" stopColor="#14C6B7" />
                      </linearGradient>
                      <clipPath id="clip0_46_315">
                        <rect
                          width="42.8"
                          height="43.8974"
                          fill="white"
                          transform="translate(0.5513)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>Tailwind</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <TypeScript
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>Typescript</div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-6 pl-20">
              <div className="text-lg font-semibold dark:text-slate-100">
                Back-end Development
              </div>
              <div className="grid grid-cols-4 gap-4 dark:text-slate-300">
                <div className="flex w-24 flex-col items-center gap-2">
                  <NestJS
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>NestJS</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Express
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>Express</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Golang
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>Golang</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <GraphQL
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>GraphQL</div>
                </div>
              </div>
              <div className="absolute left-0 top-5 h-3/4 border-l border-slate-400 dark:border-slate-600" />
            </div>
          </div>
          <div className="grid grid-cols-3 pt-6">
            <div className="flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Database
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4 dark:text-slate-300">
                <div className="flex w-24 flex-col items-center gap-2">
                  <PostgreSQL
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>PostgreSQL</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Firebase
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>Firebase</div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Devops & Tools
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4 dark:text-slate-300">
                <div className="flex w-24 flex-col items-center gap-2">
                  <Docker
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>Docker</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <Git
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>Git</div>
                </div>
                <div className="absolute left-0 top-5 h-3/4 border-l border-slate-400 dark:border-slate-600" />
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-6">
              <div className="text-lg font-semibold dark:text-slate-100">
                Problem Solving
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4 dark:text-slate-300">
                <div className="flex w-24 flex-col items-center gap-2">
                  <Cpp
                    style={{ width: "45px", height: "45px" }}
                    className="transition-transform duration-200 hover:scale-125"
                  />
                  <div>C++</div>
                </div>
                <div className="flex w-24 flex-col items-center gap-2">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 44 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200 hover:scale-125"
                  >
                    <g clipPath="url(#clip0_46_385)">
                      <path
                        d="M33.6661 0H10.9286C5.38854 0 0.8974 4.49114 0.8974 10.0312V32.7687C0.8974 38.3088 5.38854 42.8 10.9286 42.8H33.6661C39.2062 42.8 43.6974 38.3088 43.6974 32.7687V10.0312C43.6974 4.49114 39.2062 0 33.6661 0Z"
                        fill="#242938"
                      />
                      <path
                        d="M22.1769 4.84839C13.6884 4.84839 14.2184 8.52952 14.2184 8.52952L14.2279 12.3431H22.3283V13.4882H11.0105C11.0105 13.4882 5.57867 12.8721 5.57867 21.4371C5.57867 30.0021 10.3197 29.6984 10.3197 29.6984H13.1491V25.7239C13.1491 25.7239 12.9966 20.983 17.8144 20.983H25.8485C25.8485 20.983 30.3624 21.0559 30.3624 16.6204V9.28656C30.3624 9.28656 31.0477 4.84839 22.1769 4.84839ZM17.7103 7.41288C18.5163 7.41288 19.1677 8.06425 19.1677 8.87018C19.1677 9.67611 18.5163 10.3275 17.7103 10.3275C16.9044 10.3275 16.253 9.67611 16.253 8.87018C16.253 8.06425 16.9044 7.41288 17.7103 7.41288Z"
                        fill="url(#paint0_linear_46_385)"
                      />
                      <path
                        d="M22.4179 38.1117C30.9063 38.1117 30.3764 34.4308 30.3764 34.4308L30.3668 30.617H22.2664V29.472H33.5844C33.5844 29.472 39.0161 30.0881 39.0161 21.5231C39.0161 12.9581 34.2752 13.2618 34.2752 13.2618H31.4457V17.2364C31.4457 17.2364 31.5982 21.9773 26.7803 21.9773H18.7463C18.7463 21.9773 14.2324 21.9042 14.2324 26.3397V33.6736C14.2324 33.6736 13.547 38.1117 22.4179 38.1117ZM26.8845 35.5472C26.0785 35.5472 25.4271 34.8959 25.4271 34.09C25.4271 33.284 26.0785 32.6327 26.8845 32.6327C27.6903 32.6327 28.3419 33.284 28.3419 34.09C28.3419 34.8959 27.6903 35.5472 26.8845 35.5472Z"
                        fill="url(#paint1_linear_46_385)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_46_385"
                        x1="8.79202"
                        y1="7.84037"
                        x2="25.3625"
                        y2="24.2455"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#387EB8" />
                        <stop offset="1" stopColor="#366994" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_46_385"
                        x1="18.963"
                        y1="18.3748"
                        x2="36.7577"
                        y2="35.1966"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFE052" />
                        <stop offset="1" stopColor="#FFC331" />
                      </linearGradient>
                      <clipPath id="clip0_46_385">
                        <rect
                          width="42.8"
                          height="42.8"
                          fill="white"
                          transform="translate(0.8974)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>Python</div>
                </div>
                <div className="absolute left-0 top-5 h-3/4 border-l border-slate-400 dark:border-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default SkillSection;
