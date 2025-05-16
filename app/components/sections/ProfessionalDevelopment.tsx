import { motion } from 'framer-motion'

const programs = [
  {
    title: 'eBay Pathway Program',
    role: 'Software Development Track',
    period: 'Jun-Aug 2024',
    location: 'Remote',
    description: 'Selected for eBay\'s prestigious software engineering internship program focusing on full-stack development and e-commerce technologies.',
    skills: ['Full-stack Development', 'E-commerce', 'System Design'],
    status: 'Upcoming'
  },
  {
    title: 'IBM Accelerate Program',
    role: 'Software Development Track',
    period: 'Jun-Jul 2023',
    location: 'Remote',
    description: 'Participated in IBM\'s selective program for aspiring software engineers, focusing on cloud technologies and enterprise solutions.',
    skills: ['Cloud Computing', 'Enterprise Software', 'Agile Development'],
    status: 'Completed'
  }
]

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg overflow-hidden"
    >
      {/* Status indicator */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
        program.status === 'Upcoming' ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-700'
      }`}>
        {program.status}
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400 mb-2">{program.title}</h3>
        <div className="text-gray-700 font-medium">{program.role}</div>
        <div className="text-sm text-gray-500">
          {program.location} • {program.period}
        </div>
      </div>

      <p className="text-gray-600 mb-6">{program.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {program.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
          >
            {skill}
          </span>
        ))}
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
          <path
            d="M50 50 Q40 70, 50 80 T30 90"
            className="text-primary"
            strokeWidth="2"
          />
        </svg>
      </div>
    </motion.div>
  )
}

export default function ProfessionalDevelopment() {
  return (
    <section id="professional-development" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4 text-white dark:text-white">Professional Development</h2>
          <p className="subheading text-gray-600">Growing Through Learning</p>
        </motion.div>

        {/* Growth path visualization */}
        <div className="relative mb-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2 origin-top"
          />
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>

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
              rotate: [0, 5, 0],
              transition: { duration: 8, repeat: Infinity }
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
              rotate: [0, -5, 0],
              transition: { duration: 10, repeat: Infinity, delay: 1 }
            }}
            className="absolute top-3/4 right-1/4 w-6 h-6 text-primary opacity-10"
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