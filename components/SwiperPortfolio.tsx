'use client'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'

const swiperDataPortfolio = [
  { src: '/portfolio-1.png', textLink: 'BR Garantidora de Crédito', link: 'https://brgarantidora.com.br' },
  { src: '/portfolio-2.png', textLink: 'Ryze Capital', link: 'https://ryze.capital' },
  { src: '/portfolio-grk.png', textLink: 'ABC Pack', link: 'https://abcpack.vercel.app/' },
  { src: '/portfolio-conectapag.png', textLink: 'ConectaPag', link: 'https://projetoswaboo.com.br/conectapag/' },
  { src: '/portfolio-movidamed.png', textLink: 'Movida Med', link: 'https://movidamed.com.br/' },
  { src: '/portfolio-kryptex.png', textLink: 'Kryptex', link: 'https://projetoswaboo.com.br/kryptex/' },
  { src: '/portfolio-telma.png', textLink: 'Telma', link: 'https://www.behance.net/waboocreative' },
  { src: '/portfolio-1daybot.png', textLink: '1DayBot', link: 'https://www.behance.net/gallery/191068533/UiUx-Design-1DayBot' },
  { src: '/portfolio-conectasaude.png', textLink: 'Conecta Saúde', link: 'https://projetoswaboo.com.br/conecta-saude/' },
  { src: '/portfolio-bullbebtc.png', textLink: 'BullBeBTC', link: 'https://projetoswaboo.com.br/bullbebtc/' },
  { src: '/portfolio-ryze.png', textLink: 'Ryze 2', link: 'https://ryze.capital' },
  { src: '/portfolio-bxm.png', textLink: 'BXM', link: 'https://projetoswaboo.com.br/bxm' },
  { src: '/portfolio-upleads.png', textLink: 'Upleads', link: 'https://projetoswaboo.com.br/upleads/'},
  { src: '/portfolio-pixswap.png', textLink: 'Pixswap', link: 'https://www.behance.net/gallery/183364927/UiUx-Design-PixWap'},
  { src: '/portfolio-work.png', textLink: 'WORK', link: 'https://www.behance.net/gallery/137455067/WebDesign-Work'},
  { src: '/portfolio-royaltech.png', textLink: 'RoyalTech', link: 'https://projetoswaboo.com.br/royaltech/'},
  { src: '/portfolio-suno.png', textLink: 'Suno', link: 'https://projetoswaboo.com.br/suno/'},
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
