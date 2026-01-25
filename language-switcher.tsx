"use client"

import { useState, useRef, useEffect } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { languages } from "@/lib/translations"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === language)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm hidden sm:inline">{currentLang?.nativeName}</span>
      </button>

      {isOpen && (
        <div className="absolute end-0 top-full mt-2 w-40 rounded-lg bg-card border border-border shadow-xl overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-3 text-start text-sm hover:bg-primary/10 transition-colors flex items-center justify-between ${
                language === lang.code ? "text-primary bg-primary/5" : "text-foreground/80"
              }`}
            >
              <span>{lang.nativeName}</span>
              <span className="text-xs text-muted-foreground">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
