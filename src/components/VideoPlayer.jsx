"use client";
import { NavbarDemo } from "./NavbarDemo";
import React, { useEffect, useState } from "react";
import { WavyBackground } from "./ui/wavy-background";

export function VideoPlayer() {
  const [embedUrl, setEmbedUrl] = useState("");
  const [season, setSeason] = useState(""); // State for season input
  const [episode, setEpisode] = useState(""); // State for episode input
  const [type, setType] = useState(""); // Holds the type (movie/tv_series)

  // Extract imdbID from the query parameters
  const getImdbID = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      // console.log("imdbID:", params.get("imdbID"));
      return params.get("imdbID");
    }
    return null;
  };

  const getType = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      // console.log("type:", params.get("type"));
      return params.get("type");
    }
    return null;
  };

  useEffect(() => {
    const imdbID = getImdbID();
    const fetchedType = getType();
    setType(fetchedType); // Set the type (movie or tv_series)

    if (imdbID) {
      if (fetchedType === "movie") {
        console.log("This is a movie link");
        setEmbedUrl(`https://vidsrc.xyz/embed/movie?imdb=${imdbID}&ds_lang=en`);
      } else if (fetchedType === "tv_series") {
        // Default : season 1 and episode 1
        console.log("This is a TV series link");
        setEmbedUrl(
          `https://vidsrc.xyz/embed/tv?imdb=${imdbID}&season=1&episode=1&ds_lang=en`
        );
      }
    }
  }, []);

  const buildEmbedUrl = () => {
    const imdbID = getImdbID();
    if (type === "tv_series" && imdbID && season && episode) {
      const newEmbedUrl = `https://vidsrc.xyz/embed/tv?imdb=${imdbID}&season=${season}&episode=${episode}&ds_lang=en`;
      console.log("New Embed URL:", newEmbedUrl);
      setEmbedUrl(newEmbedUrl);
    } else {
      alert("Please enter both season and episode numbers.");
    }
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <WavyBackground className="absolute inset-0">
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-4">
            <div className="w-full max-w-5xl mx-auto">
              <div
                className="relative mb-4"
                style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio
              >
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

            {/* Show input fields ONLY for TV series */}
            {type === "tv_series" && (
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  placeholder="Season"
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="p-2 border bg-slate-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Episode"
                  value={episode}
                  onChange={(e) => setEpisode(e.target.value)}
                  className=" p-2 border bg-slate-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
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
    </>
  );
}
