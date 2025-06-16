'use client'

import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProgramsSection from './components/ProgramsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
} 