"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ClinicExperience } from "@/components/clinic-experience"
import { Services } from "@/components/services"
import { Reviews } from "@/components/reviews"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <About />
        <ClinicExperience />
        <Services />
        <Reviews />
        <CTASection />
        <Contact />
        <Footer />
        <MobileCTA />
      </main>
    </LanguageProvider>
  )
}
