import React from 'react';

export default function Reviews() {
  const reviewsData = [
    {
      quote: "Zain is a very skilled and diligent worker. We are very grateful for all the work he has done for us and highly recommend him.",
      author: "Matt York",
      role: "Freelance Client",
      initial: "M"
    },
    {
      quote: "Wow — I can tell you wholeheartedly you found the right guy here! He understood exactly what I needed.",
      author: "Erik V.",
      role: "Freelance Client",
      initial: "E"
    },
    {
      quote: "Working with him was an absolute pleasure. Professional, knew exactly what he was doing, explained the process, ensured timely delivery and remained flexible to feedback.",
      author: "A. G.",
      role: "Freelance Client",
      initial: "A"
    },
    {
      quote: "Zain is a well-rounded individual with a caring personality, ready and willing to attend to your business needs. Attentive to detail and a great listener.",
      author: "Joslyn Nicholson",
      role: "Freelance Client",
      initial: "J"
    }
  ];

  return (
    <section id="reviews" className="w-full bg-[#fef7f7] text-[#14342b] py-14 md:py-18 px-6 sm:px-8 md:px-16 overflow-hidden border-t border-stone-200/60">
      <div className="mx-auto max-w-5xl">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-stone-500">
            <span className="w-4 h-[1.5px] bg-[#14342b]/60"></span>
            <span>Kind Words</span>
            <span className="w-4 h-[1.5px] bg-[#14342b]/60"></span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#14342b]">
            What clients say<span className="text-amber-600">.</span>
          </h2>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviewsData.map((review, index) => (
            <div 
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] bg-white text-[#14342b] p-6 sm:p-8 rounded-[2rem] border-2 border-[#14342b]/80 shadow-[0_4px_20px_-4px_rgba(20,52,43,0.03)] flex flex-col justify-between hover:-translate-y-1 hover:border-[#14342b] hover:shadow-[0_10px_30px_-10px_rgba(20,52,43,0.08)] transition-all duration-300 group"
            >
              {/* Quote Icon Sign */}
              <div className="text-amber-600/30 text-5xl font-serif leading-none mb-2 select-none group-hover:text-amber-600/60 transition-colors duration-300">
                “
              </div>

              {/* Review Text */}
              <p className="italic text-sm sm:text-base text-stone-600 font-serif leading-relaxed text-justify mb-6">
                “{review.quote}”
              </p>

              {/* Author Info Block */}
              <div className="flex items-center space-x-3 pt-4 border-t border-[#14342b]/10">
                {/* Avatar Initial Circle */}
                <div className="h-10 w-10 rounded-full bg-[#14342b] text-[#fbf9f4] font-bold text-sm flex items-center justify-center select-none shadow-sm">
                  {review.initial}
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm text-[#14342b] tracking-tight">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-stone-500 font-sans font-medium tracking-wide">
                    {review.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}