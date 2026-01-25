"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Reviews() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, dir } = useLanguage()

  const reviews = [
    { text: t.reviews.review1, author: t.reviews.review1Author },
    { text: t.reviews.review2, author: t.reviews.review2Author },
    { text: t.reviews.review3, author: t.reviews.review3Author },
    { text: t.reviews.review4, author: t.reviews.review4Author },
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
      id="reviews"
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
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t.reviews.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6 text-balance">
            {t.reviews.headline}
          </h2>
          
          {/* Rating display */}
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-primary fill-primary" />
            ))}
            <span className="ml-2 text-lg font-semibold text-foreground">5.0</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className={`absolute top-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ${dir === "rtl" ? "left-6" : "right-6"}`}>
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                {'"'}{review.text}{'"'}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
