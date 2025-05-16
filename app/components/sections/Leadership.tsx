'use client';

import { motion } from 'framer-motion'
import WaterBackground from '../ui/WaterBackground'

const leadershipExperience = [
  {
    title: 'President',
    organization: 'Somali Student Association',
    location: 'The Ohio State University — Columbus, OH',
    period: 'Aug 2022 – Present',
    icon: '👥',
    description: [
      'Lead a 21-member executive board in organizing cultural showcases, career panels, and service events that celebrate and empower the Somali student community',
      'Grew membership by over 300%, making SSA one of the largest cultural organizations on campus',
      'Raised over $25,000 in funding from sponsors and university partners; hosted the largest SSA event to date, with 900+ attendees'
    ]
  },
  {
    title: 'Software Development Track Participant',
    organization: 'eBay Pathway Program',
    location: 'Remote',
    period: 'Jun 2024 – Aug 2024',
    icon: '💻',
    description: [
      'Selected for eBay\'s competitive early-career development program focused on building software engineering skills',
      'Gained hands-on experience through technical workshops, mentorship, and collaborative coding challenges'
    ]
  }
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative">
      <WaterBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-white">Leadership Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Making an Impact in the Community</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {leadershipExperience.map((experience, index) => (
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
                      <span className="text-2xl">{experience.icon}</span>
                      <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400">{experience.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">• {experience.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{experience.organization}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0 md:ml-4">{experience.period}</p>
                </div>

                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                  {experience.description.map((bullet, i) => (
                    <li key={i} className="pl-2">{bullet}</li>
                  ))}
                </ul>

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