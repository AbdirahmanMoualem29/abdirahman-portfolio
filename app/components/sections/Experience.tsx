'use client';

import { motion } from 'framer-motion'

// Import the same tech colors from Projects component
const techColors: { [key: string]: string } = {
  'Python': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
  'PostgreSQL': 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white',
  'React': 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white',
  'Node.js': 'bg-gradient-to-r from-green-600 to-teal-600 text-white',
  'JavaScript': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
  'HTML5': 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
  'Machine Learning': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
  'Data Analysis': 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white',
  'AI': 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
  'Front-end': 'bg-gradient-to-r from-pink-400 to-rose-500 text-white',
  'Full-stack': 'bg-gradient-to-r from-green-400 to-teal-500 text-white'
}

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'American Electric Power (AEP)',
    location: 'Remote',
    period: 'May 2024 – Aug 2024',
    description: [
      'Implemented a full-stack documentation site cataloging over 14 internal portfolio management services',
      'Instituted a machine learning detection system for 1.5 million electric poles using image data, geospatial mapping, PostgreSQL, and Python',
      'Developed a dashboard for electric pole data collection, achieving 97% accuracy'
    ],
    technologies: ['Python', 'PostgreSQL', 'Machine Learning', 'Full-stack']
  },
  {
    title: 'Machine Learning Research Assistant',
    company: 'Ohio State University Agriculture',
    location: 'Columbus, OH',
    period: 'Sep 2023 – Present',
    description: [
      'Conducted research using environmental and soil data to build machine learning models forecasting crop yields',
      'Performed data analysis on historical weather records, soil metrics, and agricultural datasets to extract insights',
      'Developed AI image-to-text technology for drone-collected imagery, identifying plant health issues to improve crop assessments'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'AI']
  },
  {
    title: 'Web Developer/Front-end Engineer',
    company: 'Columbus Parks and Recreation Department',
    location: 'Columbus, OH',
    period: 'Jun 2023 – Aug 2023',
    description: [
      'Collaborated with a team of 6 to construct an accessible website, ensuring the distribution of over 100,000 meals',
      'Gathered feedback on software usability, resulting in iterative improvements for enhanced user experience',
      'Developed a Project Manager interface for Overdue Review, Site Sequencing, and integrations'
    ],
    technologies: ['React', 'JavaScript', 'HTML5', 'Front-end']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-white">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Building impactful solutions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">{experience.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">• {experience.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{experience.company}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0 md:ml-4">{experience.period}</p>
                </div>

                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                  {experience.description.map((bullet, i) => (
                    <li key={i} className="pl-2">{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full shadow-sm ${techColors[tech] || 'bg-primary/10 text-primary dark:bg-primary/20'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="absolute -right-2 -bottom-2 w-24 h-24 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor">
                    <path
                      d="M10 90 Q30 70, 50 50 T90 10"
                      className="text-primary"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 