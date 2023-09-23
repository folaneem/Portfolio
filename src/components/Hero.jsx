import React from 'react'
import profile from "../assets/profile.svg"
import arrow from "../assets/arrow.svg"

// import flag from "../assets/flag.svg"

const Hero = () => {
  return (
    <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8  lg:flex justify-between items-left    ' id="about">
      <div className='pb-[40px]'>
      <img src={profile} alt="profile"  />


      </div>
      <div className='max-w-4xl space-y-[32px]'>
      <div className='space-y-[32px]'>
        <h2 className='border-l-2 border-tertiary px-3 text-base'>INTRODUCTION</h2>
        
        <h1 className='text-3xl  leading-tight sm:text-6xl'>A UX/UI Designer and Product Designer based in Nigeria </h1>
        {/* <img src={flag} alt='flag'/> */}
      </div>
      <div className='space-y-[40px]'>
      <div className='space-y-[20px]'>
        <h2 className='text-secondary text-lg'>Hello, I’m Olajide Neemat Folasayo  ❤️</h2>
        <p className='text-lg text-darktext leading-8'>Creating meaningful digital experiences that seamlessly blend aesthetics with functionality is not just my profession; it's my passion. With a keen eye for detail, a deep understanding of user-centered design, and a knack for transforming ideas into captivating interfaces, I'm dedicated to crafting digital solutions that make a difference.</p>
      </div>
      <div>
        <a href="/resume.pdf">
        <button  className='px-8 py-3 bg-secondary flex space-x-[48px] rounded-md hover:bg-green-800'><span>Read Her CV/Resume</span> <img src={arrow} alt="profile"  /> </button> </a>
      </div>
      <div className='pb-[40px]'>
      </div>
      

      </div>
      
      </div>
     
      
     </div>
  )
}

export default Hero