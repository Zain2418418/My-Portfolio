import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      title: "E-Side Web Clone",
      category: "Full-Stack Web App",
      description: "A pixel-perfect clone of the E-Side application featuring dynamic layout handling, fully responsive flex grids, and seamless interactive core states.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      liveLink: "https://enside-clone.vercel.app/",
      image: "/enside.png"
    },
    {
      title: "Netflix Streaming Clone",
      category: "Entertainment UI / UX",
      description: "Highly polished Netflix frontend featuring real-time TMDB dynamic movie rows integration, smooth lazy loading images, video preview models, and interactive hover scales.",
      tech: ["React.js", "Tailwind CSS", "TMDB API"],
      liveLink: "https://netflix-clone-html-css-ruddy.vercel.app/",
      image: "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
    },
    {
      title: "My Portfolio",
      category: "FinTech Data Tracking",
      description: "A premium modern financial dashboard utilizing live webhooks data to render cryptocurrency market analysis graphs with crisp transitions.",
      tech: ["React.js", "Tailwind CSS", "JavaScript.js"],
      liveLink: "https://my-portfolio-six-teal-20.vercel.app/",
      image: "/portfolio.png"
    }
  ];

  return (
    <section id="projects" className="w-full bg-[#fbf9f4] text-[#14342b] py-14 md:py-20 px-6 sm:px-8 md:px-16 border-t border-stone-200">
      <div className="mx-auto max-w-5xl">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-stone-500">
            <span className="w-4 h-[1.5px] bg-[#14342b]/60"></span>
            <span>My Showcase</span>
            <span className="w-4 h-[1.5px] bg-[#14342b]/60"></span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            My Projects<span className="text-amber-600">.</span>
          </h2>
        </div>

        {/* PROJECTS GRID - Changed to items-start to avoid forced vertical stretching */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-[1.8rem] border-2 border-[#14342b]/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div>
                {/* PROJECT IMAGE OVERLAY - Reduced height significantly using 21/9 aspect ratio */}
                <div className="relative overflow-hidden aspect-[21/9] md:aspect-[16/8] border-b-2 border-[#14342b]/80">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#14342b]/5 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* PROJECT INFO CONTENT - Slightly reduced padding for a tighter look */}
                <div className="p-4 sm:p-5 space-y-2">
                  <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* TECH TAGS & LIVE DEMO CTA BUTTON */}
              <div className="p-4 sm:p-5 pt-0 space-y-3">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[8px] font-bold bg-[#14342b]/5 text-[#14342b] px-2 py-0.5 rounded-md tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo Action Trigger */}
                <a 
                  href={project.liveLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-2 px-4 rounded-xl bg-[#14342b] text-[#fbf9f4] font-bold text-xs tracking-wider hover:bg-transparent hover:text-[#14342b] border border-transparent hover:border-[#14342b]/80 transition-all duration-300 shadow-sm"
                >
                  Launch Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}