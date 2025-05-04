"use client";
import React, { useState } from "react";
import cercelData from "@/layOutC22-L3-A2/cercleData.json";

const LayOutC22L3A2 = () => {
  const [dataIndex, setDataIndex] = useState<number>();
  const [dataText,setDataText]=useState("")
  const handleClick = (index: number) => {
    setDataIndex(index)
    setDataText(cercelData[index].text)
   
  };
  return (
    <div className="min-h-screen p-10 flex justify-center flex-col gap-20 items-center bg-[#F8FAFC]">
   <h3 className="text-black font-bold text-3xl text-center">7Cs of Resilience</h3>
      <div className="w-[800px]  h-[600px] relative flex justify-center items-center ">
        <div className="w-[250px] h-[250px] z-40 shadow-md shadow-black bg-yellow-100  flex justify-center items-center  border-2 border-yellow-400 rounded-full">
        <h3 className="text-black font-bold text-2xl text-center">7Cs of Resilience </h3>
        </div>
        {cercelData.map((item, index) => (
  <div key={index} className="absolute" style={{
    top: item.top,
    left: item.left,
    right: item.right,
    bottom: item.bottom
  }}>
    {/* Main Circle */}
    <div
      onClick={() => handleClick(index)}
      style={{
        backgroundColor: item.bg,
        scrollbarWidth: "none"
      }}
      className="relative bg-pink-200 p-5 hover:bg-pink-300 transition-all duration-200 hover:scale-105 cursor-pointer hover:z-50 overflow-y-scroll shadow-md shadow-black flex justify-center items-center flex-col border-2 border-[#fbb26d] min-h-[180px] min-w-[180px] rounded-full"
    >
      <h4 className="font-bold text-xl">{item.name}</h4>

    </div>

    {/* Extra Box Next to Circle */}
   {
    dataIndex === index && (

      item.box.map((item,index)=>(
  
        <div
        key={index}
        style={{
          top: item.top,
          left: item.left,
          right: item.right,
          bottom: item.bottom}}
        className="absolute text-xl  w-[300px] p-5 rounded-lg text-black border border-black  bg-green-300" >
         {dataText}
      </div>
      ))
    )
   }
  </div>
))}

      </div>
    </div>
  );
};

export default LayOutC22L3A2;
