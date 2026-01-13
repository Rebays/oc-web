import Image from "next/image";
import { CheckCircle, Mail, MapPin, Phone, Users, BarChart, Shield, Lightbulb, TrendingUp, Award, ChevronRight, MessageSquare, Briefcase, Globe } from "lucide-react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      
      <Header/>
      

      <Hero/>

      <Services/>

      <WhyUs/>

      <CTA/>

      {/* --- TESTIMONIALS --- */}
      <Testimonials/>

      {/* --- MEET THE TEAM --- */}
      <Team/>

      {/* --- CONTACT SECTION --- */}
      <Contact/>

      {/* --- FOOTER --- */}
      {/* --- BOMBASS FOOTER --- */}
      <Footer/>
    </div>
  );
}