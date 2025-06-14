import FooterBar from "@/layoutC20-L3-A4/FooterBar";
import Table from "@/layoutC20-L3-A4/Table";
import Total from "@/layoutC20-L3-A4/Total";
import Weeks from "@/layoutC20-L3-A4/Weeks";
import React from "react";
interface TaskSlot {
  name: string;
  color: string;
}

// NEW: allow null in TaskSlot
type TaskSlotOrNull = TaskSlot | null;

interface MainLayoutProps {
  slots: TaskSlotOrNull[];
  removeTaskFromSlot: (slotIndex: number) => void;
  DAYS: string[];
  completionMatrix: boolean[][];
  toggleTaskCompletion: (dayIndex: number, slotIndex: number) => void;
  calculateDayTotal: (dayIndex: number) => number;
  calculateGrandTotal: () => number;
  setGoal: (goal: string) => void;
  goal: string;
}

const MainLayout = ({
  slots,
  removeTaskFromSlot,
  DAYS,
  completionMatrix,
  toggleTaskCompletion,
  calculateDayTotal,
  calculateGrandTotal,
  setGoal,
  goal,
}: MainLayoutProps) => {
  return (
    <>
      <div
        className="  rounded-lg border border-#FACC15-500 "
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div>
          <div className="flex items-center justify-center gap-6 p-2">
            <div>
              <Weeks />
              <div>
                <Table
                  slots={slots}
                  removeTaskFromSlot={removeTaskFromSlot}
                  DAYS={DAYS}
                  completionMatrix={completionMatrix}
                  toggleTaskCompletion={toggleTaskCompletion}
                />
                <Total
                  DAYS={DAYS}
                  calculateDayTotal={calculateDayTotal}
                  calculateGrandTotal={calculateGrandTotal}
                />
              </div>
            </div>
          </div>
        </div>
        <FooterBar goal={goal} setGoal={setGoal} />
      </div>
    </>
  );
};

export default MainLayout;
