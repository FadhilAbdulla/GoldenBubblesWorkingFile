'use client'

import { Col, Container, Form, FormControl, Row, TabContainer, Nav, NavItem, NavLink, TabContent, TabPane } from 'react-bootstrap'
import { BsGem, BsBarChartLine, BsCurrencyExchange, BsGraphUp, BsFillDropletFill } from 'react-icons/bs'
import { ReactTyped } from 'react-typed'
import Services from './Services'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const tabList = ['forex', 'metals', 'shares', 'indices', 'commodities']

const Hero = () => {
  const searchParams = useSearchParams()
  const rParam = searchParams.get('r')
  const [activeTab, setActiveTab] = useState('forex')

  useEffect(() => {
    if (tabList.includes(rParam?.toLowerCase())) {
      setActiveTab(rParam.toLowerCase())
    }
  }, [rParam])

  return (
    <section className="overflow-hidden pt-0 pb-0">
      <div className="bg-dark position-relative pt-7  px-4 px-md-0">
        <figure className="position-absolute top-0 start-0">
          <svg
            className="fill-white"
            style={{
              opacity: 0.02,
            }}
            width="662"
            height="614"
            viewBox="0 0 662 614"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M-78 0V603.815C-61.4821 612.795 -44.1025 615.867 -28.4464 611.85C9.04192 602.16 38.9177 554.186 58.4519 503.612C77.8424 453.511 90.1949 397.029 105.995 343.383C121.794 289.973 142.477 237.745 173.215 206.549C224.779 154.321 291.425 172.991 349.166 202.768C406.907 232.545 466.227 272.248 525.979 256.414C570.505 244.598 611.441 200.878 636.002 138.724C652.233 97.6029 661.138 48.9196 662 0L-78 0Z" />
          </svg>
        </figure>

        <figure className="position-absolute top-0 end-0">
          <svg
            className="fill-white"
            style={{
              opacity: 0.02,
            }}
            width="347"
            height="878"
            viewBox="0 0 347 878"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M425.992 -12.5L0.604347 -20.2914C0.604347 -20.2914 313.492 124 345.492 877.5L388.105 436L425.992 -12.5Z" />
          </svg>
        </figure>

        {/* <figure className="position-absolute bottom-0 start-50 translate-middle-x mb-n6">
          <svg className="fill-body" width="1994" height="182" viewBox="0 0 1994 182" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1943.5 182H18.5H0.5V97.4995C630.5 -33 1325.5 -31.0001 1994 97.4995V182H1943.5Z" />
          </svg>
        </figure> */}

        <div className="inner-container text-center position-relative mb-4 mt-6">
          <h1 className="mt-4 text-white">Smarter Trading Technology</h1>
          <h6 className="h1 cd-headline clip big-clip is-full-width text-primary mb-5">
            <span className="text-white pt-0">For </span>
            <ReactTyped
              strings={['Forex !', 'Metals !', 'Shares !', 'Indices !', 'Commodities !']}
              className="typed"
              typeSpeed={150}
              backSpeed={80}
              loop
            />
          </h6>
        </div>
        <TabContainer activeKey={activeTab} onSelect={setActiveTab}>
          <Row>
            <Col lg={10} xl={8} xxl={6} className="mx-auto mb-4 mb-xl-6">
              <div className="bg-light rounded-pill p-2">
                <Nav variant="pills" className="nav-pills-primary nav-responsive justify-content-between">
                  {tabList.map((productKey) => (
                    <NavItem className="position-relative" key={productKey}>
                      <NavLink id={productKey} eventKey={productKey} className="nav-link rounded-pill">
                        {DisplayIcons[productKey] && React.createElement(DisplayIcons[productKey], { className: 'me-2' })}
                        {DisplayReplacr?.[productKey] ?? ''}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </div>
            </Col>

            <Col xs={11} lg={12} className="w-100">
              <TabContent>
                {tabList.map((productKey) => (
                  <TabPane key={productKey} eventKey={productKey} className="fade">
                    <Services id={productKey} />
                  </TabPane>
                ))}
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </div>
    </section>
  )
}

const DisplayReplacr = {
  forex: 'Forex',
  metals: 'Metals',
  shares: 'Shares',
  indices: 'Indices',
  commodities: 'Commodities',
}

const DisplayIcons = {
  forex: BsCurrencyExchange,
  metals: BsGem,
  shares: BsBarChartLine,
  indices: BsGraphUp,
  commodities: BsFillDropletFill,
}
export default Hero
