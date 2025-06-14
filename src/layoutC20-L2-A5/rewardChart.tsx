"use client";

import Category from "@/layoutC20-L2-A5/Category";
import { useState, useEffect, useRef } from "react";

import MainLayout from "@/layoutC20-L2-A5/mainLyout";
import Welldone from "@/components/wellDone";
import Image from "next/image";
type Task = {
  id: number;
  name: string;
  points: number;
  color: string;
};

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const LayoutC20L2A5 = () => {
  const avatarRef = useRef<HTMLInputElement>(null);
  const [avtarPrew, setAvtarPrew] = useState(
    "/bg/Profile_avatar_placeholder_large.png"
  );

  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState<string>(""); // <-- not undefined

  const [masterTasks, setMasterTasks] = useState<Task[]>([]);

  const [slots, setSlots] = useState<(Task | null)[]>(Array(7).fill(null));
  const [completionMatrix, setCompletionMatrix] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(7).fill(false))
  );

  const assignTaskToSlot = (task: Task) => {
    console.log(task);
    const firstEmptySlotIndex = slots.findIndex((slot) => slot === null);
    if (firstEmptySlotIndex !== -1) {
      const newSlots = [...slots];
      newSlots[firstEmptySlotIndex] = task;
      setSlots(newSlots);
      setMasterTasks(masterTasks.filter((t) => t.id !== task.id));
    }
  };

  const removeTaskFromSlot = (index: number) => {
    const task = slots[index];
    if (task) {
      const newSlots = [...slots];
      newSlots[index] = null;
      setSlots(newSlots);
      setMasterTasks([...masterTasks, task]);
      // Reset completion status for this task
      const newCompletionMatrix = [...completionMatrix];
      newCompletionMatrix[index] = Array(5).fill(false);
      setCompletionMatrix(newCompletionMatrix);
    }
  };

  const toggleTaskCompletion = (slotIndex: number, dayIndex: number) => {
    const newCompletionMatrix = [...completionMatrix];
    newCompletionMatrix[slotIndex][dayIndex] =
      !newCompletionMatrix[slotIndex][dayIndex];
    setCompletionMatrix(newCompletionMatrix);
  };
  const calculateDayTotal = (dayIndex: number) => {
    return slots.reduce((total, task, slotIndex) => {
      if (task && completionMatrix[slotIndex][dayIndex]) {
        return total + task.points;
      }
      return total;
    }, 0);
  };

  const calculateGrandTotal = () => {
    const gTotal = DAYS.reduce(
      (total, _, dayIndex) => total + calculateDayTotal(dayIndex),
      0
    );
    return gTotal;
  };

  useEffect(() => {
    if (!goal) return; // Exit early if goal is undefined or empty

    const numericGoal = parseInt(goal);
    const grandTotal = calculateGrandTotal();

    if (
      !isNaN(numericGoal) &&
      grandTotal >= numericGoal &&
      numericGoal > 0 &&
      numericGoal >= 10
    ) {
      setOpen(true);
    }
  }, [completionMatrix, goal, slots]);

  const handleimageChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvtarPrew(URL.createObjectURL(file));
    }
  };
  return (
    // chec===
    <div className=' min-h-screen gap-2 flex flex-col justify-center items-center  bg-[url("/myImg/construction.jpg")] bg-no-repeat bg-cover   relative pb-6'>
      <div
        className="absolute w-full h-[100%] top-0 left-0 bg-[#c4c4c4e6] z-[0] "
        id="mainDiv"
      ></div>
      <div className="pt-[10px] z-10" id="mainDiv">
        <h1 className="font-Abril text-3xl font-medium rounded-md text-blue-900 ">
          Reward Chart for Environment Champion
        </h1>
      </div>
      {/* ========================= */}
      <div className="flex justify-center items-center max-w-[940px]   w-[50%] py-3 gap-4">
        <div className=" text-white  px-2 rounded-lg  flex justify-center items-center gap-10">
          <div className="relative w-[70px] h-[60px] border rounded-full overflow-hidden ">
            <Image
            
              onClick={() => avatarRef.current?.click()}
              src={avtarPrew}
              fill
              alt="avatar"
              className=" object-cover cursor-pointer"
            />
            <input
              placeholder="avatar"
              ref={avatarRef}
              type="file"
              onChange={handleimageChage}
              className="w-full hidden "
            />
          </div>
          {/* name input =================== */}
          <div className="flex  w-full  items-center relative gap-1 text-black ">
            <label htmlFor="Name" className="text-blue-800 text-3xl mr-2">
              Name
            </label>
            <div className="w-[100%] py-2">
              <div className="relative w-full">
                <input
                  placeholder="Username"
                  type="text"
                  className="w-full bg-transparent text-3xl font-bold aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 dark:text-white placeholder:text-stone-600/60 ring-transparent transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none py-2 px-2.5 duration-100 hover:ring-none focus:ring-none rounded-none border-0 border-b border-gray-400 pr-0.5 shadow-none ring-0 hover:border-gray-900 focus:border-gray-900 dark:border-gray-600 dark:hover:border-gray-50 dark:focus:border-gray-50 peer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= */}
      <div className="flex gap-2">
        <Category
          setMasterTasks={setMasterTasks}
          taskList={masterTasks}
          handleTaskClick={assignTaskToSlot}
        />
        <MainLayout
          slots={slots}
          removeTaskFromSlot={removeTaskFromSlot}
          DAYS={DAYS}
          completionMatrix={completionMatrix}
          toggleTaskCompletion={toggleTaskCompletion}
          calculateDayTotal={calculateDayTotal}
          calculateGrandTotal={calculateGrandTotal}
          goal={goal}
          setGoal={setGoal}
        />
      </div>
      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default LayoutC20L2A5;
