import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

function Team() {
  const team = [
    {
      name: "Karl Saliga",
      role: "Lead Consultant & Founder",
      bio: "With over 20 years in organizational development across the Pacific, Karl is passionate about empowering local institutions.",
      img: "/oc-web/karl.jpg" // Added leading slash
    },
    {
      name: "Dr. Jerry B. Siota",
      role: "Senior Strategy Advisor",
      bio: "Jerry specializes in strategic planning and project management, driving results for both public and private sectors.",
      img: "/oc-web/jerry.jpg" // Added leading slash
    },
    {
      name: "Dr. Derek Mane",
      role: "Capacity Building Specialist",
      bio: "Derek designs and delivers impactful training programs, fostering leadership and skill growth in teams.",
      img: "/oc-web/dmane.jpg" // Added leading slash
    }
  ];

  return (
    <section id="team" className="bg-white px-6 py-24 dark:bg-zinc-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#106c9d]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#106c9d]">Leadership</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Meet Our <span className="text-[#004771]">Strategic Advisors</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Our team bridges international best practices with deep cultural fluency to provide 
            unparalleled guidance in the Solomon Islands.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div key={i} className="group relative">
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                <Image 
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  priority={i === 0} // Load first image faster
                />
                
                {/* Overlay with Socials on Hover */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#004771]/90 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-md hover:bg-[#106c9d] transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-md hover:bg-[#106c9d] transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="h-px flex-grow mx-4 bg-zinc-100 dark:bg-zinc-800" />
                </div>
                <p className="mt-1 text-sm font-bold uppercase tracking-widest text-[#106c9d]">
                  {member.role}
                </p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                  &quot;{member.bio}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;