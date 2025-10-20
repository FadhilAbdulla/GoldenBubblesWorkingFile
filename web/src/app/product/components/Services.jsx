'use client'

import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight, BsArrowLeft, BsTelephone } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { services } from '../data'
import ServiceCard from './ServiceCard'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import Features from './Features'

const Services = ({ id }) => {
  const swiperOptions = {
    modules: [Autoplay, Navigation],
    spaceBetween: 10,
    loop: false,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 7,
      },
      1200: {
        slidesPerView: 7,
      },
    },
  }
  return (
    <section className="pt-0 pb-0">
      <div className=" overflow-hidden">
        <Container>
          <Row className="mb-4 mb-md-6">
            <Col md={6} lg={6}>
              <h2 className="mb-0">{Replacer?.[id]?.head ?? ''}</h2>
            </Col>

            <Col md={6} lg={5} className="ms-auto">
              <p>{Replacer?.[id]?.desc ?? ''}</p>

              <div className="d-flex gap-3 position-relative mt-3">
                <Link href="" className="btn btn-light border btn-icon rounded-circle mb-0 swiper-button-prev-team">
                  <BsArrowLeft />
                </Link>
                <Link href="" className="btn btn-light border btn-icon rounded-circle mb-0 swiper-button-next-team">
                  <BsArrowRight />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>

        <Swiper className="swiper-outside-end-n20 " {...swiperOptions}>
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <ServiceCard
                icon={service.image}
                name="USDCAD"
                fullName="US Dollar vs Canadian Dollar"
                price="$1.37734"
                percent={2.52}
                percentColor="#2ecc71"
                gradientShift={(idx % 5) / 5}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/*CTA*/}
        {/* <div className="d-flex align-items-center gap-2 mt-6">
          <ul className="avatar-group mb-0">
            <li className="avatar avatar-sm">
              <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
            </li>
            <li className="avatar avatar-sm">
              <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
            </li>
            <li className="avatar avatar-sm">
              <div className="avatar-img rounded-circle text-bg-dark">
                <BsTelephone className="text-white position-absolute top-50 start-50 translate-middle" />
              </div>
            </li>
          </ul>
          <p className="fw-normal mb-0">
            Maximize Productivity by Simplifying Solution Search
            <Link href="" className="text-decoration-underline text-primary-hover fw-semibold">
              Got a project in mind?
            </Link>
          </p>
        </div> */}
      </div>
      <Features id={id} />
    </section>
  )
}

const Replacer = {
  forex: {
    head: 'Trade the World’s Most Popular Forex Pairs',
    desc: 'Step into the global currency market with tight spreads and real-time execution. Whether you’re chasing major or exotic pairs, trade forex with confidence and clarity.',
  },
  metals: {
    head: 'Invest in the Strength of Precious Metals',
    desc: 'Gold, silver, or platinum — safeguard your portfolio with assets that stand the test of time. Metals give you stability when markets move.',
  },
  shares: {
    head: 'Own a Piece of the World’s Leading Companies',
    desc: 'From tech giants to rising stars, trade shares that shape the future. Diversify your portfolio and tap into real business performance.',
  },
  indices: {
    head: 'Track the Pulse of Global Markets',
    desc: 'Trade indices that reflect the strength of entire economies. Gain exposure to top markets with a single position — simple, powerful, effective.',
  },
  commodities: {
    head: 'Trade Essential Global Commodities',
    desc: 'From energy to agriculture, trade the resources the world relies on every day. Commodities offer real opportunities in fast-moving markets.',
  },
}
export default Services
