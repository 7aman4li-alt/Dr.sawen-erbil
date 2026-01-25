"use client"

import { Stethoscope, Shield, ClipboardList, HeartPulse } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Stethoscope,
      title: t.services.service1,
      description: t.services.service1Desc,
    },
    {
      icon: Shield,
      title: t.services.service2,
      description: t.services.service2Desc,
    },
    {
      icon: ClipboardList,
      title: t.services.service3,
      description: t.services.service3Desc,
    },
    {
      icon: HeartPulse,
      title: t.services.service4,
      description: t.services.service4Desc,
    },
  ]

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t.services.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground text-balance">
            {t.services.headline}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
