'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const achievements = [
  {
    title: "Technical Skills",
    icon: "💻",
    items: [
      "Full Stack Development",
      "Data Structures & Algorithms",
      "UI/UX Design",
      "Database Management"
    ]
  },
  {
    title: "Academic Achievements",
    icon: "🏆",
    items: [
      "7.5 CGPA",
      "Notable Student 2023-24",
      "Conducted multiple events",
      "Member of GDSC IIITV"
    ]
  },
  {
    title: "Certifications",
    icon: "📜",
    items: [
      "AWS Cloud Practitioner",
      "Google UX Design",
      "Meta Frontend Development",
      "IBM Data Science"
    ]
  }
]

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen relative py-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-purple-500/10" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-4xl">🎓</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chapter 2: The Learning Phase
            </h2>
            <p className="text-gray-400 text-lg">
              Where knowledge meets passion, shaping my technological foundation...
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - College Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-transform duration-300 group-hover:scale-[1.02] h-full">
                {/* College Header */}
                <div className="relative h-[500px] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/images/collage.jpg"
                      alt="IIIT Vadodara"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Indian Institute of Information Technology, Vadodara
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400 text-lg">2020 - 2024</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300 text-lg">Computer Science & Engineering</span>
                    </div>
                  </motion.div>
                </div>

                {/* College Details */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Course Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                        <span className="text-2xl mr-3">📚</span>
                        Core Courses
                      </h4>
                      <div className="grid grid-cols-2 gap-5">
                        {[
                          "Data Structures",
                          "Algorithms",
                          "Operating Systems",
                          "Database Systems",
                          "Computer Networks",
                          "Web Development",
                          "Machine Learning",
                          "Cloud Computing"
                        ].map((course, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-3 group"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                            <span className="text-gray-300 text-sm group-hover:text-blue-400 transition-colors">
                              {course}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Achievements Grid */}
            <div className="grid grid-cols-1 gap-8 h-full">
              {achievements.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <h4 className="text-xl font-semibold text-white">
                      {category.title}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                        <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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

export default EducationSection 