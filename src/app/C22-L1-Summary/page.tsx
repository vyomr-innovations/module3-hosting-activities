

import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen flex justify-start p-5 items-center flex-col gap-4 bg-[#F8FAFC]'>
    <h2 className='min-h-[80px] text-center text-3xl font-bold text-black'>Video to revise</h2>

  <div className='rounded-lg overflow-hidden'>
  <iframe width="800" height="400" src="https://www.youtube.com/embed/EVwsyzJmTHM?si=N5HNfRuXol3DSTMX" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
</div>
  )
}

export default Page
