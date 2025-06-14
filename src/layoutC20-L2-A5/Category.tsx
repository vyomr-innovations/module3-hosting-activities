"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Task = {
  id: number;
  name: string;
  points: number;
  color: string;
};

interface myProps {
  taskList: Task[];
  handleTaskClick: (value: Task) => void;
  setMasterTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const Category = ({ taskList, handleTaskClick, setMasterTasks }: myProps) => {
  const [taskName, setTaskName] = useState("");
  const [open, setOpen] = useState(false);
  const [taskerror,setTaskError]=useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (taskName.trim() === "") return; // Empty name prevent
    // if the task already exxist 
const lowerCaseTask = taskName.toLowerCase()
if(taskList.some((item)=>item.name.toLowerCase() === lowerCaseTask)){
  setTaskError(true)
  return
}


    const newTask: Task = {
      id: Date.now(), // unique id
      name: taskName,
      points: 10,
      color: "#A1EEBD", // default color
    };

    setMasterTasks((prev) => [...prev, newTask]); // add task
    setTaskName(""); // clear input
    setOpen(false); // close dialog
  };

  return (
    <div className=" rounded-md border p-4 backdrop-blur-2xl">
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
          {taskerror ? <h4 className="text-red-600 text-center">This Task already in the list</h4> :""}
        </DialogContent>
      </Dialog>

      <h1
        className={`text-md rounded-lg mb-2  font-bold text-center border  text-black border-black backdrop-blur-md p-2 `}
      >
        Master Task List
      </h1>

      <ScrollArea className="w-[350px] rounded-md border p-2 backdrop-blur-2xl">
        <div className="flex flex-col gap-2 p-2 ">
          <button
            onClick={() => {setOpen(true);setTaskError(false)}}
            title="Add New Task"
            className={`cursor-pointer text-md rounded-lg  font-bold text-center border border-dotted border-black backdrop-blur-md p-1 flex justify-center items-center `}
          >
            <FaPlus className="text-3xl" />
          </button>
          <div className="flex flex-col-reverse gap-1 ">
            {taskList.map((task, index) => (
              <button
                // style={{ backgroundColor: `${task.color}` }}
                key={index}
                onClick={() => handleTaskClick(task)}
                className={`cursor-pointer text-md rounded-lg  font-bold text-center border border-black backdrop-blur-md p-1 `}
              >
                {task.name}
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>
      <h1 className={`text-sm rounded-lg mb-2  text-center py-2 w-full `}>
        Please add minimum five activities
      </h1>
      {/* points Baar ============= */}
      {/* <div className="flex justify-center items-center gap-2 py-2">
        <h2 className="text-md rounded-lg mb-2  font-bold text-center border text-black bg-[#A1EEBD] p-2 ">
          Earn 20 points
        </h2>
        <h2 className="text-md rounded-lg mb-2  font-bold text-center border text-black bg-[#CB9DF0] p-2 ">
          Earn 10 points
        </h2>
      </div> */}
    </div>
  );
};

export default Category;
