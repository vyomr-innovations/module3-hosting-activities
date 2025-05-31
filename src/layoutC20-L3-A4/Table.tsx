"use client";

import { Checkbox } from "@/components/ui/checkbox";
interface TaskSlot {
  name: string;
  color: string;
}

// NEW: allow null in TaskSlot
type TaskSlotOrNull = TaskSlot | null;

interface MainLayoutProps {
  slots: TaskSlotOrNull[];
removeTaskFromSlot: ( slotIndex: number) => void;
  DAYS: string[];
  completionMatrix: boolean[][];
  toggleTaskCompletion: (dayIndex: number, slotIndex: number) => void;
}
const Table = ({
  slots,
  removeTaskFromSlot,
  DAYS,
  completionMatrix,
  toggleTaskCompletion,
}: MainLayoutProps) => {


  return (
    <>
      {slots.map((task, slotIndex) => (
        <div
          key={slotIndex}
          className="flex items-center justify-between gap-8 p-2"
        >
          <div>
            <button onClick={() => removeTaskFromSlot(slotIndex)}>
              <h1
                className={` cursor-pointer text-sm rounded-lg font-bold text-center border w-[200px] min-h-[40px] border-black bg-[#FCC737]
                
                `}
              >
                {task ? task.name : ""}
              </h1>
            </button>
          </div>
          <div className="flex gap-5">
            {DAYS.map((_, dayIndex) => (
              <Checkbox
                key={dayIndex}
                checked={completionMatrix[slotIndex][dayIndex]}
                onCheckedChange={() =>
                  task && toggleTaskCompletion(slotIndex, dayIndex)
                }
                className="w-[35px] h-[30px] border border-[#00000092] cursor-pointer"
                disabled={!task || slots.filter(Boolean).length < 5 }
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Table;
