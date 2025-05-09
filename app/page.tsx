import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
// import TestimonialsSection from "@/components/sections/testimonials-section";
import ResultsSection from "@/components/sections/results-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <ResultsSection />
      <ContactSection />
    </>
  );
}
