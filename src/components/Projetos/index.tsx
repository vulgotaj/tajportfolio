import { Container } from '../Container'
import ProjectCard from '../ProjectCard'
import DevBurger from '../../hamb-1.png'

function Projetos() {

  return (
    <section id="projetos" className="bg-zinc-950 py-15">
        
        <Container>
          <div className="flex flex-col gap-4">
            <h1 className="text-sky-400 text-3xl font-bold tracking-wider mb-7"><span className="text-white">{"<"}</span>Projetos<span className="text-white">{"/>"}</span></h1>
            
            <div className="mt-7 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ProjectCard
                title="Dev Burger"
                description="Descrição muito interessante"
                image={DevBurger}
                skills={["HTML", "CSS", "JavaScript"]}
                githubLink="www.github.com"
                projectLink="www.project.com"
              />
            </div>

          </div>
        </Container>

    </section>
  )
}

export default Projetos
