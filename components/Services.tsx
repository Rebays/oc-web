import { BarChart, Briefcase, ChevronRight, Lightbulb, Shield, TrendingUp, Users } from "lucide-react";

function Services() {
  const services = [
    { title: "Organizational Health Audits", desc: "In-depth diagnostics to identify root causes of inefficiencies and bottlenecks, providing a clear path to recovery.", icon: <Lightbulb size={24} /> },
    { title: "Strategic Planning & Execution", desc: "Crafting actionable strategies that align with your vision and market realities, ensuring measurable progress.", icon: <BarChart size={24} /> },
    { title: "Capacity Building & Training", desc: "Empowering your team with customized workshops and skill development programs for sustainable performance.", icon: <Users size={24} /> },
    { title: "Project Management Excellence", desc: "Guiding complex projects from initiation to completion, ensuring on-time and on-budget delivery.", icon: <Briefcase size={24} /> },
    { title: "Governance & Compliance", desc: "Establishing robust frameworks to ensure ethical operations, transparency, and regulatory adherence.", icon: <Shield size={24} /> },
    { title: "Impact Measurement & Evaluation", desc: "Designing systems to track, analyze, and report on the true impact of your programs and initiatives.", icon: <TrendingUp size={24} /> }
  ];

  return (
    <section id="services" className="px-6 py-32 md:px-12 bg-[#fcfdfe] dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-8 bg-[#106c9d]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#106c9d]">Our Expertise</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
              Solutions for <span className="text-[#106c9d]">Pacific Resilience.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We combine international best practices with deep local insights to transform Solomon Islands organizations into leaders.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative bg-white dark:bg-zinc-900 p-10 transition-all duration-500 hover:z-10"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#106c9d] to-[#004771] transition-all duration-500 group-hover:w-full" />
              
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#106c9d]/5 text-[#106c9d] transition-all duration-500 group-hover:bg-[#106c9d] group-hover:text-white group-hover:rotate-[10deg] group-hover:scale-110">
                {service.icon}
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#106c9d] transition-colors">
                {service.title}
              </h3>
              
              <p className="mb-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.desc}
              </p>
              
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-[#004771] dark:group-hover:text-[#106c9d]"
              >
                Inquire <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;