import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code2, Terminal, X } from 'lucide-react';
import { getResponse } from '../lib/utils';
import type { Portfolio, SanityImage } from '../lib/type';
import { HighLightedText } from './highlightedText';
import { getFileUrl, imageUrl } from '../lib/sanity';
import { useState } from 'react';
import { createPortal } from 'react-dom';


const projectBgColor = ["from-blue-500/20 to-purple-500/20", "from-emerald-500/20 to-teal-500/20", "from-orange-500/20 to-red-500/20", "from-red-500/20 to-yellow-500/20"]

export function Projects() {

  const response: Portfolio = getResponse()
  const { projects: { data, heading, subHeading } } = response
  const [imagePreview, setImagePreview] = useState<null | string>(null)

  const forceDownload = async (apk: SanityImage) => {
    const url = getFileUrl(apk?.asset?._ref)

    const response = await fetch(url)
    const blob = await response?.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = blobUrl
    link.download = "sadhurangam.apk"
    link.click()

    link.remove()
    window.URL.revokeObjectURL(blobUrl)
  }

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <HighLightedText
              text={heading}
              highlightStyle='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400'
            />
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">{subHeading}</p>
        </motion.div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {data.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-12 glass border border-white/5 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl hover:border-white/10 hover:bg-slate-900/60 transition-all duration-500 overflow-hidden"
            >
              {/* Abstract background gradient for the card */}
              <div className={`absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-br ${projectBgColor[index]} opacity-30 lg:opacity-10 blur-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-700`} />

              {/* Content */}
              <div className="w-full flex-1 flex flex-col justify-center relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold tracking-wider uppercase mb-6 w-fit">
                  {project.label}
                </span>

                <h3 className="text-3xl lg:text-4xl font-black mb-4 text-white">{project.title}</h3>

                <div className="mb-8">
                  <p className="text-blue-300 font-medium text-lg mb-3">{project.subText1}</p>
                  <p className="text-slate-400 leading-relaxed">
                    <HighLightedText
                      text={project.subText2}
                      highlightStyle="text-slate-200"
                    />
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-slate-950/50 border border-slate-800 rounded-lg text-sm text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project?.domainUrl ? <a href={project?.domainUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </a> :
                    <div
                      onClick={() => forceDownload(project?.apk!!)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                      Download APK <ArrowUpRight className="w-4 h-4" />
                    </div>
                  }
                  <a href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3 rounded-xl border border-white /10 bg-white/5 hover:bg-white/10 text-white transition-colors">
                    <Code2 className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Right side visual (abstract tech placeholder) */}
              {project?.domainUrl ? <a
                href={project?.domainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-[45%] aspect-video lg:aspect-square overflow-hidden rounded-[2rem] bg-slate-950/80 border border-white/10 relative flex items-center justify-center group-hover:border-white/20 transition-colors" >
                {project?.images?.[0] ?
                  <div
                    className="absolute inset-0 opacity-100 mix-blend-overlay grayscale-0 group-hover:grayscale-0 transition-all duration-700 pointer-events-none bg-cover bg-center"
                    style={{
                      backgroundImage: project?.images?.[0]
                        ? `url(${imageUrl(project.images[0]).url()})`
                        : "none",
                    }}
                  />
                  :
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop')] opacity-20 mix-blend-overlay object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none" />
                }
                <div className="text-white/20 group-hover:text-blue-400/50 transition-colors duration-500 flex flex-col items-center gap-4 pointer-events-none">
                  <Terminal className="w-16 h-16" />
                  <span className="font-mono text-sm tracking-widest text-center px-4">{project.title.toUpperCase().replace(/\s+/g, '_')}</span>
                </div>
              </a>
                :
                <div
                  onClick={() => setImagePreview(imageUrl(project.images[0]).url())}
                  className="w-full lg:w-[45%] aspect-video lg:aspect-square overflow-hidden rounded-[2rem] bg-slate-950/80 border border-white/10 relative flex items-center justify-center group-hover:border-white/20 transition-colors" >
                  {project?.images?.[0] ?
                    <div
                      className="absolute inset-0 opacity-100 mix-blend-overlay grayscale-0 group-hover:grayscale-0 transition-all duration-700 pointer-events-none bg-cover bg-center"
                      style={{
                        backgroundImage: project?.images?.[0]
                          ? `url(${imageUrl(project.images[0]).url()})`
                          : "none",
                      }}
                    />
                    :
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop')] opacity-20 mix-blend-overlay object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none" />
                  }
                  <div className="text-white/20 group-hover:text-blue-400/50 transition-colors duration-500 flex flex-col items-center gap-4 pointer-events-none">
                    <Terminal className="w-16 h-16" />
                    <span className="font-mono text-sm tracking-widest text-center px-4">{project.title.toUpperCase().replace(/\s+/g, '_')}</span>
                  </div>
                </div>}
            </motion.div>
          ))}
        </div>
        {imagePreview && createPortal(
          <AnimatePresence>
            <div className="fixed inset-0 z-[999] flex items-center justify-center">
              {/* Dark Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setImagePreview(null)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl cursor-zoom-out"
              />

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => setImagePreview(null)}
                className="glass absolute top-6 right-6 lg:top-10 lg:right-10 z-[1000] p-4 rounded-full text-white hover:bg-brand-primary transition-all shadow-2xl"
              >
                <X size={28} />
              </motion.button>

              {/* The Expanded Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative z-[999] h-[85vh] w-[95vw] md:w-[85vw] lg:w-[75vw] flex items-center justify-center"
              >
                <img
                  src={imagePreview}
                  alt="Full preview"
                  className="max-h-full max-w-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </div>
          </AnimatePresence>,
          document.body // This sends the modal to the bottom of the body tag
        )}
      </div >
    </section >
  );
}
