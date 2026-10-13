import Image from "next/image"
import { ResearchBlock } from "@/components/research-block"

export default function EnglishHome() {
  const researchAreas = [
    {
      title: "Oral History",
      imageSrc: "/images/oral-history-preview.png",
      href: "/en/oral-history",
    },
    {
      title: "Anthropology of Borders and Borderlands",
      imageSrc: "/images/border-anthropology-preview.png",
      href: "/en/border-anthropology",
    },
    {
      title: "Heritage Trouble",
      imageSrc: "/images/heritage-anxiety-preview.png",
      href: "/en/heritage-anxiety",
    },
    {
      title: "Museum Anthropology",
      imageSrc: "/images/museum-anthropology-preview.png",
      href: "/en/museum-anthropology",
    },
  ]

  return (
    <div className="container px-4 py-8 md:py-12">
      <section className="mb-12 md:mb-16 flex flex-col md:flex-row items-start gap-6 md:gap-8">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative aspect-square w-full max-w-[280px] md:max-w-[300px] overflow-hidden rounded-lg border">
            <Image
              src="/images/researcher-photo.png"
              alt="Ekaterina Melnikova"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              I am a historian and anthropologist. My professional experience combines practical work in these two
              fields with knowledge gained through curiosity, personal connections, and both real and intellectual
              journeys. My professional identity is still something I grapple with, but I've almost learned to embrace
              this uncertainty and see it as a source of intellectual flexibility and interdisciplinary empathy.
            </p>
            <p>
              I began my academic journey in St. Petersburg, at the Department of Ethnography and Anthropology within
              the Faculty of History, and continued it at the European University at St. Petersburg. My relationship
              with the European University is defined by deep, though sometimes complex, bonds of friendship, love, and
              affection. Its unique social environment has meant more to me than any disciplinary tradition or academic
              school.
            </p>
            <p>
              In recent years, my research has focused on different forms of collective memory. Over time, I've come to
              realize that my main interest lies less in specific types of memory—oral, familial, museum-based, or
              otherwise—and more in the processes through which the past becomes "the past." I am particularly drawn to
              people who find meaning in life through these processes, whether by applying professional expertise or by
              simply refusing to treat the past as a "foreign country." My methodological credo is to explore
              Do-It-Yourself memory practices. This is the main subject of my writing and public talks.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {researchAreas.map((area) => (
            <ResearchBlock key={area.title} title={area.title} imageSrc={area.imageSrc} href={area.href} />
          ))}
        </div>
      </section>
    </div>
  )
}

export const metadata = { title: "Home", alternates: { canonical: "/en/", languages: { ru: "/", en: "/en/" } } }
