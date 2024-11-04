import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    
    
    <div className='flex justify-between items-center pl-20'>
      <div> 
        <h1 className='font-bold font-serif text-4xl mb-2'>IMPECCABLE</h1>
        <h1 className='font-bold font-serif text-4xl mb-2'>CRAFTSMANSHIP AND </h1>
        <h1 className='font-bold font-serif text-4xl mb-2'> FINESSE</h1>
      
        <p className='text-lg mt-10 font-serif' style={{color:'#A29875'}}>An example of intricate workmanship and detail, elegant</p>
             <p className='text-lg font-serif' style={{color:'#A29875'}}>necklaces and long and short chains form a part of our</p>
             <p className='text-lg font-serif' style={{color:'#A29875'}}> desirable collection.</p>

             <button className='text-md mt-10 bg-[#A29875] p-2 pr-8 pl-8 rounded-md text-white'>Explore Now</button>
             
      </div>
      
      <Image
      src= "/figma.png"
      alt='img'
      width={462}
      height={647}
      className=' p-16 float-right  '/>
    </div>
  )
}

export default Hero
