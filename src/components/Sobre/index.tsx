import { Container } from '../Container'
import SkillCard from '../SkillCard'
import { FaReact, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiRedux } from 'react-icons/si'
import { IoLogoFirebase } from 'react-icons/io5'
// import { MdEmail } from 'react-icons/md'


function Sobre() {

  return (
    <section id="sobre" className="py-15">
        
        <Container>
          <div className="flex flex-col gap-4">
            <h1 className="text-sky-400 text-3xl font-bold tracking-wider mb-7"><span className="text-white">{"<"}</span>Sobre<span className="text-white">{"/>"}</span></h1>
            
            <p className="text-xl text-justify">Sou desenvolvedor front-end com foco na construção de interfaces modernas, responsivas e bem estruturadas. Minha principal stack é baseada em React.js e TypeScript, que utilizo no desenvolvimento de aplicações organizadas, escaláveis e de fácil manutenção.</p>

            <p className="text-xl text-justify">Tenho experiência prática por meio de projetos próprios, onde aplico gerenciamento de estado com Redux e integração com serviços como Firebase, desenvolvendo soluções completas e funcionais.</p>

            <p className="text-xl text-justify">Utilizo Git e GitHub para versionamento de código, mantendo organização e boas práticas no desenvolvimento. Além disso, possuo uma base sólida em HTML e CSS, aplicando conceitos de responsividade, semântica e estilização com Tailwind CSS para garantir uma boa experiência do usuário.</p>

            <p className="text-xl text-justify">Estou em constante evolução, buscando aprimorar minhas habilidades e acompanhar as melhores práticas do ecossistema front-end.</p>

            <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center gap-4">
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
