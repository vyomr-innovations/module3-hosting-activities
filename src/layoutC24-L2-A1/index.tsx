
"use client"
import React, { useState } from 'react'
import MainScreen from './mainScreen'
import Result from './result'

const LayoutC24L2A1 = () => {
    const [isFirstScreen,setIsfirstScreen]=useState("mainScreen")
  return (
    <div>
        {isFirstScreen == "mainScreen" && <MainScreen setIsfirstScreen={setIsfirstScreen}/>}
        {isFirstScreen == "result" && <Result/>}
      
    </div>
  )
}

export default LayoutC24L2A1
