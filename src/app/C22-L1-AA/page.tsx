"use client";
import React, { useState } from "react";

const Page = () => {
  const [showSugg, setShowSugg] = useState(false);
  return (
    <div className="min-h-screen flex justify-start p-5 items-center flex-col gap-4 bg-[#F8FAFC]">
      <h2 className="min-h-[80px] text-center text-3xl font-bold text-black">
        Song of resilience
      </h2>

      <iframe
        width="600"
        height="300"
        className="rounded-lg"
        src="https://www.youtube.com/embed/82bVT9Byyuk?si=BNYLiK_jzy7nqxFu"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="text-xl">Listen to this song and share the words that show resilience.</h3>
      <textarea
        className="min-h-[80px]  min-w-[500px]  outline-none border border-black rounded-lg text-center p-3"
        placeholder="write here..."
      />
      {!showSugg ? (
        <button
          onClick={() => setShowSugg(true)}
          className={`text-white bg-violet-900 px-5 py-2 rounded-lg 
          cursor-pointer
           `}
        >
          Show Qualities
        </button>
      ) : (
        <div className="min-w-[400px] bg-violet-200 rounded-lg text-xl font-bold p-5  text-black">
          Fierce/bold/reflections/strong/proud/dream/eagle
        </div>
      )}
    </div>
  );
};

export default Page;
