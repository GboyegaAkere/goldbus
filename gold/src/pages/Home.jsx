import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Next from '../components/Next'
import Services from '../components/Services'
import HowWeWork from '../components/HowWeWork'
import Testimonials from '../components/Textimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <HowWeWork/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home