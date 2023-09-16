import React from 'react'
import arrow from "../assets/arrow.svg"



const Work = ({title,img,description,name}) => {
  return (
   
        <div className='mx-auto max-w-7xl flex py-10 space-x-[100px] '>
        <img src={img} alt={name} className='w-3/5'/>

        <div className='w-1/2' >
        <div className='lg:space-y-[40px] sm:space-y-[32px] py-[40px]'>
        <h2 className='border-l-2 border-tertiary px-3 text-base'>{title}</h2>
        <h1 className='text-lg text-darktext leading-tight'>{description}</h1>
      </div>
      <div>
          <button className='px-8 py-3 bg-secondary flex space-x-[48px]'><span>Visit Website</span> <img src={arrow} alt="profile" /></button>
        </div>
        </div>
        
        </div>
   
  )
}

export default Work