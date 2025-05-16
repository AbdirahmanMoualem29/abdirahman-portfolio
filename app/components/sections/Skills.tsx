'use client';

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'C#', 'Java', 'SQL', 'HTML/CSS']
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['React','.NET', 'Material-UI']
  },
  {
    name: 'Machine Learning & Data',
    skills: ['TensorFlow', 'scikit-learn', 'Data Analysis']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Jupyter']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-white">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400 mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative background */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor">
                  <path
                    d="M10 90 Q30 70, 50 50 T90 10"
                    className="text-primary"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 