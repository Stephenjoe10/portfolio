import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, Smartphone } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    period: '2025 - 2026',
    title: 'POS App Development',
    description: 'Developed and optimized a comprehensive Point of Sale (POS) application featuring hardware integrations and high-speed checkout flows.'
  },
  {
    period: '2024 - 2025',
    title: 'Workforce & Payroll App',
    description: 'Architected a mobile solution for managing workforce logistics, employee scheduling, and complex payroll calculations.'
  },
  {
    period: '2023 - 2024',
    title: 'Admin App',
    description: 'Built a robust administrative dashboard application for internal tracking, user management, and automated reporting.'
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="container mx-auto px-6 max-w-5xl" ref={containerRef}>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Journey</span></h2>
          <p className="text-slate-400 text-lg">A deep dive into my 3.5 years of continuous growth.</p>
        </motion.div>

        {/* Main Company Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-blue-500/20 rounded-[2rem] p-8 md:p-12 bg-slate-900/50 backdrop-blur-xl relative overflow-hidden mb-16 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-bold tracking-wider mb-6">
                <Briefcase className="w-4 h-4" /> CAREER OVERVIEW
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">React Native Developer</h3>
              <h4 className="text-xl md:text-2xl text-slate-300 font-medium flex items-center gap-2">
                <Building2 className="w-6 h-6 text-indigo-400" /> XXX Company
              </h4>
            </div>
            
            <div className="flex flex-col gap-3 shrink-0">
              <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 px-5 py-3 rounded-xl border border-white/5">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">2023 - Present</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 px-5 py-3 rounded-xl border border-white/5">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="font-semibold">Tirunelveli</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Progression Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute left-[24px] md:left-12 top-0 bottom-0 w-[2px] bg-slate-800" />
          <motion.div 
            className="absolute left-[24px] md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 origin-top" 
            style={{ height }}
          />

          <div className="flex flex-col gap-12 py-10">
            {projects.map((proj, index) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start pl-16 md:pl-28"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[25px] md:left-[49px] top-2 w-10 h-10 bg-slate-900 border-2 border-indigo-500 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full">
                  <span className="text-indigo-400 text-sm font-black tracking-widest uppercase mb-2 block font-mono">
                    {proj.period}
                  </span>
                  <div className="glass p-8 border border-white/5 hover:border-indigo-500/30 transition-colors group rounded-3xl bg-slate-900/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors flex items-center gap-3">
                      <Smartphone className="w-6 h-6 text-slate-500 group-hover:text-indigo-400 transition-colors" /> {proj.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {proj.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
