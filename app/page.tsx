"use client";

import {
  AmbientEffects,
  Navbar,
  HeroSection,
  ServicesSection,
  WorkSection,
  ProcessSection,
  AboutSection,
  ContactSection,
  Footer,
} from "@/components/index";

export default function CodeOTLanding() {
  return (
    <div className="min-h-screen bg-[#090805] text-[#e8dfd0] overflow-x-hidden relative selection:bg-[#c9a84c]/20 selection:text-[#e8c97a]">
      {/* Global ambient effects (cursor glow + noise overlay) */}
      <AmbientEffects />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}