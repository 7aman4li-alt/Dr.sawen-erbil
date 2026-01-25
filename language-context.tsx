"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, languages, translations } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem("dr-sawen-language") as Language
    if (saved && languages.some((l) => l.code === saved)) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem("dr-sawen-language", language)
    
    // Update document direction
    const lang = languages.find((l) => l.code === language)
    if (lang) {
      document.documentElement.dir = lang.dir
      document.documentElement.lang = language
    }
  }, [language])

  const t = translations[language]
  const dir = languages.find((l) => l.code === language)?.dir || "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
