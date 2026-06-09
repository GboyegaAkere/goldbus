import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Next from '../components/Next'
import Services from '../components/Services'
import HowWeWork from '../components/HowWeWork'
import Testimonials from '../components/Textimonials'
import Footer from '../components/Footer'
import Products from '../components/Products'
import CEO from '../components/Ceo'

const Home = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <CEO/>
      <HowWeWork/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home