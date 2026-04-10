import { Container } from '../Container'
import ProjectCard from '../ProjectCard'
import DevBurger from '../../hamb-1.png'

function Projetos() {

  return (
    <section id="projetos" className="bg-zinc-950 py-15">
        
        <Container>
          <div className="flex flex-col gap-4">
            <h1 className="text-sky-400 text-3xl font-bold tracking-wider mb-7">
              <span className="text-white">{"<"}</span>Projetos<span className="text-white">{"/>"}</span>
            </h1>
            
            <div className="mt-7 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid de projetos */}
              <ProjectCard
                title="Task List"
                description="Site para organizar tarefas, o usuário pode criar tarefas, editá-las, marcar como concluída ou cancelada e depois listar por concluídas, em andamento ou canceladas."
                image={DevBurger}
                skills={["HTML", "Tailwind.css", "Javascript"]}
                githubLink="https://github.com/vulgotaj/Task-List-JS"
                projectLink="https://task-list-js-delta.vercel.app/"
              />
              
              <ProjectCard
                title="Cloud Car"
                description="Landing page que simula uma loja de peças automotivas. O projeto foi feito com finalidade de praticar conceitos de estilização CSS, logo, não há muitas funcionalidades em Javascript."
                image={DevBurger}
                skills={["HTML", "CSS", "Javascript"]}
                githubLink="https://github.com/vulgotaj/CloudCar_LandingPage"
                projectLink="https://cloud-car-landing-page.vercel.app/"
              />

              <ProjectCard
                title="Dev Burguer"
                description="Landing page que simula uma loja de peças automotivas. O projeto foi feito com finalidade de praticar conceitos de estilização CSS, logo, não há muitas funcionalidades em Javascript."
                image={DevBurger}
                skills={["HTML", "Tailwind.css", "Javascript"]}
                githubLink="https://github.com/vulgotaj/DevBurguer"
                projectLink="https://dev-burguer-nu.vercel.app/"
              />
              
              <ProjectCard
                title="todayMOVIES"
                description="Site onde é possível ver os filmes que estão em cartaz nos cinemas. Além disso, você pode ver seus detalhes (gênero, nota, duração, etc.), acessar os trailers no youtube e também adicionar a uma listagem de favoritos."
                image={DevBurger}
                skills={["React.js", "CSS"]}
                githubLink="https://github.com/vulgotaj/today-movies"
                projectLink="https://today-movies.vercel.app/"
              />

              <ProjectCard
                title="Web Carros"
                description="Projeto fictício de um site de compra e venda de carros, onde o usuário pode criar e logar em sua conta para realizar a compra, ou mesmo o anúncio de seu próprio carro para venda."
                image={DevBurger}
                skills={["React.js", "Typescript", "Redux", "Tailwind.css"]}
                githubLink="https://github.com/vulgotaj/WebCarros"
                projectLink="https://web-carros-nu.vercel.app/"
              />
            </div>

          </div>
        </Container>

    </section>
  )
}

export default Projetos
