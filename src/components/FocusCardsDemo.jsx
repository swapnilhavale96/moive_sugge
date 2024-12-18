import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FocusCards } from "./ui/focus-cards";
import { fetchPoster } from "../lib/tmdbAPI";
import { TracingBeam } from "./ui/tracing-beam";

export function FocusCardsDemo({ results }) {
  const [cards, setCards] = useState([]);
  // const [imdb, setImdb] = useState([]);
  // const [type, setType] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      const updatedCards = await Promise.all(
        results.map(async (result, index) => {
          const posterUrl = await fetchPoster(result.tmdb_type, result.tmdb_id);
          console.log(
            "results: ",
            result.name,
            posterUrl,
            result.imdb_id,
            result.type,
            result.plot_overview
          );
          return {
            title: result.name || `Movie ${index + 1}`,
            src: posterUrl || "https://via.placeholder.com/150",
            imdb_id: result.imdb_id,
            type: result.type,
            plot_overview: result.plot_overview,
          };
        })
      );
      setCards(updatedCards);
      // setImdb(results.imdb_id);
      // setType(results.type);
    };

    fetchPosters();
  }, [results]);

  return (
    <>   
        <FocusCards cards={cards} />
    </>
  );
}
