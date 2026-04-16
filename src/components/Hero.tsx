import { motion } from 'framer-motion';
import { Download, Smartphone, Code2 } from 'lucide-react';
import { getResponse } from '../lib/utils';
import type { Portfolio } from '../lib/type';
import { getFileUrl, imageUrl } from '../lib/sanity';
import { HighLightedText } from './highlightedText';

export function Hero() {

  const response: Portfolio = getResponse()
  const { header: { mainText, subText1, subText2, experience, image }, resume } = response


  const forceDownload = async () => {
    const url = getFileUrl(resume?.asset?._ref)

    const response = await fetch(url)
    const blob = await response?.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = blobUrl
    link.download = "Resume.pdf"
    link.click()

    link.remove()
    window.URL.revokeObjectURL(blobUrl)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-2 lg:pt-24 lg:pb-10">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-12">

          {/* Left Typography Section */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center text-left lg:pr-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-black tracking-tighter mb-6 leading-[1.05]"
            >
              <HighLightedText
                text={mainText}
                br
                highlightStyle="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-light"
            >
              <HighLightedText
                text={subText1}
                highlightStyle="text-slate-200 font-semibold"
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              {/* Refined React Native Expert Badge */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group flex-1 sm:flex-none w-full sm:w-auto cursor-default"
              >
                {/* Subtle, soft inner shadow/glow */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Elegant Badge Content */}
                <div className="relative flex items-center justify-center sm:justify-start gap-3 px-8 py-4 bg-blue-500/5 hover:bg-blue-500/10 backdrop-blur-md border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 rounded-2xl shadow-sm">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </div>

                  <Smartphone className="w-5 h-5 text-blue-300" />

                  <span className="text-sm sm:text-base font-semibold tracking-wider text-blue-100 uppercase whitespace-nowrap">
                    React Native Developer
                  </span>
                </div>
              </motion.div>
              <button
                onClick={forceDownload}
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Download CV
                <Download className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="w-full lg:w-[45%] relative flex justify-center items-center mt-10 lg:mt-0"
            style={{ perspective: 1000 }}
          >
            {/* The Arch Shaped Image Container */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-96 sm:w-80 sm:h-[28rem] xl:w-96 xl:h-[32rem] rounded-t-full rounded-b-[2.5rem] p-3 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl z-10"
            >
              {/* Inner Arch Image */}
              <div className="w-full h-full rounded-t-full rounded-b-[2rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent z-10" />
                {/* Changed image placeholder to a more abstract/cool developer concept */}
                <img
                  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  // src={imageUrl(image).url()}
                  alt="Modern Developer Element"
                  className="w-full h-full object-cover scale-110"
                />
              </div>

              {/* Floating Badge attached to Arch */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-6 sm:-left-16 glass px-6 py-5 rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20 backdrop-blur-xl bg-slate-900/70"
              >
                <div className="flex flex-col">
                  <span className="text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 leading-none">{experience}</span>
                  <span className="text-sm border-t border-white/20 pt-1 font-bold text-white tracking-widest mt-2">YEARS</span>
                </div>
                <div className="w-px h-16 bg-white/20" />
                <p className="text-xs text-slate-300 font-medium leading-tight">
                  <HighLightedText
                    text={subText2}
                    br
                  />
                </p>
              </motion.div>

              {/* Decorative Tech Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 -right-8 w-24 h-24 rounded-full border border-dashed border-white/30 flex items-center justify-center z-0 backdrop-blur-sm bg-white/5"
              >
                <Code2 className="w-8 h-8 text-blue-300 opacity-50" />
              </motion.div>
            </motion.div>

            {/* Background geometric rings */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[140%] h-[140%] lg:w-[150%] lg:h-[150%] border border-slate-700/50 rounded-full opacity-50 -z-10 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[80%] h-[80%] border border-slate-700/50 rounded-full absolute rotate-45" />
              <div className="w-[60%] h-[60%] border border-slate-700/50 rounded-full absolute rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
      >
        <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-blue-400 absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
