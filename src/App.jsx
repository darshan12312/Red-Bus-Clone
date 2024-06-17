import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SwiperCard from './Components/SwiperCard'
import About from './Components/About'
import Flag from './Flag'
import Number from './Components/Number'
import Footer from './Components/Footer'


function App() {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>      
      <div className='mt-[-5vw] z-0 '>
      <SwiperCard/>
      </div>
      <About/>
      <Flag/>
      <Number/>
      <Footer/>
    </div>
  )
}

export default App
