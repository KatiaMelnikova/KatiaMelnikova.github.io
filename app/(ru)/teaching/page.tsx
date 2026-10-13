import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeachingPage() {
  const courses = [
    {
      title: "Heritage Ontologies: Between East and West",
      level: "BA",
      institution: "Venice International University",
      period: "2025",
      description:
        "The course introduces key issues in contemporary critical heritage studies by exploring cultural heritage as an object of politics, economics, and memory. Taking a comparative perspective, we examine different concepts of heritage and their roles in establishing and contesting social, national, religious, and cultural boundaries. Topics include the variety of heritage bureaucracies and infrastructures, value regimes, heritage strategies and affective politics of authentication.",
    },
    {
      title: "History, Memory, and Museums: from Socialism to Postsocialism",
      level: "BA",
      institution: "Venice International University",
      period: "2025",
      description:
        "The course explores how museums in socialist and postsocialist contexts shape, contest, and negotiate historical memory. Focusing on the transition from socialism to postsocialism, we reflect on how museums have constructed official narratives, how these narratives have been challenged or reinterpreted, and how museums function as social and political spaces.",
    },
    {
      title: "Память и наследие: политика и практика охраны прошлого в СССР",
      level: "Магистратура",
      institution: "Европейский Университет в Санкт-Петербурге",
      period: "2022 - настоящее время",
      description:
        "Курс посвящен изучению политики памяти и практик сохранения культурного наследия в советский период. Рассматриваются институциональные и идеологические аспекты работы с прошлым, а также трансформации этих практик в постсоветское время.",
    },
    {
      title: "Устная история: теория и практика",
      level: "Магистратура",
      institution: "Европейский Университет в Санкт-Петербурге",
      period: "2016 - настоящее время",
      description:
        "Курс знакомит студентов с методологией устной истории, техниками проведения интервью, анализом устных свидетельств и этическими аспектами работы с информантами. Включает практическую часть по сбору и анализу устных историй.",
    },
    {
      title: "Историческая память и музеи",
      level: "Магистратура",
      institution: "Европейский Университет в Санкт-Петербурге",
      period: "2017 - настоящее время",
      description:
        "Курс исследует роль музеев в формировании коллективной памяти и идентичности. Анализируются музейные нарративы, экспозиционные стратегии и взаимодействие музеев с различными аудиториями в контексте меняющихся представлений о прошлом.",
    },
    {
      title: "Актуальные проблемы исторических исследований Советского периода",
      level: "Аспирантура",
      institution: "Европейский Университет в Санкт-Петербурге",
      period: "2022 - настоящее время",
      description:
        "Историографический семинар посвящен обсуждению ключевых тем, вопросов и проблем в изучении советской истории, различным исследовательским школам и традициям, академическим стилям и моделям историописания.",
    },
    {
      title: "Contemporary Theories and Methods of Social Anthropology",
      level: "Бакалавриат",
      institution: "НИУ Высшая школа экономики, департамент истории",
      period: "2018 - 2021",
      description:
        "Курс на английском языке, посвященный современным теориям и методам социальной антропологии. Рассматриваются ключевые концепции, методологические подходы и актуальные направления антропологических исследований.",
    },

  ]

  return (
    <div className="container py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <div className="text-sm text-muted-foreground mt-1">
                  {course.level} | {course.institution} | {course.period}
                </div>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Преподавание", alternates: { canonical: "/teaching/", languages: { ru: "/teaching/", en: "/en/teaching/" } } }
