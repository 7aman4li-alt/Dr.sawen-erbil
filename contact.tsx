"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock, Instagram, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, dir } = useLanguage()

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

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      action: "https://maps.google.com/?q=Koya+Rd+Erbil+Iraq",
      actionLabel: t.contact.getDirections,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      action: "tel:07518483857",
      actionLabel: t.nav.bookAppointment,
    },
    {
      icon: Clock,
      label: `${t.contact.hoursLabel}: ${t.contact.hours}`,
      action: null,
      actionLabel: null,
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-muted/30"
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
            {t.contact.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground text-balance">
            {t.contact.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            } ${dir === "rtl" ? "lg:order-2" : ""}`}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.8876!2d44.0!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEyJzAwLjAiTiA0NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Map overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. Sawen Dizay Clinic</div>
                    <div className="text-sm text-muted-foreground">{t.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            } ${dir === "rtl" ? "lg:order-1" : ""}`}
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-medium text-foreground mb-2">
                    {item.label}
                  </div>
                  {item.action && (
                    <Button
                      asChild
                      variant="link"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                    >
                      <a href={item.action} target={item.action.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {item.actionLabel}
                        <Navigation className={`w-4 h-4 ${dir === "rtl" ? "mr-2" : "ml-2"}`} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-lg font-medium text-foreground">
                  {t.contact.instagram}
                </div>
                <div className="text-sm text-muted-foreground">@dr.sawendizay</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
