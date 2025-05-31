import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";
type myProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const Welldone = ({ open, setOpen }: myProps) => {
  const { width, height } = useWindowSize();
  const [sound, setSound] = useState<HTMLAudioElement>();
  useEffect(() => {
    setSound(new Audio("/sound/crowd.mp3"));
  },[]);
  if (open) {
    sound?.play();
  } else {
    sound?.remove();
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="flex justify-center items-center  w-[450px]">
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription className="text-2xl text-center text-white"></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="min-w-[200px]  flex justify-center items-center flex-col ">
            <Image
              src="/Well_Done.jpg"
              width={200}
              height={100}
              alt="well done image"
            />
            <h1 className="text-center text-3xl font-bold pb-10 text-black ">
              Well Done
            </h1>
            <button
              onClick={() => setOpen(false)}
              className="text-center text-xl cursor-pointer rounded-lg px-10 text-white py-2 bg-black "
            >
              Close
            </button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
      {open ? (
        <Confetti width={width} height={height} className={` w-full h-full `} />
      ) : (
        ""
      )}
    </AlertDialog>
  );
};

export default Welldone;
