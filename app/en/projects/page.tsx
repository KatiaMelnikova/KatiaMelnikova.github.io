import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnglishProjectsPage() {
  const projects = [
    {
      title: "Oral History of Post-Soviet Everyday Life",
      description:
        "This project focuses on collecting and analyzing oral testimonies about everyday life in the post-Soviet period. More than 100 interviews were conducted with representatives of different generations and social groups.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2015-2018",
      funding: "Russian Foundation for Basic Research",
    },
    {
      title: "Borders in a Changing World",
      description:
        "An international project dedicated to studying the transformation of borders and border territories in the modern world. Field research was conducted in various border regions.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2017-2020",
      funding: "European Research Council",
    },
    {
      title: "Museums as Spaces for Identity Construction",
      description:
        "This project focuses on studying the role of museums in shaping collective identity. Museum narratives and exhibition strategies of various museums are analyzed.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2020-2023",
      funding: "Russian Science Foundation",
    },
    {
      title: "Digital Heritage: New Approaches to Preservation and Presentation",
      description:
        "This project is dedicated to studying the use of digital technologies for preserving and presenting cultural heritage. Innovative methods of digital documentation and visualization of heritage objects are being developed.",
      image: "/placeholder.svg?height=300&width=500",
      year: "2021-present",
      funding: "Ministry of Science and Higher Education of the Russian Federation",
    },
  ]

  return (
    <div className="container py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Applied Projects</h1>

        <p className="text-lg text-muted-foreground mb-8">
          As part of my research activities, I lead and participate in various applied projects aimed at studying and
          preserving cultural heritage, developing museum practices, and researching social processes.
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
                <p className="text-sm text-muted-foreground">Funding: {project.funding}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Research projects", alternates: { canonical: "/en/projects/", languages: { ru: "/projects/", en: "/en/projects/" } } }
