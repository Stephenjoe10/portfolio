import { motion } from 'framer-motion';
import { Terminal, Database, Cloud, Wrench, BookOpen, Layers, Radar, Sparkles } from 'lucide-react';
import { getResponse } from '../lib/utils';
import type { Portfolio } from '../lib/type';
import { HighLightedText } from './highlightedText';

export function About() {

  const response: Portfolio = getResponse()
  const { about: { heading, mainText, subText1, subText2, personalCapabilities, learning } } = response

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techIcons = [<Layers className="w-6 h-6 text-blue-400" />, <Database className="w-6 h-6 text-pink-400" />, <Wrench className="w-6 h-6 text-teal-400" />, <Cloud className="w-6 h-6 text-purple-400" />]
  const learningColor = ["blue", "purple", "green", "pink", "teal", "purple"]

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
                <Sparkles className="w-4 h-4" /> {heading}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-6">
                <HighLightedText
                  text={mainText}
                  br
                  highlightStyle="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                />
              </h1>
            </div>

            {/* Right Side: Elevated Narrative */}
            <div className="w-full lg:w-1/2 relative z-10">
              {/* Decorative side line */}
              <div className="hidden lg:block absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent" />

              <div className="space-y-8 text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
                <p>
                  <HighLightedText
                    text={subText1}
                    highlightStyle='text-slate-200 font-medium'
                  />
                </p>
                <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
                  {/* Glass Card Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <p className='relative z-10 text-base sm:text-lg'>
                    <HighLightedText
                      text={subText2}
                      highlightStyle="text-blue-300 font-semibold"
                    />
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
              {personalCapabilities.map((cap, idx) => (
                <div key={idx} className={`md:col-span-${cap?.size || "full"} glass relative overflow-hidden rounded-[2rem] p-8 border border-white/10 hover:border-white/20 transition-colors group bg-slate-900/40 backdrop-blur-xl`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 relative z-10">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                      {techIcons[idx >= 4 ? Math.round(Math.random() * 3) : idx]}
                    </div>
                    <h4 className="text-xl font-bold text-slate-200">{cap.title}</h4>
                  </div>
                  <ul className="flex flex-wrap gap-3 relative z-10">
                    {cap.data.map((skill, index) => (
                      <li key={skill + index} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-medium text-slate-300">
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
              <h3 className="text-3xl font-bold mb-8 text-white">{learning?.heading}</h3>

              <div className="space-y-6 divide-y divide-white/5">
                {
                  learning?.data?.map((l, idx) => (
                    <div key={l?.title + idx} className="flex flex-col sm:flex-row gap-2 sm:gap-8 pb-6">
                      <span className={`text-${learningColor[idx]}-400 font-semibold w-full sm:w-48 shrink-0 uppercase tracking-widest text-sm mt-1 flex items-center gap-2`}>
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> {l?.title}
                      </span>
                      <span className="text-slate-300 text-lg leading-relaxed">
                        <HighLightedText
                          text={l.text}
                          highlightStyle="text-slate-100 font-semibold"
                        />
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
