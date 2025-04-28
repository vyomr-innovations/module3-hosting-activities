"use client";
import React, { useState } from "react";
import MastrList from "@/DataC20-L2-A3/masterList.json";
import DropData from "@/DataC20-L2-A3/dropData.json";

type DragDataType = {
  text: string;
  value: string;
  bg: string;
};
const Page = () => {
  const [dragItems, setDropItems] = useState<{ [key: number]: DragDataType[] }>(
    {}
  );

  const [filterData,setFilterData]=useState(MastrList)
  const handleDrag = (e: React.DragEvent, dragData: DragDataType) => {
    e.dataTransfer.setData("dragItem", JSON.stringify(dragData));
  };

  const handleDrop = (e: React.DragEvent, index: number, value: string) => {
    const dropItem = JSON.parse(e.dataTransfer.getData("dragItem"));
    if (value === dropItem.value) {
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index] ? [...prev[index], dropItem] : [dropItem],
      }));
      setFilterData((prev)=>prev.filter((item)=>item.text != dropItem.text))
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-10 p-5 bg-[#F8FAFC]">
        <h3 className="text-3xl font-bold text-black text-center">3Rs to Protect Environment</h3>
      <div className="grid grid-cols-12 bg-violet-100 rounded-lg gap-2 place-items-center w-full p-2">
        <div className="col-span-12 border  flex rounded-lg  justify-center items-center gap-1 flex-wrap p-2  border-violet-900">
          {filterData.map((item, index) => (
            <button
              draggable
              onDragStart={(e) => handleDrag(e, item)}
              key={index}
              className="text-lg text-center rounded-lg bg-violet-900 text-white min-w-[100px] p-1"
            >
              {item.text}
            </button>
          ))}
        </div>
        {DropData.map((item, index) => (
          <div
          key={index}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, index, item.value)}
            style={{ border: `2px solid ${item.bg}` }}
            className="col-span-4 flex justify-start gap-1 items-center flex-col  rounded-lg min-h-[400px] min-w-[400px] overflow-hidden "
          >
            <h3
              style={{ backgroundColor: ` ${item.bg}` }}
              className="text-2xl p-1  w-full text-center text-white"
            >
              {item.value}
            </h3>

            {dragItems[index]?.map((item, index) => (
              <span
                key={index}
                style={{ backgroundColor: ` ${item.bg}` }}
                className="text-xl p-1 min-w-[300px] rounded-lg text-center text-white"
              >
                {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
