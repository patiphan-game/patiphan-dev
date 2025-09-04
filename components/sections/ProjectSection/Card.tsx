/* eslint-disable @next/next/no-img-element */
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  modalImageSrc: string;
  skills: string[];
  url: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  modalImageSrc,
  skills,
  url,
}) => {
  return (
    <div className="flex gap-4 rounded-xl p-3 shadow-lg hover:shadow-xl transition duration-200 hover:scale-105 dark:shadow-xl dark:shadow-slate-900">
      <img
        src={imageSrc}
        className="h-[170px] w-[128px] rounded-xl"
        alt={title}
      />
      <div className="flex flex-col justify-between p-1">
        {/* Title of card */}
        <div className="font-semibold md:text-lg">{title}</div>
        {/* Description */}
        <div className="line-clamp-4 text-sm dark:text-slate-300">
          {description}
        </div>
        {/* Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="group flex h-7 w-32 rounded-lg border border-slate-50 bg-white transition duration-300 hover:scale-105 dark:border-slate-900 dark:bg-black dark:hover:bg-white">
              <div className="flex items-center gap-2">
                <p className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black">
                  More Detail
                </p>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                >
                  <path d="M18 8l4 4m0 0-4 4m4-4H2" />
                </svg>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                >
                  <path d="M6.92 6.956 5.45 5.473m9.309 1.483 1.47-1.483m-10.78 10.88 1.47-1.484m3.92-9.89V3m-5.88 7.913H3m13.875 5.923 3.814-1.506a.496.496 0 0 0 0-.921l-9.165-3.615a.492.492 0 0 0-.635.64l3.582 9.251c.162.42.75.42.912 0z" />
                </svg>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[550px] overflow-y-auto sm:max-h-none sm:overflow-auto">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription asChild>
                <div className="flex flex-col items-center gap-1 md:gap-3">
                  <div className="m-2 overflow-hidden rounded-3xl shadow-2xl dark:shadow-xl dark:shadow-slate-800">
                    <img
                      src={modalImageSrc}
                      className="rounded-3xl transition duration-300 ease-in-out hover:scale-105 sm:h-[310px] sm:w-[390px]"
                      alt={title}
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-5">
                    <a
                      href={url}
                      rel="noopener noreferrer"
                      title={title}
                      target="blank"
                    >
                      {" "}
                      <p className="text-xl font-extrabold transition duration-200 hover:scale-110 md:text-2xl">
                        {title}
                      </p>
                    </a>
                    <a
                      href={url}
                      rel="noopener noreferrer"
                      title={title}
                      target="blank"
                    >
                      <svg
                        width="30"
                        height="30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="rotate(180)"
                        className="hover: group transition hover:rotate-0"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1" />
                      </svg>
                    </a>
                  </div>
                  {/* Modal Detail */}
                  <p className="py-4 text-center dark:text-slate-300 md:text-base">
                    {description}
                  </p>
                  <div
                    className={`grid gap-6 ${
                      skills.length === 3 ? "grid-cols-3" : "grid-cols-2"
                    } md:flex`}
                  >
                    {/* Skill Section */}
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="rounded-xl bg-black p-2 px-3 text-white dark:bg-white dark:font-semibold dark:text-black"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Card;
