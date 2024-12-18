"use client";
import { NavbarDemo } from "./NavbarDemo";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import React from "react";

export function CreditsPage() {
  const testimonials = [
    {
      quote:
        "I enjoy tackling complex challenges across web development. With experience in MERN stack, I dive into projects always pushing my limits. Whether it's building intelligent solutions or optimizing data flows, I'm constantly seeking growth and innovative ways to advance my skills.",
      name: "Aditya Jain",
      designation: "Student at MITWPU",
      src: "/src/assets/Aditya.png",
      instagram: "https://www.instagram.com/theadityajain_",
      linkedin: "https://www.linkedin.com/in/Theadityajain2010",
      github: "https://github.com/TheAdityaJain",
    },
    {
      quote:
        "I love turning ideas into reality and making life just a bit easier, one line of code at a time. Leveraging my experience in Python, Full-Stack Development and IoT, I built this website to offer entertainment without the hassle.",
      name: "Atharv Chinchkar",
      designation: "Student at MITWPU",
      src: "/src/assets/Atharv.png",
      instagram: "https://www.instagram.com/atharvchinckar",
      linkedin: "https://www.linkedin.com/in/atharvchinckar",
      github: "https://github.com/atharvchinckar",
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
