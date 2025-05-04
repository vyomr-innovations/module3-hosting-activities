"use client";
import React, { useState } from "react";
import cercelData from "@/layOutC22-L1-A3/cercleData.json";

const LayOutC22L1A3 = () => {
  const [dataIndex, setDataIndex] = useState<number[]>([]);
  const handleClick = (index: number) => {
   if(!dataIndex?.includes(index)){
    setDataIndex((prev)=>[...prev,index])
   }
  };
  return (
    <div className="min-h-screen p-10 flex justify-center flex-col gap-20 items-center bg-[#F8FAFC]">
   <h3 className="text-black font-bold text-3xl text-center">Qualities of Resilence</h3>
      <div className="w-[800px]  h-[600px] relative flex justify-center items-center ">
        <div className="w-[250px] h-[250px] z-40 shadow-md shadow-black bg-gray-200  flex justify-center items-center  border-2 border-white rounded-full">
        <h3 className="text-black font-bold text-2xl text-center">Qualities of <br />Resilence</h3>
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
            className="absolute transition-all duration-200 hover:scale-105 cursor-pointer  hover:z-50 overflow-y-scroll    shadow-md shadow-black flex justify-center items-center  border-2 border-[#fbb26d]   min-h-[180px] min-w-[180px]  rounded-full"
          >
            {dataIndex.includes(index) ? (
              <div className=" w-[130px] h-[150px] text-[18px]  px-2 pb-10 rounded-full  text-center ">
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

export default LayOutC22L1A3;
