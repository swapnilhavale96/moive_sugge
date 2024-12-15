"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { FocusCardsDemo } from "./FocusCardsDemo"; // Import your FocusCards component

export function PlaceholdersAndVanishInputDemo() {
  const [showFocusCards, setShowFocusCards] = useState(false); // State to toggle FocusCards visibility

  const placeholders = ["Search movies/series/anime..."];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setShowFocusCards(true); // Show FocusCards on form submit
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {showFocusCards && <FocusCardsDemo />} {/* Conditionally render FocusCards */}
    </div>
  );
}
