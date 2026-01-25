"use client"

import Link from "next/link"
import { Instagram, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, dir } = useLanguage()

  return (
    <footer className="py-12 bg-foreground text-background" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-start">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">S</span>
              </div>
              <span className="font-serif text-xl font-semibold">Dr. Sawen Dizay</span>
            </div>
            <p className="text-background/60 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#about"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="#clinic"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              {t.nav.clinic}
            </Link>
            <Link
              href="#services"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href="#contact"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:07518483857"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Call"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-background/10" />

        {/* Copyright */}
        <div className="text-center text-sm text-background/50">
          © {new Date().getFullYear()} Dr. Sawen Dizay. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
