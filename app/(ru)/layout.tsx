import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SiteLayout } from "@/components/site-layout"

export const metadata: Metadata = {
  metadataBase: new URL("https://katiamelnikova.github.io"),
  title: { default: "Екатерина Мельникова", template: "%s | Екатерина Мельникова" },
  description: "Персональный сайт Екатерины Мельниковой — историка и антрополога. Исследования, публикации, преподавание и проекты.",
  icons: { icon: "/favicon.png", apple: "/apple-icon.png" },
  verification: {
    google: "Whcry9weIFOpzGCXztFvBX4jVmihw6gMvH8vbnOAuvQ"
  }
}

export default function Layout({children}: {children: ReactNode}) {
  return <SiteLayout language="ru">{children}</SiteLayout>
}
