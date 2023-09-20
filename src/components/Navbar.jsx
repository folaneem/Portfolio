import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

 
  return (
    <nav className=' w-full flex py-6 justify-between items-left navbar mx-auto max-w-7xl px-2 sm:px-6 lg:py-8  px-6  lg:px-8 ' >
      

<h1 className='font-kenia text-4xl'>Neemat.Design</h1>

{/* <ul className='list-none sm:flex hidden justify-end items-center flex bg-nav space-x-4 '>
  {navLinks.map((nav,index) => (
    <li key={nav.id} >
      <a href={nav.href}
       className={classNames(
        nav.current ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
        ' px-6 py-2 text-md font-medium  '
      )}
      aria-current={nav.current ? 'page' : undefined}
       >{nav.title}</a>
    </li>
  ))}
</ul> */}

 
      </nav>
  )
}

export default Navbar;


