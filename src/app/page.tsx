import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Curriculum from '@/components/Curriculum';
import Teacher from '@/components/Teacher';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Curriculum />
      <Teacher />
      <Contact />
      <Footer />
    </main>
  );
}
