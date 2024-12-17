import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access query params
import { NavbarDemo } from "./NavbarDemo";

export function VideoPlayer() {
  const location = useLocation(); // Get the current location
  const searchParams = new URLSearchParams(location.search); // Parse the query string

  const imdbID = searchParams.get("imdbID"); // Get imdbID from the query string

  const [embedUrl, setEmbedUrl] = useState("");

  useEffect(() => {
    if (imdbID) {
      // Build the vidsrc embed URL using the imdbID
      setEmbedUrl(`https://vidsrc.icu/embed/movie/${imdbID}`);
    }
  }, [imdbID]);

  return (
    <div
      className="video-container"
      style={{ position: "relative", paddingTop: "56.25%" }}
    >
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Video Player"
          allow="fullscreen"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      ) : (
        <p className="text-center text-red-500">
          Invalid parameters. Cannot load video.
        </p>
      )}
    </div>
  );
}
