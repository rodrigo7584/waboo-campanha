'use client'
import Link from 'next/link'
import SocialButton from './SocialButton'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-left">
            <h1>
              Vamos <br />
              conversar!
            </h1>
            <Link href="mailto:waboocreative@gmail.com" className="link-green">
              waboocreative@gmail.com
            </Link>
            <Link href="tel:88998414763">(88) 9.9841-4763</Link>
            <div className="social-buttons">
              <SocialButton socialIcon="linkedin" link="#" />
              <SocialButton socialIcon="instagram" link="#" />
              <SocialButton socialIcon="whatsapp" link="#" />
              <SocialButton socialIcon="behance" link="#" />
            </div>
          </div>
          <div className="col-right">
            {/* <ul className="list-links">
              <li>
                <Link href="#">Página de contato</Link>
              </li>
              <li>
                <Link href="#">Política de Privacidade</Link>
              </li>
            </ul> */}
            <p className="copyright">
              © Copyright 2023. Waboo Creative. <br />
              Todos os direitos reservados. Ceará, Brasil.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
