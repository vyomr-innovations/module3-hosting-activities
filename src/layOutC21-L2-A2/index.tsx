"use client";
import React, { useState } from "react";
import cercelData from "@/layOutC21-L2-A2/cercleData.json";

const LayOutC21L2A2 = () => {
  const [dataIndex, setDataIndex] = useState<number[]>([]);
  const handleClick = (index: number) => {
   if(!dataIndex?.includes(index)){
    setDataIndex((prev)=>[...prev,index])
   }
  };
  return (
    <div className="min-h-screen p-10 flex justify-center flex-col gap-20 items-center bg-[#F8FAFC]">
   <h3 className="text-black font-bold text-3xl text-center">7 Cs of communication</h3>
      <div className="w-[800px]  h-[600px] relative flex justify-center items-center ">
        <div className="w-[250px] h-[250px] shadow-md shadow-black flex justify-center items-center  border border-black flex justify-center items-center  border border-black bg-[#D9DFC6] rounded-full">
        <h3 className="text-black font-bold text-2xl text-center">7 Cs of communication</h3>
        </div>
        {cercelData.map((item, index) => (
          <div
            key={index}
            onClick={()=>handleClick(index)}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              backgroundColor: item.bg,
              scrollbarWidth:"none"
            }}
            className="absolute hover:scale-105 cursor-pointer  overflow-y-auto shadow-md shadow-black flex justify-center items-center  border border-black   min-h-[200px] min-w-[200px]  rounded-full"
          >
            {dataIndex.includes(index) ? (
              <div className=" w-[160px] h-[140px] text-lg  rounded-full  text-center ">
                {item.text}
              </div>
            ) : (
              <h4 className="font-bold text-xl">{item.name}</h4>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayOutC21L2A2;
