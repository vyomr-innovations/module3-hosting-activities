"use client";
import React, { useState } from "react";
import dropData from "@/layoutC24-L2-A1/dropData.json";
import dragData from "@/layoutC24-L2-A1/dragData.json";
import Welldone from "@/components/wellDone";
type dragType = {
  text: string;
  val: string;
};


const MainScreen = () => {
  const [open,setOpen]=useState(false)
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>([]);
  const [shuffle,setShuffle]=useState(dragData)
  const [filter, setFilter] = useState(shuffle);

  const handleDrag = (e: React.DragEvent, item: dragType) => {
    e.dataTransfer?.setData("drag", JSON.stringify(item));

  };

  const handleDrop = (e: React.DragEvent, value: string, index: number) => {
    const dropItem = JSON.parse(e.dataTransfer?.getData("drag"));

    if (value === dropItem.val) {

      const Shuffled = [...filter].sort(()=> Math.random() - 0.5)
      setShuffle(Shuffled)
      const updateData = Shuffled.filter((item) => item.text != dropItem.text);
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dropItem.text]
          : [dropItem.text],
      }));

      setFilter(updateData);
      if (updateData.length === 0) {
      setOpen(true)
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-start gap-3 p-5 items-center flex-col">
      <h4 className="text-3xl font-bold text-center text-black">
        Assertive communication with A-R-E-F-I-T
      </h4>
      <div className="grid grid-cols-12 w-full  gap-1">
        <h4 className="text-2xl font-semibold col-span-12 text-center my-4 text-black">
          Recall what each alphabet stands for.
        </h4>
        <div className="col-span-4  ">
          <div className=" flex items-center flex-col gap-1">
            {filter.map((item, index) => (
              <span
                key={index}
                draggable
                onDragStart={(e) => handleDrag(e, item)}
                className="active:cursor-grabbing hover:cursor-grab text-xl w-[300px] rounded-lg text-black border border-black p-2"
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-8 w-full">
          <div className="grid grid-cols-12 w-full gap-1">
            <h4 className="col-span-12 text-center bg-violet-900 text-white rounded-lg text-lg p-2 border border-black w-full">
              ASSERTIVE COMMUNICATION
            </h4>
            {dropData.map((item, index) => (
              <div
                onDrop={(e) => handleDrop(e, item.value, index)}
                onDragOver={(e) => e.preventDefault()}
                style={{ backgroundColor: item.bg }}
                key={index}
                className="col-span-6 border border-black rounded-lg w-full "
              >
                <h5 className="w-full text-2xl text-center border-b-2 border-black p-1">
                  {item.heading}
                </h5>
                <div className="min-h-[150px] p-1 flex justify-start items-center gap-1 flex-col ">
                  <h5 className=" p-1 text-md text-center border rounded-lg font-bold  border-black">
                    {item.firstVal}
                  </h5>
                  {dropItems[index]?.map((i, index) => (
                    <h5
                      key={index}
                      className=" p-1 text-md text-center border rounded-lg font-bold  border-black"
                    >
                      {i}
                    </h5>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Welldone open={open} setOpen={setOpen}/>
    </div>

  );
};

export default MainScreen;
