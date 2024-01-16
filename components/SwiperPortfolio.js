'use client'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'

const swiperDataPortfolio = [
  { src: '/portfolio-1.png', textLink: 'BR Garantidora de Crédito', link: '#' },
  { src: '/portfolio-2.png', textLink: 'Ryze Capital', link: '#' },
  { src: '/portfolio-3.png', textLink: 'Venko', link: '#' }
]

const SwiperPortfolio = () => {
  return (
    <div className="swiper-portfolio">
      <Image
        src={'/icon-arrow.png'}
        className="swiper-button-next control-button"
        width={36}
        height={36}
        quality={100}
        alt=""
      />
      <Swiper
        navigation={{
          prevEl: '.swiper-portfolio .swiper-button-prev',
          nextEl: '.swiper-portfolio .swiper-button-next'
        }}
        modules={[Navigation]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        className="mySwiper"
      >
        {swiperDataPortfolio.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio-box">
              <Image
                className="portfolio-img"
                src={slide.src}
                width={417}
                height={495}
                quality={100}
                alt=""
              />
              <Link href={slide.link} className="btn-border-black">
                {slide.textLink}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={'/icon-arrow.png'}
        className="swiper-button-prev control-button"
        width={36}
        height={36}
        quality={100}
        alt=""
      />
    </div>
  )
}
export default SwiperPortfolio
