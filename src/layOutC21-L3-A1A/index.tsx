"use client";
import React, { useState } from "react";
import cercelData from "@/layOutC21-L3-A1A/cercleData.json";

const LayOutC21L3A1A = () => {
  const [dataIndex, setDataIndex] = useState<number>();
  const [dataText, setDataText] = useState("");
  const handleClick = (index: number) => {
    setDataIndex(index);
    setDataText(cercelData[index].text);
  };
  return (
    <div className="min-h-screen p-15 flex justify-center flex-col gap-20 items-center bg-[#F8FAFC]">
      <h3 className="text-black font-bold text-3xl text-center">
        7 Cs of communication
      </h3>
      <div className="w-[800px]  h-[600px] relative flex justify-center items-center ">
        <div className="w-[250px] h-[250px] shadow-md shadow-black  flex justify-center items-center  border border-black bg-[#D9DFC6] rounded-full">
          <h3 className="text-black font-bold text-2xl text-center">
            7 Cs of communication
          </h3>
        </div>
        {cercelData.map((item, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
          >
            {/* Main Circle */}
            <div
              onClick={() => handleClick(index)}
              style={{
                backgroundColor: item.bg,
                scrollbarWidth: "none",
              }}
              className="relative  p-5  transition-all duration-200 hover:scale-105 cursor-pointer hover:z-50 overflow-y-scroll shadow-md shadow-black flex justify-center items-center flex-col border border-black min-h-[200px] min-w-[200px] rounded-full"
            >
              <h4 className="font-bold text-xl">{item.name}</h4>
            </div>

            {/* Extra Box Next to Circle */}
            {dataIndex === index &&
              item.box.map((item, index) => (
                <div
                  key={index}
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                  }}
                  className="absolute text-xl  w-[300px] p-5 rounded-lg text-black border border-black  bg-green-300"
                >
                  {dataText}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayOutC21L3A1A;
