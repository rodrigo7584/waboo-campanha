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
    text: '“Fiquei impressionado com a agilidade, o atendimento da Ana foi extraordinário. Em poucos minutos ela entendeu a complexidade  do nosso projeto e executou com maestria. Ficamos muito felizes.”',
    name: 'Ronnie',
    company: 'Med'
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
                  alt=""
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
        alt=""
      />

      <Image
        src={'/icon-arrow.png'}
        className="swiper-button-prev"
        width={36}
        height={36}
        quality={100}
        alt=""
      />
    </div>
  )
}
export default SwiperComments
