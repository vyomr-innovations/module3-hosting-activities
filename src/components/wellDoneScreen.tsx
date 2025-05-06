"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});
import { useWindowSize } from "react-use";

const WellDoneScreen = () => {
  const { width, height } = useWindowSize();
  const [sound, setSound] = useState<HTMLAudioElement>();
  useEffect(() => {
    setSound(new Audio("/sound/crowd.mp3"));
  }, []);
  sound?.play();

  return (
    <div className="bg-white min-h-screen flex items-center justify-center flex-col gap-3">
      <div className="min-w-[400px]  flex justify-center items-center flex-col shadow shadow-black text-center p-5 rounded-lg">
        <Image
          src="/Well_Done.jpg"
          width={200}
          height={100}
          alt="well done image"
        />
        <h1 className="text-center text-3xl font-bold py-4 text-black ">Well Done</h1>
      </div>

      <Confetti width={width} height={height} className={` w-full h-full `} />
    </div>
  );
};

export default WellDoneScreen;
