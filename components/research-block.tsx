import Link from "next/link"
import Image from "next/image"

interface ResearchBlockProps {
  title: string
  description?: string
  imageSrc: string
  href: string
}

export function ResearchBlock({ title, imageSrc, href }: ResearchBlockProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden relative border rounded-none transition-all hover:shadow-md">
        <div className="aspect-video w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-3 md:p-4 bg-[#e5dcd2] border-t flex items-center justify-center min-h-[60px] md:min-h-[70px]">
          <h3 className="text-sm md:text-lg font-medium tracking-wide uppercase text-center leading-tight">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
