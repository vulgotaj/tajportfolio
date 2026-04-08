import { Container } from '../Container'

function Header() {

  return (
    <header className="bg-black/80 fixed w-full z-10">
        <Container>
            <div className="flex items-center justify-between">
                <h2 className="text-sky-400 text-2xl font-bold tracking-wider"><span className="text-white">{"<"}</span>TAJ<span className="text-white">{"/>"}</span></h2>

                <nav>
                    <ul className="flex gap-5 tracking-wider">
                        <li><a href="#inicio" className="text-white hover:text-sky-400 text-lg font-medium">Início</a></li>
                        <li><a href="#" className="text-white hover:text-sky-400 text-lg font-medium">Habilidades</a></li>
                        <li><a href="#" className="text-white hover:text-sky-400 text-lg font-medium">Projetos</a></li>
                        <li><a href="#" className="text-white hover:text-sky-400 text-lg font-medium">Sobre</a></li>
                        <li><a href="#" className="text-white hover:text-sky-400 text-lg font-medium">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header
