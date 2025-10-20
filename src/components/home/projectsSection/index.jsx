import Header from "./header"
import ProjectsCarousel from "./projectsCarousel"

export default function ProjectsSection({ projects, homeData }) {
  return (
    <section className="pb-12 pt-8 md:py-16 relative fluid gridContainer mt-8 sm:mt-12 xl:mt-16">
      <main className="w-full overflow-hidden">
        <Header homeData={homeData} />
        <ProjectsCarousel projects={projects} />
      </main>
    </section>
  )
}
