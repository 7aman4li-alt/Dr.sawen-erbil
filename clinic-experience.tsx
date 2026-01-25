"use client"

import Image from "next/image"
import { Building2, Heart, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ClinicExperience() {
  const { t, dir } = useLanguage()

  const features = [
    {
      icon: Building2,
      title: t.clinic.feature1,
      description: t.clinic.feature1Desc,
    },
    {
      icon: Heart,
      title: t.clinic.feature2,
      description: t.clinic.feature2Desc,
    },
    {
      icon: Users,
      title: t.clinic.feature3,
      description: t.clinic.feature3Desc,
    },
  ]

  return (
    <section id="clinic" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t.clinic.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6 text-balance">
            {t.clinic.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.clinic.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative ${dir === "rtl" ? "lg:order-2" : ""}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/clinic-room.jpg"
                alt="Clinic Interior"
                width={600}
                height={450}
                className="object-cover w-full aspect-[4/3]"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full bg-primary/5 rounded-3xl" />
          </div>

          {/* Features */}
          <div className={`space-y-6 ${dir === "rtl" ? "lg:order-1" : ""}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
