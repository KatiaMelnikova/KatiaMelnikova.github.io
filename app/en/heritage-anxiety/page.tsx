import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnglishHeritageAnxietyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Heritage Trouble</h1>

        <div className="mb-6 md:mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src="/images/heritage-anxiety.jpg" alt="Heritage Anxiety" fill className="object-cover" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">
            Church of the Kazan Icon of the Mother of God (Kirillov, Vologda Region)
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                "Heritage" worries me. Not in the sense that I am worried about its fate (of course I am, but not in the
                same way as heritage activists), but in the sense that I am haunted by the amazing passion for heritage
                and the many contradictions that it is associated with. The more we worry about the fate of historical monuments, the more monuments there seem to raise concern. The more we talk about the fact
                that caring for the past is a social duty, the more elitist the projects for the revitalization of
                heritage sites become. Among the topics that interest me are state heritage politics, which establish
                canons of a valuable past, and grassroots forms of activism in the field of caring for the past, and the
                difficult, dissonant heritage that produces communities of trauma and determines the moral imperatives
                of memory.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Publications:</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E.A. Heritage Boom, Care Society and New Forms of Saving the Past. 2026 (in press) (in Russian)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E.A. Heritage Canon and National Peripheries: from Soviet Lists of Historical and Cultural
                Monuments to Objects of Cultural Heritage of Russia // Siberian Historical Studies. 2025 (in press) (in Russian)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E.A. Difficult Heritage: Moral Reboot // Ethnographic Review. 2025 (in press) (in Russian)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://www.academia.edu/101966139/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B8%D0%B3%D0%B5%D0%BD%D1%86%D0%B8%D1%8F_%D0%BA%D0%B0%D0%BA_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5_%D0%B2%D0%B0%D0%BB%D0%B0%D0%B0%D0%BC%D1%81%D0%BA%D0%BE%D0%B5_%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%B8%D0%B5_%D0%B8_%D0%B5%D0%B3%D0%BE_%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%B2_%D0%BF%D0%BE%D0%B7%D0%B4%D0%BD%D0%B5%D0%BC_%D0%A1%D0%A1%D0%A1%D0%A0_Ab_Imperio_2023_1_%D0%A1_181_220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Melnikova E.A. Intelligentsia as Event: Valaam Heritage and Its Keepers in the Late USSR // Ab
                  Imperio. 2023. №1. P. 181-220 (in Russian)
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E.A. Review of: Corinna Kuhr-Korolev, Ulrike Schmiegelt-Rietig, Elena Zubkova with
                participation of Wolfgang Eichwede. Looting and Rescue: Russian Museums during World War II / translated
                from German by K. Levinson. Moscow: New Literary Review, 2024. 552 p. ISBN 978544819982 // Laboratorium:
                Journal of Social Research. 2025 (in press) (in Russian)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">
              Public Lectures, Workshops and Presentations:
            </h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                {"Who and Why Preserves Heritage?"} Discussion with Ksenia Sidorina and members of the {"Gang"} team as
                part of the summer festival of book neighborhood
                <a
                  href="https://okrug.eusp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {" "}
                  {"Reading Circle"}.
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://vlesah.com/people/u-menya-est-segodnya-svobodnyy-den-i-ya-edu-kto-segodnya-spasaet-nasledie-v-rossii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {"I have a free day today, and I'm going."} Who is saving heritage in Russia today? Interview with the
                  media project {"In the Woods"}.
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://youtu.be/UPOdkEPCZ5k?si=VaAvpjokyDhKI6lF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {
                    "Heritage Canon and National Peripheries: from Soviet Lists of Historical and Cultural Monuments to Objects of Cultural Heritage of Russia"
                  }
                  .
                </a>{" "}
                Presentation at the Memory and Heritage Seminar (SPIN).
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                {"How to Discuss Dissonant Heritage: Searching for Tools for Public Dialogue"}. Round table as part of
                the VIII International Symposium {"Education and City"}.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                {"Memory and Heritage between Past and Present"}. Public lecture at New Holland as part of the series{" "}
                {"Heritage and Digital Re/evolution of Heritage"}.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://youtu.be/UPOdkEPCZ5k?si=VaAvpjokyDhKI6lF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {"Heritage Anxiety: Grassroots Practices of Passeism and Social Activism in Russia"}.
                </a>{" "}
                Presentation at the joint meeting of the seminar {"Anthropology of the City and Urban Folklore"} and{" "}
                {"Memory and Heritage Seminar"} (SPIN).
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Heritage anxiety", alternates: { canonical: "/en/heritage-anxiety/", languages: { ru: "/heritage-anxiety/", en: "/en/heritage-anxiety/" } } }
