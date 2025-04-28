import React from 'react'
type myBtnProps ={
    value:string;
    screenVal:string
    setIsFirstScreen:(value:string)=>void
}
const StartBtn = ({value,setIsFirstScreen,screenVal}:myBtnProps) => {
  return (
  
    <h3  className="text-[30px] border border-black rounded-lg px-8 py-1  shadow-[#000000b9] bg-yellow-400 hover:bg-yellow-500  cursor-pointer text-black transition-all ease-in"
     onClick={()=>setIsFirstScreen(screenVal)} >{value}</h3>
 
  )
}

export default StartBtn
