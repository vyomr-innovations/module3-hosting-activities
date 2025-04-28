"use client";
import Image from "next/image";
import spinData from "@/carouselC19-L3-A1/spinData.json";
import { BiSolidLeftArrow } from "react-icons/bi";
import { useRef, useState } from "react";
import Dailog from "@/components/dailog";

const SpinWeel = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [alrtMssg, setAlrtMssg] = useState("");
  const [open, setOpen] = useState(false);

  const wheelRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const handleSpinStart = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomDeg = Math.floor(Math.random() * 360);
    const fullRotations = 2 * 360;
    const newRotation = rotationAngle + fullRotations + randomDeg;

    setRotationAngle(newRotation);

    setTimeout(() => {
      const finalRotation = newRotation % 360;

      const wheel = wheelRef.current;
      const arrow = arrowRef.current;

      if (!wheel || !arrow) {
        console.error("wheel or arrow ref is missing");
        return;
      }

      const wheelRect = wheel.getBoundingClientRect();
      const arrowRect = arrow.getBoundingClientRect();

      const cx = wheelRect.left + wheelRect.width / 2;
      const cy = wheelRect.top + wheelRect.height / 2;

      const px = arrowRect.left + arrowRect.width / 2;
      const py = arrowRect.top + arrowRect.height / 2;

      const angleToPointerRad = Math.atan2(py - cy, px - cx);
      let angleToPointerDeg = (angleToPointerRad * 180) / Math.PI;
      if (angleToPointerDeg < 0) angleToPointerDeg += 360;

      const pointerRelativeAngle = (360 - finalRotation + angleToPointerDeg) % 360;
      const segmentAngle = 360 / spinData.length;
      const selectedIndex = Math.floor(pointerRelativeAngle / segmentAngle);
      const selectedText = spinData[selectedIndex]?.text;

      console.log({
        finalRotation,
        angleToPointerDeg,
        pointerRelativeAngle,
        selectedIndex,
        selectedText,
      });

      setAlrtMssg(selectedText);
      setOpen(true);
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen p-5 bg-[#F8FAFC] overflow-hidden flex justify-center items-center flex-col">
      <h3 className="font-bold text-center text-black text-4xl">Spin the wheel</h3>
      <div className="relative">
        {/* Arrow */}
        <div
          ref={arrowRef}
          className="arrow absolute top-[50%] right-[-15px] flex justify-center items-center text-black text-[30px] z-10"
        >
          <span>
            <BiSolidLeftArrow />
          </span>
          <button
            className="bg-violet-900 text-white rounded-lg px-5 py-1 text-xl cursor-pointer"
            onClick={handleSpinStart}
          >
            Spin
          </button>
        </div>

        {/* Wheel */}
        <div
          ref={wheelRef}
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transition: isSpinning ? "transform 5s ease-out" : "none",
          }}
          className="relative overflow-hidden min-h-[500px] min-w-[500px] rounded-full flex justify-around items-center"
        >
          <Image src="/C18Images/spin_Wheel_Pai_2.png" fill alt="spin image" />
          {spinData.map((item, index) => (
            <span
              key={index}
              style={{
                transform: `rotate(${item.rotate}deg)`,
                transformOrigin: "center",
              }}
              className="text-black text-xl font-bold w-[160px] text-center"
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
      <Dailog val={alrtMssg} open={open} setOpen={setOpen} />
    </div>
  );
};

export default SpinWeel;
