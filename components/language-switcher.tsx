"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function LanguageSwitcher() {
  const pathname = usePathname()

  // Check if current path is in English version
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/")

  // Generate the corresponding path in the other language
  const switchPath = isEnglish ? pathname.replace(/^\/en/, "") || "/" : `/en${pathname}`

  return (
    <Link href={switchPath} hrefLang={isEnglish ? "ru" : "en"} lang={isEnglish ? "ru" : "en"} aria-label={isEnglish ? "Русская версия этой страницы" : "English version of this page"} className="text-sm font-medium hover:text-[#3D6666] px-3 py-2 border-l ml-4">
      {isEnglish ? "РУС" : "ENG"}
    </Link>
  )
}
