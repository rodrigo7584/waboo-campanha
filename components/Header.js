'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import logo from '../public/logo.png'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  useEffect(() => {
    const btnMobile = document.querySelector('.btn-mobile-menu')

    btnMobile.addEventListener('click', toggleMenu)

    return () => {
      btnMobile.removeEventListener('click', toggleMenu)
    }
  }, [])

  return (
    <header className="menu">
      <div className="container">
        <div className="row">
          <Link href="/" className="logo">
            <Image src={logo} width={189} height={53} quality={100} alt="" />
          </Link>
          <nav className={isMenuOpen ? 'active' : ''}>
            <button className={isMenuOpen ? 'btn-mobile-menu active' : 'btn-mobile-menu'}>
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul>
              <li className="menu-item">
                <Link href="#hero">Home</Link>
              </li>
              <li className="menu-item">
                <Link href="#waboo">Waboo</Link>
              </li>
              <li className="menu-item">
                <Link href="#portifolio">Portifólio</Link>
              </li>
              <li className="menu-item">
                <Link href="#planos">Planos</Link>
              </li>
              <li className="menu-item">
                <Link href="#clientes">Clientes</Link>
              </li>
              <li className="menu-item">
                <Link href="#portifolio">FAQ</Link>
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
