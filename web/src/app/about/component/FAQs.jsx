import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from 'react-bootstrap'
import mapImg from '@/assets/images/elements/map.svg'

const faqs = [
  {
    question: 'What markets can I trade with Golden Bubbles?',
    answer:
      'Golden Bubbles offers access to a wide range of global markets, including Forex, Metals, Shares, Indices, and Commodities. Our platform is designed for both new and experienced traders.',
  },
  {
    question: 'How do I fund my trading account?',
    answer:
      'You can fund your account using multiple secure methods, such as Visa, Mastercard, and bank transfers. All deposits are processed quickly to ensure seamless trading.',
  },
  {
    question: 'Is customer support available 24/7?',
    answer: 'Yes, our multilingual support team is available 24/7 to assist you with any trading, technical, or account-related queries.',
  },
  {
    question: 'How secure is my investment with Golden Bubbles?',
    answer:
      'We prioritize the safety of your funds with robust regulatory compliance, advanced security protocols, and transparent operations. Your investment is protected at every step.',
  },
  {
    question: 'How long does it take to withdraw funds?',
    answer: 'Withdrawals are processed within 24 hours, ensuring you have timely access to your funds whenever you need them.',
  },
]
const FAQs = () => {
  return (
    <section className="pt-0 pb-0">
      <Container
        // className="inner-container"
        className="py-xl-8"
        style={{
          backgroundImage: `url(${mapImg.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
        <h3 className="text-center">Frequently Asked Questions</h3>

        <div className="inner-container">
          <Accordion className="accordion-icon accordion-border-bottom mt-5" defaultActiveKey="0">
            {faqs.map((item, idx) => (
              <AccordionItem className="mb-3" key={idx} eventKey={idx.toString()}>
                <AccordionHeader as={'p'} className="font-base">
                  <span className="fw-bold">{item.question}</span>
                </AccordionHeader>

                <AccordionBody>{item.answer}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
export default FAQs
