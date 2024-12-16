"use client";
import React, { useState, useEffect } from "react";
import { NavbarDemo } from "./NavbarDemo";
import { FocusCardsDemo } from "./FocusCardsDemo";
import InfiniteScroll from "react-infinite-scroll-component";

export function SearchResult({ API }) {
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true); // Track if more results can be fetched
  const [seenImageUrls, setSeenImageUrls] = useState(new Set()); // Track seen image URLs to filter duplicates

  const fetchData = async () => {
    const url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${API}&search_value=Breaking%20bad&search_type=1`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return;
      }
      const json = await response.json();

      if (json.results) {
        const newResults = json.results.filter((result) => {
          // Skip result if image_url is "https://cdn.watchmode.com/posters/blank.gif"
          if (
            result.image_url === "https://cdn.watchmode.com/posters/blank.gif"
          ) {
            return false;
          }

          // Skip duplicate image_urls
          if (seenImageUrls.has(result.image_url)) {
            return false;
          }

          // Mark image_url as seen
          seenImageUrls.add(result.image_url);

          return true; // Keep the result
        });

        setResults((prev) => [...prev, ...newResults]); // Append new results
        setTotalResults(json.totalResults || newResults.length);

        // If all results are loaded, stop fetching
        if (results.length + newResults.length >= json.totalResults) {
          setHasMore(false);
        }
      } else {
        console.warn("No results found in the API response.");
        setHasMore(false); // No more results
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setHasMore(false); // Stop infinite scroll on error
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch on component mount
  }, []);

  return (
    <div className="h-screen w-screen bg-neutral-950 flex flex-col items-center justify-center antialiased overflow-auto">
      <div className="p-4">
        <NavbarDemo />
      </div>
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
          Search Results
        </h2>
        <InfiniteScroll
          dataLength={results.length}
          next={fetchData}
          hasMore={hasMore} // Controlled by the state
          loader={
            <h4 className="text-center text-white">Loading more results...</h4>
          }
          endMessage={
            <p className="text-center text-white mt-10">
              You have seen all the results!
            </p>
          }
        >
          {results.length > 0 ? (
            results.map((element, index) => (
              <div className="p-10" key={index}>
                <FocusCardsDemo
                  title={
                    typeof element.name === "string"
                      ? element.name
                      : "Unknown Title"
                  }
                  imgUrl={
                    typeof element.image_url === "string"
                      ? element.image_url
                      : ""
                  }
                />
              </div>
            ))
          ) : (
            <p className="text-center text-white mt-10">No results found.</p>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
}
