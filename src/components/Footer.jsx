import React from 'react'

const Footer = () => {
  return (
    <footer  className=" mx-auto max-w-7xl px-6 lg:py-24 py-20 lg:pb-2 lg:px-8">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-left pb-14">
      <div className=' w-full sm:w-1/2'>
      <h1 className='font-kenia text-4xl py-4'>Neemat.Design</h1>  
        <p className="text-darktext">A product designer who is also an expert in user experience and user interface design, and who is committed to creating digital products that are successful overall.</p>
  
      </div>

      <div className="flex flex-col space-y-4 pt-8">
        <a
          href="https://twitter.com/folaneem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary hover:underline "
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/neemat-olajide-714728204"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://www.behance.net/neematolajide"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary hover:underline"
        >
          Behance
        </a>
        <a
          href="mailto:folaneem@gmail.com"
          className="text-tertiary hover:underline"
        >
          Email
        </a>
      </div>
    </div>

    <div className='max-w-7xl pt-6 border-t-2 border-black text-center '>
        <p className="text-white mb-4  ">Designed and Developed with love by Neemat❤️ </p>
  
      </div>
  </footer>




  )
}

export default Footer;