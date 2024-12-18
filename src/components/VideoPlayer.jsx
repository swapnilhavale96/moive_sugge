"use client";

import React, { useEffect, useState } from "react";
import { WavyBackground } from "./ui/wavy-background";
import { fetchTitleDetails } from "../lib/watchmodeAPI";
import { fetchTrailer } from "../lib/tmdbAPI";
import { TracingBeam } from "./ui/tracing-beam";

export function VideoPlayer() {
  const [embedUrl, setEmbedUrl] = useState("");
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState("");
  const [type, setType] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);
  const [opacity, setOpacity] = useState(0);

  // Extract IMDb ID and type from URL query parameters
  const getImdbID = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("imdbID");
    }
    return null;
  };

  const getType = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("type");
    }
    return null;
  };

  // Fetch movie details and embed URL on component mount
  useEffect(() => {
    const imdbID = getImdbID();
    const fetchedType = getType();
    setType(fetchedType);

    if (imdbID) {
      fetchTitleDetails(imdbID)
        .then((details) => {
          setMovieDetails(details);

          // Fetch trailer from TMDB
          if (details.tmdb_type && details.tmdb_id) {
            fetchTrailer(details.tmdb_type, details.tmdb_id).then(
              (trailerUrl) => {
                setMovieDetails((prevDetails) => ({
                  ...prevDetails,
                  trailer: trailerUrl || "Trailer not available",
                }));
              }
            );
          }
        })
        .catch((err) => {
          console.error("Error fetching movie details:", err);
        });

      if (fetchedType === "movie") {
        setEmbedUrl(`https://vidsrc.xyz/embed/movie?imdb=${imdbID}&ds_lang=en`);
      } else if (fetchedType === "tv_series") {
        setEmbedUrl(
          `https://vidsrc.xyz/embed/tv?imdb=${imdbID}&season=1&episode=1&ds_lang=en`
        );
      }
    }
  }, []);

  // Handle scroll to adjust backdrop opacity
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300; // Adjust for fade-in effect
      const newOpacity = Math.min(scrollTop / maxScroll, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build embed URL for TV series episodes
  const buildEmbedUrl = () => {
    const imdbID = getImdbID();
    if (type === "tv_series" && imdbID && season && episode) {
      const newEmbedUrl = `https://vidsrc.xyz/embed/tv?imdb=${imdbID}&season=${season}&episode=${episode}&ds_lang=en`;
      setEmbedUrl(newEmbedUrl);
    } else {
      alert("Please enter both season and episode numbers.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Video Player Section */}
        <div className="relative w-full h-screen">
          <WavyBackground className="absolute inset-0">
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-4">
              <div className="w-full max-w-5xl mx-auto">
                <div className="relative mb-4" style={{ paddingTop: "56.25%" }}>
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title="Video Player"
                      allow="fullscreen"
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                      style={{ border: "none" }}
                    ></iframe>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-center text-red-500 bg-black bg-opacity-50 rounded-lg">
                      Invalid parameters. Cannot load video.
                    </div>
                  )}
                </div>
              </div>

              {type === "tv_series" && (
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    placeholder="Season"
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="p-2 border bg-slate-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ color: "white" }}
                  />
                  <input
                    type="number"
                    placeholder="Episode"
                    value={episode}
                    onChange={(e) => setEpisode(e.target.value)}
                    className="p-2 border bg-slate-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ color: "white" }}
                  />
                  <button
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    onClick={buildEmbedUrl}
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Search
                    </span>
                  </button>
                </div>
              )}
            </div>
          </WavyBackground>
        </div>

        {/* Movie Details Section */}
        {movieDetails && (
          <div className="relative w-full py-12 bg-black text-white">
            <div className="relative z-10 max-w-5xl mx-auto px-4">
              {/* Title and Plot Overview */}
              <h1 className="text-3xl font-bold mb-4">{movieDetails.title}</h1>
              <br></br>
              <p className="mb-4 text-lg">{movieDetails.plot_overview}</p>

              {/* Release Date and Genres */}
              <br></br>
              <p className="mb-8 text-lg font-medium">
                <b>Released:</b> {movieDetails.release_date} | <b>Genres:</b>{" "}
                {movieDetails.genre_names?.join(", ")}
              </p>

              {/* Trailer */}
              {movieDetails?.trailer &&
              movieDetails.trailer !== "Trailer not available" ? (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Trailer</h2>
                  <a
                    href={movieDetails.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <img
                      src={
                        movieDetails.trailer_thumbnail ||
                        "default_thumbnail.jpg"
                      }
                      alt={`${movieDetails.title} Trailer Thumbnail`}
                      className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-white opacity-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4l12 6-12 6z" />
                      </svg>
                    </div>
                  </a>
                </div>
              ) : (
                <p className="text-gray-400">
                  Trailer not available for this title.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
