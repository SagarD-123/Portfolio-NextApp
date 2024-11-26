'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface DesignProject {
  title: string
  category: string
  description: string
  imageUrl: string
  tools: string[]
  behanceUrl?: string
  dribbbleUrl?: string
  caseStudyUrl?: string
}

const designProjects: DesignProject[] = [
  {
    title: "Vastra-Fashion E-commerce App Design",
    category: "Web App Design",
    description: "A modern e-commerce app design focusing on user experience and accessibility",
    imageUrl: "/images/Thumbnail.png", // Add your design images
    tools: ["Figma", "Adobe XD", "Illustrator","User Research","UI/UX Design"],
    behanceUrl: "https://www.behance.net/gallery/210726477/VASTRA-ecom-web-application"
    // dribbbleUrl: "https://dribbble.com/yourproject1",
    // caseStudyUrl: "/case-study-1"
  },
  {
    title: "E-commerce Website",
    category: "Web Design",
    description: "Complete e-commerce platform with focus on user journey and conversion optimization",
    imageUrl: "/images/Home.png",
    tools: ["Figma", "Adobe XD", "Photoshop","User Research","UI/UX Design"],
    behanceUrl: "https://www.behance.net/gallery/210885291/Gaming-Platform"
    // caseStudyUrl: "/case-study-2"
  },
  // Add more design projects
]

const DesignProjectsSection = () => {
  return (
    <section id="design-projects" className="min-h-screen py-20 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-purple-500/10" />
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
            <span className="text-4xl">🎨</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Chapter 4: The Design Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Where creativity meets functionality. Each design tells a story of user-centered thinking and aesthetic innovation.
          </p>
        </motion.div>

        {/* Design Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Project Image */}
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-blue-400 text-sm">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-white/10 rounded-full text-white"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.behanceUrl && (
                        <a
                          href={project.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          Behance
                        </a>
                      )}
                      {project.dribbbleUrl && (
                        <a
                          href={project.dribbbleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          Dribbble
                        </a>
                      )}
                      {project.caseStudyUrl && (
                        <a
                          href={project.caseStudyUrl}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          View Case Study
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.behance.net/sagardevre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 rounded-full hover:bg-blue-500/20 transition-colors border border-blue-500/20"
          >
            <span>View More on Behance</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

export default DesignProjectsSection 