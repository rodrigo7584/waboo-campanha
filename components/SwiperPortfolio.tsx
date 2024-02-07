'use client'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'

const swiperDataPortfolio = [
  { src: '/portfolio-1.png', textLink: 'BR Garantidora de Crédito', link: 'https://brgarantidora.com.br' },
  { src: '/portfolio-2.png', textLink: 'Ryze Capital', link: 'https://ryze.capital' },
  { src: '/portfolio-grk.png', textLink: 'ABC Pack', link: 'https://abcpack.vercel.app/' },
  { src: '/portfolio-conectapag.png', textLink: 'ConectaPag', link: 'https://projetoswaboo.com.br/waboo_testes/conectapag/' },
  { src: '/portfolio-movidamed.png', textLink: 'Movida Med', link: 'https://movidamed.com.br/' },
  { src: '/portfolio-kryptex.png', textLink: 'Kryptex', link: 'https://projetoswaboo.com.br/waboo_testes/krype/' },
  { src: '/portfolio-telma.png', textLink: 'Telma', link: '#' },
  { src: '/portfolio-1daybot.png', textLink: '1DayBot', link: '#' },
  { src: '/portfolio-conectasaude.png', textLink: 'Conecta Saúde', link: '#' },
  { src: '/portfolio-bullbebtc.png', textLink: 'BullBeBTC', link: '#' },
  { src: '/portfolio-ryze.png', textLink: 'Ryze 2', link: 'https://ryze.capital' },
  { src: '/portfolio-9xminer.png', textLink: '9x Miner', link: '#' }
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
        alt="button next"
      />
      <Swiper
        navigation={{
          prevEl: '.swiper-portfolio .swiper-button-next',
          nextEl: '.swiper-portfolio .swiper-button-prev'
        }}
        loop={true}
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
                alt="print of portfolio's sites"
              />
              <Link href={slide.link} target='_blank' className="btn-border-black">
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
        alt="button prev"
      />
    </div>
  )
}
export default SwiperPortfolio
