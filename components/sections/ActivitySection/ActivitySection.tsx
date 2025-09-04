import Expandable from "@/components/ui/expandable";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/components/animation/useScrollAnimation";
import { TextAnimate } from "@/components/animation/textAnimation";

function ActivitySection() {
  const { ref, controls } = useScrollAnimation();
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-5 lg:mx-0">
        <div className="mx-5 flex flex-col md:mx-0">
          <TextAnimate text="Extracurriculars" type="fadeIn" />
          <p className="mb-8 text-sm md:mb-10 md:text-base">
            <span className="text-xl text-sky-500">●</span> My activities beyond
            work, including hackathons, events, and contributions to the tech
            community.
          </p>
        </div>
        <Expandable className="storybook-fix flex w-full min-w-72 dark:shadow-xl dark:shadow-slate-700" />
      </div>
    </motion.section>
  );
}

export default ActivitySection;
