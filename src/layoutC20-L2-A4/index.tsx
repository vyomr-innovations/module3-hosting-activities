"use client";
import React, { useState } from "react";
import listData from "@/layoutC20-L2-A4/listData.json";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoryMenu from "./categoryMenu";
import ProblemMenu from "./problemMenu";

const LayoutC20L2A4 = () => {
  const [taskName, setTaskName] = useState("");
  const [masteTraskList, setMasterTasks] = useState(listData);
  const [open, setOpen] = useState(false);
  const [sameTask, setSameTask] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (taskName.trim() === "") return; // Empty name prevent
    const caseTask = taskName.toLowerCase();
    if (masteTraskList.some((item) => item.task.toLowerCase() == caseTask)) {
      setSameTask(true);
      return;
    }

    setMasterTasks((prev) => [...prev, { task: taskName }]); // add task
    setTaskName(""); // clear input
    setOpen(false); // close dialog
  };

  const handleDel = (taskIndex: number) => {
    setMasterTasks((prev) => prev.filter((_, index) => index != taskIndex));
  };
  return (
    <div className="min-h-screen p-8 bg-[#F8FCFA]  flex justify-start items-center flex-col gap-10">
      <div>
        <h4 className="font-bold text-black text-xl text-center ">
          What Can I Do To Help Planet Earth?
        </h4>
        <p className="text-center text-black text-lg">
          Think of what actions you can take and how it will help our planet.
        </p>
      </div>

       <div className="grid grid-cols-12 w-full  ">
        <div className="col-span-12 w-full flex justify-center items-center gap-2 ">
          <label htmlFor="name" className="text-2xl font-bold">
            Name
          </label>
          <input
            type="text"
            className="outline-none border-b-2 text-black text-xl  border-black px-2 text-center min-w-[200px]  "
            id="name"
          />
        </div>
      </div>
     <div className="w-full max-w-[90%]">
      <div className="w-full border border-black rounded-lg overflow-hidden  ">
        <div className="grid grid-cols-12 w-full bg-yellow-400  border-b border-black">
          <div className="col-span-2   "></div>
          <div className="col-span-3 w-full   ">
            <h4 className="font-bold p-2 text-center ">Action to Take</h4>
          </div>
          <div className="col-span-3 w-full   ">
            <h4 className="font-bold p-2 text-center ">Category</h4>
          </div>
          <div className="col-span-3 w-full   ">
            <h4 className="font-bold p-2 text-center ">
              What Problem it Solves
            </h4>
          </div>

          <div className="col-span-1 w-full   "></div>
        </div>

        <div className="grid grid-cols-12 w-full ">
          <div className="col-span-2    "></div>
          <div
            onClick={() => {
              setOpen(true);
              setSameTask(false);
            }}
            className="col-span-3 p-1 border border-dotted border-black active:scale-95 transition-all duration-300  border-t-0   "
          >
            <IoMdAdd className="text-3xl cursor-pointer  text-black text-center w-full" />
          </div>
          <div className="col-span-3  w-full   "></div>
          <div className="col-span-4 w-full  "></div>
        </div>
        {masteTraskList.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-12 w-full border border-gray-300 hover:bg-gray-200 transition-all duration-200 "
          >
            <div className="col-span-2   ">
              <h4 className="  text-black p-3 text-center ">{index + 1}</h4>
            </div>
            <div className="col-span-3 w-full border-r border-l  ">
              <h4 className=" font-medium text-black p-3 text-center ">
                {item.task}
              </h4>
            </div>
            <div className="col-span-3 w-full   border-r border-l    ">
              <h4 className=" p-3 text-center ">
                <CategoryMenu />
              </h4>
            </div>
            <div className="col-span-3 w-full   border-r border-l     ">
              <h4 className=" p-3 text-center ">
                <ProblemMenu />
              </h4>
            </div>

            <div className="col-span-1 w-full flex justify-center items-center  ">
              <h4 className=" p-3 text-center ">
                <RiDeleteBin6Line
                  onClick={() => handleDel(index)}
                  className="text-lg hover:text-red-600 cursor-pointer"
                />
              </h4>
            </div>
          </div>
        ))}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center font-bold">
                Add New Task
              </DialogTitle>
            </DialogHeader>

            {/* Wrap the inputs in a form inside DialogContent */}
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-3">
                <Input
                  id="name-1"
                  name="name"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    type="button"
                    className="cursor-pointer"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" className="cursor-pointer">
                  Add
                </Button>
              </DialogFooter>
            </form>
            {sameTask ? (
              <h1 className="text-center text-red-600 ">
                This Task already in the list
              </h1>
            ) : (
              ""
            )}
          </DialogContent>
        </Dialog>
      </div>
     </div>
    </div>
  );
};

export default LayoutC20L2A4;
