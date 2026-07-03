import React from 'react';
import Navbar from './components/Navbar';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import About from './Components/About';
import Skills from './Components/Skills';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Projects from './Components/Project';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f4] text-[#14342b] antialiased">
      <Navbar />
      <Hero/>
      <Stats/>
      <About/>
      <Skills/>
      <Projects/>
      <Reviews/>
      <Contact/>
    </div>
  );
}