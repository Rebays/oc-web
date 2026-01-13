import Image from "next/image";
import { CheckCircle, Mail, MapPin, Phone, Users, BarChart, Shield, Lightbulb, TrendingUp, Award, ChevronRight, MessageSquare, Briefcase, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-zinc-100 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 md:px-12">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-md">
            <Shield size={22} />
          </div>
          <span className="text-2xl font-bold tracking-tight">OrgClinic</span>
        </div>
        <div className="hidden gap-8 text-base font-medium md:flex">
          <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">Why OrgClinic</a>
          <a href="#testimonials" className="hover:text-emerald-600 transition-colors">Testimonials</a>
          <a href="#team" className="hover:text-emerald-600 transition-colors">Our Team</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="rounded-full bg-emerald-600 px-6 py-2.5 text-base font-semibold text-white hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg">
          Book Consultation
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-emerald-50 to-emerald-100 px-6 py-24 dark:from-zinc-900 dark:to-zinc-950 md:px-12 md:py-32">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-5">
          <svg className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20H20V0Z" fill="white" fillOpacity="0.05"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
          </svg>
        </div>

        <div className="z-10 max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 animate-fade-in-up">
            Your Partner for Organizational Excellence in the Pacific
          </span>
          <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl animate-fade-in-up delay-200">
            Building Stronger Futures for <span className="text-emerald-600 drop-shadow-md">Solomon Islands</span> Organizations.
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg text-zinc-700 dark:text-zinc-300 md:text-xl animate-fade-in-up delay-400">
            OrgClinic delivers bespoke consultancy, diagnostics, and capacity building, empowering local businesses, government agencies, and NGOs to thrive with integrity and impact.
          </p>
          <div className="flex flex-col justify-center gap-5 sm:flex-row animate-fade-in-up delay-600">
            <a href="#contact" className="rounded-full bg-emerald-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-300 transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95 dark:shadow-emerald-900/40">
              Schedule Your Free Discovery Call <ChevronRight size={20} className="inline-block ml-2" />
            </a>
            <a href="#services" className="rounded-full border border-zinc-300 bg-white px-10 py-4 text-lg font-bold text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 hover:dark:bg-zinc-800">
              Explore Our Approach
            </a>
          </div>
        </div>
      </header>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="px-6 py-24 md:px-12 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Comprehensive Solutions for <span className="text-emerald-600">Organizational Vitality</span></h2>
            <div className="mx-auto mt-6 h-2 w-24 rounded-full bg-emerald-600" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Our expert consultants leverage proven methodologies combined with deep local insights to deliver tangible results.
            </p>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Organizational Health Audits", desc: "In-depth diagnostics to identify root causes of inefficiencies and bottlenecks, providing a clear path to recovery.", icon: <Lightbulb className="text-emerald-600" size={30} /> },
              { title: "Strategic Planning & Execution", desc: "Crafting actionable strategies that align with your vision and market realities, ensuring measurable progress.", icon: <BarChart className="text-emerald-600" size={30} /> },
              { title: "Capacity Building & Training", desc: "Empowering your team with customized workshops and skill development programs for sustainable performance.", icon: <Users className="text-emerald-600" size={30} /> },
              { title: "Project Management Excellence", desc: "Guiding complex projects from initiation to completion, ensuring on-time and on-budget delivery.", icon: <Briefcase className="text-emerald-600" size={30} /> },
              { title: "Governance & Compliance", desc: "Establishing robust frameworks to ensure ethical operations, transparency, and regulatory adherence.", icon: <Shield className="text-emerald-600" size={30} /> },
              { title: "Impact Measurement & Evaluation", desc: "Designing systems to track, analyze, and report on the true impact of your programs and initiatives.", icon: <TrendingUp className="text-emerald-600" size={30} /> }
            ].map((service, i) => (
              <div key={i} className="group flex flex-col items-start rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-300 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700 dark:hover:shadow-emerald-900/20">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/30 dark:text-emerald-400">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">{service.title}</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">{service.desc}</p>
                <a href="#contact" className="mt-5 flex items-center text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US / LOCAL CONTEXT --- */}
      <section id="about" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
          <div className="relative h-96 w-full flex-1 rounded-3xl overflow-hidden shadow-2xl dark:shadow-emerald-900/20">
            {/* Image placeholder: You can replace this with a beautiful image of the Solomon Islands or local business */}
            <Image 
              src="https://images.unsplash.com/photo-1629828552784-259160352ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Solomon Islands Landscape"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end p-8 text-white">
                <span className="text-3xl font-bold">The Heart of the Pacific</span>
            </div>
          </div>
          <div className="flex-1">
            <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Our Foundation</span>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Local Expertise, <span className="text-emerald-600">Global Standards.</span></h2>
            <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">
              OrgClinic is more than just a consultancy; we are partners deeply committed to the growth and prosperity of the Solomon Islands. Our approach is culturally sensitive, pragmatically designed, and always focused on sustainable, long-term impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Deep Local Market Understanding", icon: <Globe size={20} className="text-emerald-600" /> },
                { label: "Actionable & Sustainable Solutions", icon: <Award size={20} className="text-emerald-600" /> },
                { label: "Community-Centric Approach", icon: <Users size={20} className="text-emerald-600" /> },
                { label: "Ethical & Transparent Practices", icon: <CheckCircle size={20} className="text-emerald-600" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-medium text-lg">
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-emerald-600 px-6 py-20 text-white dark:bg-emerald-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ready for a Healthier Organization?</h2>
          <p className="mb-10 text-xl opacity-90">
            Don&apos;t let challenges hold you back. Let&apos;s build a resilient, efficient, and thriving future together.
          </p>
          <a href="#contact" className="inline-flex items-center rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-700 shadow-xl transition-all hover:scale-105 hover:bg-emerald-50 active:scale-95 dark:bg-zinc-900 dark:text-emerald-400">
            Get Your Free Consultation <ChevronRight size={22} className="ml-3" />
          </a>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="px-6 py-24 bg-white dark:bg-zinc-950 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">What Our Clients <span className="text-emerald-600">Say</span></h2>
            <div className="mx-auto mt-6 h-2 w-24 rounded-full bg-emerald-600" />
          </div>
          
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "OrgClinic transformed our operational efficiency. Their understanding of local nuances was invaluable.",
                name: "Maria T.",
                title: "CEO, Honiara Trading Co."
              },
              {
                quote: "The strategic planning sessions were incredibly insightful. We now have a clear path forward.",
                name: "John F.",
                title: "Director, Ministry of Health"
              },
              {
                quote: "Their capacity building program significantly boosted our team&apos;s morale and productivity.",
                name: "Sarah L.",
                title: "Program Manager, Local NGO"
              }
            ].map((testimonial, i) => (
              <div key={i} className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-md dark:border-zinc-800 dark:bg-zinc-900 transition-all hover:shadow-lg">
                <MessageSquare size={36} className="mb-6 text-emerald-600 opacity-70" />
                <p className="mb-6 text-lg italic text-zinc-700 dark:text-zinc-300">&ldquo;{testimonial.quote}&ldquo;</p>
                <div className="font-semibold text-zinc-900 dark:text-zinc-50">{testimonial.name}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEET THE TEAM --- */}
      <section id="team" className="bg-zinc-100 px-6 py-24 dark:bg-zinc-900 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Meet Our <span className="text-emerald-600">Dedicated Team</span></h2>
            <div className="mx-auto mt-6 h-2 w-24 rounded-full bg-emerald-600" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Our consultants bring a blend of international experience and invaluable local knowledge to every project.
            </p>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dr. Alistair Ramo",
                role: "Lead Consultant & Founder",
                bio: "With over 20 years in organizational development across the Pacific, Alistair is passionate about empowering local institutions.",
                img: "https://randomuser.me/api/portraits/men/32.jpg" // Placeholder image
              },
              {
                name: "Grace Honi",
                role: "Senior Strategy Advisor",
                bio: "Grace specializes in strategic planning and project management, driving results for both public and private sectors.",
                img: "https://randomuser.me/api/portraits/women/44.jpg" // Placeholder image
              },
              {
                name: "Samson Wale",
                role: "Capacity Building Specialist",
                bio: "Samson designs and delivers impactful training programs, fostering leadership and skill growth in teams.",
                img: "https://randomuser.me/api/portraits/men/77.jpg" // Placeholder image
              }
            ].map((member, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-zinc-900 transition-transform hover:scale-[1.02]">
                <div className="relative mx-auto mb-6 h-32 w-32 rounded-full overflow-hidden border-4 border-emerald-600">
                  <Image 
                    src={member.img}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">{member.name}</h3>
                <p className="mb-4 text-emerald-600 font-medium">{member.role}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="px-6 py-24 dark:bg-zinc-950 md:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl bg-emerald-700 px-8 py-16 text-white shadow-2xl dark:bg-emerald-900 md:px-16 lg:flex lg:gap-16">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Let&apos;s Connect & <span className="text-emerald-100">Build Together</span></h2>
            <p className="mb-10 text-xl text-emerald-100 opacity-90">
              Reach out today for a confidential discussion about your organization&apos;s unique needs. We&apos;re here to help.
            </p>
            
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Our Office</h4>
                  <p className="text-emerald-100">OrgClinic Consultancy<br/>[Your Street Address], Honiara<br/>Solomon Islands</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-emerald-100">+677 [Your Phone Number]</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-emerald-100">contact@orgclinic.sb</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="mt-12 flex flex-col gap-6 lg:mt-0 lg:w-1/2">
            <input type="text" placeholder="Your Name" className="rounded-xl bg-emerald-600/50 p-4 text-white placeholder:text-emerald-200/70 outline-none focus:ring-2 focus:ring-emerald-300 border border-emerald-500/50" />
            <input type="email" placeholder="Your Email" className="rounded-xl bg-emerald-600/50 p-4 text-white placeholder:text-emerald-200/70 outline-none focus:ring-2 focus:ring-emerald-300 border border-emerald-500/50" />
            <textarea placeholder="Your Message" rows={5} className="rounded-xl bg-emerald-600/50 p-4 text-white placeholder:text-emerald-200/70 outline-none focus:ring-2 focus:ring-emerald-300 border border-emerald-500/50 resize-y"></textarea>
            <button type="submit" className="rounded-xl bg-white py-4 font-bold text-emerald-800 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 hover:bg-emerald-50">Send Message</button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      {/* --- BOMBASS FOOTER --- */}
      <footer className="bg-zinc-950 pt-20 pb-10 text-zinc-400">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          
          {/* Top Section: Branding & Newsletter */}
          <div className="grid gap-12 border-b border-zinc-800 pb-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <Shield size={24} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">OrgClinic</span>
              </div>
              <p className="max-w-md text-lg leading-relaxed">
                Elevating the standards of organizational health across the Solomon Islands. 
                Join our mission to build resilient, efficient, and transparent institutions.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-500">Stay Updated</h4>
              <p className="text-white font-medium">Get the latest Pacific business insights delivered to your inbox.</p>
              <form className="flex max-w-md gap-2">
                <input 
                  type="email" 
                  placeholder="email@address.com" 
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 p-3 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
                <button className="rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white transition-all hover:bg-emerald-700 active:scale-95">
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Middle Section: Links Grid */}
          <div className="grid grid-cols-2 gap-12 py-16 md:grid-cols-4">
            <div className="flex flex-col gap-4">
              <h5 className="font-bold text-white">Our Firm</h5>
              <a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a>
              <a href="#team" className="hover:text-emerald-500 transition-colors">The Team</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Careers</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Impact Report</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <h5 className="font-bold text-white">Services</h5>
              <a href="#services" className="hover:text-emerald-500 transition-colors">Health Audits</a>
              <a href="#services" className="hover:text-emerald-500 transition-colors">Strategy Planning</a>
              <a href="#services" className="hover:text-emerald-500 transition-colors">Capacity Building</a>
              <a href="#services" className="hover:text-emerald-500 transition-colors">Policy Design</a>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="font-bold text-white">Connect</h5>
              <a href="#" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                LinkedIn <ChevronRight size={14} />
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                Facebook <ChevronRight size={14} />
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                Twitter/X <ChevronRight size={14} />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="font-bold text-white">Location</h5>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm">
                  Hibiscus Avenue,<br />
                  Honiara, Solomon Islands
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm">+677 23456</span>
              </div>
            </div>
          </div>

          {/* Bottom Section: Legal & Credits */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-10 text-xs md:flex-row">
            <div className="flex gap-8">
              <span>© {new Date().getFullYear()} OrgClinic Consultancy.</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <span>Proudly based in</span>
              <div className="flex items-center gap-1.5 font-bold text-zinc-300">
                <div className="h-3 w-5 bg-blue-700 relative overflow-hidden flex flex-col">
                  <div className="h-1/2 w-full bg-blue-700"></div>
                  <div className="h-1/2 w-full bg-yellow-400"></div>
                  <div className="absolute inset-0 bg-green-700 clip-path-flag"></div>
                </div>
                Solomon Islands
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}