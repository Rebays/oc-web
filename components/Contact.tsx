import { Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="px-6 py-32 bg-[#fcfdfe] dark:bg-zinc-950 md:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white shadow-[0_32px_64px_-16px_rgba(0,71,113,0.1)] dark:bg-zinc-900 dark:shadow-none border border-zinc-100 dark:border-zinc-800 lg:flex">
        
        {/* Left Side: Contact Information */}
        <div className="bg-[#004771] p-10 text-white lg:w-[40%] md:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
          
          <div className="relative z-10">
            <div className="mb-6 inline-block rounded-lg bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Get in Touch
            </div>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl leading-tight">
              Let&apos;s Start a <span className="text-[#106c9d]">Partnership.</span>
            </h2>
            <p className="mb-12 text-lg text-zinc-300 leading-relaxed">
              We offer confidential diagnostic consultations for organizations ready to scale with integrity.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#106c9d] transition-colors group-hover:bg-white group-hover:text-[#004771]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Our Office</h4>
                  <p className="font-medium">Mendana Avenue, Honiara, SI</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#106c9d] transition-colors group-hover:bg-white group-hover:text-[#004771]">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Direct Line</h4>
                  <p className="font-medium">+677 23000</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#106c9d] transition-colors group-hover:bg-white group-hover:text-[#004771]">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email</h4>
                  <p className="font-medium">advisory@orgclinic.sb</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-xs text-zinc-400 font-medium">
            © 2026 OrgClinic Consultancy. All rights reserved.
          </div>
        </div>
        
        {/* Right Side: Form */}
        <div className="p-10 lg:w-[60%] md:p-16 bg-white dark:bg-zinc-900">
          <form className="flex flex-col gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="border-b-2 border-zinc-100 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-300 outline-none focus:border-[#106c9d] dark:border-zinc-800 dark:text-white transition-colors" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@organization.sb" 
                  className="border-b-2 border-zinc-100 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-300 outline-none focus:border-[#106c9d] dark:border-zinc-800 dark:text-white transition-colors" 
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">How can we help?</label>
              <textarea 
                placeholder="Describe your organizational challenges..." 
                rows={4} 
                className="border-b-2 border-zinc-100 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-300 outline-none focus:border-[#106c9d] dark:border-zinc-800 dark:text-white transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="mt-4 flex items-center justify-center gap-3 rounded-xl bg-[#004771] py-5 font-bold text-white shadow-xl shadow-[#004771]/20 transition-all hover:bg-[#106c9d] hover:-translate-y-1 active:scale-95 group"
            >
              Send Advisory Request
              <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;