import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen p-5 flex justify-start flex-col items-center gap-10'>
        <h1 className='text-black text-center text-3xl font-bold '>Transform to be Assertive</h1>
        <div>
            <ul className='list-disc p-2 space-y-4'>
                <li className='text-black text-xl'><span className='font-bold'>Step 1: </span> Read the non-verbal cues that communicate assertive behavior</li>
                <li className='text-black text-xl'><span className='font-bold'>Step 2: </span>  Refer to the reminders for being assertive</li>
                <li className='text-black text-xl'><span className='font-bold'>Step 3: </span> State an example of your behavior</li>
            </ul>
        </div>

        <Image src="/C23Images/Am-I-Assertive.png" width={900} height={200} alt='hosting img '/>
      
    </div>
  )
}

export default Page
