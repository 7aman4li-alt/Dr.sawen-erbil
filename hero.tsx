"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Clock, Phone, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, dir } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background" dir={dir}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${dir === "rtl" ? "lg:order-2" : ""}`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
            </div>

            {/* Headlines */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                {t.hero.headline}
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary leading-tight text-balance">
                {t.hero.headlineBold}
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              {t.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-xl shadow-primary/20 h-14 text-base"
              >
                <a href="tel:07518483857" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {t.hero.cta}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-border hover:bg-muted bg-transparent"
              >
                <a href="tel:07518483857" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {t.hero.ctaSecondary}
                </a>
              </Button>
            </div>

            {/* Hours Badge */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">{t.hero.hours}</span>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${dir === "rtl" ? "lg:order-1" : ""}`}
          >
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/clinic-hero.jpg"
                  alt="Dr. Sawen Dizay Clinic"
                  width={600}
                  height={700}
                  className="object-cover w-full aspect-[4/5]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">5.0</div>
                    <div className="text-sm text-muted-foreground">{t.about.stat1Label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
