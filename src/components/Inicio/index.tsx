import { Container } from '../Container'
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


function Inicio() {

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">

      <img
        src="/bg-main.webp"
        alt="Imagem de fundo computador"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>
        
        <Container>
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full">
            <span className="text-2xl md:text-3xl font-extralight">Olá, mundo!</span>
            <h1 className="text-3xl md:text-6xl font-medium">Eu sou <span className="text-sky-400">Felipe Tajima</span></h1>
            <span className="text-2xl md:text-3xl font-extralight">Desenvolvedor Front-End</span>
            <div className="mt-5 w-full flex justify-center items-center gap-10">

              <div className="h-px w-3/12 bg-gray-300"></div>

              <a 
                href="https://www.linkedin.com/in/feltajima/" 
                target="_blank"
                aria-label="Linkedin" 
                className="text-white transition-all duration-500 hover:text-sky-400"
              >
                <FaLinkedin size={28}/>
              </a>

              <a 
                href="https://github.com/vulgotaj" 
                target="_blank"
                aria-label="Github"
                className="text-white transition-all duration-500 hover:text-sky-400"
              >
                <FaGithub size={28}/>
              </a>

              <a 
                href="mailto:felipebtajima05@gmail.com" 
                target="_blank"
                aria-label="Email"
                className="text-white transition-all duration-500 hover:text-sky-400"
              >
                <MdEmail size={28}/>
              </a>

              <div className="h-px w-3/12 bg-gray-300"></div>

            </div>
          </div>
        </Container>

    </section>
  )
}

export default Inicio
