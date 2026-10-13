import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnglishBorderAnthropologyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Anthropology of Borders and Borderlands</h1>

        <div className="mb-6 md:mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/images/border-anthropology.png"
              alt="Anthropology of Borders and Borderlands"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Borders and borderlands are a recurring theme in many of my projects. I first began working on this
                topic in 2002 as part of a small international research team when we traveled to Ladoga Karelia to speak
                with local residents and observe how migrants from various regions of the USSR who came here after the
                war adapted to a new landscape where many traces of previous life and former inhabitants remained.
              </p>

              <p className="font-medium text-sm md:text-base leading-relaxed">
                After the completion of this project, led by Pekka Hakamies, I pursued independent research in
                former Finnish Karelia and believe I know this entire region well, including Sortavala, Pitkäranta,
                Lahdenpohja and Kurkijoki, Suojärvi and their surroundings. Much has changed here over the past twenty
                years, and perhaps someday I will write a biography of these strange and sometimes radical changes. Meanwhile, feel free to explore these works:
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Publications</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E.A. Border and People: Memories of Soviet Settlers in Ladoga Karelia. St. Petersburg:
                European University at St. Petersburg Press, 2005. 484p. (Ed.) (In Russian).
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://resolve.cambridge.org/core/journals/nationalities-papers/article/border-memory-and-the-politics-of-territoriality-in-the-russianfinnish-borderland/DBC223E57C528103418D6BE2A4E1BF74"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Melnikova E. Border Memory and the Politics of Territoriality in the Russian-Finnish Borderland.
                  Nationalities Papers. 2025
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. Wunderland – Ladoga-Karelien nach dem Zweiten Weltkrieg // Religion und Gesellschaft in Ost
                und West. 2021. Nr.7/8: Grenzregionen im östlichen Europa. S. 11-14.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://anthropologie.kunstkamera.ru/files/pdf/043/melnikova.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Melnikova E.A. Finnish Cemeteries in Russia: Cross-border Memory Groups and New Moral Order //
                  Anthropological Forum. 2019, №42. P. 11-40.
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. By the People's Hands: The Sledopyt Movement in the USSR of the 1960–80s, in: Forum for
                Anthropology and Culture. 2018. No. 14. P. 107-136
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. Making "Former" the Former Finnish Karelia // Jahrbücher für Geschichte Osteuropas 64,
                2016, H. 3, S. 437-461
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. The Local Memory of the World War II in Provincial Museums: the Northern Ladoga Case Study,
                in Krieg im Museum: Präsentationen des Zweiten Weltkriegs in Museen und Gedenkstätten des östlichen
                Europa, ed. Ekaterina Makhotina, Ekaterina Keding, Wlodzimierz Borodziej, Etienne Francois, Martin
                Schulze Wessel. München: Vandenhoeck & Ruprecht, 2015. P. 111-130
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://scholarworks.iu.edu/journals/index.php/aeer/article/view/170/263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                Melnikova E. Global postsocialism on the local scale: the Soviet migrants at Karelia and their past,
                Anthropology of East Europe Review, Special issue: Global Socialisms and Postsocialisms, 2009, 27 (2). P. 86-100
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Border anthropology", alternates: { canonical: "/en/border-anthropology/", languages: { ru: "/border-anthropology/", en: "/en/border-anthropology/" } } }
