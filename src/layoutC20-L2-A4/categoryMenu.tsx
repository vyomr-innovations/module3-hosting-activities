import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const CategoryMenu = () => {
  const [cetegotyName, setCategoryName] = useState("Select Category");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none  text-md cursor-pointer ">
        {cetegotyName}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className=" cursor-pointer"  onClick={() => setCategoryName("Reduce")}>
          Reduce
        </DropdownMenuItem>
        <DropdownMenuItem className=" cursor-pointer"  onClick={() => setCategoryName("Reuse")}>
          Reuse
        </DropdownMenuItem>
        <DropdownMenuItem  className=" cursor-pointer" onClick={() => setCategoryName("Recycle")}>
          Recycle
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryMenu;
