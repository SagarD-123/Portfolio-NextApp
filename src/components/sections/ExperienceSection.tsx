'use client'
import { motion } from 'framer-motion'

interface Position {
  title: string
  duration: string
  description: string[]
}

interface ExperienceItem {
  company: string
  overallDuration?: string
  positions?: Position[]
  title?: string
  duration?: string
  description?: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "Leucine-AI for Pharma",
    overallDuration: "Dec 2024 - Present",
    positions: [
      {
        title: "Software Engineer",
        duration: "May 2025 - Present",
        description: [
          "Promoted to full-time Software Engineer role",
          "Currently working on Multi-Industry Application MarketPlace Web Application",
          "Developing full-stack solutions for pharmaceutical industry clients"
        ]
      },
      {
        title: "Software Engineer Intern",
        duration: "Dec 2024 - April 2025",
        description: [
          "Worked on backend and frontend of ERP products for pharmaceutical industry",
          "Contributed to development of critical business applications",
          "Collaborated with cross-functional teams to deliver projects on time"
        ]
      }
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "REST API"]
  },
  {
    title: "Web Developer Intern",
    company: "Centre For Development Of Advanced Computing",
    duration: "March 2024 - Sept 2024",
    description: [
      "Created and maintained multiple full-stack applications ",
      "Implemented responsive designs and improved site performance",
      "Collaborated with cross-functional teams to deliver projects on time"
    ],
    technologies: ["React", "Node.js", "AWS", "TypeScript", "SQL"]
  }
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen py-20 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-blue-500/10" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-4xl">💼</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Chapter 5: Professional Growth
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Where theory meets practice. Each role has shaped my journey and contributed to my professional evolution.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50" />

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}>
                  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {experience.positions ? experience.company : experience.title}
                        </h3>
                        {!experience.positions && <p className="text-blue-400">{experience.company}</p>}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {experience.positions ? experience.overallDuration : experience.duration}
                      </span>
                    </div>
                    
                    {experience.positions ? (
                      <div className="mb-4">
                        {experience.positions.map((position, posIndex) => (
                          <div key={posIndex} className={`relative ${posIndex !== 0 ? 'mt-6 pt-6 border-t border-gray-700' : ''}`}>
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-white font-semibold">
                                {position.title}
                                {posIndex === 0 && (
                                  <span className="ml-2 text-xs px-2 py-1 bg-blue-500/30 text-blue-300 rounded-full">
                                    Current
                                  </span>
                                )}
                              </h4>
                              <span className="text-gray-400 text-sm">{position.duration}</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                              {position.description.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            {posIndex === 0 && (
                              <div className="absolute -left-3 top-0 h-3 w-3 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
                        {experience.description?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="https://drive.google.com/file/d/1CSKOnOjC0YiJHHUu9TDGszqNF_uksgkc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 rounded-full hover:bg-blue-500/20 transition-colors border border-blue-500/20"
          >
            <span>View Full Resume</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
      />
    </section>
  )
}

export default ExperienceSection
