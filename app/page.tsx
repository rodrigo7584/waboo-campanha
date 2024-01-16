import Image from 'next/image'
import Link from 'next/link'

import SwiperPartners from '../components/SwiperPartners'
import SpotlightBlock from '../components/SpotlightBlock'
import SwiperPortfolio from '../components/SwiperPortfolio'
import NumberedBlock from '../components/NumberedBlock'
import SwiperComments from '../components/SwiperComments'
import Accordion from '../components/Accordion'

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
            <div className="blocks">
              <SpotlightBlock
                icon="/rounded-icon-1.png"
                title="Design inovador:"
                text="Desenvolvemos layouts exclusivos e estratégicos que aumentam a percepção de valor do seu negócio, geram confiança nos clientes e potencializam a conversão."
              />
              <SpotlightBlock
                icon="/rounded-icon-2.png"
                title="Tecnologias de ponta:"
                text="Utilizamos as mais recentes tecnologias para garantir que seu site não apenas impressione visualmente, mas também ofereça desempenho excepcional e uma ótima experiência ao usuário."
              />
              <SpotlightBlock
                icon="/rounded-icon-3.png"
                title="Otimização total:"
                text="Garantimos que seu site seja totalmente responsivo, oferecendo uma experiência perfeita em dispositivos móveis, tablets e computadores."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <h2>Portifólio</h2>
            <h3>Confira algumas soluções desenvolvidas pela nossa equipe!</h3>
            <SwiperPortfolio/>
          </div>
        </div>
      </section>
      <section className='steps'>
        <div className="container">
          <div className="row">
            <h2>O nosso processo de criação</h2>
            <div className="blocks">
              <NumberedBlock
                number="1"
                title="Consulta Inicial:"
                text="Conversamos sobre suas metas,
                público-alvo e visão para o site."
              />
              <NumberedBlock
                number="2"
                title="Design Personalizado:"
                text="Nossa equipe cria um design
                exclusivo que se alinha à 
                sua marca."
              />
              <NumberedBlock
                number="3"
                title="Desenvolvimento ágil:"
                text="Utilizamos metodologias ágeis
                para garantir prazos rápidos e 
                eficiência no desenvolvimento."
              />
              <NumberedBlock
                number="4"
                title="Revisões e aprimoramentos:"
                text="Suas revisões e feedback são essenciais. 
                Estamos aqui para ajustar e refinar até que 
                oresultado final supere suas expectativas."
              />
              <NumberedBlock
                number="5"
                title="Lançamento e suporte:"
                text="Seu site é lançado para o mundo e nossa
                equipe garante 30 dias de suporte para 
                qualquer eventual problema que possa surgir."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="plans">
        <div className="container">
          <div className="row">
            <h2>Pacotes</h2>
            <h3>Escolha entre nossos pacotes e comece sua jornada online agora mesmo!</h3>
            <div className="plans-box">
              <div className="plan">
                <h4 className="title-plan">Basic</h4>
                <h5 className="subtitle-plan">Site básico, ideal para
                startups e pequenos
                negócios</h5>
                <ul className="list-plan">
                  <li>One page, landing page 
                  ou página de vendas</li>
                  <li>Layout exclusivo, editável
                  e SEO otimizado</li>
                  <li>Links de interação;</li>
                  <li>Instalação no servidor;</li>
                  <li>Suporte de 30 dias.</li>
                </ul>
                <p className="payment-plan"><span>R$ 649,00 </span> no pix ou</p>
                <p className="card-payment-plan">2X de R$ 349,95<span>no cartão</span></p>
                <Link href="#">Criar meu site</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-site">
        <div className="container">
          <div className="row">
            <div className="col-right">
              <h2>Site Personalizado</h2>
              <p>Caso nenhum dos pacotes acima atenda completamente às suas necessidades, disponibilizamos uma equipe de especialistas em desenvolvimento web pronta para compreender as especificações do seu projeto. Entre em contato conosco, e nossa equipe agendará um dia e horário mais adequados para discutirmos detalhadamente as suas ideias e expectativas.</p>
              <Link href="#">Entrar em contato</Link>
            </div>
            <div className="col-left">
              <Image className="img-graphic-1" src={"/graphic.png"} width={281} height={208} quality={100} alt="" />
              <Image className="img-graphic-2" src={"/graphic-2.png"} width={413} height={250} quality={100} alt="" />
              <Image className="guy-smiling" src={"/guy-smiling-photo.png"} width={629} height={693} quality={100} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="comments">
        <div className="container">
          <div className="row">
            <div className="col-right">
              <SwiperComments/>
            </div>
            <div className="col-left">
              <Image className="img-etrilhas" src={"/icon-company-comments-5.png"} width={149} height={149} quality={100} alt="" />
              <Image className="img-lav" src={"/icon-company-comments-3.png"} width={98} height={98} quality={100} alt="" />
              <Image className="img-expertagro" src={"/icon-company-comments-2.png"} width={161} height={161} quality={100} alt="" />
              <Image className="img-lokal" src={"/icon-company-comments-1.png"} width={139} height={139} quality={100} alt="" />
              <Image className="img-ryze" src={"/icon-company-comments-4.png"} width={197} height={197} quality={100} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='faq'>
        <div className="container">
          <div className="row">
            <h2>FAQ</h2>
            <div className="accordions">
            <Accordion
                title="Quem é a empresa responsável pelo RyzePay?"
                content="
              O RyzePay é uma solução da Ryze Capital, uma empresa de
              tecnologia autorizada e homologada para participar do
              sistema nacional de recebíveis. A Ryze Capital segue
              rigorosamente o regulamento do BACEN, a LGPD, além de adotar
              as melhores práticas de segurança e proteção da informação."
              />
              <Accordion
                title="Quem é a empresa responsável pelo RyzePay?"
                content="
              O RyzePay é uma solução da Ryze Capital, uma empresa de
              tecnologia autorizada e homologada para participar do
              sistema nacional de recebíveis. A Ryze Capital segue
              rigorosamente o regulamento do BACEN, a LGPD, além de adotar
              as melhores práticas de segurança e proteção da informação."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="warrant">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Garantia de satisfação</h2>
              <p>Por confiar no nosso trabalho e em nosso processo de criação, a Waboo preza, antes de tudo, pela satisfação de seus clientes. Após a criação do layout, caso você não se sinta satisfeito(a) com o site, devolvemos o valor investido.*</p>
            </div>
          </div>
        </div>
      </section>
      <section className="doubts">
        <div className="container">
          <div className="row">
            <div className="col-right">
              <h2>Ainda está com dúvida 
              se precisa de um site? </h2>
              <p>Analise as perguntas a seguir e responda com total sinceridade. Caso marque uma ou mais alternativas, 
              sem dúvidas você precisa de um site.</p>
            </div>
            <div className="col-left">
              <ul className='doubt-list'>
                <li>Precisa aumentar a receita da sua empresa?</li>
                <li>Quer transformar os visitantes do seu site em clientes?</li>
                <li>Pretende aumentar a percepção de valor do seu negócio</li>
                <li>Quer se destacar da concorrência e gerar mais autoridade?</li>
                <li>Está cansado de sites amadores que não geram conversão</li>
                <li>Se sente frustrado em queimar dinheiro com sites lentos?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2></h2>
        <h3></h3>
        <form action="#">
          <input type="text" placeholder='Informe seu nome' />
          <input type="text" placeholder='Informe seu número'/>
          <button type='submit' className='btn-green'>Enviar</button>
        </form>
      </section>
    </main>
  </>)
}
