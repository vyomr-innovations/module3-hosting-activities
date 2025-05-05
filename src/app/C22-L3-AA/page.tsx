"use client"
import React, { useState } from "react";

const Page = () => {
    const [showSugg,setShowSugg]=useState(false)
    const [userVal ,setUserVal]=useState("")
  return (
    <div className="min-h-screen flex justify-start p-5 items-center flex-col gap-4 bg-[#F8FAFC]">
      <h2 className="min-h-[80px] text-center text-3xl font-bold text-black">
      Resilience in Conversation
      </h2>

      <iframe
        width="600"
        height="300"
        className="rounded-lg"
        src="https://www.youtube.com/embed/x8kshJO2PG0?si=L3Uo2O29-ldwq26V"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <textarea
      value={userVal}
      onChange={(e)=>setUserVal(e.target.value)}
      placeholder="write here...." className="text-2xl text-black text-center min-w-[400px] min-h-[80px] outline-none border border-black rounded-lg" />
      {
        !showSugg ? 
    
        <button onClick={()=>setShowSugg(true)} disabled={userVal.length == 0}   className={`text-white bg-violet-900 px-5 py-2 rounded-lg ${userVal.length == 0 ? "cursor-not-allowed" :"cursor-pointer"} `}>Show Suggestion</button>
        :

      <ul className="space-y-3 list-disc p-5 w-[450px]">
        <li className="text-black text-lg">He doesn’t interrupt<span className="font-bold"> (control).</span></li>
        <li className="text-black text-lg">He carefully listens<span className="font-bold"> (competent).</span></li>
        <li className="text-black text-lg">He sticks to his community of friends<span className="font-bold"> (connected).</span></li>
        <li className="text-black text-lg">He responds by making up his own mind about friends rather than taking someone else’s word for them<span className="font-bold"> (confident).</span></li>
        <li className="text-black text-lg">He shows camaraderie<span className="font-bold"> (character).</span></li>
      </ul>
      }

    </div>
  );
};

export default Page;
