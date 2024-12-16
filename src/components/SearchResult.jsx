"use client";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavbarDemo } from "./NavbarDemo";
import { FocusCardsDemo } from "./FocusCardsDemo";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

export function SearchResult(props) {
  const location = useLocation();
  const query = location.state?.query || ""; // Get the input passed from HomePage

  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [seenUrls, setSeenUrls] = useState(new Set()); // Persist unique image URLs across fetches

  // Function to process and filter results
  const processResults = (data) => {
    const uniqueResults = [];

    data.forEach((item) => {
      // Skip results with "blank.gif" as image_url
      if (item.image_url === "https://cdn.watchmode.com/posters/blank.gif")
        return;

      // Skip duplicate image URLs
      if (!seenUrls.has(item.image_url)) {
        seenUrls.add(item.image_url); // Add to the seen set
        uniqueResults.push(item);
      }
    });

    return uniqueResults;
  };

  // Function to fetch data
  const fetchData = async () => {
    const url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${
      props.API
    }&search_value=${encodeURIComponent(query)}&search_type=2`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return;
      }
      const json = await response.json();
      console.log("API Response:", json);

      if (json.results) {
        const filteredResults = processResults(json.results);
        setResults((prev) => [...prev, ...filteredResults]); // Append filtered results
        setTotalResults(json.totalResults || filteredResults.length);
      } else {
        console.warn("No results in the API response");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <AuroraBackground>
        <NavbarDemo />
        <div className="h-screen w-screen relative flex flex-col items-center justify-center antialiased overflow-auto p-10">
          <div className="w-full h-full py-20">
            <h2 className="max-w-7xl mx-auto text-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
              Search Results for "{query}"
            </h2>
            <InfiniteScroll
              dataLength={results.length}
              next={fetchData}
              hasMore={results.length < totalResults}
              loader={
                <h4 className="text-center text-white">
                  Loading more results...
                </h4>
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
                <p className="text-center text-white mt-10 p-10">
                  No results found.
                </p>
              )}
            </InfiniteScroll>
          </div>
        </div>
      </AuroraBackground>
    </>
  );
}
