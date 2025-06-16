'use client'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import CurriculumSection from './components/sections/CurriculumSection'
import InstructorsSection from './components/sections/InstructorsSection'
import GallerySection from './components/sections/GallerySection'
import FAQSection from './components/sections/FAQSection'
import LocationSection from './components/sections/LocationSection'
import ContactSection from './components/sections/ContactSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import BackgroundEffect from './components/effects/BackgroundEffect'
import ScrollAnimation from './components/effects/ScrollAnimation'

export default function Home() {
  return (
    <main className="relative">
      <BackgroundEffect />
      <Navbar />
      <ScrollAnimation>
        <HeroSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <AboutSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <CurriculumSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <InstructorsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <GallerySection />
      </ScrollAnimation>
      <ScrollAnimation>
        <TestimonialsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <LocationSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <ContactSection />
      </ScrollAnimation>
      <Footer />
    </main>
  )
} 