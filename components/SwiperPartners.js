'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
const SwiperPartner = () => {
  return (
    <div className="swiper-partners">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="partner-box">
            <Image src={'/company-1.png'} width={210} height={62} quality={100} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner-box">
            <Image src={'/company-2.png'} width={199} height={66} quality={100} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner-box">
            <Image src={'/company-3.png'} width={226} height={44} quality={100} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner-box">
            <Image src={'/company-4.png'} width={227} height={49} quality={100} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner-box">
            <Image src={'/company-5.png'} width={240} height={19} quality={100} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default SwiperPartner
