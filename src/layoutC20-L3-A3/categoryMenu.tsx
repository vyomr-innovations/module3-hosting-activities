"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CategoryMenu = () => {
  const [cetegotyName, setCategoryName] = useState("Select Category");

  return (
    <DropdownMenu>
      {/* Disable trigger if already selected */}
      <DropdownMenuTrigger
      
        className="outline-none text-md cursor-pointer flex justify-center items-center gap-1 w-full "
      >
        {cetegotyName}
         <IoMdArrowDropdown className="text-lg" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setCategoryName("Reduce");
          }}
        >
          Reduce
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setCategoryName("Reuse");
          
          }}
        >
          Reuse
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setCategoryName("Recycle");
           
          }}
        >
          Recycle
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryMenu;
