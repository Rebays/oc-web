import { ChevronRight, Activity, Shield, Users } from 'lucide-react';

function Hero() {
  return (
    <header className=" relative min-h-[90vh] overflow-hidden bg-[#f8fafc] dark:bg-zinc-950 flex items-center">
      
      <div className='max-w-7xl m-auto pt-32'>

      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#106c9d]/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[50%] rounded-full bg-[#004771]/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#106c9d]/10 text-[#106c9d] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#106c9d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#106c9d]"></span>
              </span>
              Organizational Excellence
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[1.1] mb-6">
              Modern Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#106c9d] to-[#004771]">
                Pacific Resilience.
              </span>
            </h1>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-lg">
              OrgClinic partners with Solomon Islands leaders to diagnose bottlenecks and build high-impact organizations through bespoke consultancy.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#106c9d] text-white font-bold rounded-lg shadow-lg shadow-[#106c9d]/20 hover:bg-[#004771] transition-all flex items-center group">
                Start Diagnostic
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold rounded-lg hover:bg-zinc-50 transition-all">
                View Services
              </button>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="relative">
            {/* The "Clinic" Card Grid */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 mt-8">
                <Activity className="text-[#106c9d] mb-4" size={32} />
                <h3 className="font-bold text-zinc-900 dark:text-white">Diagnostics</h3>
                <p className="text-sm text-zinc-500">Identifying core structural gaps.</p>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800">
                <Shield className="text-[#004771] mb-4" size={32} />
                <h3 className="font-bold text-zinc-900 dark:text-white">Integrity</h3>
                <p className="text-sm text-zinc-500">Building ethical frameworks.</p>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 col-span-2 flex items-center gap-6">
                <div className="h-12 w-12 rounded-full bg-[#106c9d]/10 flex items-center justify-center shrink-0">
                  <Users className="text-[#106c9d]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">Capacity Building</h3>
                  <p className="text-sm text-zinc-500">Empowering local teams for long-term impact.</p>
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#106c9d] to-[#004771] rounded-[2rem] opacity-5 -rotate-3 z-0"></div>
          </div>

        </div>
      </div>

      </div>
    </header>
  );
}

export default Hero;