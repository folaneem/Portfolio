import React from 'react'
import { skill } from '../constants';

const Skills = () => {
  return (
    <div id="skills" className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8  '>

    <div className='mx-auto max-w-2xl text-center pb-24'>
            <h2 className='text-3xl  tracking-tight text-white sm:text-4xl'>My Skills 🛠️</h2>
            <h1 className='mt-2 text-lg leading-8 text-darktext '> Here are some of my key skills and competencies </h1>
          </div>

          <div className="mx-auto max-w-7xl  lg:max-w-7xl ">
          <dl className="grid max-w-7xl md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16 ">
            {skill.map((feature) => (
              <div key={feature.id} className="relative  pl-16 bg-[linear-gradient(152deg,_#fff,_#385341_30%,_#385341,_#fff)] px-4 py-4 rounded-md  ">
                <dt className="text-base text-white hover:text-yellow-300 cursor-pointer  ">
                  
                  {feature.title}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        

          </div>
  )
}

export default Skills