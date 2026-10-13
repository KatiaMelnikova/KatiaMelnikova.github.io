import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 md:mb-8">
          <a
            href="https://eu-spb.academia.edu/EkaterinaMelnikova/CurriculumVitae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm md:text-base"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Полное CV
          </a>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Образование</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="font-medium text-sm md:text-base">Кандидат исторических наук</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Музей антропологии и этнографии им. Петра Великого (Кунсткамера) Российской академии наук, 2006
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Магистр этнологии</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Европейский университет в Санкт-Петербурге, 2003
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Университетский диплом</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Санкт-Петербургский государственный университет, исторический факультет, 2000
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Профессиональный опыт</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="font-medium text-sm md:text-base">Доцент</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Факультет истории, Европейский Университет в Санкт-Петербурге, 2016 - настоящее время
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base leading-tight">
                  Заведующий отделом восточных славян и народов Европейской части России
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Музей Антропологии и Этнографии им. Петра Великого (Кунсткамера) Российской Академии наук, 2017 - 2022
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Научный сотрудник</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Музей Антропологии и Этнографии им. Петра Великого (Кунсткамера) Российской Академии наук, 2011 - 2017
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Координатор</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Центр Устной Истории Европейского университета в Санкт-Петербурге, 2005 - 2008
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "CV", alternates: { canonical: "/cv/", languages: { ru: "/cv/", en: "/en/cv/" } } }
