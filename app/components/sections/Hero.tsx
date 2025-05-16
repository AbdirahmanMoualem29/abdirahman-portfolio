'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Abdirahman Moualem
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Software Engineer & Machine Learning Enthusiast
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
                Computer Science and Engineering student at Ohio State University, passionate about building innovative solutions and exploring the frontiers of AI and machine learning.
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center md:justify-start gap-4"
              >
                <a
                  href="#contact"
                  className="button bg-primary hover:bg-primary-600 text-white"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="button bg-white dark:bg-gray-800 text-primary hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  View Projects
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="relative order-1 md:order-2"
            >
              <div className="w-64 h-64 md:w-[480px] md:h-[480px] relative mx-auto">
                <Image
                  src="/images/talk.jpg"
                  alt="Abdirahman Moualem"
                  fill
                  className="rounded-2xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  priority
                  sizes="(max-width: 768px) 256px, 480px"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 dark:to-black/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg opacity-25">
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
} 