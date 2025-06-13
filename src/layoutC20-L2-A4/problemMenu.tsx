import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const ProblemMenu = () => {
  const [problemName, setProblemName] = useState("What Problem");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none  text-md cursor-pointer  ">
        {problemName}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className=" cursor-pointer" onClick={() => setProblemName("Land Pollution")}>
          Land Pollution
        </DropdownMenuItem>
        <DropdownMenuItem className=" cursor-pointer" onClick={() => setProblemName("Air Pollution")}>
          Air Pollution
        </DropdownMenuItem>
        <DropdownMenuItem className=" cursor-pointer" onClick={() => setProblemName("Water Pollution")}>
          Water Pollution
        </DropdownMenuItem>  
        
        <DropdownMenuItem className=" cursor-pointer" onClick={() => setProblemName("Global Warming")}>
        Global Warming
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProblemMenu;
