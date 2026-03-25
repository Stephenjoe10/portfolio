import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Toast from './toast';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | "error">('idle');

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    setFormState("submitting")
    e.preventDefault();
    const formValue = new FormData(e.target)
    const response = await fetch("/api/contactApi", {
      method: "POST",
      body: JSON.stringify({
        name: formValue.get("name"),
        email: formValue.get("email"),
        message: formValue.get("message")
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json()
    console.log("response", result)
    if (result.success) {
      e.target.reset()
      setFormState("success")
      setTimeout(() => {
        setFormState("idle")
      }, 6000)
    } else {
      setFormState("error")
      setTimeout(() => {
        setFormState("idle")
      }, 6000)
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-slate-400 text-lg">Have a project in mind? I'd love to hear about it.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex flex-col gap-8"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className="text-slate-400">hello@example.com</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Based In</h4>
                <p className="text-slate-400">San Francisco, CA</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Phone</h4>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-blue-500/10 transition-colors" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input type="text" id="name" name='name' required className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input type="email" id="email" name='email' required className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              {/* <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input type="text" id="subject" required className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Project Inquiry" />
              </div> */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea id="message" name='message' required rows={5} className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              >
                {(formState === 'idle' || formState === 'error') && <><Send className="w-5 h-5" /> Send Message</>}
                {formState === 'submitting' && <span className="animate-pulse">Sending...</span>}
                {formState === 'success' && <span>Message Sent!</span>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>


      <Toast show={formState === 'success'} message="Your message has been sent successfully. Thank you for reaching out! 🎉" />
      <Toast show={formState === 'error'} message="Something went wrong. Please try again later!" />
    </section>
  );
}
