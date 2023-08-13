import React from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Footer />
   </>
  )
}

export default App