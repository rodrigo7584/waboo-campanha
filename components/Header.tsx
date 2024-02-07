import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

import logo from '../public/logo.png'

interface SectionRefs {
  [key: string]: React.RefObject<HTMLElement>;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const headerRef = useRef < HTMLHeadingElement > null
  const sectionsRef = useRef < SectionRefs > {}

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  useEffect(() => {
    const btnMobile = document.querySelector('.btn-mobile-menu')

    btnMobile?.addEventListener('click', toggleMenu)

    const btnsMenu = document.querySelectorAll('.menu .menu-item')

    btnsMenu.forEach(btn => {
      btn.addEventListener('click', toggleMenu)
    })

    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const menuHeight = headerRef.current?.offsetHeight ?? 0

      Object.entries(sectionsRef.current).forEach(([id, ref]) => {
        const offsetTop = ref.current?.offsetTop ?? 0
        const offsetHeight = ref.current?.offsetHeight ?? 0

        if (
          scrollPosition >= offsetTop - menuHeight &&
          scrollPosition < offsetTop + offsetHeight - menuHeight
        ) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      btnMobile?.removeEventListener('click', toggleMenu)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="menu" ref={headerRef}>
      <div className="container">
        <div className="row">
          <Link href="/" className="logo">
            <Image src={logo} width={189} height={53} quality={100} alt="company logo" />
          </Link>
          <nav className={isMenuOpen ? 'active' : ''}>
            <button className={isMenuOpen ? 'btn-mobile-menu active' : 'btn-mobile-menu'}>
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul>
              <li className="menu-item">
                <ScrollLink
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  active={activeSection === 'hero' ? true : undefined}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="menu-item">
                <ScrollLink
                  to="waboo"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  active={activeSection === 'waboo' ? true : undefined}
                >
                  Waboo
                </ScrollLink>
              </li>
              <li className="menu-item">
                <ScrollLink
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  active={activeSection === 'portfolio' ? true : undefined}
                >
                  Portfólio
                </ScrollLink>
              </li>
              <li className="menu-item">
                <ScrollLink
                  to="planos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  active={activeSection === 'planos' ? true : undefined}
                >
                  Planos
                </ScrollLink>
              </li>
              <li className="menu-item">
                <ScrollLink
                  to="clientes"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  active={activeSection === 'clientes' ? true : undefined}
                >
                  Clientes
                </ScrollLink>
              </li>
              <li className="menu-item">
                <ScrollLink
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  active={activeSection === 'faq' ? true : undefined}
                >
                  FAQ
                </ScrollLink>
              </li>
              <li>
                <Link href="#portifolio" className="btn-green">
                  Entrar em contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
