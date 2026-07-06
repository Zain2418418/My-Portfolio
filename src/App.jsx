import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import About from './Components/About';
import Skills from './Components/Skills';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Projects from './Components/Project';

export default function App() {
  // 1. Centralized Theme State Controller
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle utility handler
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    // 2. Pure app wrapper ka layout dynamic variables ke sath
    <div className={`min-h-screen antialiased transition-colors duration-500 ${
      isDarkMode ? 'bg-[#14342b] text-[#fbf9f4]' : 'bg-[#fbf9f4] text-[#14342b]'
    }`}>
      
      {/* 3. Passing states directly to Navbar */}
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      
      {/* 4. Prop tracking standard inject to all internal features */}
      <Hero isDarkMode={isDarkMode} />
      <Stats isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Reviews isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      
    </div>
  );
}