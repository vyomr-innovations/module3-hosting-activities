

import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen flex justify-start p-5 items-center flex-col gap-4 bg-[#F8FAFC]'>
    <h2 className='min-h-[80px] text-center text-3xl font-bold text-black'>Bio Mimicry</h2>

  <div className='rounded-lg overflow-hidden w-[800px] h-[400px] '>
    <video src="/biomimicry-video.mp4" controls autoPlay className='w-full h-full'></video>
  </div>
</div>
  )
}

export default Page
