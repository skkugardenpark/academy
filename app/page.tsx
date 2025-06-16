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

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <InstructorsSection />
      <GallerySection />
      <FAQSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 