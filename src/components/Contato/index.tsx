import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Container } from '../Container'
import { MdEmail } from 'react-icons/md'


function Contato() {

  return (
    <section id="contato" className="bg-zinc-950 py-15">
        
        <Container>
          <div className="flex flex-col gap-4">
            <h1 className="text-sky-400 text-3xl font-bold tracking-wider mb-7">
              <span className="text-white">{"<"}</span>Contato<span className="text-white">{"/>"}</span>
            </h1>

            <p 
              className="text-lg md:text-xl text-justify"
            >
              Se o meu trabalho despertou seu interesse, ficarei feliz em conversar. Estou disponível para novos desafios, oportunidades profissionais, desenvolvimento de projetos e possíveis parcerias. Entre em contato para que possamos trocar ideias e encontrar a melhor forma de trabalharmos juntos.
            </p>

            <div className="mt-5 flex flex-col gap-7 lg:flex-row justify-center items-center">
                <a 
                className="flex justify-center items-center gap-2 text-lg md:text-xl w-full flex-1 p-4 border-sky-400 text-sky-400 border-2 rounded-lg transition-all duration-500 hover:scale-110 hover:border-sky-300 hover:text-sky-300"
                href="https://wa.me/5521982076692"
                aria-label="Enviar mensagem em whatsapp"
                target="_blank"
                >
                  <FaWhatsapp size={30}/>
                 (21) 98207-6692
                </a>

                <a 
                className="flex justify-center items-center gap-2 text-lg md:text-xl w-full flex-1 p-4 border-sky-400 text-sky-400 border-2 rounded-lg transition-all duration-500 hover:scale-110 hover:border-sky-300 hover:text-sky-300"
                href="https://www.linkedin.com/in/feltajima/"
                aria-label="Perfil no Linkedin"
                target="_blank"  
                >
                  <FaLinkedin size={30}/>
                  Felipe Tajima
                </a>

                <a 
                className="flex justify-center items-center gap-2 text-lg md:text-xl w-full flex-1 p-4 border-sky-400 text-sky-400 border-2 rounded-lg transition-all duration-500 hover:scale-110 hover:border-sky-300 hover:text-sky-300"
                href="mailto:felipebtajima05@gmail.com"
                aria-label="Enviar um e-mail"
                target="_blank"  
                >
                  <MdEmail size={30}/>
                  felipebtajima05@gmail.com
                </a>
            </div>
          </div>
        </Container>

    </section>
  )
}

export default Contato
