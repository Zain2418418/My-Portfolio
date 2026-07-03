import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#fbf9f4] text-[#14342b] py-12 md:py-16 px-6 sm:px-8 md:px-16 overflow-hidden border-t border-stone-200">
      <div className="mx-auto max-w-5xl">
        
        {/* TOP SECTION: Centered Minimal Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-stone-500">
            <span className="w-4 h-[1.5px] bg-[#14342b]/60"></span>
            <span>Get To Know Me</span>
            <span className="w-4 h-[1.5px] bg-[#14342b]/60"></span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            About My Journey<span className="text-amber-600">.</span>
          </h2>
        </div>

        {/* BOTTOM SECTION: Bento-Style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* BIG CARD: MERN Developer Bio */}
          <div className="md:col-span-2 bg-[#14342b] text-[#fbf9f4] p-6 sm:p-8 rounded-[2rem] shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-xl group">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500/90">Who I Am</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium leading-tight">
                Crafting robust web logic with the MERN Stack framework.
              </h3>
              <p className="text-sm text-stone-200/90 font-sans leading-relaxed text-justify">
                I am a passionate MERN Stack Developer dedicated to creating highly interactive, pixel-perfect, and optimized web solutions. With a deep foundation in frontend architectures, functional programming, and data structures, I specialize in building scalable applications using React, Node.js, Express, and MongoDB. I thrive on translating complex UI/UX wireframes into functional, clean code while ensuring cross-browser seamless rendering and responsive precision.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center text-xs text-stone-300/70 font-mono">
              <span>// Based in Pakistan</span>
              <span className="group-hover:text-amber-500 transition-colors duration-300">Available for Projects ↗</span>
            </div>
          </div>

          {/* RIGHT COLUMN CARDS */}
          <div className="flex flex-col gap-6 md:col-span-1 justify-between">
            
            {/* Academic Card */}
            <div className="bg-white border-2 border-[#14342b]/80 p-6 rounded-[2rem] shadow-sm hover:border-[#14342b] transition-all duration-300 flex flex-col justify-between flex-1">
              <div className="space-y-2">
                <div className="h-8 w-8 rounded-xl bg-[#14342b]/5 flex items-center justify-center text-amber-600 font-bold text-sm">
                  🎓
                </div>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Education</span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#14342b] leading-tight">
                  Virtual University of Pakistan
                </h4>
              </div>
              <p className="text-xs text-stone-500 font-sans mt-4 pt-3 border-t border-[#14342b]/10">
                Bachelor of Science in Computer Science (BSCS) — <span className="font-semibold text-[#14342b]">Final Year</span>
              </p>
            </div>

            {/* Certification Card */}
            <div className="bg-white border-2 border-[#14342b]/80 p-6 rounded-[2rem] shadow-sm hover:border-[#14342b] transition-all duration-300 flex flex-col justify-between flex-1">
              <div className="space-y-2">
                <div className="h-8 w-8 rounded-xl bg-[#14342b]/5 flex items-center justify-center text-amber-600 font-bold text-sm">
                  📜
                </div>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Training</span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#14342b] leading-tight">
                  MERN Stack Specialization
                </h4>
              </div>
              <p className="text-xs text-stone-500 font-sans mt-4 pt-3 border-t border-[#14342b]/10">
                Advanced Development Deployment — <span className="font-semibold text-[#14342b]">Final Year Certification</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}