'use client'
import React, { useEffect, useState } from 'react';
import * as fbq from "../lib/fpixel";

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

  const handleClick = () => {
    fbq.event("Botão");
  };
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.querySelector('header.menu');
    if (headerElement) {
      setHeaderHeight(headerElement.clientHeight);
    }
  }, []);

  return (
    <>
    <main style={{ paddingTop: `${headerHeight}px` }}>
      <section className='hero' id='hero'>
        <div className="container">
          <div className="row">
            <div className="col-right">
              <h1>Sites personalizados e impactantes!
              </h1>
              <p>Seja você um empreendedor ambicioso, 
                uma startup inovadora ou uma empresa consolidada, 
                na Waboo criamos sites de alto nível, capazes de ampliar sua base 
                de clientes, impulsionar suas vendas e maximizar os lucros do seu negócio. 
              </p>
              <Link onClick={handleClick}  href="#planos" className="btn-green" id="bnt-mais-resultados">
                Quero ter mais resultados
              </Link>
            </div>
            <div className="col-left">
              <Image className="img-guy" src={"/guy-photo.png"} width={740} height={843} quality={100} priority={true} alt="a guy wearing classes and smilling" />
              <Image className='img-graphic' src={"/graphic.png"} width={280} height={208} quality={100} priority={true} alt="a graphic illustration" />
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
              <Link onClick={handleClick} href="https://api.whatsapp.com/send?phone=5511942042774" target='_blank' className="btn-green" id="btn-criar-meu-site-why">
                Criar meu site
              </Link>
            </div>
            <div className="blocks">
              <SpotlightBlock
                icon="/rounded-icon-1.png"
                title="Design inovador"
                text="Desenvolvemos layouts exclusivos e estratégicos que aumentam a percepção de valor do seu negócio, geram confiança nos clientes e potencializam a conversão."
              />
              <SpotlightBlock
                icon="/rounded-icon-2.png"
                title="Tecnologias de ponta"
                text="Utilizamos as mais recentes tecnologias para garantir que seu site não apenas impressione visualmente, mas também ofereça desempenho excepcional e uma ótima experiência ao usuário."
              />
              <SpotlightBlock
                icon="/rounded-icon-3.png"
                title="Otimização total"
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
                <p className="payment-plan"><span>R$ 799,00 </span> no pix ou</p>
                <p className="card-payment-plan">3X de R$ 283,35<span> no cartão</span></p>
                <Link onClick={handleClick} href="https://api.whatsapp.com/send?phone=5511942042774" target="_blank" className='btn-green' id='btn-criar-meu-site-plano-basic'>Criar meu site</Link>
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
                <p className="payment-plan"><span>R$ 1.199,90 </span> no pix ou</p>
                <p className="card-payment-plan">3X de R$ 416,65<span> no cartão</span></p>
                <Link onClick={handleClick}  href="https://api.whatsapp.com/send?phone=5511942042774" target='_blank' className='btn-green'id='btn-criar-meu-site-plano-business'>Criar meu site</Link>
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
                <p className="payment-plan"><span>R$ 1.499,90 </span> no pix ou</p>
                <p className="card-payment-plan">2X de R$ 533,35<span> no cartão</span></p>
                <Link onClick={handleClick} href="https://api.whatsapp.com/send?phone=5511942042774" target='_blank' className='btn-green' id='btn-criar-meu-site-plano-enterprise'>Criar meu site</Link>
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
              <Link onClick={handleClick} href="https://api.whatsapp.com/send?phone=5511942042774" target='_blank' className='btn-green' id='btn-entrar-em-contato'>Entrar em contato</Link>
            </div>
            <div className="col-left">
              {/* <Image className="img-graphic-1" src={"/graphic.png"} width={281} height={208} quality={100} alt="" />
              <Image className="img-graphic-2" src={"/graphic-2.png"} width={413} height={250} quality={100} alt="" /> */}
              <Image className="guy-smiling" src={"/guy-smiling-photo.png"} width={629} height={693} quality={100} alt="a guy smilling using a suit and looking to a tablet" />
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
              <Image className="img-lokal" src={"/icon-company-comments-1.png"} width={139} height={139} quality={100} alt="floating logo of lokal our customer" />
              <Image className="img-expert" src={"/icon-company-comments-2.png"} width={161} height={161} quality={100} alt="floating logo of expertagro our customer" />
              <Image className="img-lav" src={"/icon-company-comments-3.png"} width={98} height={98} quality={100} alt="floating logo of lav our customer" />
              <Image className="img-conecta" src={"/icon-company-comments-4.png"} width={197} height={197} quality={100} alt="floating logo of conecta saude our customer" />
              <Image className="img-etrilhas" src={"/icon-company-comments-5.png"} width={149} height={149} quality={100} alt="floating logo of etrilhas our customer" />
              <Image className="img-ryze" src={"/icon-company-comments-6.png"} width={122} height={122} quality={100} alt="floating logo of ryze our customer" />
            </div>
          </div>
        </div>
      </section>
      <section className='faq' id='faq'>
        <div className="container">
          <div className="row">
            <h2>FAQ</h2>
            <div className="accordions">
              <div className="col-right">
                <Accordion
                  title="Preciso ter CNPJ para criar um site?"
                  content="Não. Você não precisa ter CNPJ para ter um site. Você pode também tê-lo como Pessoa Física utilizando o seu CPF."
                />
                <Accordion
                  title="O domínio que eu escolher e vocês registrarem será meu ou da Waboo?"
                  content="O domínio é seu. Sempre registramos os domínios em nome do cliente. Você poderá utilizá-lo em qualquer site que venha fazer no futuro, mesmo que seja com outra empresa."
                />
                <Accordion
                  title=" Após aprovação, ainda poderei fazer alterações no meu site?"
                  content="Sim. Após a aprovação você receberá um treinamento e o acesso ao CMS (editor do site) para poder realizar atualizações em seu site. Ainda assim, poderá entrar em contato conosco sempre que precisar de suporte para utilização do editor."
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
                  title="Posso ter um site multilíngue?"
                  content="Sim. Todos os sites criados pela Waboo possuem integração com a ferramenta do Google Tradutor, onde você precisa ter apenas o texto em uma língua e as demais são traduzidas automaticamente pela ferramenta. "
                />
                <Accordion
                  title="Como saberei se meu site está sendo bem acessado?"
                  content="O site já vem integrado com a ferramenta Google Analytics que permite conhecer em tempo real todos os acessos de seu site. Com ela é possível monitorar o perfil de quem acessa seu site, páginas mais acessadas, conversões, dispositivos, cidades e outros dados."
                />
              </div>
              <div className="col-left">
                <Accordion
                  title="Quais são os tipos de site criados pela Waboo?"
                  content="Fazemos Landing Pages, One Pages, Institucionais, Lojas Virtuais    (E-commerce), Portais de Notícias, Blogs, Portais de imóveis e veículos."
                />
               <Accordion
                  title="Quantas alterações posso solicitar em meu site antes de tê-lo aprovado?"
                  content="Você poderá solicitar até 3 alterações na fase de criação do layout, para que o projeto reflita exatamente o que deseja."
                />
                <Accordion
                  title="Vocês criam sites para todos os segmentos?"
                  content="Sim, Já criamos praticamente para todo o tipo de segmento, porém não atendemos os seguintes segmentos: Pornografia, prostituição, venda de armas de fogo, venda de anabolizantes e remédios controlados, apostas e sorteios."
                />
                <Accordion
                  title="Quantas páginas posso ter no meu site?"
                  content="Seu site poderá ter ilimitadas páginas, porém a Waboo criará a quantidade de páginas de acordo com o plano contratado."
                />
                <Accordion
                  title="Após a criação do site, eu terei que pagar alguma mensalidade?"
                  content="Todo site para se manter online precisa de serviços que geram custos recorrentes, como o registro de domínio e a hospedagem. Nenhum site funciona sem estes serviços. Mas não se preocupe que esses custos não são elevados, não chegando nem a R$ 30,00/mês."
                />
              </div>
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
      <section className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <h2>Transforme sua presença online hoje mesmo!</h2>
              <h3>Consulte-nos para um site que vai além das expectativas, que atraia mais clientes e gere mais receitas para o seu negócio.</h3>
              <EnviarEmail/>
            </div>
            <div className="col-right">
              <Image src='/guy-smiling-photo-2.png' width={628} height={797} quality={100} alt='guys smiling'/>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>)
}
