"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Data from "@/layoutC23-L1-AA/data.json";
import React, {  useState } from "react";

const LayoutC23L1AA = () => {
  const [count, setCount] = useState<number[]>([]);
  const [Assetive, setAssertiv] = useState(false);
  const [notAssetive, setNotAssertiv] = useState(false);

  const handleCheckYes = (index: number, checked: boolean) => {
    setCount((prev) =>
      checked ? [...prev, index] : prev.filter((i) => i !== index)
    );
  };

const handleCheck = ()=>{
      if (count.length >= 6) {
      setAssertiv(true);
      setNotAssertiv(false);
    } else {
      setNotAssertiv(true);
      setAssertiv(false);
    }
}

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 flex flex-col gap-8 justify-center items-center">
        <h3 className="text-3xl text-center font-bold">Am I assertive</h3>
      <div className="flex flex-col gap-3">
        {Data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-center gap-4 w-full"
          >
            <h2 className="text-2xl min-w-[850px]">{item.text}</h2>
            <div className="items-top flex space-x-2">
              <Checkbox
                id={`checkbox-${index}`}
                checked={count.includes(index)}
                onCheckedChange={(checked) =>
                  handleCheckYes(index, Boolean(checked))
                }
                className="w-[30px] h-[30px] cursor-pointer border border-black"
              />
              <label
                htmlFor={`checkbox-${index}`}
                className="text-2xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Yes
              </label>
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-center items-center gap-3 flex-col">
          <span className="text-2xl font-bold ">
            {" "}
            Total Yes : {count.length + 0}
          </span>
          
<button onClick={handleCheck} disabled={count.length <= 0} className="px-8 py-2 rounded-lg text-xl bg-violet-900 text-white cursor-pointer">Check</button>

           <span className="text-2xl font-bold  text-violet-800">
        
          {Assetive ? "More than 6 yes - You are consistently assertive!" :""}
          {notAssetive ? "Less than 6 yes - Learning assertive behavior techniques would boost your score." :""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LayoutC23L1AA;
