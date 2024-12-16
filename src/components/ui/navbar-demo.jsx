"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Use Link for navigation

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
