"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Users, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, dir } = useLanguage()

  const stats = [
    { icon: Star, value: t.about.stat1, label: t.about.stat1Label },
    { icon: Users, value: t.about.stat2, label: t.about.stat2Label },
    { icon: Award, value: t.about.stat3, label: t.about.stat3Label },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-muted/30"
      dir={dir}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            } ${dir === "rtl" ? "lg:order-2" : ""}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dr-sawen-dizay.jpg"
                  alt="Dr. Sawen Dizay"
                  width={500}
                  height={600}
                  className="object-cover w-full aspect-[4/5]"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold">5.0</div>
                <div className="text-sm opacity-90">{t.about.stat1Label}</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            } ${dir === "rtl" ? "lg:order-1" : ""}`}
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {t.about.label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground leading-tight text-balance">
                {t.about.headline}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
