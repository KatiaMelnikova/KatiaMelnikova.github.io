import Image from "next/image"
import { ResearchBlock } from "@/components/research-block"

export default function Home() {
  const researchAreas = [
    {
      title: "Устная история",
      imageSrc: "/images/oral-history-preview.png",
      href: "/oral-history",
    },
    {
      title: "Антропология границ и пограничья",
      imageSrc: "/images/border-anthropology-preview.png",
      href: "/border-anthropology",
    },
    {
      title: "Беспокойство наследия",
      imageSrc: "/images/heritage-anxiety-preview.png",
      href: "/heritage-anxiety",
    },
    {
      title: "Музейная антропология",
      imageSrc: "/images/museum-anthropology-preview.png",
      href: "/museum-anthropology",
    },
  ]

  return (
    <div className="container px-4 py-8 md:py-12">
      <section className="mb-12 md:mb-16 flex flex-col md:flex-row items-start gap-6 md:gap-8">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative aspect-square w-full max-w-[280px] md:max-w-[300px] overflow-hidden rounded-lg border">
            <Image
              src="/images/researcher-photo.png"
              alt="Екатерина Мельникова"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Я - историк и антрополог. Мой профессиональный опыт складывается из работы в этих двух областях и дополняется всем, что я узнаю благодаря любопытству, личным знакомствам и путешествиям — реальным и интеллектуальным. Моя профессиональная идентичность до сих пор остается для меня проблемой, но я почти научилась принимать ее и видеть в этой неопределенности не только недостаток, но и преимущество.
            </p>
            <p>
              Я начинала академическую жизнь в Санкт-Петербурге на кафедре этнографии и антропологии исторического факультета, а продолжила в Европейском университете в Санкт-Петербурге, с которым меня связывают крепкие, хотя и непростые узы дружбы, любви и нежности. Особенная социальная среда Европейского университета значит для меня больше, чем дисциплинарные традиции и научные школы.
            </p>
            <p>
              В последние годы я занималась исследованием различных видов коллективной памяти, постепенно не столько решив, сколько осознав, что меня интересуют низовые формы работы с прошлым. Не столько сами виды памяти – устной, семейной, музейной или какой-то еще, – а способы превращения прошлого в прошлое. Меня интересуют люди, которые видят в этом превращении смысл жизни, приложение профессиональных навыков, или просто не считают его чужой страной. Именно о том, как люди создают прошлое своими руками я, как правило, пишу и говорю.
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

export const metadata = { title: "Главная", alternates: { canonical: "/", languages: { ru: "/", en: "/en/" } } }
