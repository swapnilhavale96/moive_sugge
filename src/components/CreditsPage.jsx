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
        "I enjoy exploring new ideas and challenges. With a knack for problem-solving, I dive into projects that push my limits and spark my curiosity. Whether it's coding, or experimenting with creative solutions, I’m always looking for ways to grow and improve.",
      name: "Aditya Jain",
      designation: "Student at MITWPU",
      src: "/src/assets/Aditya.jpg",
    },
    {
      quote:
        "I love turning ideas into reality and making life just a bit easier, one line of code at a time. Leveraging my exprience in Python, Full-Stack Development and IoT, I built this website to offer entertainment without the hassle.",
      name: "Atharv Chinchkar",
      designation: "Student at MITWPU",
      src: "/src/assets/Atharv.jpg",
    },
  ];
  return (
    <>
      <NavbarDemo />
      <div className="h-screen w-screen bg-neutral-950 p-5">
        <br></br>
        <h2
          className="py-10 text-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans"
          style={{ paddingTop: "8vh" }}
        >
          Meet the Creators
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "10vw",
            paddingRight: "10vw",
          }}
        >
          <p style={{ color: "whitesmoke", textAlign: "center" }}>
            [Your Website Name] offers a wide selection of movies, series, and
            anime. Watch your favorite content on any device, anytime. Whether
            it's the latest releases, timeless classics, or anime, there's
            something for everyone.
          </p>
        </div>
        <br></br>
        <br></br>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </>
  );
}
