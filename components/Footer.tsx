'use client'
import Link from 'next/link'
import SocialButton from './SocialButton'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-left">
            <h2>
              Vamos <br />
              conversar!
            </h2>
            <Link href="mailto:contato@waboo.com.br" className="link-green">
              contato@waboo.com.br
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5511942042774" className="celnumber">
              (11) 9.4204-2774
            </Link>
            <div className="social-buttons">
              <SocialButton
                icon="/icon-linkedin.png"
                link="https://www.linkedin.com/company/waboo-creative/"
              />
              <SocialButton
                icon="/icon-instagram.png"
                link="https://www.instagram.com/waboocreative"
              />
              <SocialButton
                icon="/icon-whatsapp.png"
                link="https://api.whatsapp.com/send?phone=5511942042774"
              />
              <SocialButton icon="/icon-behance.png" link="https://www.behance.net/waboocreative" />
            </div>
          </div>
          <div className="col-right">
            <ul className="list-links">
              <li>
                <Link href="#contact">Contato</Link>
              </li>
              <li>
                <Link target="_blank" href="/politica_de_privacidade.pdf">Política de Privacidade</Link>
              </li>
            </ul>
            <p className="copyright">
              © Copyright 2023. Waboo Creative. <br />
              Todos os direitos reservados. Brasil.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
