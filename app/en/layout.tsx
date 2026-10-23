import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SiteLayout } from "@/components/site-layout"

export const metadata: Metadata = {
  metadataBase: new URL("https://katiamelnikova.github.io"),
  title: { default: "Ekaterina Melnikova", template: "%s | Ekaterina Melnikova" },
  description: "Personal website of Ekaterina Melnikova, historian and anthropologist. Research, publications, teaching and projects.",
  icons: { icon: "/favicon.png", apple: "/apple-icon.png" },
  verification: {
    google: "Whcry9weIFOpzGCXztFvBX4jVmihw6gMvH8vbnOAuvQ"
  }
}

export default function Layout({children}: {children: ReactNode}) {
  return <SiteLayout language="en">{children}</SiteLayout>
}
