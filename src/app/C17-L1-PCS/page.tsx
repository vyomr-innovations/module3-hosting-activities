import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen flex justify-center gap-2 items-center flex-col p-5'>
        <h3 className='text-black text-3xl font-bold text-center '>Circle the different object</h3>
        <Image src="/C17Images/visual_differentiation_shapes.png" width={500} height={100} alt='C17Images'/>
      
    </div>
  )
}

export default Page
