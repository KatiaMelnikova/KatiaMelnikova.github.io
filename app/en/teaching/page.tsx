import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnglishTeachingPage() {
  const courses = [
    {
      title: "Memory and Heritage: Politics and Practices of Preserving the Past in the USSR",
      level: "Master's Program",
      institution: "European University at St. Petersburg",
      period: "2022 - present",
      description:
        "This course examines memory politics and cultural heritage preservation practices during the Soviet period. It explores institutional and ideological aspects of working with the past, as well as the transformation of these practices in the post-Soviet era.",
    },
    {
      title: "Oral History: Theory and Practice",
      level: "Master's Program",
      institution: "European University at St. Petersburg",
      period: "2016 - present",
      description:
        "This course introduces students to oral history methodology, interviewing techniques, analysis of oral testimonies, and ethical aspects of working with informants. It includes a practical component on collecting and analyzing oral histories.",
    },
    {
      title: "Historical Memory and Museums",
      level: "Master's Program",
      institution: "European University at St. Petersburg",
      period: "2017 - present",
      description:
        "This course explores the role of museums in shaping collective memory and identity. It analyzes museum narratives, exhibition strategies, and museum interactions with various audiences in the context of changing perceptions of the past.",
    },
    {
      title: "Current Issues in Historical Research of the Soviet Period",
      level: "PhD Program",
      institution: "European University at St. Petersburg",
      period: "2022 - present",
      description:
        "This historiographical seminar is devoted to discussing key themes, questions, and problems in the study of Soviet history, various research schools and traditions, academic styles and models of historical writing.",
    },
    {
      title: "Contemporary Theories and Methods of Social Anthropology",
      level: "Bachelor's Program",
      institution: "Higher School of Economics, Department of History",
      period: "2018 - 2021",
      description:
        "This English-language course focuses on contemporary theories and methods in social anthropology. It covers key concepts, methodological approaches, and current trends in anthropological research.",
    },
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
  ]

  return (
    <div className="container py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Teaching</h1>

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

export const metadata = { title: "Teaching", alternates: { canonical: "/en/teaching/", languages: { ru: "/teaching/", en: "/en/teaching/" } } }
