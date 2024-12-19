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
    const trimmedInput = searchInput.trim(); // Remove trailing spaces
    console.log("submitted:", trimmedInput);
    navigate("/search-result", { state: { query: trimmedInput } }); // Pass the trimmed input as a prop
  };

  return (
    <>
      <NavbarDemo />
      <div className="h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-auto">
        <div className="max-w-2xl mx-auto p-6">
          <br />
          <br />
          <br />
          <h1 className="relative z-10 text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            LumiFlix
          </h1>
          <p
            className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"
            style={{ fontSize: "15px", color: "gray", paddingBottom: "10px" }}
          >
            LumiFlix is your ultimate cinema destination. Whether you're craving
            blockbusters, classics, or hidden gems, we've got it all. With a
            vast collection of movies and series, LumiFlix offers a seamless
            streaming experience.Dive into endless entertainment, right at your
            fingertips.
          </p>
          <br></br>
          <div className="flex flex-col justify-center items-center px-3">
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
