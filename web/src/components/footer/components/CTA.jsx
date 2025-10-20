import ctaVector from '@/assets/images/elements/cta-vector.svg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import appStore from '@/assets/images/elements/app-store.svg'
import placeholderImg6Old from '@/assets/images/mokeup/app-placeholder6.jpg'
import placeholderImg6 from '@/assets/images/new/iphoneRect.png'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
const CTA = () => {
  return (
    <div className="bg-light rounded position-relative overflow-hidden p-4 p-sm-6 mb-6 ">
      <div className="position-absolute end-0 bottom-0 me-5">
        <Image src={ctaVector} className="h-200px" alt="vector-img" width={163} height={200} />
      </div>

      <Row className="g-4">
        <Col lg={5}>
          <h2 className="mb-4">Trade Anywhere, Anytime</h2>
          <p className="mb-4">
            Take control of your financial future with our powerful trading app. Access global markets, manage your portfolio, and execute trades in
            real time—right from your phone or desktop.
          </p>

          <Row className="g-4 mb-4 mb-lg-0">
            <Col sm={4} xs={6}>
              <Link href="">
                <Image src={googlePlay} className="btn-transition" alt="google-play" />
              </Link>
            </Col>

            <Col sm={4} xs={6}>
              <Link href="">
                <Image src={appStore} className="btn-transition" alt="app-store" />
              </Link>
            </Col>
          </Row>
        </Col>

        <Col lg={5} className="d-flex justify-content-center justify-content-lg-end">
          <div
            className="iphone-x iphone-x-small mx-auto m-0 mb-n9"
            style={{
              background: `url(${placeholderImg6.src})`,
              backgroundSize: '100%',
              width: '280px',
              height: '430px',
            }}>
            <i></i>
            <b
              style={{
                left: '6%',
              }}></b>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default CTA
