import { ChevronRight, Mail, Phone } from "lucide-react";

function CTA() {
  return (
    <section className="relative px-6 py-24 md:px-12 overflow-hidden bg-[#004771]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-[#106c9d] skew-x-12 translate-x-32 opacity-20" />
        {/* Subtle grid or topography overlay could go here */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-16 text-center shadow-2xl">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Mail size={32} />
        </div>

        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Transform Your <span className="text-[#106c9d]">Organizational Outlook.</span>
        </h2>
        
        <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-300 md:text-xl leading-relaxed">
          Whether you’re a local NGO or a government agency, our diagnostic approach uncovers the path to sustainable growth. Let’s start the conversation.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a 
            href="#contact" 
            className="group inline-flex items-center rounded-xl bg-[#106c9d] px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-[#106c9d]/20 transition-all hover:bg-white hover:text-[#004771] active:scale-95"
          >
            Request a Free Consultation 
            <ChevronRight size={22} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="tel:+67700000" 
            className="flex items-center gap-2 text-white font-semibold hover:text-[#106c9d] transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
              <Phone size={18} />
            </div>
            Speak with an Advisor
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;