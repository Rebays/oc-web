import { Shield, ChevronRight, MapPin, Phone, Linkedin, Facebook, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid gap-16 border-b border-zinc-800/50 pb-20 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#106c9d] to-[#004771] flex items-center justify-center text-white shadow-lg">
                  <Shield size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white leading-none">OrgClinic</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#106c9d]">Pacific Advisory</span>
                </div>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-zinc-400">
                Partnering with Solomon Islands leaders to build resilient, transparent, and high-impact organizations through international best practices.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all hover:border-[#106c9d] hover:text-[#106c9d]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl bg-zinc-900/50 p-8 border border-zinc-800/50">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#106c9d] mb-4">Advisory Insights</h4>
            <p className="text-white font-semibold text-xl mb-6 leading-snug">Get the latest Pacific institutional insights delivered to your desk.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 p-4 text-sm text-white outline-none focus:border-[#106c9d] transition-all"
              />
              <button className="rounded-lg bg-[#004771] px-6 py-4 font-bold text-white transition-all hover:bg-[#106c9d] active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-[11px] text-zinc-500 italic">By subscribing, you agree to our professional data policy.</p>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 gap-12 py-20 md:grid-cols-4">
          <div className="flex flex-col gap-5">
            <h5 className="text-sm font-bold tracking-widest text-white uppercase">The Firm</h5>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#about" className="hover:text-[#106c9d] transition-colors">About OrgClinic</a>
              <a href="#team" className="hover:text-[#106c9d] transition-colors">Leadership</a>
              <a href="#" className="hover:text-[#106c9d] transition-colors">Our Methodology</a>
              <a href="#" className="hover:text-[#106c9d] transition-colors">Impact Report</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-5">
            <h5 className="text-sm font-bold tracking-widest text-white uppercase">Expertise</h5>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#services" className="hover:text-[#106c9d] transition-colors">Institutional Health</a>
              <a href="#services" className="hover:text-[#106c9d] transition-colors">Strategic Advisory</a>
              <a href="#services" className="hover:text-[#106c9d] transition-colors">Capacity Building</a>
              <a href="#services" className="hover:text-[#106c9d] transition-colors">Governance</a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="text-sm font-bold tracking-widest text-white uppercase">Resources</h5>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-[#106c9d] transition-colors">Case Studies</a>
              <a href="#" className="hover:text-[#106c9d] transition-colors">Policy Briefs</a>
              <a href="#" className="hover:text-[#106c9d] transition-colors">Diagnostic Tools</a>
              <a href="#" className="hover:text-[#106c9d] transition-colors">Blog</a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="text-sm font-bold tracking-widest text-white uppercase">Honiara HQ</h5>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#106c9d] shrink-0" />
                <span>Level 2, Mendana Avenue,<br />Honiara, Solomon Islands</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#106c9d] shrink-0" />
                <span>+677 23456</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-zinc-800/50 pt-12 md:flex-row">
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-medium tracking-widest uppercase">
            <span className="text-zinc-500">© 2026 OrgClinic Advisory</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          
          <div className="flex items-center gap-3 rounded-full bg-zinc-900/50 px-4 py-2 border border-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Based in</span>
            <span className="flex items-center gap-2 text-xs font-bold text-zinc-300">
               <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="12" fill="#0051BA"/>
                <path d="M0 12L20 0" stroke="#FCD116" strokeWidth="2"/>
                <path d="M0 0L20 12" fill="#216430"/>
                <rect width="20" height="6" fill="#0051BA"/>
                <path d="M0 12L20 0H0V12Z" fill="#216430"/>
                <path d="M0 6.5L20 -5.5" stroke="#FCD116" strokeWidth="1.5"/>
              </svg>
              Solomon Islands
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;