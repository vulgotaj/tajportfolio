import { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { Container } from '../Container'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black/80 fixed w-full z-10">
        <Container>
            <div className="flex items-center justify-between">
              <a 
                href="#inicio"
                aria-label="Ir para início"
                className="text-sky-400 transition-all duration-500 hover:text-sky-300 text-3xl font-bold tracking-wider"
              >
                <span className="text-white">{"<"}</span>TAJ<span className="text-white">{"/>"}</span>
              </a>

              <nav aria-label="Menu principal" className="hidden md:block">
                <ul className="flex gap-5 tracking-wider">
                  <li>
                    <a 
                      href="#sobre"
                      aria-label="Ir para aba sobre"
                      className="text-white transition-all duration-500 hover:text-sky-400 text-lg font-medium"
                    >
                      Sobre
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#projetos"
                      aria-label="Ir para aba projetos"
                      className="text-white transition-all duration-500  hover:text-sky-400 text-lg font-medium"
                    >
                      Projetos
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#contato" 
                      aria-label="Ir para aba contato"
                      className="text-white transition-all duration-500  hover:text-sky-400 text-lg font-medium"
                    >
                      Contato
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#"
                      aria-label="Baixar currículo" 
                      className="text-white bg-sky-400 px-3 py-2 rounded-lg transition-all duration-500  hover:text-sky-400 hover:bg-white text-lg font-medium"
                    >
                      Baixar CV
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Botão Menu Mobile */}

              <button 
                onClick={ () => setMenuOpen(!menuOpen) }
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu" 
                className="md:hidden text-white"
              >
                <FiMenu size={30} />
              </button>
            </div>

            {/* Menu Mobile */}
            {menuOpen && (
              <nav aria-label="Menu mobile" className="md:hidden pb-4">
                <ul className="flex flex-col gap-4 text-center tracking-wider">
                  <li>
                    <a 
                      href="#sobre"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Ir para aba sobre"
                      className="text-white transition-all duration-500 hover:text-sky-400 text-lg font-medium"
                    >
                      Sobre
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#projetos" 
                      onClick={() => setMenuOpen(false)}
                      aria-label="Ir para aba projetos"
                      className="text-white transition-all duration-500  hover:text-sky-400 text-lg font-medium"
                    >
                      Projetos
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#contato"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Ir para aba contato"
                      className="text-white transition-all duration-500  hover:text-sky-400 text-lg font-medium"
                    >
                      Contato
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Baixar currículo"
                      className="text-white bg-sky-400 px-3 py-2 rounded-lg transition-all duration-500  hover:text-sky-400 hover:bg-white text-lg font-medium"
                    >
                      Baixar CV
                    </a>
                  </li>
                </ul>
              </nav>
            )}
        </Container>
    </header>
  )
}

export default Header
