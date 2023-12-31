import React from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'About', href: '#about',},
  { name: 'Skills', href: '#skills',  },
  { name: 'Projects', href: '#projects', },
  { name: 'FAQs', href: '#faq',  },
  { name: 'Contact', href: '#contact',  },
]




export default function Example() {
  return (
    <>
      
      <div className="min-h-full">
        <Disclosure as="nav"  >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 ">
                  <div className=" flex items-center justify-between py-4">
                     
                    <div >
                          <h1 className='font-kenia text-4xl hover:text-yellow-300' href="/">Neemat.Design</h1>

                    </div>

                    <div className="hidden md:block ">
                      <div className=" flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className= 'text-gray-300  hover:text-yellow-300  px-3 py-2 text-base font-medium'
                            
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>

                  </div>
                  
                  
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className=
                         'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-lg font-medium'
                      
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

       
      </div>
    </>
  )
}

