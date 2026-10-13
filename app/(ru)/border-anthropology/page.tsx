import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BorderAnthropologyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Антропология границ и пограничья</h1>

        <div className="mb-6 md:mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/images/border-anthropology.png"
              alt="Антропология границ и пограничья"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Границы и пограничье – сквозная тема многих моих проектов. Впервые я начала заниматься этой темой в 2002
                году в составе небольшой международной исследовательской команды, когда мы поехали в Приладожскую
                Карелию, чтобы поговорить с местными жителями и посмотреть, как переселенцы из разных регионов СССР,
                приехавшие сюда после войны, осваивались в новом ландшафте, где сохранилось немало следов прежней жизни
                и прежних жителей.
              </p>

              <p className="font-medium text-sm md:text-base leading-relaxed">
                Уже после окончания этого проекта, руководителем которого был Пекка Хакамиес, я самостоятельно проводила
                исследования в бывшей финской Карелии и думаю, что неплохо знаю весь этот регион, включая Сортавала,
                Питкяранта, Лахденпохья и Куркиеки, Суоярви и их окрестности. За последние двадцать лет здесь многое
                изменилось и, возможно, когда-нибудь, я напишу биографию этих странных и местами радикальных изменений.
                Пока что можно почитать эти работы:
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Публикации</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. Граница и люди: воспоминания советских переселенцев Приладожской Карелии. СПб:
                Издательство Европейского Университета в Санкт-Петербурге, 2005. 484с. (Научный редактор,
                автор-составитель).
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
                  Мельникова Е.А. Финские кладбища в России: кросс-граничные группы памяти и новый моральный порядок //
                  Антропологический форум. 2019, №42. C. 11-40.
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. Paikallisidentiteetit Laatokan Karjalassa: Sortavalan Kaupunkipäivä ja Karjalaiset
                laulujuhlat 2012, Joustavat etnisyydet. Identiteettiprosessit Venäjän Karjalassa. Toim. Pekka Suutari ja
                Olga Davydova-Minguet. Joensuu: Suomen Kansantietouden Tutkijain Seura. 2019. S. 60-82
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. By the People's Hands: The Sledopyt Movement in the USSR of the 1960–80s, in: Forum for
                Anthropology and Culture. 2018. No. 14. P. 107-136
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. Руками народа: следопытское движение 1960–1980-х гг. в СССР // Антропологический форум.
                2018. №37. С.17-50
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. Локальное и национальное в пространстве городского праздника: День Города и песенный
                фестиваль в г. Сортавала // Гибкие этничности. Этнические процессы в российско-финляндском приграничье.
                Под ред. П. Суутари, И. Мошникова, Ю. Шикалова, О. Давыдовой-Менге. Санкт-Петербург: «Нестор», 2017.
                С.72-105
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. Making "Former" the Former Finnish Karelia // Jahrbücher für Geschichte Osteuropas 64,
                2016, H. 3, S. 437-461
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. Локальное прошлое на границе национального: краеведческие музеи Северного Приладожья в
                постсоветское время // Антропологический форум. 2015, №25. С. 9-41
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. The Local Memory of the World War II in Provincial Museums: the Northern Ladoga Case Study,
                in Krieg im Museum: Präsentationen des Zweiten Weltkriegs in Museen und Gedenkstätten des östlichen
                Europa, ed. Ekaterina Makhotina, Ekaterina Keding, Wlodzimierz Borodziej, Etienne Francois, Martin
                Schulze Wessel. München: Vandenhoeck & Ruprecht, 2015. P. 111-130
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. Воспоминания об «исходе» и этническая идентичность финнов-ингерманландцев в
                переселенческой Карелии // Материалы полевых исследований МАЭ РАН. 2014. Выпуск 14. с. 51-70
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. «Однажды в студеную зимнюю пору…» Идеальное детство в устной биографии //
                Неприкосновенный запас. 2010, 5 (73). С. 49-68
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. Несколько слов о жизни одного народа // Nomen est omen: Сборник в честь 60-летия Н.Б.
                Вахтина / Под ред. А.К. Байбурина, Е.В. Головко. Санкт-Петербург: Издательство Европейского университета
                в Санкт-Петербург, 2010. С. 210-226
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. Global postsocialism on the local scale: the Soviet migrants at Karelia and their past,
                Anthropology of East Europe Review, Special issue: Global Socialisms and Postsocialisms, 2009, 27 (2).
                P. 86-100
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. I'm writing about you. Please, take my apologies, Suomen Antropologi. Journal of Finnish
                Anthropological Society, 2009, 34 (2). P. 87-90
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. Своя чужая история: бывшая Финская Карелия глазами советских переселенцев //
                Неприкосновенный запас. 2009, 2. С. 55-75
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мельникова Е.А. Переселенческое пограничье: Стратегии представления себя советских мигрантов на
                территории бывшей финской Карелии // Схiд – Захiд: историко-культурологический сборник. Специальное
                издание. 2006, 8I. С. 95-114
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Melnikova E. Recollections of 'Native Land' in Oral Evidences of the Soviet Migrants to Karelia and
                Karelian Isthmus, P. Hakamies (ed.) Moving in the USSR. Western Anomalies and Northern Wilderness.
                Studia Fennica. Historica 10. Helsinki, 2005. P. 66-78
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Антропология границ и пограничья", alternates: { canonical: "/border-anthropology/", languages: { ru: "/border-anthropology/", en: "/en/border-anthropology/" } } }
