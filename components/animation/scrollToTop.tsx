"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    const scrolledFromTop = window.scrollY;
    const totalPageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (totalPageHeight - (scrolledFromTop + viewportHeight) <= 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-28 right-0">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ x: 100 }}  // Start off-screen
            animate={{ x: 0 }}    // Slide in
            exit={{ x: 100 }}      // Slide out smoothly
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="rounded-s-lg border bg-slate-900 p-1.5 py-5 text-white shadow-lg
            dark:text-black dark:bg-slate-100"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m18 12-6-6-6 6m12 6-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
