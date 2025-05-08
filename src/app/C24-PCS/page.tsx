"use client";
import Image from "next/image";
import React, { useState } from "react";
import jsPDF from "jspdf";

const Page = () => {
  const [showSol, setShowSol] = useState(false);

  const handlePrint = () => {
    const imageUrl ="/C24Images/Crossword.png"
  
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [600, 400],
    });
  
    const img = new window.Image();
    img.src = imageUrl;
    img.crossOrigin = "anonymous";
  
    img.onload = () => {
      pdf.addImage(img, "PNG", 10, 10, 580, 380);
      pdf.save("crossword.pdf");
    };
  };
  

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center items-center flex-col gap-4 p-8">
      {!showSol ? (
        <div>
          <Image
            src="/C24Images/Crossword.png"
            width={600}
            height={100}
            alt="Crossword Puzzle"
          />
          <div className="text-center flex justify-center gap-10 items-center mt-4">
            <button
              onClick={handlePrint}
              className="transition-all duration-300 text-xl border border-black px-8 py-2 cursor-pointer text-black rounded-lg hover:bg-black hover:text-white"
            >
              Print
            </button>
            <button
              onClick={() => setShowSol(true)}
              className="transition-all duration-300 border border-violet-900 bg-violet-900 px-8 py-2 rounded-lg text-white text-xl cursor-pointer hover:bg-white hover:text-violet-900"
            >
              Solution
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Image
            src="/C24Images/Crossword-solution.png"
            width={600}
            height={100}
            alt="Crossword Solution"
          />
         
        </div>
      )}
    </div>
  );
};

export default Page;
