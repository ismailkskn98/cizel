import Header from "./header"
import ProjectsCarousel from "./projectsCarousel"

export default function ProjectsSection({ projects, homeData }) {
  return (
    <section className="py-12 md:py-16 relative fluid gridContainer">
      <main className="fluid gridContainer mx-auto overflow-hidden">
        <Header homeData={homeData} />
        <ProjectsCarousel projects={projects} />
      </main>
    </section>
  )
}
