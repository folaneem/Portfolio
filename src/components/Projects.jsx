import React from 'react'
import { projectLinks,eachWork } from '../constants';
import Work from './work';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Projects = () => {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:py-6 lg:py-[100px] '>
      <div></div>
<ul className='list-none sm:flex bg-nav space-x-4 py-2 max-w-[322px]  '>
  {projectLinks.map((project,index) => (
    <li key={project.id} >
      <a href={project.href}
       className={classNames(
        project.current ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
        ' px-6 py-2 text-md font-medium '
      )}
      aria-current={project.current ? 'page' : undefined}
       >{project.title}</a>
    </li>
  ))}
</ul>



<div className="mx-auto max-w-7xl">
      {eachWork.map((card) => <Work key={card.id} {...card} />)}
    </div>

    </div>
  )
}

export default Projects;