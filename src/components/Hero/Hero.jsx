import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
<div className='w-full h-screen bg-gray-800 flex flex-col sm:flex-row text-white' id='home'>
    <div className='w-full sm:w-1/2 h-full bg-gray-800 flex flex-col p-8  justify-center items-center'>
          <h2 className='font-mono  text-4xl font-extrabold mb-10'>Digital Agency</h2>
          <p className='font-mono justify-center items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aut facere ad excepturi nam culpa a, voluptate in, maxime dicta architecto exercitationem eveniet beatae veniam quod corrupti reiciendis dolorum quasi?</p>
    </div>
    <div className='w-full sm:w-1/2 h-full flex justify-center items-center'>
<img src="image-removebg-preview.png" alt=""  className='w-2/3'/>
    </div>
</div>





)
}

export default Hero