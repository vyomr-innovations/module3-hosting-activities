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
 
   return (
     <DropdownMenu>
       {/* Disable trigger if already selected */}
       <DropdownMenuTrigger
      
         className="outline-none text-md cursor-pointer flex justify-center items-center gap-1 w-full "
       >
         {problemName}
         <IoMdArrowDropdown className="text-lg" />
       </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className=" cursor-pointer" onClick={() =>{ setProblemName("Land Pollution");}}>
          Land Pollution
        </DropdownMenuItem>
        <DropdownMenuItem className=" cursor-pointer" onClick={() => {setProblemName("Air Pollution");  }}>
          Air Pollution
        </DropdownMenuItem>
        <DropdownMenuItem className=" cursor-pointer" onClick={() => {setProblemName("Water Pollution");  }}>
          Water Pollution
        </DropdownMenuItem>  
        
        <DropdownMenuItem className=" cursor-pointer" onClick={() => {setProblemName("Global Warming");  }}>
        Global Warming
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProblemMenu;
