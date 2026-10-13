"use client"

import Link from "next/link"
import { LanguageSwitcher } from "./language-switcher"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/")

  // Base paths for navigation based on language
  const basePath = isEnglish ? "/en" : ""

  return (
    <header className="w-full py-4 md:py-6 border-b">
      <div className="container px-4">
        <Link href={isEnglish ? "/en" : "/"} className="block text-center mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide text-[#2F4F4F] leading-tight">
            <span className="font-light">{isEnglish ? "Ekaterina" : "Екатерина"}</span>{" "}
            <span className="block sm:inline">{isEnglish ? "MELNIKOVA" : "МЕЛЬНИКОВА"}</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block border-t border-b py-2">
          <div className="flex items-center justify-center space-x-8">
            <Link href={basePath || "/"} className="text-sm font-medium hover:text-[#3D6666] px-3 py-2">
              {isEnglish ? "home" : "главная"}
            </Link>
            <Link href={`${basePath}/cv`} className="text-sm font-medium hover:text-[#3D6666] px-3 py-2">
              CV
            </Link>
            <Link href={`${basePath}/teaching`} className="text-sm font-medium hover:text-[#3D6666] px-3 py-2">
              {isEnglish ? "teaching" : "преподавание"}
            </Link>
            <Link href={`${basePath}/publications`} className="text-sm font-medium hover:text-[#3D6666] px-3 py-2">
              {isEnglish ? "publications" : "публикации"}
            </Link>
            <Link href={`${basePath}/applied-projects`} className="text-sm font-medium hover:text-[#3D6666] px-3 py-2">
              {isEnglish ? "projects" : "проекты"}
            </Link>
            <Link href={`${basePath}/contacts`} className="text-sm font-medium hover:text-[#3D6666] px-3 py-2">
              {isEnglish ? "contacts" : "контакты"}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden block border-t border-b py-3">
          <div className="grid grid-cols-2 gap-3 text-center mb-3">
            <Link
              href={basePath || "/"}
              className="text-sm font-medium py-3 px-2 hover:bg-gray-100 hover:text-[#3D6666] rounded transition-colors"
            >
              {isEnglish ? "Home" : "Главная"}
            </Link>
            <Link
              href={`${basePath}/cv`}
              className="text-sm font-medium py-3 px-2 hover:bg-gray-100 hover:text-[#3D6666] rounded transition-colors"
            >
              CV
            </Link>
            <Link
              href={`${basePath}/teaching`}
              className="text-sm font-medium py-3 px-2 hover:bg-gray-100 hover:text-[#3D6666] rounded transition-colors"
            >
              {isEnglish ? "Teaching" : "Преподавание"}
            </Link>
            <Link
              href={`${basePath}/publications`}
              className="text-sm font-medium py-3 px-2 hover:bg-gray-100 hover:text-[#3D6666] rounded transition-colors"
            >
              {isEnglish ? "Publications" : "Публикации"}
            </Link>
            <Link
              href={`${basePath}/applied-projects`}
              className="text-sm font-medium py-3 px-2 hover:bg-gray-100 hover:text-[#3D6666] rounded transition-colors"
            >
              {isEnglish ? "Projects" : "Проекты"}
            </Link>
            <Link
              href={`${basePath}/contacts`}
              className="text-sm font-medium py-3 px-2 hover:bg-gray-100 hover:text-[#3D6666] rounded transition-colors"
            >
              {isEnglish ? "Contacts" : "Контакты"}
            </Link>
          </div>
          <div className="flex justify-center border-t pt-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
