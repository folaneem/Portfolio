import React from 'react'
import profile from "../assets/profile.svg"
import arrow from "../assets/arrow.svg"
// import flag from "../assets/flag.svg"

const Hero = () => {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:py-6 lg:py-[100px] flex justify-between items-left'>
      <div>
      <img src={profile} alt="profile"  />
      </div>
      <div className='max-w-4xl lg:space-y-[64px] sm:space-y-[32px]'>
      <div className='lg:space-y-[40px] sm:space-y-[32px]'>
        <h2 className='border-l-2 border-tertiary px-3 text-base'>INTRODUCTION</h2>
        <h1 className='text-6xl   leading-tight'>A UX/UI Designer and Product Designer based in Nigeria </h1>
        {/* <img src={flag} alt='flag'/> */}
      </div>
      <div className='space-y-[40px]'>
      <div className='lg:space-y-[20px] sm:space-y-[12px]'>
        <h2 className='text-secondary text-lg'>Hello, I’m Olajide Neemat Folasayo  ❤️</h2>
        <p className='text-lg text-darktext'>Creating meaningful digital experiences that seamlessly blend aesthetics with functionality is not just my profession; it's my passion. With a keen eye for detail, a deep understanding of user-centered design, and a knack for transforming ideas into captivating interfaces, I'm dedicated to crafting digital solutions that make a difference.</p>
      </div>
      <div>
        <button className='px-8 py-3 bg-secondary flex space-x-[48px]'><span>Read Her CV/Resume</span> <img src={arrow} alt="profile"  /> </button>
      </div>

      </div>
      
      </div>
     
      
     </div>
  )
}

export default Hero