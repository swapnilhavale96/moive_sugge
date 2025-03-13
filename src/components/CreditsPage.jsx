"use client";
import { NavbarDemo } from "./NavbarDemo";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import React from "react";

export function CreditsPage() {
  const Shravani  = new URL("/Users/swapnilhavale/Desktop/shri/movie/src/assets/IMG_2432.jpeg", import.meta.url).href;
  const Rajlaxmi = new URL("//Users/swapnilhavale/Desktop/shri/movie/src/assets/raj.jpeg", import.meta.url).href;

  const testimonials = [
    {
      quote:
        "I enjoy tackling complex challenges across web development. With experience in MERN stack, I dive into projects always pushing my limits. Whether it's building intelligent solutions or optimizing data flows, I'm constantly seeking growth and innovative ways to advance my skills.",
      name: "Shravani Yadav",
      designation: "Student at MITWPU",
      src: Shravani ,
      instagram: "https://www.instagram.com/yshravani12",
      linkedin: "https://www.linkedin.com/in/shravani-yadav-a29955256/",
      github: "",
    },
    {
      quote:
        "I love turning ideas into reality and making life just a bit easier, one line of code at a time. Leveraging my experience in Python, Full-Stack Development and IoT, I built this website to offer entertainment without the hassle.",
      name: "Rajlaxmi Shelke",
      designation: "Student at MITWPU",
      src: Rajlaxmi,
      instagram: "https://www.instagram.com/rajlaxmishelke_/",
      linkedin: "https://www.linkedin.com/in/rajlaxmi-shelke-383b892b2/",
      github: "",
    },
  ];

  return (
    <>
      <NavbarDemo />
      <div className="min-h-screen w-full bg-neutral-950 p-5">
        <h2
          className="py-10 text-center text-4xl md:text-5xl font-bold text-neutral-200 font-sans"
          style={{ paddingTop: "10vh" }}
        >
          Meet the Creators
        </h2>
        <p className="text-neutral-300 text-center mb-12 max-w-3xl mx-auto">
          LumiFlix offers a wide selection of movies, series, and anime. Watch
          your favorite content on any device, anytime. Whether it's the latest
          releases, timeless classics, or anime, there's something for everyone.
        </p>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </>
  );
}
