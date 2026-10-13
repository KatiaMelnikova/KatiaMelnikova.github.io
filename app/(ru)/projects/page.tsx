import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Устная история постсоветской повседневности",
      description:
        "Проект направлен на сбор и анализ устных свидетельств о повседневной жизни в постсоветский период. В рамках проекта было проведено более 100 интервью с представителями разных поколений и социальных групп.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2015-2018",
      funding: "Российский фонд фундаментальных исследований",
    },
    {
      title: "Границы в меняющемся мире",
      description:
        "Международный проект, посвященный изучению трансформации границ и приграничных территорий в современном мире. В рамках проекта проводились полевые исследования в различных приграничных регионах.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2017-2020",
      funding: "Европейский исследовательский совет",
    },
    {
      title: "Музеи как пространства конструирования идентичности",
      description:
        "Проект фокусируется на изучении роли музеев в формировании коллективной идентичности. В рамках проекта анализируются музейные нарративы и экспозиционные стратегии различных музеев.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2020-2023",
      funding: "Российский научный фонд",
    },
    {
      title: "Цифровое наследие: новые подходы к сохранению и презентации",
      description:
        "Проект посвящен изучению использования цифровых технологий для сохранения и презентации культурного наследия. В рамках проекта разрабатываются инновационные методы цифровой документации и визуализации объектов наследия.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2021-настоящее время",
      funding: "Министерство науки и высшего образования РФ",
    },
  ]

  return (
    <div className="container py-12">
      <Link href="/" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться на главную
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Прикладные проекты</h1>

        <p className="text-lg text-muted-foreground mb-8">
          В рамках своей исследовательской деятельности я руковожу и участвую в различных прикладных проектах,
          направленных на изучение и сохранение культурного наследия, развитие музейных практик и исследование
          социальных процессов.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Финансирование: {project.funding}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Исследовательские проекты", alternates: { canonical: "/projects/", languages: { ru: "/projects/", en: "/en/projects/" } } }
