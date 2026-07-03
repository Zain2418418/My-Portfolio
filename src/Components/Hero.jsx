import React, { useState, useEffect } from 'react';

export default function Hero() {
  const designations = ["Software Engineer", "MERN Developer", "Next Js Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full bg-[#fbf9f4] text-[#14342b] py-10 md:py-16 px-8 md:px-16 overflow-hidden">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT BLOCK: Content, Blinking Name & Sliding Text */}
        <div className="space-y-5 md:max-w-md justify-self-start">
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-stone-500">
            <span className="w-6 h-[2px] bg-[#14342b]/60"></span>
            <span>Welcome to my creative space</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-none animate-pulse">
            Zain Ul <br /> Abedeen
          </h1>

          <div className="h-10 flex items-center overflow-hidden">
            <h2 
              key={currentIndex} 
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#14342b] transition-all duration-700 ease-out transform translate-x-0 opacity-100 animate-[slideIn_0.6s_ease-out]"
            >
              {designations[currentIndex]}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Highly focused front-end developer and designer committed to building pixel-perfect, interactive, and high-performance modern web interfaces.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-[#14342b] text-[#fbf9f4] font-semibold rounded-xl hover:bg-transparent hover:text-[#14342b] border border-transparent hover:border-[#14342b]/60 transition-all duration-300 shadow-md text-sm"
            >
              Hire Me ↗
            </a>
            <a 
              href="#portfolio" 
              className="px-5 py-2.5 border border-stone-300 hover:border-[#14342b]/60 rounded-xl font-semibold text-stone-700 hover:text-[#14342b] transition-all duration-300 text-sm"
            >
              View Portfolio ↗
            </a>
          </div>
        </div>

        {/* RIGHT BLOCK: Image Frame with Integrated Floating Badge */}
        <div className="relative flex justify-center md:justify-self-end w-full max-w-sm sm:max-w-[340px]">
          
          <div className="relative w-full aspect-square rounded-[2rem] border border-stone-200 shadow-xl bg-stone-100 animate-[float_4s_ease-in-out_infinite]">
            <img 
              src="/logo.jpg" 
              alt="Zain Ul Abedeen Portfolio" 
              className="w-full h-full object-cover rounded-[2rem] transform hover:scale-105 transition-transform duration-700"
            />
            
            {/* Soft Overlay shadow effect at base */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14342b]/10 via-transparent to-transparent pointer-events-none rounded-[2rem]"></div>

            {/* Floating Badge */}
            <div className="absolute bottom-4 -left-4 bg-white border border-stone-200 rounded-xl p-2.5 shadow-md flex flex-col min-w-[110px] transition-transform hover:-translate-y-1 duration-300 pointer-events-auto">
              <span className="font-serif font-bold text-xs text-[#14342b]">Top Rated</span>
              <span className="text-[9px] text-stone-500 font-medium whitespace-nowrap">Front-End Developer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}