import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EnglishAppliedProjectsPage() {
  const appliedProjects = [
    {
      period: "2024",
      title: "Cultural and Leisure Environment of Cherepovets and Its Impact on Loyalty to the Place",
      client: "Dobrota Severa Foundation",
      role: "Researcher",
    },
    {
      period: "2023-2024",
      title: "Jewish Museum in Maryina Roshcha: Visitors and Neighbors",
      client: "Jewish Museum and Tolerance Center (Moscow)",
      role: "Researcher",
    },
    {
      period: "2023",
      title: "Borders and Borderlands: Research Laboratory in Museums of the Leningrad Region",
      client: "Museum Agency of the Leningrad Region",
      role: "Expert",
    },
    {
      period: "2019-2021",
      title: "Culture of Happiness: The Role of Cultural Institutions in the Personal Well-being of Russian Residents",
      client: "Potanin Foundation, NoСГМ-59/19",
      role: "Senior Researcher",
    },
    {
      period: "2017-2018",
      title:
        "Head of the Oral History Working Group for the Creation of the Museum and Exhibition Complex 'Defense and Blockade of Leningrad'",
      client: "Member of the Expert Council of the Museum and Exhibition Complex 'Defense and Blockade of Leningrad'",
      role: "Working Group Leader",
    },
    {
      period: "2017-2020",
      title: "Public Spaces in Cities and Villages of Tatarstan: Practices, Discourses, and Residents' Requests",
      client: "Institute for Urban Development of the Republic of Tatarstan Foundation",
      role: "Researcher",
    },
    {
      period: "2014-2015",
      title: "International Collective Project 'RajatOn' ('Borders or no Borders')",
      client:
        "Ministry of Education and Culture of Finland, University of Turku, and Lappeenranta University of Technology (Finland)",
      role: "Researcher",
    },
    {
      period: "2012",
      title: "International Project 'Cross-Border Citizen Scientists'",
      client:
        "Lappeenranta University of Technology, South Karelian Institute (Finland) with support from the European Union, the Government of the Russian Federation, and Finland",
      role: "Expert",
    },
  ]

  const educationalProjects = [
    {
      period: "2025-2026",
      title: "Project for redesigning the course 'Oral History: Theory and Practice'",
      description:
        "Supported by the Potanin Foundation as part of a competition for master's degree teachers. No. GK25-000864",
      role: "Project Leader",
    },
    {
      period: "2024-2025",
      title: "Local History of Razliv in Memory and in the Museum",
      description:
        "Collective project of students from the European University at St. Petersburg and the museum complex in Razliv",
      role: "Project Leader",
    },
    {
      period: "2023-2024",
      title: "Oral History of the European University at St. Petersburg",
      description:
        "Collective project of students from the European University at St. Petersburg. Participation in exhibition preparation",
      role: "Project Leader",
    },
    {
      period: "2023",
      title: "Collaboration with 'V Lesakh' Channel - Media about Heritage in the Regions",
      description:
        "Collective project of students from the European University at St. Petersburg about blockade museums",
      role: "Project Leader",
      link: "https://telegra.ph/Kak-pomnit-o-blokade-07-05",
    },
    {
      period: "2021-2022",
      title: "Memory of the Blockade",
      description: "Collective project of students from the European University at St. Petersburg",
      role: "Project Leader",
    },
    {
      period: "2020-2021",
      title: "Oral History of Kupchino",
      description: "Collective project of students from the European University at St. Petersburg",
      role: "Project Leader",
    },
    {
      period: "2017-2018",
      title:
        "Project for Collecting, Selecting, and Systematizing Oral History Materials on the Topic 'Defense and Blockade of Leningrad'",
      description:
        "For creating a database of the museum information system of the Museum and Exhibition Complex 'Defense and Blockade of Leningrad'",
      role: "Leader of a group of students and graduate students from the European University at St. Petersburg",
    },
    {
      period: "2016-2017",
      title: "Blockade Items in Memory and in the Museum",
      description:
        "Collective project with students from the European University at St. Petersburg. In collaboration with the State Memorial Museum of the Defense and Blockade of Leningrad",
      role: "Project Leader",
    },
  ]

  const academicProjects = [
    {
      period: "2024",
      title:
        "Project for preparing a collection of articles '(Re)constructing the Rural: Ideologies and Practices of New Rurality'",
      description: "Supported by the Khamovniki Foundation",
      role: "Project Leader",
    },
    {
      period: "2021-2023",
      title:
        "International collective project 'Memory politics of the North, 1993–2023. An interplay perspective (NORMEMO)'",
      description: "Research Council of Norway, No. 314146",
      role: "Researcher",
    },
    {
      period: "2021-2023",
      title:
        "International collective project 'History politics and war memories of the North. A Norwegian-Russian cooperation project in education and research (UPAST)'",
      description: "Research Council of Norway, No. 309577",
      role: "Lecturer",
    },
    {
      period: "2019-2021",
      title: "Collective project 'New Rurality' in modern Russia: institutions, practices, social interaction",
      description: "Russian Foundation for Basic Research No. 19-09-00381\\19",
      role: "Project Leader",
    },
    {
      period: "2019-2021",
      title:
        "International collective project 'Religious marking of space: a comparative study of the presence of the Russian Orthodox Church in Russia and France'",
      description:
        "Supported by the Fondation Maison des Sciences de l'Homme pour le partenaire français and RFBR. No. 19-59-22006",
      role: "Researcher",
    },
    {
      period: "2017-2019",
      title:
        "International collective project 'The layered cake of Russian-Finnish neighborness: everyday interactions at different scales'",
      description: "Supported by the Kone Foundation",
      role: "Researcher",
    },
    {
      period: "2013-2014",
      title:
        "Individual project 'Being Local: Symbols of Locality in the Era of Late Socialism and Post-Socialism (the case of former Finnish Karelia)'",
      description: "Supported by the Russian Foundation for Humanities, No. 13-01-00038",
      role: "Project Leader",
    },
    {
      period: "2013-2014",
      title: "International project 'Flexible Ethnicities'",
      description:
        "Karelian Institute of the University of Eastern Finland (Joensuu), supported by the Academy of Finland",
      role: "Researcher",
    },
    {
      period: "2011-2012",
      title: "International project 'Cold and Cooling. White Karelian Remembrance of the Post War Climate Changes'",
      description:
        "As part of the 'History Workshop' program of the 'Remembrance, Responsibility and Future' Foundation",
      role: "Mentor",
    },
    {
      period: "2010-2011",
      title:
        "Individual grant from the Gerda Henkel Foundation for the project 'The Pragmatics of Memory on Local Scale: Accommodation of the Recent Past by the Migrants to the Former Finnish Karelia. 1940-1990'",
      role: "Project Leader",
    },
    {
      period: "2010",
      title:
        "Individual grant from ACLS (USA) for the publication of the monograph 'Imaginary Book: Essays on the History of Folklore about Books and Reading in Russia'",
      role: "Project Leader",
    },
    {
      period: "2009-2010",
      title: "Grant from the European University at St. Petersburg (Russia) for the publication of a dissertation",
      role: "Project Leader",
    },
    {
      period: "2008-2009",
      title: "Grant from the Kone Foundation (Finland) for post-dissertation research",
      description:
        "Project 'Accommodating an Alien Past: the Soviet Migrants at the Territory of the Former Finnish Karelia'",
      role: "Project Leader",
    },
    {
      period: "2007-2008",
      title:
        "Individual grant from ACLS (USA) for the project 'Categories of 'oral/written' and social imagination: the history of concepts in the humanities of the 19th-20th centuries'",
      role: "Project Leader",
    },
    {
      period: "2005-2008",
      title: "Project 'From History to Histories: Teaching the Past from a Local Perspective'",
      description:
        "European University at St. Petersburg, supported by the Open Society Institute, Soros Foundation (HESP ReSET)",
      role: "Coordinator, Lecturer",
    },
    {
      period: "2004-2006",
      title: "INTAS grant for dissertation preparation",
      description: "Internship at the University of Cambridge, UK",
      role: "Project Leader",
    },
    {
      period: "2005",
      title: "Travel grant from the Gerda Henkel Foundation",
      role: "Project Leader",
    },
    {
      period: "2001-2003",
      title:
        "International project 'The Conditions for Constructing New Russia. Interactions of Tradition and Europeanness in the Development of 20th Century Russia'",
      description: "Supported by the Academy of Finland",
      role: "Researcher",
    },
  ]

  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Projects</h1>

        <Tabs defaultValue="academic" className="mb-8">
          <TabsList className="mb-6 w-full flex-col sm:flex-row h-auto sm:h-10">
            <TabsTrigger value="academic" className="w-full sm:w-auto text-xs sm:text-sm">
              Academic Projects
            </TabsTrigger>
            <TabsTrigger value="educational" className="w-full sm:w-auto text-xs sm:text-sm">
              Educational Projects
            </TabsTrigger>
            <TabsTrigger value="applied" className="w-full sm:w-auto text-xs sm:text-sm">
              Applied Projects
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

          <TabsContent value="educational">
            <div className="space-y-4 md:space-y-6">
              {educationalProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base md:text-lg leading-tight">{project.title}</CardTitle>
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
                        Learn More
                      </a>
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
        </Tabs>
      </div>
    </div>
  )
}

export const metadata = { title: "Applied projects", alternates: { canonical: "/en/applied-projects/", languages: { ru: "/applied-projects/", en: "/en/applied-projects/" } } }
