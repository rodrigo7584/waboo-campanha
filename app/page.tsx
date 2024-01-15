import Image from 'next/image'
import Link from 'next/link'

import SwiperPartners from '../components/SwiperPartners'

export default function Home() {
  return (
    <>
    <main>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <div className="col-right">
              <h1>Sua presença online 
                com um site personalizado,
                intuitivo e impactante!
              </h1>
              <p>Seja você um empreendedor ambicioso, 
                uma startup inovadora ou uma empresa consolidada, 
                na Waboo criamos sites de alto nível, capazes de ampliar sua base 
                de clientes, impulsionar suas vendas e maximizar os lucros do seu negócio. 
              </p>
              <Link href="#" className="btn-green">
                Quero ter mais resultados
              </Link>
            </div>
            <div className="col-left">
              <Image className="img-guy" src={"/guy-photo.png"} width={740} height={843} quality={100} alt="" />
              <Image className='img-graphic' src={"/graphic.png"} width={280} height={208} quality={100} alt="" />
            </div>          
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Empresas parceiras</h2>
              <SwiperPartners/>
            </div>
          </div>
        </div>
      </section>
      <section className="why">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>
              Por que escolher
              a Waboo?
              </h2>
              <p>
              Na Waboo, compreendemos que o seu site não é apenas uma
              presença online; ele representa a identidade digital da 
              sua marca. Apresentamos a seguir algumas razões pelas quais
              nos destacamos como a escolha adequada para concretizar a 
              sua visão:
              </p>
              <Link href="#" className="btn-green">
                Criar meu site
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>)
}
