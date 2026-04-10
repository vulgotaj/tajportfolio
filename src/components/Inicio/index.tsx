import { Container } from '../Container'
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


function Inicio() {

  return (
    <section id="inicio" className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/bg-main.jpg')] bg-cover bg-center h-screen">
        
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 h-full">
            <span className="text-2xl md:text-3xl font-extralight">Olá, mundo!</span>
            <h1 className="text-4xl md:text-6xl font-medium">Eu sou <span className="text-sky-400">Felipe Tajima</span></h1>
            <span className="text-2xl md:text-3xl font-extralight">Desenvolvedor Front-End</span>
            <div className="mt-5 w-full flex justify-center items-center gap-10">

              <div className="h-px w-3/12 bg-gray-300"></div>

              <FaLinkedin size={28}/>
              <FaGithub size={28}/>
              <MdEmail size={28}/>

              <div className="h-px w-3/12 bg-gray-300"></div>

            </div>
          </div>
        </Container>

    </section>
  )
}

export default Inicio
