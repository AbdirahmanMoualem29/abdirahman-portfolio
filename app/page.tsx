import { Metadata } from 'next'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Leadership from './components/sections/Leadership'
import Contact from './components/sections/Contact'

export const metadata: Metadata = {
  title: 'Abdirahman Moualem - Portfolio',
  description: 'Software Engineer & Machine Learning Enthusiast',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Leadership />
      <Contact />
    </main>
  )
} 