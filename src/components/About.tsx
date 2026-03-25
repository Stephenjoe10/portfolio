import { motion } from 'framer-motion';
import { Terminal, Database, Cloud, Wrench, BookOpen, Layers, Radar, Sparkles } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const capabilities = [
    {
      title: "Core Architecture & Native",
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      skills: ["React Native", "TypeScript", "Redux toolkit", "GraphQL", "Native Modules", "tailwind"],
      colSpan: "md:col-span-2"
    },
    {
      title: "Open Source (NPM)",
      icon: <Database className="w-6 h-6 text-pink-400" />,
      skills: ["Creator of react-native-battery-info-pro Package"],
      colSpan: "md:col-span-1"
    },
    {
      title: "DevOps & Stability",
      icon: <Wrench className="w-6 h-6 text-teal-400" />,
      skills: ["Sentry (Error Tracking)", "Stallion (OTA)", "App Store Processing"],
      colSpan: "md:col-span-1"
    },
    {
      title: "Backend & Cloud",
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
      skills: ["Firebase Auth", "Push Notifications", "App Deep Linking", "Web Socket", "Node js"],
      colSpan: "md:col-span-2"
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-[-10%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section 1: The Narrative */}
          <motion.div variants={itemVariants} className="mb-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left Side: Massive Hook */}
            <div className="w-full lg:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-bold tracking-widest uppercase mb-8">
                <Sparkles className="w-4 h-4" /> About My Work
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-6">
                I build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  high-performance
                </span><br />
                mobile ecosystems.
              </h2>
            </div>

            {/* Right Side: Elevated Narrative */}
            <div className="w-full lg:w-1/2 relative z-10">
              {/* Decorative side line */}
              <div className="hidden lg:block absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent" />
              
              <div className="space-y-8 text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
                <p>
                  I am a React Native Specialist with a deep focus on the bridge between <strong className="text-slate-200 font-medium">JavaScript and Native code</strong>. My expertise lies in creating seamless user flows for complex systems, from POS solutions with integrated hardware to logic-heavy applications like Chess Engines.
                </p>
                <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
                  {/* Glass Card Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <p className="relative z-10 text-base sm:text-lg">
                    I don't just write code; I manage the entire lifecycle—from architecting clean UI and state management to deploying and monitoring via <span className="text-blue-300 font-semibold">Sentry and Stallion (OTA)</span>. I am also an active contributor to the Open Source community in the Native Module space.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Professional Capabilities Bento Grid */}
          <motion.div variants={itemVariants} className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Terminal className="text-blue-400" /> Professional Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
              {capabilities.map((cap, idx) => (
                <div key={idx} className={`${cap.colSpan} glass relative overflow-hidden rounded-[2rem] p-8 border border-white/10 hover:border-white/20 transition-colors group bg-slate-900/40 backdrop-blur-xl`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 relative z-10">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                      {cap.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-200">{cap.title}</h4>
                  </div>
                  <ul className="flex flex-wrap gap-3 relative z-10">
                    {cap.skills.map(skill => (
                      <li key={skill} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-medium text-slate-300">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Learning Radar */}
          <motion.div variants={itemVariants} className="relative overflow-hidden glass rounded-[2.5rem] p-8 md:p-12 border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-slate-900/40 w-full shadow-2xl">
            <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
              <Radar className="w-96 h-96 animate-[spin_10s_linear_infinite]" />
            </div>
            
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-bold tracking-wider mb-6">
                <BookOpen className="w-4 h-4" /> CONTINUOUS LEARNING
              </div>
              <h3 className="text-3xl font-bold mb-8 text-white">The Learning Radar</h3>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 border-b border-white/5 pb-6">
                  <span className="text-blue-400 font-semibold w-full sm:w-48 shrink-0 uppercase tracking-widest text-sm mt-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Expanding Backend</span>
                  <span className="text-slate-300 text-lg leading-relaxed">Currently studying <strong className="text-slate-100 font-semibold">Node.js</strong> and scaling full-stack web applications using <strong className="text-slate-100 font-semibold">Next.js</strong>.</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 border-b border-white/5 pb-6">
                  <span className="text-purple-400 font-semibold w-full sm:w-48 shrink-0 uppercase tracking-widest text-sm mt-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" /> Database Mastery</span>
                  <span className="text-slate-300 text-lg leading-relaxed">Diving deeper into both relational and NoSQL databases, specifically <strong className="text-slate-100 font-semibold">PostgreSQL (pgAdmin)</strong> and <strong className="text-slate-100 font-semibold">MongoDB</strong>.</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                  <span className="text-green-400 font-semibold w-full sm:w-48 shrink-0 uppercase tracking-widest text-sm mt-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Current Focus</span>
                  <span className="text-slate-300 text-lg leading-relaxed">Strengthening my foundational knowledge of these technologies to eventually architect complete, end-to-end mobile and web ecosystems from scratch.</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
