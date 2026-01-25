"use client"

import { useState, useEffect } from "react"
import { Phone, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, dir } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      dir={dir}
    >
      <div className="bg-card/95 backdrop-blur-xl border-t border-border p-4 shadow-xl">
        <div className="flex gap-3">
          <a
            href="tel:07518483857"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {t.mobileCta.call}
          </a>
          <a
            href="tel:07518483857"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <Calendar className="w-5 h-5" />
            {t.mobileCta.book}
          </a>
        </div>
      </div>
    </div>
  )
}
