/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";

export default function ExperienceSection() {
  return (
    <div className="mx-5 lg:mx-0">
        <div className="flex mx-5 md:mx-0 flex-col ">
          <h2 className="mb-2 rounded-xl text-2xl font-semibold md:text-3xl">
          Experience
          </h2>
          <p className="mb-8 md:mb-10  text-sm md:text-base">
          <span className="text-xl text-sky-500">●</span> A summary of my professional roles and the impact I’ve made.
          </p>
        </div>
      <div className="flex w-full flex-col gap-6 rounded-xl p-6 shadow-xl dark:shadow-slate-900">
        {/* image div */}
        <div className="flex items-center justify-between">
          <img
            src="/skooldio-white.webp"
            className="w-44 py-[2px] dark:hidden"
          ></img>
          <img
            src="/skooldio-dark.webp"
            className="hidden w-44 dark:block"
          ></img>
          <Button className="hidden font-semibold text-slate-100 transition duration-200 hover:scale-105 dark:text-black sm:flex">
            <a
              className="mr-3"
              target="blank"
              href="https://www.skooldio.com/certificate/19fbeea7-ce4f-4b57-a7c6-99e91d7d89ee"
            >
              Credential
            </a>
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-400 dark:text-yellow-500"
            >
              <path d="M18 9A6 6 0 1 1 6 9a6 6 0 0 1 12 0" />
              <path d="m8 13.472-1 6.44c0 .81 1.782 1.336 2.447.974l2.106-1.147a.927.927 0 0 1 .894 0l2.106 1.147c.665.362 2.447-.165 2.447-.975l-1-6.439" />
            </svg>
          </Button>
        </div>
        <div>
          {" "}
          <p className="font-semibold">
            Skooldio Web Development Bootcamp (Full Scholarship)
          </p>
          <p className="text-sm text-muted-foreground">Dec 2023 - Match 2024</p>
        </div>

        <ul className="list-disc space-y-2 pl-5 dark:text-slate-300">
          <li className="text-sm">
            Learned fundamental web technologies including HTML, CSS, and modern
            JavaScript (ES6), enabling proficiency in frontend development.
          </li>
          <li className="text-sm">
            Acquired expertise in building dynamic user interfaces with React
            JSX, including advanced component architecture and state management
            with React Hooks
          </li>
          <li className="text-sm">
            Utilized Tailwind CSS for efficient and responsive styling,
            improving design aesthetics and development workflow.
          </li>
          <li className="text-sm">
            Implemented Firebase for frontend-backend integration, creating a
            register system and storing data in Cloud Firestore.
          </li>
        </ul>
        <Button className="mt-2 transition duration-200 hover:scale-105 sm:hidden">
          <a
            className="mr-3"
            target="blank"
            href="https://www.skooldio.com/certificate/19fbeea7-ce4f-4b57-a7c6-99e91d7d89ee"
          >
            Credential
          </a>
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-400 dark:text-yellow-500"
          >
            <path d="M18 9A6 6 0 1 1 6 9a6 6 0 0 1 12 0" />
            <path d="m8 13.472-1 6.44c0 .81 1.782 1.336 2.447.974l2.106-1.147a.927.927 0 0 1 .894 0l2.106 1.147c.665.362 2.447-.165 2.447-.975l-1-6.439" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
