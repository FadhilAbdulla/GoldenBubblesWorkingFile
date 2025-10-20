import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsHeadset, BsBarChartLine, BsCreditCard2Back, BsShieldCheck } from 'react-icons/bs'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'

const aboutCards = [
  {
    icon: <BsHeadset size={32} />,
    title: '24/7 Expert Support',
    desc: 'Multilingual assistance and operational support.',
  },
  {
    icon: <BsBarChartLine size={32} />,
    title: 'Market Insights',
    desc: 'Real-time news and analysis for smarter trading decisions.',
  },
  {
    icon: <BsCreditCard2Back size={32} />,
    title: 'Flexible Funding',
    desc: 'Multiple deposit options for seamless account management.',
  },
  {
    icon: <BsShieldCheck size={32} />,
    title: 'Regulatory Assurance',
    desc: 'Secure and compliant trading environment.',
  },
]

const About = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <Row className="g-xl-4">
              {aboutCards.map((card, idx) => (
                <Col md={6} key={idx}>
                  <Card className="card-body bg-light p-4  d-flex flex-column align-items-start">
                    <figure className="text-primary mb-3 flex-shrink-0">{card.icon}</figure>
                    <h6 className="fw-bold">{card.title}</h6>
                    <p className="mb-0">{card.desc}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={6} className="ps-xl-7 ">
            <h2 className="mb-4">Our Edge</h2>
            <p>
              Golden Bubbles is a leading global trading company, committed to empowering investors and partners with innovative financial solutions.
              Our mission is to deliver secure, transparent, and efficient trading experiences for clients worldwide.
            </p>
            <p>
              With a team of seasoned professionals and multilingual support, we provide access to a wide range of markets, advanced trading
              platforms, and educational resources. Our robust infrastructure ensures fast account setup, flexible funding, and regulatory assurance.
            </p>
            <p className="mb-4">
              At Golden Bubbles, we believe in building lasting relationships through integrity, expertise, and client success. Join us and experience
              the future of trading.
            </p>
            <Link className="icon-link icon-link-hover" href={`${DEFAULT_PAGE_PREFIX}auth/register`}>
              Start Your Trading Journey
              <BsArrowRight className="bi" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default About
