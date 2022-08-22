import React from 'react'
import Navbar from './Navbar'
import Started from './Started'
import Blogs from './Blogs'
import Footer from './Footer'
export default function Home() {
  return (
      <div className=''>
          <img className='h-screen w-full -z-1 fixed bg-opacity-70'
              src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg" />
          <Navbar />
          <Started />
          <Blogs />
          <Footer/>
          </div>
  )
}
