import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <main className="grow">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
