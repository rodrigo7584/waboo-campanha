'use client'
import { useState, useEffect, useRef } from 'react'
import * as fbq from '../lib/fpixel'

import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

import logo from '../public/logo.png'

const Header = () => {
  const handleClick = () => {
    fbq.event('Botão cabeçalho')
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const headerRef = useRef(null)
  const sectionsRef = useRef({})

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  useEffect(() => {
    const btnMobile = document.querySelector('.btn-mobile-menu')

    btnMobile.addEventListener('click', toggleMenu)

    const btnsMenu = document.querySelectorAll('.menu .menu-item')

    btnsMenu.forEach(btn => {
      btn.addEventListener('click', toggleMenu)
    })

    // Adiciona um ouvinte de rolagem à janela
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Calcula dinamicamente a altura do header
      const menuHeight = headerRef.current ? headerRef.current.offsetHeight : 0

      // Calcula dinamicamente os deslocamentos e alturas das seções
      Object.entries(sectionsRef.current).forEach(([id, ref]) => {
        const offsetTop = ref.current.offsetTop
        const offsetHeight = ref.current.offsetHeight

        if (
          scrollPosition >= offsetTop - menuHeight &&
          scrollPosition < offsetTop + offsetHeight - menuHeight
        ) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    // Remove o ouvinte ao desmontar o componente
    return () => {
      btnMobile.removeEventListener('click', toggleMenu)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="menu" ref={headerRef}>
        <div className="container">
          <div className="row">
            <Link href="/" className="logo">
              <Image
                src={logo}
                width={189}
                height={53}
                quality={100}
                priority={true}
                alt="company logo"
              />
            </Link>
            <nav className={isMenuOpen ? 'active' : ''}>
              <button
                className={isMenuOpen ? 'btn-mobile-menu active' : 'btn-mobile-menu'}
                aria-label="menu"
              >
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
                  <Link
                    onClick={handleClick}
                    href="https://api.whatsapp.com/send?phone=88998414763"
                    className="btn-green"
                    id="btn-whatsapp-header"
                    target="_blank"
                  >
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
