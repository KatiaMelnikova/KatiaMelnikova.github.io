import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EnglishPublicationsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Publications</h1>

        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Monographs</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2011).{" "}
                  <span className="italic">Imaginary Book: History of Folklore about Books and Reading in Russia.</span>{" "}
                  St. Petersburg: European University at St. Petersburg Press. 182 p.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Editorial Work</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Ekaterina Melnikova and Zinaida Vasilyeva (eds.) (2024).{" "}
                  <a
                    href="https://bolt-dev.dh-north.org/files/dhn-pdf/academia-w.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Academia across the Borders.
                  </a>{" "}
                  Berlin, Verlag der Kulturstiftung Sibirien SEC Publications.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (ed.) (2022).{" "}
                  <span className="italic">
                    Eastern European Collections of the Museum of Anthropology and Ethnography RAS.
                  </span>{" "}
                  Vol. LXIX. St. Petersburg: MAE RAS (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (ed.) (2021).{" "}
                  <a
                    href="https://journal.kunstkamera.ru/archive/2021_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Special Issue of the Journal "Kunstkamera" "To the Centenary of the Birth of B. N. Putilov and K. V.
                    Chistov".
                  </a>{" "}
                  №1(11).(in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (co-ed.) (2020). Special Issue of the Journal "Neprikosnovenny Zapas" "Leningrad
                  (1941–2019): The Abscess of the Blockade".{" "}
                  <a
                    href="https://magazines.gorky.media/nz/2019/5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    №127 (in Russian)
                  </a>
                  ,{" "}
                  <a
                    href="https://magazines.gorky.media/nz/2019/6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    №128
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (ed.) (2020).{" "}
                  <a
                    href="https://eo.iea.ras.ru/issue/22059/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Special Issue of the Journal "Ethnographic Review" "New Rurality in Contemporary Russia:
                    Institutions, Practices, Social Interaction".
                  </a>{" "}
                  №6.(in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (ed.) (2005).{" "}
                  <span className="italic">Border and People: Memories of Soviet Settlers in Ladoga Karelia.</span> St.
                  Petersburg: European University at St. Petersburg Press. 484p. (in Russian)
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Articles (Selected)</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E. (2025).{" "}
                  <a
                    href="https://resolve.cambridge.org/core/journals/nationalities-papers/article/border-memory-and-the-politics-of-territoriality-in-the-russianfinnish-borderland/DBC223E57C528103418D6BE2A4E1BF74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Border Memory and the Politics of Territoriality in the Russian-Finnish Borderland.
                  </a>{" "}
                  <span className="italic">Nationalities Papers.</span>
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2025). Difficult Heritage: Moral Reboot.{" "}
                  <span className="italic">Ethnographic Review.</span> (in Russian)(in press)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2025).{" "}
                  <a
                    href="https://anthropologie.kunstkamera.ru/files/pdf/064/forum.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    On Theoretical Icebergs, the Sin of Secondariness and the Struggle for Conceptual Patents.
                  </a>{" "}
                  <span className="italic">Anthropological Forum.</span> №64. P. 90-100. (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2024).{" "}
                  <a
                    href="https://www.academia.edu/143697102/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%9E%D1%82_%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D0%BA%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D1%85_%D0%BC%D1%83%D0%B7%D0%B5%D0%B5%D0%B2_%D0%BA_%D0%BF%D1%80%D0%BE%D1%88%D0%BB%D0%BE%D0%BC%D1%83_%D1%81%D0%B2%D0%BE%D0%B8%D0%BC%D0%B8_%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8_%D0%AD%D1%82%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BE%D0%B1%D0%BE%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D0%B5_2024_1_%D0%A1_60_76"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    From "Vernacular" Museums to "Past with Your Own Hands".
                  </a>{" "}
                  <span className="italic">Ethnographic Review.</span> №1. P. 60-76. (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E. (2024).
                  <a
                    href="https://journals.openedition.org/assr/75527"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <span className="italic">
                      Sharing and Conquering: Memory, Religion and Belonging at the Island of Valaam. Archives de
                      sciences sociales des religions.
                    </span>{" "}
                    "Marking Space: The Russian Orthodox Politics of Self-Assertion" (206): 77-98.
                  </a>{" "}
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2023).
                  <a
                    href="https://www.academia.edu/101966139/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B8%D0%B3%D0%B5%D0%BD%D1%86%D0%B8%D1%8F_%D0%BA%D0%B0%D0%BA_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5_%D0%B2%D0%B0%D0%BB%D0%B0%D0%B0%D0%BC%D1%81%D0%BA%D0%BE%D0%B5_%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%B8%D0%B5_%D0%B8_%D0%B5%D0%B3%D0%BE_%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%B2_%D0%BF%D0%BE%D0%B7%D0%B4%D0%BD%D0%B5%D0%BC_%D0%A1%D0%A1%D0%A1%D0%A0_Ab_Imperio_2023_1_%D0%A1_181_220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <span className="italic">
                      Intelligentsia as Event: Valaam Heritage and Its Keepers in the Late USSR.
                    </span>
                  </a>{" "}
                  Ab Imperio. №1. P. 181-220. (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2023).
                  <a
                    href="https://www.academia.edu/98313105/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%A0%D0%B0%D0%B7%D0%BB%D0%BE%D0%BC%D1%8B_%D0%B2%D0%B0%D0%BB%D0%B0%D0%B0%D0%BC%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%B8_%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE_%D0%92%D0%B0%D0%BB%D0%B0%D0%B0%D0%BC%D0%B0_%D0%B2_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%D1%85_%D1%83%D1%82%D1%80%D0%B0%D1%87%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0_%D0%AD%D1%82%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BE%D0%B1%D0%BE%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D0%B5_2023_1_%D0%A1_45_66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Fractures of Valaam Memory: The Memorial Community of Valaam in Search of the Lost Island.{" "}
                    <span className="italic">Ethnographic Review.</span> № 1. (in Russian)
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E. (2022). The Siege of Leningrad as a Trope for Public Debate.{" "}
                  <span className="italic">Russian Politics & Law.</span> 59(4–6): 63–76. (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2022). Transubstantiation of Culture, or the Question of Where to Stick a Toothpick in
                  the Kolomna Pastila Museum. <span className="italic">Steps.</span> Vol. 8. №4. (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2021). Wunderland – Ladoga-Karelien nach dem Zweiten Weltkrieg.{" "}
                  <span className="italic">Religion und Gesellschaft in Ost und West.</span> Nr.7/8: Grenzregionen im
                  östlichen Europa. P. 11-14.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2021). Infrastructure of Wild Nature on the Territory of Valaam Monastery: Experience
                  of Subjective Development. <span className="italic">Kunstkamera.</span> №1. P. 208-222. (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2021). "Mezen Horse": Between Tradition and Brand.{" "}
                  <span className="italic">Traditional Culture.</span> №1. P. 85-96 (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2020). "New Rurality": Village in Urban Projections of Contemporary Russians.{" "}
                  <span className="italic">Ethnographic Review.</span> №6. P. 88-105 (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2020). Biographies of Moving from City to Village and Rhetoric of Self-transformation
                  in Contemporary Russia. <span className="italic">Ethnographic Review.</span> №6. P. 88-105 (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A., Kalinin I., Chuykina S. (2019). Leningrad (1941–2019): The Abscess of the Blockade.{" "}
                  <span className="italic">Neprikosnovenny Zapas.</span> (5) 127. P. 4-7 (in Russian)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E.A. (2019). The Blockade as a Common Place of Public Disputes.{" "}
                  <span className="italic">Neprikosnovenny Zapas.</span> №128. P. 142-156 (in Russian)
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">
              Public Activities (Selected)
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Round table "Eclipse Archive: Experience". Radio House, 2025.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Lecture "From Local History to Local Memory: Museum as a Point of Assembly for Local Community" as
                  part of the educational project of the Jewish Museum and Tolerance Center (Moscow) "Jewish Maps",
                  2025.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  "Memory and Heritage between Past and Present". Public lecture at New Holland as part of the series
                  "Heritage and Digital Re/evolution of Heritage", 2025.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  "Life Stories/Stories about Life/Oral Histories". Master class for participants of the project "Master
                  Figure. Biographies of Russian Artists". Garage Museum of Contemporary Art, 2023.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  <a
                    href="https://knife.media/testifying-trauma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    "The Era of Testimony. What is Trauma Memory and How It Shapes Collective Identity". Interview with
                    the online publication "Nozh". 2022.
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Publications", alternates: { canonical: "/en/publications/", languages: { ru: "/publications/", en: "/en/publications/" } } }
