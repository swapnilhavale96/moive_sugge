"use client";
import React from 'react'
import { NavbarDemo } from './NavbarDemo'
import { FocusCardsDemo } from './FocusCardsDemo'

export function SearchResult() {
  return (
    <>
    <div
        className="h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-auto p-10"
      >
        <NavbarDemo/>
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl relative left-50 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Search Results
            </h2>
        <div className="p-10">
            <FocusCardsDemo/>
        </div>
        </div> 
    </div>

    
    </>
  )
}