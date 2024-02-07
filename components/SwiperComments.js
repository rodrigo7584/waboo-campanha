'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'

const swiperDataComments = [
  {
    text: '“Fiquei impressionado com a agilidade, o atendimento da Ana foi extraordinário. Em poucos minutos ela entendeu a complexidade  do nosso projeto e executou com maestria. Ficamos muito felizes.”',
    name: 'Ronnie Girard',
    company: 'Medconex'
  },
  {
    text: '“A Waboo superou nossas expectativas! A equipe realmente capturou a essência da nossa marca e desempenhou um excelente trabalho.”',
    name: 'Diogo Costa',
    company: 'YDB Logística'
  },
  {
    text: '“Amei a experiência com a Waboo! Um trabalho de excelência! Faremos muitos outros projetos juntos com certeza. Quero parabenizar a Ana pelo ótimo atendimento e profissionalismo. Ficamos felizes do começo ao fim do projeto.”',
    name: 'Márcia Rocha',
    company: 'Laticínios Delqualho'
  },
  {
    text: '“Estamos trabalhando com eles há alguns meses, é um grupo de profissionais que vem atendendo todas as nossas expectativas. São atenciosos e muito responsáveis.”',
    name: 'Fabiana Madeira',
    company: 'Grupo Marafão.'
  },
  {
    text: '“Excelente experiência! Os profissionais são competentes e comprometidos.”',
    name: 'Lara Sogorski',
    company: 'Fábrika Lúdika'
  }
]

const SwiperComments = () => {
  return (
    <div className="swiper-comments">
      <Swiper
        navigation={{
          prevEl: '.swiper-comments .swiper-button-prev',
          nextEl: '.swiper-comments .swiper-button-next'
        }}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        {swiperDataComments.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="comments-box">
              <p className="comment-text">{slide.text}</p>
              <div className="comment-info">
                <div className="comment-name-company">
                  <p className="comment-name">{slide.name}</p>
                  <p className="comment-company">{slide.company}</p>
                </div>
                <Image
                  className="comments-icon"
                  src={'/icon-comments.png'}
                  width={94}
                  height={76}
                  quality={100}
                  alt="detail icon"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={'/icon-arrow.png'}
        className="swiper-button-next"
        width={36}
        height={36}
        quality={100}
        alt="button next"
      />

      <Image
        src={'/icon-arrow.png'}
        className="swiper-button-prev"
        width={36}
        height={36}
        quality={100}
        alt="button prev"
      />
    </div>
  )
}
export default SwiperComments
