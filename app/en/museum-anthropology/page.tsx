import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnglishMuseumAnthropologyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Museum Anthropology</h1>

        <div className="mb-6 md:mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src="/images/museum-anthropology.jpg" alt="Museum Anthropology" fill className="object-cover" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">Museum of the Belozersk Boat, Belozersk, Vologda region</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                The museum is one of the most amazing social institutions. Museums are interesting to work with and
                interesting to think about. They are simultaneously places of memory, archives, and communities. Tools
                for knowledge production and objects of various policies. The museum speaks the language of things, but
                is always the result of people's work, the application of their feelings and experiences. It is also a
                place of disputes and a way to tell about oneself. At the European University, I teach a course on
                historical memory and museums. I am more attracted to {"strange museums"} that do not quite meet our
                ideas about canonical, correct, normative museums that serve as visiting cards of countries and cities.
                I am interested in museums that appeared not as a result of national heritage policies, but rather
                became a consequence of the subjective desire to materialize one's own vision of the past, present or
                future.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Publications:</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://www.academia.edu/143697102/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%9E%D1%82_%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D0%BA%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D1%85_%D0%BC%D1%83%D0%B7%D0%B5%D0%B5%D0%B2_%D0%BA_%D0%BF%D1%80%D0%BE%D1%88%D0%BB%D0%BE%D0%BC%D1%83_%D1%81%D0%B2%D0%BE%D0%B8%D0%BC%D0%B8_%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8_%D0%AD%D1%82%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BE%D0%B1%D0%BE%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D0%B5_2024_1_%D0%A1_60_76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  From {"Vernacular"} Museums to {"Past with Your Own Hands"} // Ethnographic Review. 2024. №1. P. 60-76 (in Russian)
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://steps.ranepa.ru/jour/article/view/135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Transubstantiation of Culture, or the Question of Where to Stick a Toothpick in the Kolomna Pastila
                  Museum // Steps. Vol. 8. № 4. 2022 (in Russian)
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Northern Dvina Paintings in the Collections of MAE RAS // Eastern European Collections of the Museum of
                Anthropology and Ethnography RAS. Vol. LXIX. St. Petersburg: MAE RAS, 2022. P. 54-76 (in Russian)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://anthropologie.kunstkamera.ru/files/pdf/025/melnikova.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Local Past at the Border of the National: Local History Museums of Northern Ladoga in Post-Soviet Time
                  // Anthropological Forum. 2015, №25. P. 9-41 (in Russian)
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                The Local Memory of the World War II in Provincial Museums: the Northern Ladoga Case Study, in Krieg im
                Museum: Präsentationen des Zweiten Weltkriegs in Museen und Gedenkstätten des östlichen Europa, ed.
                Ekaterina Makhotina, Ekaterina Keding, Wlodzimierz Borodziej, Etienne Francois, Martin Schulze Wessel.
                München: Vandenhoeck & Ruprecht, 2015. P. 111-130
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Centrifugal Force: Leningrad Local History on the Outskirts of Leningrad // Russian History. 2013, № 5.
                P. 43-58
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Applied Projects:</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                {"Jewish Museum in Maryina Roshcha: Visitors and Neighbors"}. Client: Jewish Museum and Tolerance Center
                (Moscow). 2023-2024
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                {"Borders and Borderlands: Research Laboratory in Museums of the Leningrad Region"}. Client: Museum
                Agency of the Leningrad Region. 2023
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://cultureofhappiness.tilda.ws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {"Culture of Happiness"}: the Role of Cultural Institutions in the Personal Well-being of Russian
                  Residents. Client: Potanin Foundation, №СГМ-59/19. 2019-2021
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Museum anthropology", alternates: { canonical: "/en/museum-anthropology/", languages: { ru: "/museum-anthropology/", en: "/en/museum-anthropology/" } } }
