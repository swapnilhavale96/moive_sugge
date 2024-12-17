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
      src: "/src/assets/Aditya.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Atharv Chinchkar",
      designation: "Student at MITWPU",
      src: "/src/assets/Atharv.jpg",
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
