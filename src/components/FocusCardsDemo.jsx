import React from "react";
import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo({ title, imgUrl }) {
  const cards = [
    {
      title: title || "Title not available",
      src: imgUrl || "https://via.placeholder.com/150", // Fallback image
    },
  ];

  return <FocusCards cards={cards} />;
}
