"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundBeams } from "./ui/background-beams";
import { NavbarDemo } from "./NavbarDemo";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function HomePage(props) {
  const navigate = useNavigate();
  const placeholders = ["Search movies/series/anime..."];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    navigate("/search-result");
  };

  const fetchData = async () => {};
  return (
    <>
      <NavbarDemo />
      <div className="h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-auto">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <div className="flex flex-col justify-center items-center px-4">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
