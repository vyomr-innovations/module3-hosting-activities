"use client"
import React, { useState } from 'react'
import Start from './start'
import SpinWeel from './spinWeel'

const C19L3A1 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("SpinWeel")

    return <>
    {isFirstScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
    {isFirstScreen == "SpinWeel" && <SpinWeel />}
      
    </>
  
}

export default C19L3A1
