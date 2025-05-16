'use client';

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'

const projects = [
  {
    title: 'Halal Stock Index Predictor',
    description: 'A predictive model for Halal stock performance using data scraping and machine learning techniques.',
    technologies: ['Python', 'Selenium', 'Scikit-learn', 'XGBoost'],
    features: [
      'Scraped real-time data using Selenium',
      'Preprocessed and analyzed stock data',
      'Built predictive models using Scikit-learn and XGBoost'
    ],
    github: 'https://github.com/yourusername/halal-stock-index-predictor',
    live: '',
    bgColor: 'bg-gradient-to-br from-green-500 to-blue-500'
  },
  {
    title: 'AR Indoor Navigation System',
    description: 'An augmented reality navigation app built during HackOHI/O to guide users indoors with real-time directions.',
    technologies: ['Unity', 'Swift', 'C', 'ARKit', 'Figma'],
    features: [
      'Led a 5-person team at HackOHI/O',
      'Used waypoints for indoor AR navigation',
      'Designed UI/UX mockups in Figma'
    ],
    github: 'https://github.com/yourusername/ar-navigation-app',
    live: '',
    bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    title: 'E-commerce Web Application',
    description: 'A full-stack online store with user authentication, product listings, and order tracking.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'React', 'MongoDB', 'HTML5'],
    features: [
      'Built RESTful APIs for auth and orders',
      'Managed 500+ transactions and 200+ users',
      'Led development of core back-end logic'
    ],
    github: 'https://github.com/yourusername/ecommerce-app',
    live: '',
    bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  }
]

// Technology color mapping
const techColors: { [key: string]: string } = {
  'All': 'bg-gradient-to-r from-gray-500 to-gray-600 text-white',
  'ARKit': 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white',
  'C': 'bg-gradient-to-r from-blue-600 to-blue-700 text-white',
  'Express.js': 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
  'Figma': 'bg-gradient-to-r from-purple-400 to-pink-500 text-white',
  'HTML5': 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
  'JavaScript': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
  'MongoDB': 'bg-gradient-to-r from-green-500 to-green-600 text-white',
  'Node.js': 'bg-gradient-to-r from-green-600 to-teal-600 text-white',
  'Python': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
  'React': 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white',
  'Scikit-learn': 'bg-gradient-to-r from-orange-400 to-pink-500 text-white',
  'Selenium': 'bg-gradient-to-r from-green-400 to-cyan-500 text-white',
  'Swift': 'bg-gradient-to-r from-orange-500 to-red-600 text-white',
  'Unity': 'bg-gradient-to-r from-gray-700 to-gray-800 text-white',
  'XGBoost': 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
    >
      {/* Project Header */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 ${project.bgColor} opacity-50`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white">{project.title[0]}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Project Links */}
        <div className="absolute bottom-4 right-4 flex space-x-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Features */}
        <ul className="mb-4 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full shadow-sm ${techColors[tech] || 'bg-primary/10 text-primary'}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Nature-themed decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor">
          <path
            d="M10 90 Q30 70, 50 50 T90 10"
            className="text-primary"
            strokeWidth="2"
          />
          <path
            d="M50 50 Q60 30, 70 40 T90 20"
            className="text-primary"
            strokeWidth="2"
          />
        </svg>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  // Get unique technologies
  const technologies = useMemo(() => {
    const techSet = new Set<string>()
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [])

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects
    return projects.filter(project => 
      project.technologies.includes(selectedTech)
    )
  }, [selectedTech])

  return (
    <section id="projects" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4 text-white dark:text-white">Featured Projects</h2>
          <p className="subheading text-gray-600">Bringing Ideas to Life</p>
        </motion.div>

        {/* Technology Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md ${
                !selectedTech
                  ? techColors['All']
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {technologies.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md ${
                  selectedTech === tech
                    ? techColors[tech]
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Nature-inspired decorative elements */}
        <div className="absolute -bottom-10 left-0 w-full overflow-hidden h-20 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path
              d="M0 20 Q25 0, 50 20 T100 20"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
        </div>

        {/* Floating leaves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 10, 0],
              transition: { duration: 15, repeat: Infinity }
            }}
            className="absolute top-1/4 left-1/4 w-8 h-8 text-primary opacity-10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L8 6H4L2 8V12L6 16V20L8 22H12L16 18H20L22 16V12L18 8V4L16 2H12Z" />
            </svg>
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
              rotate: [0, -10, 0],
              transition: { duration: 12, repeat: Infinity, delay: 1 }
            }}
            className="absolute bottom-1/4 right-1/4 w-6 h-6 text-primary opacity-10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L8 6H4L2 8V12L6 16V20L8 22H12L16 18H20L22 16V12L18 8V4L16 2H12Z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 