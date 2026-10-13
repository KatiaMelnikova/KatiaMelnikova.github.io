import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnglishOralHistoryPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/en" className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Oral History</h1>

        <div className="mb-6 md:mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src="/images/oral-history.jpeg" alt="Oral History" fill className="object-cover" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">© Sofia Volchenko</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <section>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Oral history is both a challenge and a puzzle for me. Despite the thousands of studies and projects that already exist, I still feel that we lack sufficient reflection on what exactly we are engaging with when we record oral memories.
              </p>

              <p className="font-medium text-sm md:text-base leading-relaxed">
                My work with oral history began with a project focused on settlers in Ladoga Karelia who, after the war, left their homes to develop former Finnish territories. Later, I became the coordinator of the Oral History Center at the European University at St. Petersburg—one of the first centers of its kind in Russia. Although the center was eventually closed, its materials, including interviews with residents who survived the Siege of Leningrad and their descendants, remain preserved in the university archive.
              </p>

              <p className="font-medium text-sm md:text-base leading-relaxed">
                All of my projects are connected to recording personal memories. Each year, as part of my course Oral History: Theory and Practice, my students and I carry out a small project designed to give us hands-on experience as oral historians and to reflect on both the possibilities and limitations of this method.
              </p>

              <p className="font-medium text-sm md:text-base leading-relaxed">
                I have been teaching oral history for many years. Thanks to the support of the Potanin Foundation, I now have the opportunity to revise my course. In the near future, a link to a new resource will appear here—an introduction to oral history as a method, a tool, and a field of intellectual inquiry.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">Projects</h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Redesign of the course {"Oral History: Theory and Practice"} (2025-2026). Supported by the Potanin Foundation
                as part of a competition for master's degree teachers.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Local History of Razliv in Memory and in the Museum (2024-2025)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Oral History of the European University at St. Petersburg (2023-2024)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">Memory of the Blockade (2021-2022)</p>
              <p className="font-medium text-sm md:text-base leading-relaxed">Oral History of Kupchino (2020-2021)</p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Project for Collecting, Selecting, and Systematizing Oral History Materials on the Topic{" "}
                {"Defense and Blockade of Leningrad"} (2017-2018)
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Blockade Artefacts in Memory and in the Museum (2016-2017)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b pb-2">
              Public Lectures, Workshops and Presentations
            </h2>
            <div className="space-y-3 md:space-y-4">
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Round table {"Eclipse Archive: Experience"}. Radio House, 2025.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                {"Life Stories/Stories about Life/Oral Histories"}. Master class for participants of the project{" "}
                {"Master Figure. Biographies of Russian Artists"}. Garage Museum of Contemporary Art, 2023.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://arzamas.academy/mag/826-interview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  14 Tips on How to Record Your Grandfather's or Grandmother's Memories // Arzamas
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                <a
                  href="https://vk.com/?to=L3ZpZGVvLTI4NjI1NTcyXzQ1NjIzOTUyNz8-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Oral History in the Era of Retrospective Turn: Between Memory and Testimony
                </a>
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                '{"How"}' and '{"Why"}' of a Good Interview: What Can Be Learned by Recording Memories. Online lecture as
                part of the {"Lived in Perm"} project.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Oral History Workshop. XXIV All-Russian Scientific and Practical Seminar{" "}
                {"Problems of Local History Activities of Libraries"}.
              </p>
              <p className="font-medium text-sm md:text-base leading-relaxed">
                Series of workshops for employees of the M.Yu. Lermontov Inter-district Centralized Library System,
                dedicated to working with oral histories in library local history.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: "Oral history", alternates: { canonical: "/en/oral-history/", languages: { ru: "/oral-history/", en: "/en/oral-history/" } } }
