import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPersonCheck, BsClockHistory, BsCpu, BsBarChart, BsLightningCharge, BsShieldCheck } from 'react-icons/bs'

export const FeatureCard = ({ feature }) => {
  const { description, icon, title } = feature
  const Icon = icon
  return (
    <Card className="card-body bg-transparent text-center p-0">
      <span className="h4 text-primary mb-2">
        <Icon />
      </span>
      <h6 className="mb-2">{title}</h6>
      <p className="mb-0">{description}</p>
    </Card>
  )
}

const Features = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2>Why Choose Us</h2>
          <p className="mb-0">
            Discover the advantages of trading with our platform—where innovation, reliability, and client success are at the core of every service we
            offer.
          </p>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 g-lg-6">
          {features.map((feature, idx) => (
            <Col key={idx}>
              <FeatureCard feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

const features = [
  {
    icon: BsPersonCheck,
    title: 'Lucrative Brokers Program',
    description:
      'Partner with us through our Introducing Brokers Program and benefit from industry-leading commission and rebate structures, designed to reward professionals and collaborators.',
  },
  {
    icon: BsClockHistory,
    title: 'Swift Funds Withdrawal',
    description:
      'Experience seamless and rapid fund withdrawals, processed within 24 hours to ensure your assets are always accessible when you need them.',
  },
  {
    icon: BsCpu,
    title: 'Cutting-Edge Trading Platform',
    description: 'Trade confidently on robust, state-of-the-art platforms engineered for stability, security, and real-time execution.',
  },
  {
    icon: BsBarChart,
    title: 'Comprehensive Product Range',
    description:
      'Access over 20,000 trading instruments, including Forex, Metals, Shares, Indices, and Commodities, for diversified investment opportunities.',
  },
  {
    icon: BsLightningCharge,
    title: 'Instant & Reliable Execution',
    description:
      'Benefit from zero commission trading, negative balance protection, and lightning-fast order execution with no rejections or restrictions.',
  },
  {
    icon: BsShieldCheck,
    title: 'Superior Financial Services',
    description: 'Enjoy multilingual 24/7 customer support and advanced solutions including free MAM, VPS, and API access for professional traders.',
  },
]
export default Features
