import React from 'react'

export default function Started() {
  return (
      <div className='flex relative justify-end z-20 h-screen'>
          <div className='p-10 text-right'>
              <div className='text-6xl text-white'>
                  <div className='text-gray-3000 font-extrabold text-8xl'>
                      weGuide
                  </div>
                  Onwards and Upwards 
              </div>
              <div className='text-md m-2 text-gray-400 mt-6'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 <br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br> It has survived not only five centuries, but also the leap into electronic typesetting,<br>
                 </br> remaining essentially unchange 
              </div>
              <div className='flex cursor-pointer justify-end text-2xl space-x-4 mt-3'>
                  <button className='hover:bg-gray-900 text-white text-2xl mt-7 py-2 px-4 rounded-full'>Learn More</button>
              <button className='bg-gray-600 text-white text-2xl mt-7 py-2 px-4 rounded-full'>Get Started</button>
              </div>
              
          </div>
           
    </div>
  )
}
