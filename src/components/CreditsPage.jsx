"use client";
import { NavbarDemo } from "./NavbarDemo";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import React from "react";

export function CreditsPage() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Aditya Jain",
      designation: "Student at MITWPU",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Atharv Chinchkar",
      designation: "Student at MITWPU",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <NavbarDemo />
      <div className="h-screen w-screen bg-neutral-950 p-5">
        <h2 className="py-20 text-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          About Us
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </>
  );
}
