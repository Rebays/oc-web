import { Quote } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      quote: "OrgClinic transformed our operational efficiency. Their understanding of local nuances was invaluable to our expansion.",
      name: "Maria T.",
      title: "CEO, Honiara Trading Co.",
      initials: "HT"
    },
    {
      quote: "The strategic planning sessions were incredibly insightful. We now have a clear path forward for the next five years.",
      name: "John F.",
      title: "Director, Ministry of Health",
      initials: "MH"
    },
    {
      quote: "Their capacity building program significantly boosted our team's morale and productivity. A sustainable partnership indeed.",
      name: "Sarah L.",
      title: "Program Manager, Local NGO",
      initials: "LN"
    }
  ];

  return (
    <section id="testimonials" className="px-6 py-32 bg-[#fcfdfe] dark:bg-zinc-950 md:px-12 border-t border-zinc-100 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-2">
            <div className="h-1 w-1 rounded-full bg-[#106c9d]" />
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Client Perspectives</span>
            <div className="h-1 w-1 rounded-full bg-[#106c9d]" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Trusted by the <span className="text-[#106c9d]">Pacific&apos;s Leaders.</span>
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="relative flex flex-col justify-between rounded-xl bg-white dark:bg-zinc-900 p-8 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Subtle Quote Mark */}
              <div className="absolute top-8 right-8 opacity-10 text-[#106c9d]">
                <Quote size={40} fill="currentColor" />
              </div>

              <div className="relative z-10">
                <p className="mb-10 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-zinc-50 dark:border-zinc-800">
                {/* Brand-colored Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#106c9d] to-[#004771] text-xs font-bold text-white uppercase tracking-tighter">
                  {testimonial.initials}
                </div>
                
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-[#106c9d] opacity-80">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logo Marquee Placeholder */}
        <div className="mt-24 pt-10 border-t border-zinc-100 dark:border-zinc-900">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8">
            Partnering with Organizations across the Islands
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {/* You would insert SVG logos here */}
            <div className="h-8 w-32 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-8 w-32 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-8 w-32 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-8 w-32 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;