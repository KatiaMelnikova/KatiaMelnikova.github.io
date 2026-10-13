import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MuseumAnthropologyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Музейная антропология</h1>

        <div className="mb-6 md:mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src="/images/museum-anthropology.jpg" alt="Музейная антропология" fill className="object-cover" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">Музей лодки Белозерского края, г. Белозерск Вологодской обл.</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Музей – это один из самых удивительных социальных институтов. С музеями интересно работать и о них
                интересно думать. Это одновременно и места памяти, и архивы, и сообщества. Инструменты производства
                знания и объекты разнообразных политик. Музей говорит на языке вещей, но всегда является результатом
                работы людей, приложением их чувств и переживаний. Это также и место споров, и способ рассказать о себе.
                В Европейском университете я читаю курс, посвященный исторической памяти и музеям. Меня больше
                привлекают "странные музеи", которые не вполне отвечают нашим представлениям о канонических, правильних,
                нормативних музеях, выступающих визитными карточками стран и городов. Меня интересуют музеи, появившиеся
                не в результате национальных политик наследия, а, скорее, ставшие следствием субъективного желания
                материализовать собственное видение прошлого, настоящего или будущего.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Публикации:</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://www.academia.edu/143697102/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%9E%D1%82_%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D0%BA%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D1%85_%D0%BC%D1%83%D0%B7%D0%B5%D0%B5%D0%B2_%D0%BA_%D0%BF%D1%80%D0%BE%D1%88%D0%BB%D0%BE%D0%BC%D1%83_%D1%81%D0%B2%D0%BE%D0%B8%D0%BC%D0%B8_%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8_%D0%AD%D1%82%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BE%D0%B1%D0%BE%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D0%B5_2024_1_%D0%A1_60_76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  От «вернакулярных» музеев к «прошлому своими руками» // Этнографическое обозрение. 2024. №1. С. 60-76
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://steps.ranepa.ru/jour/article/view/135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Пресуществление культуры, или Вопрос о том, куда втыкать зубочистку в музее коломенской пастилы //
                  Шаги / Steps. Т. 8. № 4. 2022
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Северодвинские росписи в фондах МАЭ РАН // Восточноевропейские коллекции Музея антропологии и этнографии
                РАН. Т. LXIX. СПб: МАЭ РАН, 2022. С. 54-76
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://anthropologie.kunstkamera.ru/files/pdf/025/melnikova.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Локальное прошлое на границе национального: краеведческие музеи Северного Приладожья в постсоветское
                  время // Антропологический форум. 2015, №25. С. 9-41
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                The Local Memory of the World War II in Provincial Museums: the Northern Ladoga Case Study, in Krieg im
                Museum: Präsentationen des Zweiten Weltkriegs in Museen und Gedenkstätten des östlichen Europa, ed.
                Ekaterina Makhotina, Ekaterina Keding, Wlodzimierz Borodziej, Etienne Francois, Martin Schulze Wessel.
                München: Vandenhoeck & Ruprecht, 2015. P. 111-130
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Центробежная сила: Ленинградское краеведение на окраинах Ленинграда // Российская история. 2013, № 5. С.
                43-58
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Прикладные проекты:</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                «Еврейский музей в Марьиной Роще: посетители и соседи». Заказчик: Еврейский музей и Центр толерантности
                (Москва). 2023-2024
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                «Границы и пограничья: исследовательская лаборатория в музеях Ленинградской области». Заказчик: Музейное
                агентство Ленинградской области. 2023
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://cultureofhappiness.tilda.ws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  "Культура счастья": роль культурных институтов в личном благополучии жителей России. Заказчик: фонд
                  Потанина, №СГМ-59/19. 2019-2021
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Музейная антропология", alternates: { canonical: "/museum-anthropology/", languages: { ru: "/museum-anthropology/", en: "/en/museum-anthropology/" } } }
