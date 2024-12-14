/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/components/animation/useScrollAnimation";

import Card from "./Card";
import { TextAnimate } from "@/components/animation/textAnimation";

function ProjectSection() {
  const { ref, controls } = useScrollAnimation();
  const cardData = [
    {
      imageSrc: "../modal-image/wdb.webp",
      title: "WBD Clothing Co.",
      description:
        "In this project, I gained collaborative web development experience focusing on React.js, utilizing Vite for prototyping. My primary responsibility was on the product detail page, managing API interactions and implementing dynamic data display with state management. Tailwind CSS facilitated responsive styling, Using postman for API testing, and deployment was achieved through Vercel.",
      modalImageSrc: "../preview-image/wdb.webp",
      skills: ["React", "Tailwind", "daisyUI"],
      url: "https://wdb-project.vercel.app/",
    },
    {
      imageSrc: "../modal-image/patiphan-dev.webp",
      title: "Patiphan.dev",
      description:
        "This is my portfolio website demonstrates my expertise in front-end development, utilizing Next.js and ShadCN for seamless design and efficient styling. The site is built to be fully responsive, providing an optimal user experience across all devices, from mobile phones to desktops. It features a clean and intuitive interface, enhanced by smooth animations and modern UI components, ensuring accessibility and ease of navigation. ",
      modalImageSrc: "../preview-image/patiphan-dev.webp",
      skills: ["Next.js", "Typescript", "ShadCN", "Framer.js"],
      url: " ",
    },
    {
      imageSrc: "../modal-image/bewell.webp",
      title: "BeWell Buddies",
      description:
        "Bewell Buddy is a health improvement web app built with React and Firebase, Firebase is extensively integrated for user authentication, registration, and secure management of user data.Error handling is implemented for password validation during registration and login to ensure robust security. Additionally, user weight data is visualized using Chart.js, providing clear graphical representation of progress over time. Although the app isn't fully responsive yet, the core functionality is in place and optimized for desktop usage",
      modalImageSrc: "../preview-image/bewell.webp",
      skills: ["React","Firebase", "Tailwind", "daisyUI"],
      url: "https://bewell-buddies.vercel.app/",
    },
  ];
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-5 lg:mx-0">
        <div className="mx-5 flex flex-col md:mx-0">
          <TextAnimate text="Projects Portfolio" type="fadeIn" />
          <p className="mb-8 text-sm md:mb-10 md:text-base">
            <span className="text-xl text-sky-500">●</span> A collection of
            projects I’ve worked on, highlighting features, and technologies
            used.
          </p>
        </div>
        <div className="grid gap-5 lg:mx-0 lg:grid-cols-2 lg:gap-8">
          {cardData.map((data, index) => (
            <Card
              key={index}
              imageSrc={data.imageSrc}
              title={data.title}
              description={data.description}
              modalImageSrc={data.modalImageSrc}
              skills={data.skills}
              url={data.url}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectSection;
