import ScrollProgressBar from '@/components/common/ScrollProgressBar'
import ScrollToTop from '@/components/common/ScrollToTop'
import HeroSection from '@/components/sections/HeroSection'
import EducationSection from '@/components/sections/EducationSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import DesignProjectsSection from '@/components/sections/DesignProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      {/* Chapter 1: Introduction */}
      <HeroSection />
      
      {/* Chapter 2: The Learning Phase */}
      <EducationSection />
      
      {/* Chapter 3: The Creation Phase */}
      <ProjectsSection />
      
      {/* Chapter 4: The Design Journey */}
      <DesignProjectsSection />
      
      {/* Chapter 5: Professional Growth */}
      <ExperienceSection />
      
      {/* Chapter 6: Let's Connect */}
      <ContactSection />
      
      <ScrollToTop />
    </>
  )
}
