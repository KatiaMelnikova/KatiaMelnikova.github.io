import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeritageAnxietyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Беспокойство наследия</h1>

           <div className="mb-6 md:mb-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image src="/images/heritage-anxiety.jpg" alt="Беспокойство наследия" fill className="object-cover" />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">Храм Казанской иконы Божией Матери (г. Кириллов, Вологодская обл.)
              </p>
          </div>

          <div className="space-y-6 md:space-y-8">
              <section>
                <div className="space-y-3 md:space-y-4">
                  <p className="font-medium text-sm md:text-base leading-relaxed">
                 “Наследие” меня беспокоит. Не в том смысле, что я переживаю за его судьбу (конечно, переживаю, но не так, как активисты наследия), а в том смысле, что меня не оставляет вопрос об удивительной страсти к наследию и множестве противоречий, с которыми она связана. Чем больше мы беспокоимся о судьбе исторических памятников, тем больше становится исторических памятников, вызывающих беспокойство. Чем больше мы говорим о том, что забота о прошлом – задача общества, тем более элитарными становятся проекты ревитализации объектов наследия. Среди тем, которые меня интересуют, есть и государственная политика наследия, устанавливающая каноны ценного прошлого, и низовые формы активизма в сфере заботы о прошлом, и трудное, диссонирующее наследие, которое производит сообщества травмы и определяет моральные императивы памяти.
                  </p>
                </div>      
              </section>

            <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Публикации:</h2>
             <div className="space-y-3 md:space-y-4">
              <p>
               <a
                  href="https://anthropologie.kunstkamera.ru/06/2026_68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Специальный выпуск журнала «Антропологический форум» на тему «Сохранить нельзя разрушить: антропология наследия». 2026. №68. Редактор-составитель
                </a>
              </p>
              <p>
               <a
                  href="https://journals.tsu.ru/siberia/&journal_page=archive&id=2658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Специальная тема номера журнала «Сибирские исторические исследования» «Каноны наследия и практики охраны прошлого в СССР». 2025. №3.
                </a>
              </p>
              <p>
               <a
                  href="https://anthropologie.kunstkamera.ru/06/2026_68/melnikova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Мельникова Е. (2026). Бум наследия, общество опеки и новые режимы спасения прошлого // Антропологический форум. 2026. № 68. С. 351–390.
                </a>
              </p>
              <p>
               <a
                  href="https://anthropologie.kunstkamera.ru/files/pdf/068/forum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Мельникова Е.А., Куприянов П.С. (2026) Наследие и его исследователи: послесловие к «Форуму» // Антропологический форум. 2026. №68. С.121-133
                </a>
              </p>
              <p>
               <a
                  href="https://journals.tsu.ru/siberia/&journal_page=archive&id=2658&article_id=54048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Мельникова Е. (2026). Канон наследия и национальные окраины: от советских списков памятников истории и культуры к объектам культурного наследия России // Сибирские исторические исследования. 2025. № 3. С. 19–54
                </a>
              </p>
              <p>
               <a
                  href="https://journals.tsu.ru/siberia/&journal_page=archive&id=2658&article_id=54047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Мельникова Е. (2026). Каноны наследия и практики охраны прошлого в СССР. Введение к специальной теме номера // Сибирские исторические исследования. 2025. №3. С. 8-18
                </a>
              </p>
              <p>
               <a
                  href="https://eo.iea.ras.ru/issue/23659/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Мельникова Е.А. (2025). Трудное наследие: моральная перезагрузка. Этнографическое обозрение.2025. № 6. С. 81–96.
                </a>
              </p>
              <p>
               <a
                  href="https://www.academia.edu/101966139/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%D0%95_%D0%90_%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B8%D0%B3%D0%B5%D0%BD%D1%86%D0%B8%D1%8F_%D0%BA%D0%B0%D0%BA_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5_%D0%B2%D0%B0%D0%BB%D0%B0%D0%B0%D0%BC%D1%81%D0%BA%D0%BE%D0%B5_%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%B8%D0%B5_%D0%B8_%D0%B5%D0%B3%D0%BE_%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%B2_%D0%BF%D0%BE%D0%B7%D0%B4%D0%BD%D0%B5%D0%BC_%D0%A1%D0%A1%D0%A1%D0%A0_Ab_Imperio_2023_1_%D0%A1_181_220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Мельникова Е.А. Интеллигенция как событие: валаамское наследие и его хранители в позднем СССР // Ab Imperio. 2023. №1. С. 181-220
                </a>
              </p>
              <p>
               <a
                  href="https://soclabo.org/index.php/laboratorium/article/view/1607/2697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Мельникова Е.А. Рец. на: Коринна Кур-Королев, Ульрике Шмигельт-Ритиг, Елена Зубкова при участии Вольфгана Айхведе. Грабеж и спасение: российские музеи в годы Второй мировой войны / перевод с немецкого К. Левинсона. М.: Новое литературное обозрение, 2024. 552 с. ISBN 978544819982 // Laboratorium: журнал социальных исследований, 2025, 17(2), 148–156.
                </a>
              </p>
            </div>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2"> Публичные лекции, мастерские и выступления: </h2>
              <div className="space-y-3 md:space-y-4">
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  «Кто и зачем сохраняет наследие?». Дискуссия с Ксенией Сидориной и членами команды «Гэнгъ» в рамках летнего фестиваля книжного соседства 
                  <a
                    href="https://okrug.eusp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  > «Округ чтения».
                  </a>
                </p>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  <a
                    href="https://vlesah.com/people/u-menya-est-segodnya-svobodnyy-den-i-ya-edu-kto-segodnya-spasaet-nasledie-v-rossii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    «У меня есть сегодня свободный день, и я еду». Кто сегодня спасает наследие в России? Интервью медиа-проекту “ВЛесах”.
                  </a>
                </p>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                  <a
                    href="https://youtu.be/UPOdkEPCZ5k?si=VaAvpjokyDhKI6lF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    “Канон наследия и национальные окраины: от советских списков памятников истории и культуры к объектам культурного наследия России”.
                  </a> Доклад на семинаре по памяти и наследию (СПИН).
                  </p>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                    «Как обсуждать диссонантное наследие: поиск инструментов общественного диалога». Круглый стол в рамках VIII международного симпозиума «Образование и город».
                </p>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                      «Память и наследие между прошлым и настоящим». Публичная лекция в Новой Голландии в рамках серии "Наследия и цифровая ре/эволюция наследия".
                </p>
                <p className="font-medium text-sm md:text-base leading-relaxed">
                   <a
                    href="https://youtu.be/UPOdkEPCZ5k?si=VaAvpjokyDhKI6lF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                   >   
                      «Беспокойство наследия: низовые практики пассеизма и социальный активизм в России». 
                   </a> Доклад на совместном заседании семинара «Антропология города и городской фольклор» и «Семинара по памяти и наследию» (СПИН).
                  </p>
              </div>
            </section>
          </div>
        </div>
    </div>
  )
}

export const metadata = { title: "Беспокойство наследия", alternates: { canonical: "/heritage-anxiety/", languages: { ru: "/heritage-anxiety/", en: "/en/heritage-anxiety/" } } }
