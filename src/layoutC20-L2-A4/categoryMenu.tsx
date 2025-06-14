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
  const [isSelected, setIsSelected] = useState(false); // ❗change: only one selection allowed

  return (
    <DropdownMenu>
      {/* Disable trigger if already selected */}
      <DropdownMenuTrigger
        disabled={isSelected}
        className="outline-none text-md cursor-pointer flex justify-center items-center gap-1 w-full disabled:cursor-default"
      >
        {cetegotyName}
        {!isSelected && <IoMdArrowDropdown className="text-lg" />}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setCategoryName("Reduce");
            setIsSelected(true);
          }}
        >
          Reduce
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setCategoryName("Reuse");
            setIsSelected(true);
          }}
        >
          Reuse
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setCategoryName("Recycle");
            setIsSelected(true);
          }}
        >
          Recycle
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryMenu;
