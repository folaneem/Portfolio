import React from 'react'
import {eachWork } from '../constants';
import Work from './work';

const Projects = () => {
  return (
    <div id="projects" className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 '>

<div className='pb-20'>
        <h2 className='text-3xl  tracking-tight text-white sm:text-4xl'>Projects 💼</h2>
        <h1 className='mt-2 text-lg leading-8 text-darktext'>Here you will find some of the personal and clients projects that I've worked on. </h1>
        {/* <img src={flag} alt='flag'/> */}
      </div>




<div className="mx-auto max-w-7xl flex flex-col  ">
      {eachWork.map((card) => <Work key={card.id} {...card} />)}
    </div>

    </div>
  )
}

export default Projects;