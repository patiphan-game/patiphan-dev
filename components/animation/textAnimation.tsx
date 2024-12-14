"use client"

import React, { FC, useEffect, useRef } from "react";
import { HTMLMotionProps, motion, useAnimation, useInView } from "framer-motion";

type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "popIn"
  | "shiftInUp"
  | "rollIn"
  | "whipIn"
  | "whipInUp"
  | "calmInUp"

interface Props extends HTMLMotionProps<"div"> {
  text: string
  type?: AnimationType
  delay?: number
  duration?: number
}

interface Props extends HTMLMotionProps<"div"> {
  text: string
  type?: AnimationType
  highlight?: string // New prop to specify which word to highlight
  highlightClass?: string // New prop to specify the highlight class
  delay?: number
  duration?: number
}

const animationVariants = {
  fadeIn: {
    container: {
      hidden: { opacity: 0 },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.01, delayChildren: i * 0.01 },
      }),
    },
    child: {
      visible: {
        opacity: 1,
        y: [0, -10, 0],
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: { opacity: 0, y: 10 },
    },
  },
  fadeInUp: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
      },
    },
    child: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 20 },
    },
  },
  popIn: {
    container: {
      hidden: { scale: 0 },
      visible: {
        scale: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
      },
    },
    child: {
      visible: {
        opacity: 1,
        scale: 1.1,
        transition: { type: "spring", damping: 15, stiffness: 400 },
      },
      hidden: { opacity: 0, scale: 0 },
    },
  },
  calmInUp: {
    container: {
      hidden: {},
      visible: (i: number = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
      },
      visible: {
        y: 0,
        transition: {
          ease: [0.125, 0.92, 0.69, 0.975],
          duration: 0.75,
        },
      },
    },
  },
  shiftInUp: {
    container: {
      hidden: {},
      visible: (i: number = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "100%",
        transition: {
          ease: [0.75, 0, 0.25, 1],
          duration: 0.6,
        },
      },
      visible: {
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  },

  whipInUp: {
    container: {
      hidden: {},
      visible: (i: number = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 },
      },
      visible: {
        y: 0,
        transition: {
          ease: [0.5, -0.15, 0.25, 1.05],
          duration: 0.75,
        },
      },
    },
  },
  rollIn: {
    container: {
      hidden: {},
      visible: {},
    },
    child: {
      hidden: {
        opacity: 0,
        y: `0.25em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 0.65,
          ease: [0.65, 0, 0.75, 1],
        },
      },
    },
  },
  whipIn: {
    container: {
      hidden: {},
      visible: {},
    },
    child: {
      hidden: {
        opacity: 0,
        y: `0.35em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 0.45,
          ease: [0.85, 0.1, 0.9, 1.2],
        },
      },
    },
  },
}

const TextAnimate: FC<Props> = ({
  text,
  type = "whipInUp",
  highlight,
  highlightClass = "text-sky-500",
  ...props
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
    if (!isInView) {
      ctrls.start("hidden");
    }
  }, [ctrls, isInView]);

  const words = text.split(" ");

  const renderWord = (word: string, index: number) => {
    const isHighlighted = word.toLowerCase() === highlight?.toLowerCase();
    return (
      <span key={index} className={`inline-block ${isHighlighted ? highlightClass : ''}`}>
        {word.split("").map((letter, letterIndex) => (
          <motion.span
            key={letterIndex}
            variants={animationVariants[type].child}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
        {index < words.length - 1 && (
          <motion.span
            variants={animationVariants[type].child}
            className="inline-block"
          >
            &nbsp;
          </motion.span>
        )}
      </span>
    );
  };

  return (
    <motion.h2
      ref={ref}
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      role="heading"
      variants={animationVariants[type].container}
      initial="hidden"
      animate={ctrls}
      className="text-2xl mb-2 font-semibold md:text-3xl text-black dark:text-neutral-100"
      {...props}
    >
      {words.map((word, index) => renderWord(word, index))}
    </motion.h2>
  );
};

export { TextAnimate };