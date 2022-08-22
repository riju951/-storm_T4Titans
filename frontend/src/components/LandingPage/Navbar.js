import React from 'react'

export default function Navbar() {
  return (
      <div className='className="z-10 relative'>
          <div className='flex justify-between items-center'>
             <div className='p-5 text-4xl font-bold text-white py-2 ml-2 mt-2 rounded-full'>weGuide</div>
          <div className='space-x-4 text-2xl cursor-pointer font-semibold '>
              <a className=' text-white text-2xl mt-7 py-2 px-4 rounded-full '>Home</a>
              <a className=' text-white text-2xl mt-7 py-2 px-4 rounded-full '>Learn</a>
              <a className=' text-white text-2xl mt-7 py-2 px-4 rounded-full '>About Us</a>
              </div> 
              <div className='space-x-4 text-2xl cursor-pointer font-semibold '>
                  <a className='bg-gray-500 text-white text-2xl py-2 px-4 rounded-full mt-4 '> Login</a>
                  <a className='  text-white text-2xl  py-2 px-4 rounded-full'>Sign Up</a>
              </div>
          </div>
          
    </div>
  )
}
