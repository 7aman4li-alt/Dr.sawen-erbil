"use client"

import { useEffect, useRef, useState } from "react"
import { Utensils, ShoppingBag, Truck, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, dir } = useLanguage()

  const services = [
    {
      icon: Utensils,
      title: t.experience.services.dineIn.title,
      description: t.experience.services.dineIn.description,
    },
    {
      icon: ShoppingBag,
      title: t.experience.services.takeaway.title,
      description: t.experience.services.takeaway.description,
    },
    {
      icon: Truck,
      title: t.experience.services.delivery.title,
      description: t.experience.services.delivery.description,
    },
    {
      icon: Clock,
      title: t.experience.services.lateNight.title,
      description: t.experience.services.lateNight.description,
    },
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
      id="experience"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-background"
      dir={dir}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-primary mb-4">
            {t.experience.howWeServe}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            {t.experience.headline}
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">
            {t.experience.subheadline}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-secondary/50 border border-border">
            <span className="text-foreground/60">{t.experience.avgPrice}</span>
            <span className="font-serif text-xl text-primary">IQD 5,000 – 10,000</span>
          </div>
        </div>
      </div>
    </section>
  )
}
