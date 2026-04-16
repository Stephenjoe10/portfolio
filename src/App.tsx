import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { SkeletonLoader } from './components/SkeletonLoader'
import { useState, useEffect } from 'react'
import { PortfolioData } from './lib/utils'
import Toast from './components/toast'

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getPortfolioData()
  }, [])

  const getPortfolioData = async () => {
    await PortfolioData().then((response) => {
      if (response) {
        setLoading(false)
      } else {
        console.log("thiss sideee")
        setError(true)
      }
    }).catch(() => {
      setError(true)
    })
  }

  if (loading) {
    return <div>
      <SkeletonLoader />
      <Toast show={error} message="Something went wrong. Please try again later!" apiError />
    </div>
  }

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
