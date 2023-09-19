import React from 'react'
import arrow from "../assets/arrow.svg"



const Work = ({title,img,description,name}) => {
  return (
   
        <div className='mx-auto max-w-7xl flex py-10 space-x-[20px] items-center grid grid-cols-1 gap-x-8 gap-y-6  leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
          <div className='w-full'>
          <img src={img} alt={name} className=' rounded-md '/>

          </div>

        <div className='w-2/3' >
        <div className='space-y-[32px]  py-[40px]  '>
        <h2 className='text-lg border-l-2 border-tertiary px-3  sm:text-xl'>{title}</h2>
        <h1 className='text-lg text-darktext leading-8'>{description}</h1>
      </div>
     
        </div>
        
        </div>
   
  )
}

export default Work