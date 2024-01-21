import Image from 'next/image'
import Link from 'next/link'

import SwiperPartners from '../components/SwiperPartners'
import SpotlightBlock from '../components/SpotlightBlock'
import SwiperPortfolio from '../components/SwiperPortfolio'
import NumberedBlock from '../components/NumberedBlock'
import SwiperComments from '../components/SwiperComments'
import Accordion from '../components/Accordion'
import EnviarEmail from '../components/EnviarEmail'

export default function Home() {
  return (
    <>
    <main>
      <section className='hero' id='hero'>
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
      <section className="partners" >
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Empresas parceiras</h2>
              <SwiperPartners/>
            </div>
          </div>
        </div>
      </section>
      <section className="why" id='waboo'>
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
      <section className="portfolio" id='portifolio'>
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
      <section className="plans" id='planos'>
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
                  ou página de vendas;</li>
                  <li>Layout exclusivo, editável
                  e SEO otimizado;</li>
                  <li>Links de interação;</li>
                  <li>Instalação no servidor;</li>
                  <li>Suporte de 30 dias.</li>
                </ul>
                <p className="payment-plan"><span>R$ 649,00 </span> no pix ou</p>
                <p className="card-payment-plan">2X de R$ 349,95<span> no cartão</span></p>
                <Link href="#" className='btn-green'>Criar meu site</Link>
              </div>
              <div className="plan plan-spotlight">
                <h4 className="title-plan">Business</h4>
                <h5 className="subtitle-plan">Recursos avançados, 
                perfeito para negócios
                em crescimento </h5>
                <ul className="list-plan">
                  <li>Site institucional de até 5 
                  páginas (sem blog);</li>
                  <li>Layout exclusivo, editável
                  e SEO otimizado;</li>
                  <li>Links de interação;</li>
                  <li>Instalação no servidor;</li>
                  <li>Suporte de 30 dias.</li>
                </ul>
                <p className="payment-plan"><span>R$ 929,90 </span> no pix ou</p>
                <p className="card-payment-plan">2X de R$ 499,95<span> no cartão</span></p>
                <Link href="#" className='btn-green'>Criar meu site</Link>
              </div>
              <div className="plan">
                <h4 className="title-plan">Enterprise</h4>
                <h5 className="subtitle-plan">Tudo o que você 
                precisa para se destacar 
                na concorrência </h5>
                <ul className="list-plan">
                  <li>Site institucional de até 5 
                  páginas;</li>
                  <li>Blog Incluso;</li>
                  <li>Layout exclusivo, editável
                  e SEO otimizado;</li>
                  <li>Links de interação;</li>
                  <li>Instalação no servidor;</li>
                  <li>Suporte de 30 dias.</li>
                </ul>
                <p className="payment-plan"><span>R$ 1.399,90 </span> no pix ou</p>
                <p className="card-payment-plan">2X de R$ 749,95<span> no cartão</span></p>
                <Link href="#" className='btn-green'>Criar meu site</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-site">
        <div className="container">
          <div className="row">
            <div className="col-right">
              <h2 className='title-risk'>Site Personalizado</h2>
              <p>Caso nenhum dos pacotes acima atenda completamente às suas necessidades, disponibilizamos uma equipe de especialistas em desenvolvimento web pronta para compreender as especificações do seu projeto. Entre em contato conosco, e nossa equipe agendará um dia e horário mais adequados para discutirmos detalhadamente as suas ideias e expectativas.</p>
              <Link href="#" className='btn-green'>Entrar em contato</Link>
            </div>
            <div className="col-left">
              <Image className="img-graphic-1" src={"/graphic.png"} width={281} height={208} quality={100} alt="" />
              <Image className="img-graphic-2" src={"/graphic-2.png"} width={413} height={250} quality={100} alt="" />
              <Image className="guy-smiling" src={"/guy-smiling-photo.png"} width={629} height={693} quality={100} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="comments" id='clientes'>
        <div className="container">
          <div className="row">
            <h2>Veja o que os clientes falam sobre nós!</h2>
            <div className="col-right">
              <SwiperComments/>
            </div>
            <div className="col-left">
              <Image className="img-lokal" src={"/icon-company-comments-1.png"} width={139} height={139} quality={100} alt="" />
              <Image className="img-expert" src={"/icon-company-comments-2.png"} width={161} height={161} quality={100} alt="" />
              <Image className="img-lav" src={"/icon-company-comments-3.png"} width={98} height={98} quality={100} alt="" />
              <Image className="img-conecta" src={"/icon-company-comments-4.png"} width={197} height={197} quality={100} alt="" />
              <Image className="img-etrilhas" src={"/icon-company-comments-5.png"} width={149} height={149} quality={100} alt="" />
              <Image className="img-ryze" src={"/icon-company-comments-6.png"} width={122} height={122} quality={100} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='faq' id='faq'>
        <div className="container">
          <div className="row">
            <h2>FAQ</h2>
            <div className="accordions">
              <Accordion
                title="Preciso ter CNPJ para criar um site?"
                content="
                Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Necessitatibus maxime veritatis similique, 
                accusamus repudiandae incidunt cupiditate, magni 
                voluptatem officia nam, natus laborum quas porro 
                doloremque!"
              />
              <Accordion
                title="Vocês criam sites para todos os segmentos?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
              <Accordion
                title="O domínio que eu escolher e vocês registrarem será meu ou da Waboo?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
              <Accordion
                title="Após a criação do site, eu terei que pagar alguma mensalidade?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
              <Accordion
                title="Quantas alterações posso solicitar em meu site antes de tê-lo aprovado?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
              <Accordion
                title="Como saberei se meu site está sendo bem acessado?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
              <Accordion
                title="Quais são os tipos de site criados pela Waboo?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
              <Accordion
                title="Quantas páginas posso ter no meu site?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
  
              <Accordion
                title="Após aprovação, ainda poderei fazer alterações 
                no meu site?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
              <Accordion
                title="Posso ter um site multilíngue?"
                content="
                Sim, Já criamos praticamente para todo o tipo de segmento, porém 
                não atendemos os seguintes segmentos: Pornografia, prostituição, 
                venda de armas de fogo, venda de anabolizantes e remédios 
                controlados, apostas e sorteios."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="warrant">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className='title-risk'>Garantia de satisfação</h2>
              <p>Por confiar no nosso trabalho e em nosso processo de criação, a Waboo preza, antes de tudo, pela satisfação de seus clientes. Após a criação do layout, caso você não se sinta satisfeito(a) com o site, devolvemos o valor investido.*</p>
            </div>
          </div>
        </div>
      </section>
      <section className="doubts">
        <div className="container">
          <div className="row">
            <div className="col-right">
              <h2 className='title-risk'>Ainda está com dúvida 
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
        <div className="container">
          <div className="row">
             <h2>Transforme sua presença online hoje mesmo!</h2>
            <h3>Consulte-nos para um site que vai além das expectativas, que atraia mais clientes e gere mais receitas para o seu negóclio.</h3>
           <EnviarEmail/>
          </div>
        </div>
      </section>
    </main>
  </>)
}
