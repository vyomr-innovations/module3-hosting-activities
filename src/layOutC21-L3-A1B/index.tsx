"use client";
import { useState } from "react";
import MainScreen from "./mainScreen";
import Result from "./result";

const LayOutC21L3A1B = () => {
    const [isFirstScreen,setIsfirstScreen]=useState("mainScreen")
    return (
    <div>
        {isFirstScreen == "mainScreen" && <MainScreen setIsfirstScreen={setIsfirstScreen}/>}
        {isFirstScreen == "Result" && <Result/>}
      
    </div>
  )
}
export default LayOutC21L3A1B;
