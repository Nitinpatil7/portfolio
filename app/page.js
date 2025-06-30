import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
const page = () => {
  return (
    <>
    <div className='bg-black'>
       <main>
      <Navbar />
      <section id="home" className=" scroll-mt-24">
        <Home/>
      </section>

      <section id="skills" className=" scroll-mt-24">
        <Skills />
      </section>

      <section id="projects" className=" scroll-mt-24">
        <Projects />
      </section>

      <section id="about" className=" scroll-mt-24">
        <About />
      </section>

      <section id="contact" className=" scroll-mt-24">
        <Contact />
      </section>
       <section id="footer" className=" scroll-mt-24">
        <Footer />
      </section>
    </main>
    </div>
    </>
  )
}

export default page
