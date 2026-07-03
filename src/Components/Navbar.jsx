import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#fbf9f4] text-[#14342b] border-b border-stone-200 sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        
        {/* LEFT SIDE: */}
        <div className="group flex flex-shrink-0 items-center space-x-2 sm:space-x-3 cursor-pointer p-1.5 sm:p-2 border border-transparent hover:border-[#14342b]/60 rounded-xl transition-all duration-300">
          <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 overflow-hidden rounded-full border border-[#14342b]/20 bg-stone-200">
            <img 
              src="/logo.jpg" 
              alt="Zain Ul Abedeen" 
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#14342b] whitespace-nowrap">
            <span className="inline sm:hidden xs:inline">Zain</span>
            <span className="hidden sm:inline">Zain Ul Abedeen</span>
            <span className="text-amber-600">.</span>
          </span>
        </div>

        {/* CENTER SIDE: Desktop Menu Links */}
        <div className="hidden space-x-2 font-sans text-sm font-medium tracking-wide text-stone-600 lg:flex">
          <a href="#home" className="px-3 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl text-[#14342b] font-semibold transition-all duration-300">Home</a>
          <a href="#about" className="px-3 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b] transition-all duration-300">About Me</a>
          <a href="#services" className="px-3 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b] transition-all duration-300">Skills</a>
          <a href="#portfolio" className="px-3 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b] transition-all duration-300">Projects</a>
          <a href="#reviews" className="px-3 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b] transition-all duration-300">Reviews</a>
          
          <a href="#contact" className="px-3 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b] transition-all duration-300">Contact</a>
        </div>

        {/* RIGHT SIDE: */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          
          {/* Moon Icon Button */}
          <button
            className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl border border-stone-300 bg-transparent text-stone-700 hover:border-[#14342b]/60 transition-all duration-300 relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-stone-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25c0 5.385 4.365 9.75 9.75 9.75 4.523 0 8.354-3.209 9.272-7.498Z" />
            </svg>
            <span className="absolute bottom-1 h-1 w-1 rounded-full bg-amber-600"></span>
          </button>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 sm:h-10 px-3 sm:px-4 flex-shrink-0 items-center justify-center rounded-xl bg-[#14342b] text-[#fbf9f4] font-sans text-xs sm:text-sm font-bold tracking-wider hover:bg-transparent hover:text-[#14342b] border border-transparent hover:border-[#14342b]/60 transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            <svg className="w-4 h-4 sm:mr-1.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="hidden sm:inline">in</span>
          </a>

          {/* HAMBURGER ICON BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-stone-300 text-[#14342b] hover:border-[#14342b]/60 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* MOBILE & TABLET DROPDOWN DRAWER */}
      {isOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#fbf9f4] px-4 py-4 space-y-2 font-sans text-sm font-medium text-stone-600">
          <a onClick={() => setIsOpen(false)} href="#home" className="block px-4 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl text-[#14342b] font-semibold">Home</a>
          <a onClick={() => setIsOpen(false)} href="#about" className="block px-4 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b]">About Me</a>
          <a onClick={() => setIsOpen(false)} href="#services" className="block px-4 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b]">Skills</a>
          <a onClick={() => setIsOpen(false)} href="#portfolio" className="block px-4 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b]">Project</a>
          <a onClick={() => setIsOpen(false)} href="#reviews" className="block px-4 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b]">Reviews</a>
          
          <a onClick={() => setIsOpen(false)} href="#contact" className="block px-4 py-2 border border-transparent hover:border-[#14342b]/60 rounded-xl hover:text-[#14342b]">Contact</a>
        </div>
      )}
    </nav>
  );
}