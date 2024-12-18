"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundBeams } from "./ui/background-beams";
import { NavbarDemo } from "./NavbarDemo";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function HomePage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(""); // State to store input value
  const placeholders = ["Search movies/series/anime..."];

  const handleChange = (e) => {
    setSearchInput(e.target.value); // Update state with input value
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted:", searchInput);
    navigate("/search-result", { state: { query: searchInput } }); // Pass the input as a prop
  };

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <>
      <div className="h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-auto">
        <NavbarDemo />
        <div className="max-w-2xl mx-auto p-6">
          <br />
          <br />
          <br />
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            StreamScape
          </h1>
          <br></br>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to StreamScape. <br />
            "Enter a world where stories never end.
            <br /> From classics to the latest hits, find your escape here."
          </p>
          <br></br>
          <div className="flex flex-col justify-center items-center px-4">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
        <InfiniteMovingCardsDemo />
        <BackgroundBeams />
      </div>
    </>
  );
}
