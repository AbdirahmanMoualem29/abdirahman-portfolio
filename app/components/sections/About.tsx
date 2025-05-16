'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'

const achievements = [
  {
    title: 'GPA',
    value: '3.72',
    description: 'Academic Excellence',
  },
  {
    title: 'Leadership',
    value: '2',
    description: 'Student Organizations',
  },
  {
    title: 'Scholarships',
    value: '2',
    description: 'Merit-based Awards',
  },
]

const scholarships = [
  {
    name: 'Scarlet & Gray Scholarship',
    year: '2021-2024',
  },
  {
    name: 'Trustees Scholarship',
    year: '2021-2024',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white dark:text-white">About Me</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 mb-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/images/profile.jpg"
                      alt="Abdirahman Moualem"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 192px, 192px"
                      priority
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    I'm a Computer Science and Engineering student at Ohio State University with a strong academic record (3.72 GPA) and a passion for technology innovation. My journey in tech has been driven by a desire to create impactful solutions that make a difference.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-400">Education</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>B.S. in Computer Science and Engineering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>Minor in Economic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>Expected Graduation: May 2026</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-400">Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>Dean's List </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>Scarlet and Gray Scholar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>Land Grant Opportunity Scholar</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                Beyond academics, I stay engaged in the tech community through leadership and youth focused development programs. I believe in using technology as a tool for positive change and in giving back to the communities that shaped me.
              </p>
            </div>

            {/* Decorative background */}
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
          </div>
        </motion.div>
      </div>
    </section>
  )
} 