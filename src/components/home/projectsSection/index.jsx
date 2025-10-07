import Header from "./header"
import ProjectsCarousel from "./projectsCarousel"

export default function ProjectsSection({ projects }) {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <Header />
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  )
}
