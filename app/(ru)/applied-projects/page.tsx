import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AppliedProjectsPage() {
  const appliedProjects = [
    {
      period: "2026",
      title: "Гений места. Новое краеведение",
      client: "Российский Фонд культуры",
      role: "Эксперт",
    },
    {
      period: "2026",
      title: "Новая Голландия: векторы истории",
      client: "АНО \"Новая Голландия\"",
      role: "Исследователь",
    },
    {
      period: "2024",
      title: "Культурно-досуговая среда г. Череповца и ее влияние на лояльность месту",
      client: "Фонд «Доброта Севера»",
      role: "Исследователь",
    },
    {
      period: "2023-2024",
      title: "«Еврейский музей в Марьиной Роще: посетители и соседи»",
      client: "Еврейский музей и Центр толерантности (Москва)",
      role: "Исследователь",
    },
    {
      period: "2023",
      title: "«Границы и пограничья: исследовательская лаборатория в музеях Ленинградской области»",
      client: "Музейное агентство Ленинградской области",
      role: "Эксперт",
    },
    {
      period: "2019-2021",
      title: "«Культура счастья»: роль культурных институтов в личном благополучии жителей России",
      client: "Фонд Потанина, NoСГМ-59/19",
      role: "Старший научный сотрудник",
    },
    {
      period: "2017-2018",
      title:
        "Руководитель рабочей группы по Устной истории при создании Музейно-выставочного комплекса «Оборона и блокада Ленинграда»",
      client: "Член Экспертного Совета МВК «Оборона и блокада Ленинграда»",
      role: "Руководитель рабочей группы",
    },
    {
      period: "2017-2020",
      title: "«Общественные пространства в городах и сёлах Татарстана: практики, дискурсы и запросы жителей»",
      client: "Фонд «Институт развития городов республики Татарстан»",
      role: "Научный сотрудник",
    },
    {
      period: "2014-2015",
      title: "Международный коллективный проект «RajatOn» («Borders or no Borders»)",
      client:
        "Министерство образования и культуры Финляндии, Университет Турку и Технологический университет г. Лаппеенранты (Финляндия)",
      role: "Научный сотрудник",
    },
    {
      period: "2012",
      title: "Международный проект «Cross-Border Citizen Scientists»",
      client:
        "Технологический Университет г. Лаппеенранта, Южно-Карельский Институт (Финляндия) при поддержке Европейского Союза, правительства Российской Федерации и Финляндии",
      role: "Эксперт",
    },
  ]

  const educationalProjects = [
    {
      period: "2025-2026",
      title: "Онлайн-ресурс «Устная история.Перезагрузка»",
      titleLink: "https://oral-history-reload.vercel.app",
      description: "При поддержке Фонда Потанина в рамках конкурса для преподавателей магистратуры. No ГК25-000864",
      role: "Создатель",
    },
    {
      period: "2025-2026",
      title: "Редизайн курса «Устная история: теория и практика»",
      description: "При поддержке Фонда Потанина в рамках конкурса для преподавателей магистратуры. No ГК25-000864",
      role: "Руководитель",
    },
    {
      period: "2024-2025",
      title: "«Локальная история Разлива в памяти и в музее»",
      description:
        "Коллективный проект студентов Европейского Университета в Санкт-Петербурге и музейного комплекса в Разливе",
      role: "Руководитель проекта",
    },
    {
      period: "2023-2024",
      title: "Устная история Европейского Университета в Санкт-Петербурге",
      description:
        "Коллективный проект студентов Европейского Университета в Санкт-Петербурге. Участие в подготовке выставки",
      role: "Руководитель проекта",
    },
    {
      period: "2023",
      title: "Сотрудничество с каналом «В Лесах» - медиа о наследии в регионах",
      description: "Коллективный проект студентов Европейского Университета в Санкт-Петербурге о музеях блокады",
      role: "Руководитель проекта",
      link: "https://telegra.ph/Kak-pomnit-o-blokade-07-05",
    },
    {
      period: "2021-2022",
      title: "«Память о блокаде»",
      description: "Коллективный проект студентов Европейского Университета в Санкт-Петербурге",
      role: "Руководитель проекта",
    },
    {
      period: "2020-2021",
      title: "«Устная история Купчино»",
      description: "Коллективный проект студентов Европейского Университета в Санкт-Петербурге",
      role: "Руководитель проекта",
    },
    {
      period: "2017-2018",
      title:
        "Cбор и систематизация устноисторических материалов по теме «Оборона и блокада Ленинграда»",
      description:
        "Для создания базы данных музейно-информационной системы Музейно-выставочного комплекса «Оборона и блокада Ленинграда»",
      role: "Руководитель группы студентов и аспирантов Европейского Университета в Санкт-Петербурге",
    },
    {
      period: "2016-2017",
      title: "«Блокадные вещи в памяти и в музее»",
      description:
        "Коллективный проект со студентами Европейского Университета в Санкт-Петербурге. Совместно с Государственным мемориальным музеем обороны и блокады Ленинграда",
      role: "Руководитель проекта",
    },
  ]

  const academicProjects = [
    {
      period: "2024",
      title: "«(Ре)конструируя сельское. Идеологии и практики новой сельскости». Подготовка публикации",
      description: "При поддержке фонда Хамовники",
      role: "Руководитель",
    },
    {
      period: "2021-2023",
      title:
        "«Memory politics of the North, 1993–2023. An interplay perspective (NORMEMO)»",
      description: "Research Council of Norway, No. 314146",
      role: "Научный сотрудник",
    },
    {
      period: "2021-2023",
      title:
        "«History politics and war memories of the North. A Norwegian-Russian cooperation project in education and research (UPAST)»",
      description: "Research Council of Norway, No. 309577",
      role: "Преподаватель",
    },
    {
      period: "2019-2021",
      title:
        "«Новая сельскость» в современной России: институты, практики, социальное взаимодействие",
      description: "РФФИ No 19-09-00381/19",
      role: "Руководитель",
    },
    {
      period: "2019-2021",
      title:
        "«Рeлигиозное маркирование пространства: сравнительное исследование присутствия Русской православной церкви в России и во Франции»",
      description:
        "При поддержке Fondation Maison des Sciences de l'Homme pour le partenaire français и РФФИ. No 19-59-22006",
      role: "Научный сотрудник",
    },
    {
      period: "2017-2019",
      title:
        "«The layered cake of Russian-Finnish neighborness: everyday interactions at different scales»",
      description: "При поддержке Kone Foundation",
      role: "Научный сотрудник",
    },
    {
      period: "2013-2014",
      title:
        "«Быть местным: символы локальности в эпоху позднего социализма и постсоциализма (случай бывшей финской Карелии)»",
      description: "При поддержке РГНФ, No 13-01-00038",
      role: "Руководитель",
    },
    {
      period: "2013-2014",
      title: "«Flexible Ethnicities»",
      description: "Карельский Институт Университета Восточной Финляндии (Йоенсуу), при поддержке Академии Финляндии",
      role: "Научный сотрудник",
    },
    {
      period: "2011-2012",
      title: "«Cold and Cooling. White Karelian Remembrance of the Post War Climate Changes»",
      description: "В рамках программы «Мастерская истории» фонда «Воспоминание, ответсвенность и будущее»",
      role: "Ментор",
    },
    {
      period: "2010-2011",
      title:
        "Индивидуальный грант Gerda Henkel Foundation на проект «The Pragmatics of Memory on Local Scale: Accommodation of the Recent Past by the Migrants to the Former Finnish Karelia. 1940-1990»",
      role: "Руководитель",
    },
    {
      period: "2010",
      title:
        "Индивидуальный грант ACLS (США) на публикацию монографии «Воображаемая книга: Очерки истории фольклора о книгах и чтении в России»",
      role: "Руководитель",
    },
    {
      period: "2009-2010",
      title: "Грант Европейского Университета в Санкт-Петербурге (Россия) на издание диссертации",
      role: "Руководитель",
    },
    {
      period: "2008-2009",
      title: "«Accommodating an Alien Past: the Soviet Migrants at the Territory of the Former Finnish Karelia»",
      description:
        "Kone Foundation (Финляндия)",
      role: "Руководитель",
    },
    {
      period: "2007-2008",
      title:
        "Индивидуальный грант ACLS (США) на проект «Категории «устное/письменное» и социальное воображение: история понятий в гуманитарных науках XIX-XX веков»",
      role: "Руководитель",
    },
    {
      period: "2005-2008",
      title: "Проект «From History to Histories: Teaching the Past from a Local Perspective»",
      role: "Координатор, лектор",
    },
    {
      period: "2004-2006",
      title: "Грант INTAS на подготовку диссертации",
      description: "Стажировка в Университете Кембриджа, Великобритания",
      role: "Руководитель",
    },
    {
      period: "2001-2003",
      title:
        "«The Conditions for Constructing New Russia. Interactions of Tradition and Europeanness in the Development of 20th Century Russia»",
      description: "При поддержке Академии Финляндии",
      role: "Научный сотрудник",
    },
  ]

  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Проекты</h1>

        <Tabs defaultValue="academic" className="mb-8">
          <TabsList className="mb-6 w-full flex-col sm:flex-row h-auto sm:h-10">
            <TabsTrigger value="academic" className="w-full sm:w-auto text-xs sm:text-sm">
              Академические проекты
            </TabsTrigger>
            <TabsTrigger value="applied" className="w-full sm:w-auto text-xs sm:text-sm">
              Прикладные проекты
            </TabsTrigger>
            <TabsTrigger value="educational" className="w-full sm:w-auto text-xs sm:text-sm">
              Образовательные проекты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="academic">
            <div className="space-y-4 md:space-y-6">
              {academicProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base md:text-lg leading-tight">{project.title}</CardTitle>
                    <CardDescription className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="font-medium text-sm">{project.period}</span>
                      <span className="text-xs sm:text-sm">{project.role}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {project.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applied">
            <div className="space-y-4 md:space-y-6">
              {appliedProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base md:text-lg leading-tight">{project.title}</CardTitle>
                    <CardDescription className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="font-medium text-sm">{project.period}</span>
                      <span className="text-xs sm:text-sm">{project.role}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.client}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="educational">
            <div className="space-y-4 md:space-y-6">
              {educationalProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base md:text-lg leading-tight">
                      {project.titleLink ? (
                        <a
                          href={project.titleLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </CardTitle>
                    <CardDescription className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                      <span className="font-medium text-sm">{project.period}</span>
                      <span className="text-xs sm:text-sm">{project.role}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline mt-2 inline-block text-sm"
                      >
                        Подробнее
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export const metadata = { title: "Прикладные проекты", alternates: { canonical: "/applied-projects/", languages: { ru: "/applied-projects/", en: "/en/applied-projects/" } } }
