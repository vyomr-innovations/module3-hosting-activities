"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import EmojiData from "@/layoutC22-L1-A2/emojiData.json"
import  nagativeEmotions from "@/layoutC22-L1-A2/nagitivEmotion.json"
import  positiveEmotions from "@/layoutC22-L1-A2/positiveEmotion.json"

const LayoutC22L1A2 = () => {
    const [activIndex,setActivIndex]=useState<number>()

    const handleSelect = (index:number)=>{
        setActivIndex(index)

    }
  return (
    <div className='flex justify-start p-8 items-center gap-5 flex-col bg-[#F8FAFC]'>
      <h3 className='text-3xl text-black text-center font-bold'>Emotions and Activities</h3>
      <div className="grid grid-cols-12 place-items-center w-full gap-2">


      <div className="col-span-12 w-full rounded-lg border border-black bg-violet-100 flex justify-center items-center flex-col gap-4 p-2">
            <h3 className='text-xl text-black'>Select emotions you drew on paper</h3>
            <div className="grid grid-cols-12 gap-5 w-full place-items-center">
                {
                    EmojiData.map((item,index)=>(

                <div className={`${activIndex === index ? "border border-black":""} col-span-3 flex justify-center items-center flex-col gap-1 p-2 rounded-lg cursor-pointer`} key={index} onClick={()=>handleSelect(index)}>
                    <Image className='rounded-full' src={item.emoji} width={100} height={100} alt='emoji'/>
                    <span className='text-center'>{item.text}</span>
                </div>
                    ))
                }
            </div>
            
        </div>
         <div className="col-span-6 w-full rounded-lg border border-black bg-violet-100 flex justify-center items-center flex-col gap-4 p-2">
            <h3 className='text-xl text-black'>Emotions I feel in difficult situations</h3>
            <div className="grid grid-cols-12 gap-5 w-full place-items-center">
                {
                    nagativeEmotions.map((item,index)=>(

                <div className={`${activIndex === index ? "border border-black":""} col-span-3 flex justify-center items-center flex-col gap-1 p-2 rounded-lg cursor-pointer`} key={index} onClick={()=>handleSelect(index)}>
                    <Image className='rounded-full' src={item.emoji} width={100} height={100} alt='emoji'/>
                    <span className='text-center'>{item.text}</span>
                </div>
                    ))
                }
            </div>
            
        </div>

         <div className="col-span-6 w-full rounded-lg border border-black bg-violet-100 flex justify-center items-center flex-col gap-4 p-2">
            <h3 className='text-xl text-black'>Emotions I would like to feel.</h3>
            <div className="grid grid-cols-12 gap-5 w-full place-items-center">
                {
                    positiveEmotions.map((item,index)=>(

                <div className={`${activIndex === index ? "border border-black":""} col-span-3 flex justify-center items-center flex-col gap-1 p-2 rounded-lg cursor-pointer`} key={index} onClick={()=>handleSelect(index)}>
                    <Image className='rounded-full' src={item.emoji} width={100} height={100} alt='emoji'/>
                    <span className='text-center'>{item.text}</span>
                </div>
                    ))
                }
            </div>
            
        </div>

        <div className="col-span-12 w-full rounded-lg border border-black bg-violet-100 flex justify-center items-center flex-col gap-4 p-5">
            <h3 className='text-xl text-black'>What  activities bring joy and make me feel happy and trusting?</h3>
            <textarea placeholder='write here...' className='min-w-[400px] min-h-[80px] border text-center border-gray-400 rounded-lg'/>
        </div>

        <div className="col-span-12 w-full p-5 rounded-lg border border-black bg-violet-100 flex justify-center items-center flex-col gap-4 ">
            <h3 className='text-xl text-black'>Complete the sentence by selecting from the above.</h3> 
            
            
            <h3 className='text-xl text-black'> When I feel <input type="text" className=' outline-none w-[150px] text-center border-b border-black ' placeholder='write here ' /> (emotion), I will <input type="text" className=' outline-none w-[150px] text-center border-b border-black ' placeholder='write here ' />  (activity), then I’ll feel <input type="text" className=' outline-none w-[150px] text-center border-b border-black ' placeholder='write here ' />  (positive emotion).</h3>
           
        </div>


        
      </div>
    </div>
  )
}

export default LayoutC22L1A2
