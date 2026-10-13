import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OralHistoryPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Устная история</h1>

        <div className="mb-6 md:mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src="/images/oral-history.jpeg" alt="Устная история" fill className="object-cover" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">© София Волченко</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Устная история для меня – вызов и проблема. Несмотря на тысячи работ и проектов, мне кажется, нам все
                еще не хватает рефлексии того, с чем мы имеем дело, когда записываем устные воспоминания.
              </p>

              <p className="font-medium text-sm md:text-base leading-relaxed">
                Я начала работать с устной памятью в проекте, посвященном переселенцам в Приладожскую Карелию, которые
                приехали туда после войны, оставив свои дома, чтобы осваивать бывшие финские территории. Потом я
                работала в Центре устной истории Европейского Университета в Санкт-Петербурге – одном из первых таких
                центров в России. Позже он закрылся, но собранные материалы, включая воспоминания жителей города,
                переживших блокаду, и их потомков, все еще доступны – с ними можно познакомиться в архиве университета.
              </p>

              <p className="font-medium text-sm md:text-base leading-relaxed">
                Сейчас все мои проекты так или иначе связаны с записью воспоминаний. Каждый год в рамках курса "Устная
                история: теория и практика" мы со студентами делаем новый небольшой проект, цель которого – попробовать
                себя в роли устного историка и подумать о том, какие возможности открывает этот метод, и с какими
                ограничениями он связан.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
              Я преподаю устную историю уже очень много лет, и благодаря поддержке фонда Потанина у меня появилась возможность провести ревизию этого курса и сделать небольшой 
              <a
                  href="https://oral-history-reload.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                > сайт-помощник для реализации устноисторического проекта.
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Проекты</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
              <a
                  href="https://oral-history-reload.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                > Устная история. Перезагрузка
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Редизайн курса «Устная история: теория и практика» (2025-2026). При поддержке Фонда Потанина в рамках
                конкурса для преподавателей магистратуры. No ГК25-000864
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Локальная история Разлива в памяти и в музее (2024-2025)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Устная история Европейского Университета в Санкт-Петербурге (2023-2024)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">Память о блокаде (2021-2022)</p>
              <p className="font-medium text-sm md:text-base leading-relaxed">Устная история Купчино (2020-2021)</p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Проект по сбору, отбору и систематизации устноисторических материалов по теме «Оборона и блокада
                Ленинграда» (2017-2018)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Блокадные вещи в памяти и в музее (2016-2017)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">
              Публичные лекции, мастерские и выступления
            </h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Круглый стол «Затменный архив: Опыт». Дом Радио, 2025.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                «Истории жизни/истории о жизни/устные истории». Мастер-класс для участников проекта «Мастер-фигура.
                Биографии российских художников». Музей современного искусства «Гараж», 2023.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://arzamas.academy/mag/826-interview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  14 советов, как записать воспоминания дедушки или бабушки // Arzamas
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://vk.com/?to=L3ZpZGVvLTI4NjI1NTcyXzQ1NjIzOTUyNz8-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Устная история в эпоху ретроспективного поворота: между памятью и свидетельством
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                «{"Как"} и {"зачем"} хорошего интервью: что можно узнать, записывая воспоминания». Онлайн-лекция в
                рамках проекта «Прожито в Перми».
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Мастерская устной истории. XXIV Всероссийский научно-практический семинар «Проблемы краеведческой
                деятельности библиотек».
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Серия мастерских для сотрудников межрайонной централизованной библиотечной системы им. М.Ю. Лермонтова,
                посвященных работе с устными историями в библиотечном краеведении.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Устная история", alternates: { canonical: "/oral-history/", languages: { ru: "/oral-history/", en: "/en/oral-history/" } } }
