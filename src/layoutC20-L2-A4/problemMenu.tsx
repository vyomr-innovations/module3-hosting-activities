import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ProblemMenu = () => {
  const [problemName, setProblemName] = useState("Problem Type");
  const [isSelected, setIsSelected] = useState(false); // ❗change: only one selection allowed
 
   return (
     <DropdownMenu>
       {/* Disable trigger if already selected */}
       <DropdownMenuTrigger
         disabled={isSelected}
         className="outline-none text-md cursor-pointer flex justify-center items-center gap-1 w-full disabled:cursor-default"
       >
         {problemName}
         {!isSelected && <IoMdArrowDropdown className="text-lg" />}
       </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className=" cursor-pointer" onClick={() =>{ setProblemName("Land Pollution");setIsSelected(true)}}>
          Land Pollution
        </DropdownMenuItem>
        <DropdownMenuItem className=" cursor-pointer" onClick={() => {setProblemName("Air Pollution");  setIsSelected(true)}}>
          Air Pollution
        </DropdownMenuItem>
        <DropdownMenuItem className=" cursor-pointer" onClick={() => {setProblemName("Water Pollution");  setIsSelected(true)}}>
          Water Pollution
        </DropdownMenuItem>  
        
        <DropdownMenuItem className=" cursor-pointer" onClick={() => {setProblemName("Global Warming");  setIsSelected(true)}}>
        Global Warming
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProblemMenu;
