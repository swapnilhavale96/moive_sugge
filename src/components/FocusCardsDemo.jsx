import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FocusCards } from "./ui/focus-cards";
import { fetchPoster } from "../lib/tmdbAPI";

export function FocusCardsDemo({ results }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      const updatedCards = await Promise.all(
        results.map(async (result, index) => {
          const posterUrl = await fetchPoster(result.tmdb_id);
          return {
            title: result.name || `Movie ${index + 1}`,
            src: posterUrl || "https://via.placeholder.com/150",
            imdb_id: result.imdb_id,
          };
        })
      );
      setCards(updatedCards);
    };

    fetchPosters();
  }, [results]);

  return (
    <>
      <Link to={`/video-player?imdbID=${cards[0]?.imdb_id || ""}`}>
        <FocusCards cards={cards} />
      </Link>
    </>
  );
}
