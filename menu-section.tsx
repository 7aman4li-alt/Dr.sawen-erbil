"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function MenuSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, dir } = useLanguage()

  const menuItems = [
    {
      name: t.menu.dishes.lamb.name,
      description: t.menu.dishes.lamb.description,
      price: "IQD 8,500",
      image: "/images/dish-1.jpg",
    },
    {
      name: t.menu.dishes.kebab.name,
      description: t.menu.dishes.kebab.description,
      price: "IQD 7,000",
      image: "/images/dish-2.jpg",
    },
    {
      name: t.menu.dishes.dessert.name,
      description: t.menu.dishes.dessert.description,
      price: "IQD 5,000",
      image: "/images/dish-3.jpg",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-secondary/30"
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
            {t.menu.signatureDishes}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            {t.menu.headline}
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">
            {t.menu.subheadline}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-primary font-serif text-xl">{item.price}</span>
                </div>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 bg-transparent"
          >
            <a href="#contact">{t.menu.viewFullMenu}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
