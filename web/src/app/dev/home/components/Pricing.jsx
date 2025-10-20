'use client'

import { Container } from 'react-bootstrap'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { pricingData } from '../data'
import PricingCard from './PricingCard'

const pricingData = [
  {
    name: 'Standard Account',
    desc: 'A commission-free account that is perfect for new traders looking to start investing. Standard accounts offer instant execution, stable spreads.',
    points: ['Minimum Initial Deposit of $50', 'Spreads from 1.5 pips', 'Leverage up to 1:500'],
  },
  {
    name: 'Pro Account',
    desc: 'The Pro account is suitable for traders looking to take advantage of zero commissions, tight spreads, and instant execution.',
    points: ['Minimum Initial Deposit of $1000', 'Spreads from 0.8 pips', 'Leverage up to 1:500'],
  },
  {
    name: 'ECN Account',
    desc: 'An ECN account is best suited for traders looking for raw spreads and instant execution.',
    points: ['Minimum Initial Deposit of $10000', 'Spreads from 0.0 pips', 'Leverage up to 1:500'],
  },
]

const Pricing = () => {
  const swiperOptions = {
    modules: [Pagination],
    loop: false,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  }
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-5">
          <h2 className="mb-4">Choose Your Trading Account</h2>
          <p className="mb-0">
            Select the account type that fits your trading style. Enjoy competitive spreads, instant execution, and flexible leverage.
          </p>
        </div>

        <Swiper {...swiperOptions}>
          {pricingData.map((plan, idx) => (
            <SwiperSlide key={idx}>
              <PricingCard plan={plan} />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
        </Swiper>
      </Container>
    </section>
  )
}
export default Pricing
