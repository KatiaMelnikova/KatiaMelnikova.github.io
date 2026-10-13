import { ArrowLeft, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function EnglishContactsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Contacts</h1>

        <div className="max-w-md">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-sm md:text-base">Email</h3>
                <p className="text-muted-foreground text-sm md:text-base">Melek@eu.spb.ru</p>
              </div>
            </div>

            <div className="flex items-start">
              <ExternalLink className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <a
                  href="https://eusp.org/en/people/melnikova-ekaterina-aleksandrovna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm md:text-base leading-tight text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Page on the European University at St. Petersburg website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Contacts", alternates: { canonical: "/en/contacts/", languages: { ru: "/contacts/", en: "/en/contacts/" } } }
