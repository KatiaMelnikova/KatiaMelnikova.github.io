import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function EnglishCVPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 md:mb-8">
          <a
            href="https://www.academia.edu/144180612/EKATERINA_MELNIKOVA_CV_2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm md:text-base"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Full CV
          </a>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Education</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="font-medium text-sm md:text-base">PhD (Kandidat istoricheskikh nauk)</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Peter the Great Museum of Anthropology and Ethnography (Kunstkamera), Russian Academy of Sciences,
                  2006
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Master of Ethnology</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  European University at St. Petersburg, 2003
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">University Diploma</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  St. Petersburg State University, Faculty of History, 2000
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Professional Experience</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="font-medium text-sm md:text-base">Associate Professor</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Faculty of History, European University at St. Petersburg, 2016 - present
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base leading-tight">
                  Head of the Department of Eastern Slavs and Peoples of the European Part of Russia
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Peter the Great Museum of Anthropology and Ethnography (Kunstkamera), Russian Academy of Sciences,
                  2017 - 2022
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Research Fellow</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Peter the Great Museum of Anthropology and Ethnography (Kunstkamera), Russian Academy of Sciences,
                  2011 - 2017
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Coordinator</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Oral History Center, European University at St. Petersburg, 2005 - 2008
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "CV", alternates: { canonical: "/en/cv/", languages: { ru: "/cv/", en: "/en/cv/" } } }
