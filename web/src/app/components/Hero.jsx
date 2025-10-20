'use client'

import backgroundImg9 from '@/assets/images/bg/09.jpg'
import backgroundImg10 from '@/assets/images/bg/10.jpg'
import backgroundImg11 from '@/assets/images/bg/prodbg1.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'
const Hero = () => {
  const swiperOptions = {
    modules: [EffectFade, Autoplay, Pagination],
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
  return (
    <section className="pt-0 pb-0">
      <Swiper className="overflow-hidden" {...swiperOptions}>
        <SwiperSlide>
          <Card
            className="overflow-hidden min-vh-100 rounded-0"
            style={{
              background: `url(${backgroundImg11.src}) no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="bg-overlay bg-linear-overlay"></div>

            <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
              <Container>
                <Row>
                  <Col sm={11} lg={8} xl={8} className="text-center m-auto">
                    {/* <span className="bg-white bg-opacity-10 text-white small rounded-3 px-3 py-2">🚀 #World&apos;s best software agency</span> */}

                    <h3 className="text-white display-4 my-4">
                      Bubbles of Opportunity, Profits in <span className="text-primary">Gold!</span>
                    </h3>
                    <p className="text-white mb-5">Trade the premium way with Dubai’s most trusted and regulated broker.</p>
                    <Link
                      className="btn btn-lg btn-white icon-link icon-link-hover mb-0"
                      href={`${DEFAULT_PAGE_PREFIX}auth/register`}
                      style={{
                        background: 'linear-gradient(90deg, #FFD700 0%, #FFEA70 40%, #FFC300 70%, #B6862C 100%)',
                        color: 'black',
                        fontWeight: '600',
                        border: '1px solid #FFD700',
                        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.18), 0 1.5px 6px rgba(0,0,0,0.10)',
                        textShadow: '0 1px 6px rgba(255,255,255,0.25)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'background 0.2s',
                      }}>
                      <span
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '-75%',
                          width: '60%',
                          height: '100%',
                          background: 'linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 100%)',
                          transform: 'skewX(-20deg)',
                          animation: 'shine 2s infinite linear',
                          pointerEvents: 'none',
                          filter: 'blur(1px)',
                          opacity: 0.7,
                        }}
                      />
                      Start Earning Today
                      <BsArrowRight className="bi" />
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </SwiperSlide>

        {/* <SwiperSlide>
          <Card className="overflow-hidden min-vh-100 rounded-0" style={{
          background: `url(${backgroundImg9.src}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
            <div className="bg-overlay bg-linear-overlay"></div>

            <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
              <Container>
                <Row>
                  <Col sm={11} lg={8} className="mt-auto">
                    <h1 className="text-white display-4 mb-4">
                      Empower Your <span className="fw-light">Business</span> with <span className="fw-light">Innovation</span>
                    </h1>
                    <p className="text-white mb-5">
                      
                      Whether you&apos;re a gaming enthusiast or simply seeking an extraordinary escape from reality, our Virtual VR product is your portal
                      to endless excitement.
                    </p>
                    <Link className="btn btn-lg btn-primary icon-link icon-link-hover mb-0" href="">
                      Explore Our Services
                      <BsArrowRight className="bi" />
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </SwiperSlide> */}

        <div className="swiper-pagination swiper-pagination-line position-absolute bottom-0 "></div>
      </Swiper>
    </section>
  )
}
export default Hero
