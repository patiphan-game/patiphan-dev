/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/components/animation/useScrollAnimation";

import Card from "./Card";

function ProjectSection() {
  const { ref, controls } = useScrollAnimation();
  const cardData = [
    {
      imageSrc: "../modal-image/1.png",
      title: "Nintendo",
      description:
        "Are you a creative professional seeking a platform to showcase your unique talents and captivate a global audience? Look no further! Our innovative online platform provides the perfect space to exhibit your work, connect with potential clients, and establish yourself as a leading authority in your field.",
      modalImageSrc: "../preview-image/1.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
    {
      imageSrc: "../modal-image/2.png",
      title: "Amazon prime",
      description:
        "Do you need a visually stunning website that accurately represents your creative vision and leaves a lasting impression on visitors? Our team of skilled designers and developers specializes in crafting custom websites that not only showcase your work but also enhance your online presence and drive traffic to your digital portfolio.",
      modalImageSrc: "../preview-image/2.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
    {
      imageSrc: "../modal-image/3.png",
      title: "Materail UI",
      description:
        "Are you struggling to effectively market your creative services and reach your target audience? Our comprehensive marketing solutions offer a range of strategies, including social media management, SEO optimization, and content creation, to help you increase brand awareness, generate leads, and convert prospects into paying clients.",
      modalImageSrc: "../preview-image/3.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
    {
      imageSrc: "../modal-image/4.png",
      title: "Beartai",
      description:
        "Do you want to collaborate with like-minded creatives and build a supportive community of professionals? Our online platform fosters a collaborative environment where you can connect with talented individuals, share ideas, and learn from each other's experiences, helping you grow both personally and professionally.",
      modalImageSrc: "../preview-image/4.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
    {
      imageSrc: "../modal-image/5.png",
      title: "Central Co",
      description:
        "Are you ready to take your creative career to the next level and achieve your professional goals? Our personalized mentorship program provides guidance, support, and industry insights to help you overcome challenges, unlock your full potential, and achieve lasting success in your creative endeavors.",
      modalImageSrc: "../preview-image/5.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
  ];
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-5 grid gap-5 lg:grid-cols-2 lg:gap-8 lg:mx-0">
        {cardData.map((data, index) => (
          <Card
            key={index}
            imageSrc={data.imageSrc}
            title={data.title}
            description={data.description}
            modalImageSrc={data.modalImageSrc}
            skills={data.skills}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectSection;