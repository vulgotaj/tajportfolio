import { Container } from '../Container'

function Inicio() {

  return (
    <section id="inicio" className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/bg-main.jpg')] bg-cover bg-center h-screen">
        
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 h-full">
            <span className="text-3xl font-extralight">Olá, mundo!</span>
            <h1 className="text-6xl font-medium">Eu sou <span className="text-sky-400">Felipe Tajima</span></h1>
            <span className="text-3xl font-extralight">Desenvolvedor Front-End</span>
          </div>
        </Container>

    </section>
  )
}

export default Inicio
