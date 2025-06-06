"use client";
import React, { useState } from "react";
import dropData from "@/layoutC18-L1-A3/dropData.json";
import dragData from "@/layoutC18-L1-A3/dragData.json";
// import Welldone from "@/components/wellDone";
import { v4 as uuidv4 } from "uuid";
type dragType = {
  text: string;
  val: string;
};

const MainScreen = () => {
  // const [open, setOpen] = useState(false);
  // Pehle ye tha: string[]
  // Ab hoga: { text: string; time: string }[]
  const [dropItems, setDropItems] = useState<{
    [key: number]: { id: string; text: string; time: string }[];
  }>({});

  const [pendingDropIndex, setPendingDropIndex] = useState<number | null>(null);

  const [shuffle, setShuffle] = useState(dragData);
  const [filter, setFilter] = useState(shuffle);
  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    text: string;
    time: string;
  } | null>(null);

  const [showOptionDialog, setShowOptionDialog] = useState(false);

  const handleDrag = (e: React.DragEvent, item: dragType) => {
    e.dataTransfer?.setData("drag", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent, value: string, index: number) => {
    const dropItem: dragType = JSON.parse(e.dataTransfer?.getData("drag"));

    if (value === dropItem.val) {
      const Shuffled = [...filter].sort(() => Math.random() - 0.5);
      setShuffle(Shuffled);
      const updateData = Shuffled.filter((item) => item.text !== dropItem.text);
      setFilter(updateData);

      const uniqueId = uuidv4();
      setSelectedItem({ id: uniqueId, text: dropItem.text, time: "" });
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], { id: uniqueId, text: dropItem.text, time: "" }]
          : [{ id: uniqueId, text: dropItem.text, time: "" }],
      }));

      setPendingDropIndex(index);
      setShowOptionDialog(true);
    }
  };

  const handleTimeSelect = (time: string) => {
    if (selectedItem && pendingDropIndex !== null) {
      setDropItems((prev) => ({
        ...prev,
        [pendingDropIndex]: prev[pendingDropIndex].map((item) =>
          item.id === selectedItem.id ? { ...item, time } : item
        ),
      }));

      setSelectedItem(null);
      setPendingDropIndex(null);
      setShowOptionDialog(false);

      // if (filter.length === 0) {
      //   setOpen(true);
      // }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-start gap-3 p-5 items-center flex-col">
      <h4 className="text-3xl font-bold text-center text-black">
       Sort Into Spaces - Outdoor/Indoor
      </h4>
      <div className="grid grid-cols-12 w-full  gap-5">
        <div
          className={`${
            filter.length === 0 ? "hidden" : "col-span-4"
          }  w-full border border-violet-700 p-2 rounded-lg  `}
        >
          <div className=" flex items-center flex-col gap-1">
            {filter.map((item, index) => (
              <span
                key={index}
                draggable
                onDragStart={(e) => handleDrag(e, item)}
                className=" shadow-lg  text-center border text-violet-900 px-5 py-2 rounded-lg cursor-grab active:cursor-grabbing"
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`${
            filter.length === 0 ? "col-span-12" : "col-span-8"
          }  h-full w-full`}
        >
          <div className="grid grid-cols-12 h-full w-full gap-1">
            {dropData.map((item, index) => (
              <div
                onDrop={(e) => handleDrop(e, item.value, index)}
                onDragOver={(e) => e.preventDefault()}
                key={index}
                className="col-span-6 h-full border border-black rounded-lg w-full flex flex-col gap-3 "
              >
                <h5 className="w-full text-2xl text-center border-b-2 border-black p-1">
                  {item.heading}
                </h5>
                <div className=" p-1 flex justify-start items-center gap-1 flex-col ">
                  {dropItems[index]?.map((i, innerIdx) => (
                    <h5
                      onClick={() => {
                        setSelectedItem(i);
                        setPendingDropIndex(index);
                        setShowOptionDialog(true);
                      }}
                      key={innerIdx}
                      className=" p-1 text-md cursor-pointer text-center border rounded-lg font-bold min-w-[300px]  border-black"
                    >
                      {i.text} - {i.time} min
                    </h5>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showOptionDialog && selectedItem && (
        <div className="fixed inset-0 bg-[#00000074] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg max-w-md w-full shadow-xl">
            <h2 className="text-xl font-bold  text-center">
              Please assign time for this task
            </h2>
            <h2 className="text-violet-600 text-center text-2xl font-bold py-4">
              {selectedItem.text}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {["30", "60", "90", "120"].map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTimeSelect(option)}
                  className="bg-violet-100 cursor-pointer text-violet-900 font-semibold px-4 py-2 rounded-lg border hover:bg-violet-200"
                >
                  {option} min
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <Welldone open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default MainScreen;
