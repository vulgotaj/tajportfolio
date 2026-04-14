import { Container } from '../Container'
import SkillCard from '../SkillCard'
import { FaReact, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiRedux } from 'react-icons/si'
import { IoLogoFirebase } from 'react-icons/io5'

function Sobre() {

  return (
    <section id="sobre" className="py-15">
        
        <Container>
          <div className="flex flex-col gap-4">
            <h1 className="text-sky-400 text-3xl font-bold tracking-wider mb-7"> 
              <span className="text-white">{"<"}</span>Sobre<span className="text-white">{"/>"}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-justify"> {/* Parágrafo 1 */}
              Sou desenvolvedor Front-End com foco na criação de interfaces modernas, responsivas e bem estruturadas. Minha principal stack é composta por React.js e TypeScript, tecnologias que utilizo para desenvolver aplicações escaláveis, organizadas e de fácil manutenção.
            </p>

            <p className="text-lg md:text-xl text-justify"> {/* Parágrafo 2 */}
              Possuo experiência prática adquirida em projetos próprios, nos quais aplico e aprimoro constantemente meus conhecimentos, garantindo evolução contínua e soluções funcionais. Utilizo Git e GitHub para versionamento de código, seguindo boas práticas de organização e colaboração no desenvolvimento
            </p>

            <p className="text-lg md:text-xl text-justify"> {/* Parágrafo 3 */}
              Também tenho sólida base em HTML, CSS e Tailwind CSS, aplicando conceitos de responsividade, semântica e design consistente para oferecer uma excelente experiência ao usuário.
            </p>

            <p className="text-lg md:text-xl text-justify"> {/* Parágrafo 4 */}
              Estou em constante evolução profissional, sempre buscando aprender novas tecnologias, aprimorar minhas habilidades e acompanhar as melhores práticas do ecossistema Front-End.
            </p>

            <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-auto gap-2 md:gap-4"> {/* Skill Cards */}
              <SkillCard title="React.js" icon={<FaReact/>} />
              <SkillCard title="TaiwindCSS" icon={<SiTailwindcss/>} />
              <SkillCard title="Typescript" icon={<SiTypescript/>} />
              <SkillCard title="Redux" icon={<SiRedux/>} />
              <SkillCard title="Firebase" icon={<IoLogoFirebase/>} />
              <SkillCard title="Git" icon={<FaGitAlt/>} />
            </div>
          </div>
        </Container>

    </section>
  )
}

export default Sobre
