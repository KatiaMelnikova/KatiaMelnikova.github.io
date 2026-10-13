import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PublicationsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Публикации</h1>

        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Монографии</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2011).{" "}
                  <span className="italic">Воображаемая книга: история фольклора о книгах и чтении в России.</span>{" "}
                  Санкт-Петербург: Издательство Европейского Университета в Санкт-Петербурге. 182 с.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Редакторская работа</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  <span className="italic">Деревня как ценность. Идеологии и практики новой сельскости: сборник.</span> М.: Фонд поддержки социальных исследований «Хамовники», 2026. Редактор-составитель
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  <a
                    href="https://anthropologie.kunstkamera.ru/06/2026_68"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Специальный выпуск журнала «Антропологический форум» на тему «Сохранить нельзя разрушить: антропология наследия». 2026. №68
                  </a>. Редактор-составитель
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  <span className="italic">Специальная тема номера журнала «Сибирские исторические исследования» «Каноны наследия и практики охраны прошлого в СССР».</span> 2025. №3.
                </p>
              </div>
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
                  Мельникова Е.А. (ред.) (2022).{" "}
                  <span className="italic">Восточноевропейские коллекции Музея антропологии и этнографии РАН.</span> Т.
                  LXIX. СПб: МАЭ РАН.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (ред.) (2021).{" "}
                  <a
                    href="https://journal.kunstkamera.ru/archive/2021_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Специальный выпуск журнала «Кунсткамера» «К столетию со дня рождения Б. Н. Путилова и К. В.
                    Чистова».
                  </a>{" "}
                  №1(11).
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (соред.) (2020). Специальный выпуск журнала «Неприкосновенный запас» «Ленинград
                  (1941–2019): нарыв блокады».{" "}
                  <a
                    href="https://magazines.gorky.media/nz/2019/5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    №127
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
                  Мельникова Е.А. (ред.) (2020).{" "}
                  <a
                    href="https://eo.iea.ras.ru/issue/22059/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Специальный выпуск журнала «Этнографическое обозрение» «Новая сельскость в современной России:
                    институты, практики, социальное взаимодействие».
                  </a>{" "}
                  №6.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (ред.) (2005).{" "}
                  <span className="italic">
                    Граница и люди: воспоминания советских переселенцев Приладожской Карелии.
                  </span>{" "}
                  СПб: Издательство Европейского Университета в Санкт-Петербурге. 484с.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Статьи (избранное)</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е. (2026).{" "}
                  <a href="https://anthropologie.kunstkamera.ru/06/2026_68/melnikova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  > Бум наследия, общество опеки и новые режимы спасения прошлого 
                  </a>{" "}
                  <span className="italic">// Антропологический форум. 2026. № 68. С. 351–390.</span>
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е. (2026). Парадигмы сельской антропологии: от этнографии в деревнях к этнографии деревни // Деревня как ценность. Идеологии и практики новой сельскости: сборник / ред.-сост.: Е. Мельникова, П. Куприянов, М. Лурье. — М.: Фонд поддержки социальных исследований «Хамовники»; Common Place, 2025. С. 21-56
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А, Куприянов П.С, Лурье М.Л. (2026) Введение // Деревня как ценность. Идеологии и практики новой сельскости: сборник / ред.-сост.: Е. Мельникова, П. Куприянов, М. Лурье. — М.: Фонд поддержки социальных исследований «Хамовники»; Common Place, 2025. С. 7-20.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А., Куприянов П.С. (2026) Наследие и его исследователи: послесловие к «Форуму» // Антропологический форум. 2026. №68. С.121-133
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е. (2026).{" "}
                  <a href="https://journals.tsu.ru/siberia/&journal_page=archive&id=2658&article_id=54048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  > Канон наследия и национальные окраины: от советских списков памятников истории и культуры к объектам культурного наследия России // 
                  </a>{" "}
                  <span className="italic">Сибирские исторические исследования. 2025. № 3. С. 19–54</span>
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е. (2026).{" "}
                  <a href="https://journals.tsu.ru/siberia/&journal_page=archive&id=2658&article_id=54047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  > Каноны наследия и практики охраны прошлого в СССР. Введение к специальной теме номера //
                  </a>{" "}
                  <span className="italic">Сибирские исторические исследования. 2025. №3. С. 8-18</span>
                </p>
              </div>
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
                  <span className="italic">Nationalities Papers.53(6):1221–1245</span>
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2025).{" "}
                  <a href="https://eo.iea.ras.ru/issue/23659/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  > Трудное наследие: моральная перезагрузка.{" "}
                  </a>{" "}
                  <span className="italic">Этнографическое обозрение.2025. № 6. С. 81–96.</span>
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2025).{" "}
                  <a
                    href="https://anthropologie.kunstkamera.ru/files/pdf/064/forum.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    О теоретических айсбергах, грехе вторичности и борьбе за концептуальные патенты.
                  </a>{" "}
                  <span className="italic">Антропологический форум.</span> №64. С. 90-100.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2024).{" "}
                  <a
                  href="https://www.academia.edu/143697102/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%9E%D1%82_%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D0%BA%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D1%85_%D0%BC%D1%83%D0%B7%D0%B5%D0%B5%D0%B2_%D0%BA_%D0%BF%D1%80%D0%BE%D1%88%D0%BB%D0%BE%D0%BC%D1%83_%D1%81%D0%B2%D0%BE%D0%B8%D0%BC%D0%B8_%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8_%D0%AD%D1%82%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BE%D0%B1%D0%BE%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D0%B5_2024_1_%D0%A1_60_76"
                  target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline">От «вернакулярных» музеев к «прошлому своими руками».
                  </a>{" "}
                  <span className="italic">Этнографическое обозрение.</span> №1. С. 60-76.
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
                  ><span className="italic">Sharing and Conquering: Memory, Religion and Belonging at the Island of Valaam. Archives de sciences sociales des religions.</span> "Marking Space: The
                  Russian Orthodox Politics of Self-Assertion" (206): 77-98.
                  </a>{" "}
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2023).
                  <a
                  href= "https://www.academia.edu/101966139/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B8%D0%B3%D0%B5%D0%BD%D1%86%D0%B8%D1%8F_%D0%BA%D0%B0%D0%BA_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5_%D0%B2%D0%B0%D0%BB%D0%B0%D0%B0%D0%BC%D1%81%D0%BA%D0%BE%D0%B5_%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%B8%D0%B5_%D0%B8_%D0%B5%D0%B3%D0%BE_%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%B2_%D0%BF%D0%BE%D0%B7%D0%B4%D0%BD%D0%B5%D0%BC_%D0%A1%D0%A1%D0%A1%D0%A0_Ab_Imperio_2023_1_%D0%A1_181_220"
                  target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"><span className="italic">Интеллигенция как событие: валаамское наследие и его хранители в позднем СССР.</span>
                  </a> Ab Imperio. №1. С. 181-220.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2023).
                  <a
                  href="https://www.academia.edu/98313105/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%A0%D0%B0%D0%B7%D0%BB%D0%BE%D0%BC%D1%8B_%D0%B2%D0%B0%D0%BB%D0%B0%D0%B0%D0%BC%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%B8_%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE_%D0%92%D0%B0%D0%BB%D0%B0%D0%B0%D0%BC%D0%B0_%D0%B2_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%D1%85_%D1%83%D1%82%D1%80%D0%B0%D1%87%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0_%D0%AD%D1%82%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BE%D0%B1%D0%BE%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D0%B5_2023_1_%D0%A1_45_66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline">Разломы валаамской памяти: мемориальное сообщество Валаама в поисках
                  утраченного острова. <span className="italic">Этнографическое обозрение.</span> № 1.
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E. (2022). The Siege of Leningrad as a Trope for Public Debate.{" "}
                  <span className="italic">Russian Politics & Law.</span> 59(4–6): 63–76.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2022). Пресуществление культуры, или Вопрос о том, куда втыкать зубочистку в музее
                  коломенской пастилы. <span className="italic">Шаги / Steps.</span> Т. 8. №4.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Melnikova E. (2021). Wunderland – Ladoga-Karelien nach dem Zweiten Weltkrieg.{" "}
                  <span className="italic">Religion und Gesellschaft in Ost und West.</span> Nr.7/8: Grenzregionen im
                  östlichen Europa. S. 11-14.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2021). Инфраструктура дикой природы на территории Валаамского монастыря: опыт
                  субъективного освоения. <span className="italic">Кунсткамера.</span> №1. С. 208-222.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2021). «Мезенская лошадка»: между традицией и брендом.{" "}
                  <span className="italic">Традиционная культура.</span> №1. С. 85-96.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2020). «Новая сельскость»: деревня в городских проекциях современных россиян.{" "}
                  <span className="italic">Этнографическое обозрение.</span> №6. С. 88-105.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2020). Биографии переезда из города в деревню и риторика самотрансформации в
                  современной России. <span className="italic">Этнографическое обозрение.</span> №6. С. 88-105.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А., Калинин И., Чуйкина С. (2019). Ленинград (1941–2019): нарыв блокады.{" "}
                  <span className="italic">Неприкосновенный запас.</span> (5) 127. С. 4-7.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Мельникова Е.А. (2019). Блокада как общее место публичных споров.{" "}
                  <span className="italic">Неприкосновенный запас.</span> №128. C. 142-156.
                </p>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">
              Публичная деятельность (избранное)
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Круглый стол «Затменный архив: Опыт». Дом Радио, 2025.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  Лекция «От краеведения до локальной памяти: музей как точка сборки местного сообщества» в рамках
                  образовательного проекта Еврейского музея и центра толерантности (Москва) «Еврейские карты», 2025.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  «Память и наследие между прошлым и настоящим». Публичная лекция в Новой Голландии в рамках серии
                  «Наследия и цифровая ре/эволюция наследия», 2025.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  «Истории жизни/истории о жизни/устные истории». Мастер-класс для участников проекта «Мастер-фигура.
                  Биографии российских художников». Музей современного искусства «Гараж», 2023.
                </p>
              </div>
              <div>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                href="https://knife.media/testifying-trauma/"
                target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline">«Эра свидетельства. Что такое память о травме и как она формирует коллективную идентичность». Интервью интернет-изданию «Нож». 2022.
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

export const metadata = { title: "Публикации", alternates: { canonical: "/publications/", languages: { ru: "/publications/", en: "/en/publications/" } } }
