import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { BsCheckCircleFill } from 'react-icons/bs'

const HEADER_HEIGHT = 120 // Adjust as needed for your design

const PricingCard = ({ plan }) => {
  return (
    <Card className="card-body border rounded p-md-4" data-bs-theme="dark">
      <div style={{ minHeight: HEADER_HEIGHT }}>
        <h6 className="mb-2 text-primary">{plan.name}</h6>
        <span>{plan.desc}</span>
      </div>
      <hr />
      <ul className="list-group list-group-borderless border-0 mb-0 ">
        {plan.points.map((feature, idx) => (
          <li className="list-group-item d-flex mb-0 icons-center" key={idx}>
            <BsCheckCircleFill className="text-primary me-2" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}
export default PricingCard
