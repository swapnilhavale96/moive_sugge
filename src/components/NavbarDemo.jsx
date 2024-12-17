"use client";
import React, { useState } from "react";
import { Menu } from "./ui/navbar-demo";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export function NavbarDemo() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" setActive={setActive} active={active} />
    </div>
  );
}

function Navbar({ className, setActive, active }) {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link
          to="/"
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          About
        </Link>
        <Link
          to="/video-player"
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          VideoPlayer
        </Link>
      </Menu>
    </div>
  );
}
