import type { ReactNode } from "react"
import { Header } from "@/components/header"
import "@/app/globals.css"
import "@fontsource/montserrat/latin-300.css"
import "@fontsource/montserrat/cyrillic-300.css"
import "@fontsource/montserrat/latin-400.css"
import "@fontsource/montserrat/cyrillic-400.css"
import "@fontsource/montserrat/latin-500.css"
import "@fontsource/montserrat/cyrillic-500.css"
import "@fontsource/montserrat/latin-600.css"
import "@fontsource/montserrat/cyrillic-600.css"
import "@fontsource/montserrat/latin-700.css"
import "@fontsource/montserrat/cyrillic-700.css"

export function SiteLayout({children, language}: {children: ReactNode; language: "ru" | "en"}) {
  return <html lang={language}><body className="min-h-screen flex flex-col">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:p-4">{language === "en" ? "Skip to content" : "Перейти к содержимому"}</a>
    <Header /><main id="main-content" className="flex-1">{children}</main>
  </body></html>
}
