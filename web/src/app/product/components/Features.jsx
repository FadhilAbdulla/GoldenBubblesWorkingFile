import decoration10 from '@/assets/images/elements/saas-decoration/10.png'
import decoration11 from '@/assets/images/elements/saas-decoration/11.png'
import Forex from '@/assets/images/Icons/1.svg'
import Shares from '@/assets/images/Icons/2.svg'
import Indices from '@/assets/images/Icons/3.svg'
import Commodities from '@/assets/images/Icons/4.svg'
import Metals from '@/assets/images/Icons/5.svg'
import bg1Img from '@/assets/images/bg/aboutbg3.svg'

import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const productFeatures = {
  forex: [
    {
      img: Forex,
      title: 'Market Leadership & Execution',
      desc: `Experience the world’s largest and most liquid market with ultra-fast execution and competitive spreads. Trade major, minor, and exotic currency pairs 24/5, backed by deep liquidity and advanced analysis tools. Our platform offers real-time charts, economic calendars, and risk management features to help you make informed decisions.`,
    },
    {
      img: bg1Img,
      title: 'Support & Education',
      desc: `Benefit from negative balance protection, flexible leverage, and dedicated support. Whether you’re a beginner or a pro, our educational resources and market insights empower you to trade with confidence. Join thousands of successful traders who trust us for reliability, transparency, and results.`,
    },
  ],
  metals: [
    {
      img: Shares,
      title: 'Secure Metals Trading',
      desc: `Invest in gold, silver, platinum, and palladium with secure, transparent pricing and instant execution. Metals are renowned safe-haven assets, providing stability during market volatility and inflation. Our platform enables you to diversify your portfolio and hedge against risk with flexible lot sizes and competitive margins.`,
    },
    {
      img: bg1Img,
      title: 'Expert Insights & Service',
      desc: `Access real-time price feeds, historical data, and expert market analysis. Enjoy seamless deposits and withdrawals, plus multilingual support. Whether you’re seeking long-term value or short-term opportunities, our metals trading solutions are designed for every investor.`,
    },
  ],
  shares: [
    {
      img: Indices,
      title: 'Global Equity Access',
      desc: `Access global equity markets including NYSE, NASDAQ, and LSE, and invest in leading companies with fractional share trading. Benefit from low minimums, flexible lot sizes, and instant order execution. Our platform provides real-time market data, news, and analytics to keep you ahead of trends.`,
    },
    {
      img: bg1Img,
      title: 'Portfolio Management & Support',
      desc: `Manage your portfolio with advanced tools and risk controls, and enjoy transparent pricing with no hidden fees. Whether you’re building wealth or trading actively, our support team is here 24/7 to assist you. Join a community of investors who value innovation, security, and growth.`,
    },
  ],
  indices: [
    {
      img: Commodities,
      title: 'Diversified Index Trading',
      desc: `Trade major global indices like S&P 500, Dow Jones, FTSE, and DAX with competitive conditions and fast execution. Indices offer instant diversification, allowing you to balance your investments across entire markets. Our platform features real-time pricing, advanced charting, and portfolio management tools.`,
    },
    {
      img: bg1Img,
      title: 'Risk Management & Service',
      desc: `Benefit from low transaction costs, flexible leverage, and robust risk management. Stay informed with market news and expert analysis, and access your account anytime, anywhere. Our dedicated support ensures your trading experience is smooth and successful.`,
    },
  ],
  commodities: [
    {
      img: Metals,
      title: 'Comprehensive Commodity Markets',
      desc: `Trade a wide range of commodities including energy, agricultural, and industrial products such as oil, natural gas, wheat, and copper. Our platform offers transparent pricing, low transaction costs, and instant execution. Utilize leverage and hedging strategies to maximize returns and manage risk effectively.`,
    },
    {
      img: bg1Img,
      title: 'Data, Insights & Support',
      desc: `Access real-time market data, historical trends, and expert insights to inform your trades. Enjoy seamless account management, fast deposits and withdrawals, and multilingual support. Whether you’re a hedger or a speculator, our commodity trading solutions are built for your success.`,
    },
  ],
}

const Features = ({ id }) => {
  const sections = productFeatures[id] || []

  return (
    <div className="mt-8 mb-4">
      <Container>
        <div className="inner-container-medium text-center mb-4 mb-sm-7">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">
            {id ? `${id.charAt(0).toUpperCase() + id.slice(1)}` : ' Features'}
          </span>
          <h2 className="mb-0 mt-3">{id ? `Why Trade ${id.charAt(0).toUpperCase() + id.slice(1)} With Us?` : 'The heart of our solution'}</h2>
        </div>
        <Row className="justify-content-center">
          <Col lg={12} className=" mt-4 ">
            {sections.map((section, idx) => (
              <Row className="g-4 align-items-center mb-6" key={idx}>
                {/* Image Column */}
                <Col md={6} className={idx % 2 === 0 ? 'pe-md-7' : 'order-md-2 ps-md-7'}>
                  <Image alt={section.title} src={section.img} style={{ maxHeight: '300px' }} />
                </Col>

                {/* Text Column */}
                <Col md={6} className={idx % 2 === 0 ? '' : 'order-md-1'}>
                  <h3 className="mb-4">{section.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{section.desc}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features
