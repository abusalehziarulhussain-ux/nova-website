import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Pricing from '@/components/Pricing';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <Header />
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <ContactSection />
      <Footer />
    </main>
  );
}
