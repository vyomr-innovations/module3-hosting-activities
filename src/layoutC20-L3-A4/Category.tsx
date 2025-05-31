"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
type Task = {
  id: number;
  name: string;
  points: number;
  color: string;
};


interface myProps {
  taskList:Task[],
  handleTaskClick:(value:Task)=>void
}
const Category = ({ taskList, handleTaskClick }:myProps) => {


  return (
    <div className=" rounded-md border p-4 backdrop-blur-2xl">
      <h1
        className={`text-md rounded-lg mb-2  font-bold text-center border  text-black border-black backdrop-blur-md p-2 `}
      >
        Master Task List
      </h1>

      <ScrollArea className="w-[350px] rounded-md border p-2 backdrop-blur-2xl">
        <div className="flex flex-col gap-2 p-2 ">
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
      </ScrollArea>
 <h1
        className={`text-sm rounded-lg mb-2  text-center py-2 w-full `}
      >
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
