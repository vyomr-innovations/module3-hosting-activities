"use client";
import React, { useState } from "react";
import BoxData from "@/layOutC21-L3-A1B/cercleData.json";
import MasterLiat from "@/layOutC21-L3-A1B/dragData.json";
import Welldone from "@/components/wellDone";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";

type myDataType = {
  name: string;
};

const MainScreen = () => {
    const { width, height } = useWindowSize();
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});
  const [shuffle, setShuffle] = useState(MasterLiat);
  const [filter, setFilter] = useState(shuffle);
  const [open,setOpen]=useState(false)
  const [checkResult, setCheckResult] = useState<{ [key: number]: boolean[] }>(
    {}
  );

  const [showSol,setShowSol]=useState(false)

  const handleDrag = (
    e: React.DragEvent,
    dragObj: myDataType,
    fromBox?: number,
    itemIndex?: number
  ) => {
    e.dataTransfer.setData(
      "dragItem",
      JSON.stringify({ ...dragObj, fromBox, itemIndex })
    );
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("dragItem"));
    const shuffled = [...filter].sort(() => Math.random() - 0.5);
    setShuffle(shuffled);
    const filterUpdate = shuffled.filter((item) => item.name !== dropItem.name);

    // Remove from previous box if dragged from one
    if (dropItem.fromBox !== undefined) {
      setDropItems((prev) => {
        const updated = { ...prev };
        updated[dropItem.fromBox] = [...(updated[dropItem.fromBox] || [])];
        updated[dropItem.fromBox].splice(dropItem.itemIndex, 1);
        return updated;
      });
    } else {
      // Remove from filter (main list)
      setFilter(filterUpdate);
    }

    // Add to new drop zone if not already present
    setDropItems((prev) => {
      const existingItems = prev[index] || [];
      if (existingItems.includes(dropItem.name)) return prev;
      return {
        ...prev,
        [index]: [...existingItems, dropItem.name],
      };
    });
  };

const handleCheck = () => {
  const result: { [key: number]: boolean[] } = {};
  let allCorrect = true;

  for (const key in BoxData) {
    const index = parseInt(key);
    const dropped = dropItems[index] || [];
    const correctAnswers = BoxData[index]?.ans || [];

    // Check if the number of items dropped is equal to number of correct answers
    if (dropped.length !== correctAnswers.length) {
      allCorrect = false;
    }

    result[index] = dropped.map((item) => {
      const isCorrect = correctAnswers.some(
        (ans) => ans.trim().toLowerCase() === item.trim().toLowerCase()
      );
      if (!isCorrect) allCorrect = false;
      return isCorrect;
    });
  }

  setCheckResult(result);

  // Show result screen only if all answers are correct
  if (allCorrect) {
    setTimeout(() => {
      setOpen(true)
    }, 3000);
  }
};


  return (
    <div className="min-h-screen p-10 flex justify-center flex-col gap-20 items-center bg-[#F8FAFC]">
      <h3 className="text-black font-bold text-3xl text-center">
        Match actions to the 7Cs
      </h3>
       <div className="col-span-12 w-full  h-full">
        {
          showSol ? 
          <div className="text-center border border-black p-1 rounded-lg">
            
            {
              BoxData.map((item,index)=>(
                <div key={index} className="flex justify-center items-center flex-wrap gap-2">{item.ans.map((i,index)=>(
                  <h4 key={index} style={{background:item.bg}} className=" my-1 p-1 rounded-lg border border-black">{i}</h4>
                ))}</div>
              ))
            }
          </div>
          :
           <div onClick={()=>setShowSol(true)} className="text-center"> <button className="text-center cursor-pointer bg-violet-900 text-white px-8 py-2 rounded-lg">Check Solution</button></div>
        }
        </div>

      <div className="grid grid-cols-12 gap-2 w-full">
       
        {/* Left draggable items */}
        <div className="col-span-4 w-full flex justify-center items-center gap-1 h-[600px] rounded-lg border-b border-black overflow-y-scroll flex-wrap">
          {filter.length === 0 ? (
            <button
              className="bg-violet-900 cursor-pointer px-8 py-2 rounded-lg text-white"
              onClick={handleCheck}
            >
              Check
            </button>
          ) : (
            filter.map((item, index) => (
              <span
                draggable
                onDragStart={(e) => handleDrag(e, item)}
                className="border-1 min-w-[400px] rounded-lg p-1 text-center text-lg border-violet-900"
                key={index}
              >
                {item.name}
              </span>
            ))
          )}
        </div>

        {/* Right drop circles */}
        <div className="col-span-8 w-full">
          <div className="w-[800px] h-[600px] relative flex justify-center items-center">
            {/* Center circle */}
            <div className="w-[250px] h-[250px] shadow-md shadow-black flex justify-center items-center border border-black bg-[#D9DFC6] rounded-full">
              <h3 className="text-black font-bold text-2xl text-center">
                7 Cs of communication
              </h3>
            </div>

            {/* Drop zones */}
            {BoxData.map((item, index) => (
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, index)}
                key={index}
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                  backgroundColor: item.bg,
                }}
                className="absolute hover:scale-105 cursor-pointer rounded-full border border-black h-[200px] w-[200px] flex flex-col justify-center items-center px-5 gap-1 overflow-hidden hover:overflow-y-auto  scrollbar-thin scrollbar-none"
              >
                <h4 className="text-xl font-bold">{item.name}</h4>
                {dropItems[index]?.map((itemName, i) => {
                  const isCorrect = checkResult[index]?.[i];
                  return (
                  
                      <h4
                        key={i}
                        draggable
                        onDragStart={(e) =>
                          handleDrag(e, { name: itemName }, index, i)
                        }
                        className={`rounded-lg px-2 py-1 text-center text-sm 
                          ${isCorrect === true ? "bg-green-500 text-white" : ""}
                          ${isCorrect === false ? "bg-red-500 text-white" : ""}
                          ${
                            isCorrect === undefined
                              ? "border border-black text-black"
                              : ""
                          }
                        `}
                      >
                        {itemName}
                      </h4>
             
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        
     {open ? 
        <>
        <Welldone setOpen={setOpen} open={open} />
        
              <Confetti width={width} height={height} className={` h-full `} />
        </>:""

      }
      </div>
    </div>
  );
};

export default MainScreen;
