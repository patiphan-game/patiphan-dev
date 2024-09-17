/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/components/animation/useScrollAnimation";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

import Card from "./Card";

function ProjectSection() {
  const { ref, controls } = useScrollAnimation();
  const cardData = [
    {
      imageSrc: "../demoweb/1.png",
      title: "Nintendo",
      description:
        "Are you a creative professional seeking a platform to showcase your unique talents and captivate a global audience? Look no further! Our innovative online platform provides the perfect space to exhibit your work, connect with potential clients, and establish yourself as a leading authority in your field.",
      modalImageSrc: "../modalpic/1.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
    {
      imageSrc: "../demoweb/2.png",
      title: "Amazon prime",
      description:
        "Do you need a visually stunning website that accurately represents your creative vision and leaves a lasting impression on visitors? Our team of skilled designers and developers specializes in crafting custom websites that not only showcase your work but also enhance your online presence and drive traffic to your digital portfolio.",
      modalImageSrc: "../modalpic/2.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
    {
      imageSrc: "../demoweb/3.png",
      title: "Materail UI",
      description:
        "Are you struggling to effectively market your creative services and reach your target audience? Our comprehensive marketing solutions offer a range of strategies, including social media management, SEO optimization, and content creation, to help you increase brand awareness, generate leads, and convert prospects into paying clients.",
      modalImageSrc: "../modalpic/2.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
    {
      imageSrc: "../demoweb/4.png",
      title: "Beartai",
      description:
        "Do you want to collaborate with like-minded creatives and build a supportive community of professionals? Our online platform fosters a collaborative environment where you can connect with talented individuals, share ideas, and learn from each other's experiences, helping you grow both personally and professionally.",
      modalImageSrc: "../modalpic/2.png",
      skills: ["Tailwind", "React", "Node.js"],
    },
    {
      imageSrc: "../demoweb/5.png",
      title: "Central Co",
      description:
        "Are you ready to take your creative career to the next level and achieve your professional goals? Our personalized mentorship program provides guidance, support, and industry insights to help you overcome challenges, unlock your full potential, and achieve lasting success in your creative endeavors.",
      modalImageSrc: "../modalpic/2.png",
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
      <div className="mx-5 grid gap-5 md:grid-cols-2 md:gap-8 lg:mx-0">
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

// {/* <div className="flex rounded-xl p-3 shadow-2xl transition duration-300 hover:scale-105">
// <img src="..\demoweb\1.png" className="rounded-xl"></img>
// <div className="my-2 ml-4 flex flex-col justify-between">
//   {/* Title of card */}
//   <div className="font-semibold md:text-lg">Nintendo</div>
//   {/* Description */}
//   <div className="line-clamp-4 text-[14px] md:text-base">
//     Are you a creative professional looking to showcase your work online
//     in a modern and professional way? Look no further! Our looking to
//     showcase you a creative Are you a creative professional
//   </div>
//   {/* Button */}
//   <Dialog>
//     <DialogTrigger asChild>
//       <Button className="mr-auto mt-1 flex rounded-lg border-[1px] border-gray-400 px-2 transition duration-300 hover:scale-110 hover:bg-black hover:text-white">
//         <div className="flex gap-2">
//           <p>More Detail</p>
//           <svg
//             width="24"
//             height="24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="m18 8 4 4m0 0-4 4m4-4H2" />
//           </svg>
//         </div>
//       </Button>
//     </DialogTrigger>
//     <DialogContent>
//       <DialogHeader>
//         <DialogTitle> </DialogTitle>
//         <DialogDescription asChild>
//           <div className="flex flex-col items-center gap-3">
//             <div className="m-2 overflow-hidden rounded-3xl shadow-2xl">
//               <img
//                 src="../modalpic/1.png"
//                 className="rounded-3xl transition duration-300 ease-in-out hover:scale-105"
//               ></img>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="mt-3 flex items-center gap-5">
//                 {/* Modal Title */}
//                 <p className="text-2xl font-extrabold transition duration-200 hover:scale-110">
//                   Nintendo
//                 </p>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="31"
//                   height="31"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   transform="rotate(180)"
//                   className="hover: group rounded-md transition hover:rotate-0"
//                 >
//                   <path d="M15 3h6v6" />
//                   <path d="M10 14 21 3" />
//                   <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                 </svg>
//               </div>
//             </div>
//             {/* Modal Detail */}
//             <p className="py-4 text-center md:text-[17px]">
//               Are you a creative professional looking to showcase your
//               work online in a modern and professional way? Look no
//               further! Our looking to showcase you a creative Are you a
//               creative professional
//             </p>
//             <div className="flex gap-7">
//               {/* Skill Section */}
//               <div className="rounded-xl border-2 border-black bg-black p-2 font-semibold text-gray-300">
//                 Tailwind
//               </div>
//               <div className="rounded-xl border-2 border-black bg-black p-2 font-semibold text-gray-300">
//                 React
//               </div>
//               <div className="rounded-xl border-2 border-black bg-black p-2 font-semibold text-gray-300">
//                 Node.js
//               </div>
//             </div>
//           </div>
//         </DialogDescription>
//       </DialogHeader>
//     </DialogContent>
//   </Dialog>
// </div>
// </div> */}
