import { Card, CardBody, Col, Dropdown, DropdownToggle, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { getActiveClass } from '@/helpers/menu'
import { FaAngleDown } from 'react-icons/fa6'
import portfolioList1Img from '@/assets/images/portfolio/list/01.jpg'
import portfolioImg from '@//assets/images/bg/NavImg.png'
import portfolioList2Img from '@/assets/images/portfolio/list/02.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'
const PortfolioMenuDropdown = ({ menuItems, activeMenuItems }) => {
  return (
    <Dropdown className="nav-item dropdown">
      <DropdownToggle
        as={Link}
        href=""
        variant="link"
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, 'portfolio')}`}
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Platforms
        <FaAngleDown size={12} className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu dropdown-menu-center dropdown-menu-size-md p-3">
        {/* <Row className="g-xl-3">
          <Col xl={12} className="d-none d-xl-block"> */}
        {/* <div className="d-flex gap-4"> */}
        <Card className="bg-transparent">
          <Image src={portfolioImg} className="card-img" alt="" />
          <CardBody className="px-0 text-start pb-0">
            <h6>
              <Link href="">BubblesX</Link>
            </h6>
            <p className="mb-2 small">Level up with our platform, unlock the golden grow!</p>
            <Link href={`${DEFAULT_PAGE_PREFIX}auth/register`} className="icon-link icon-link-hover stretched-link mb-0">
              Get started
              <BsArrowRight />
            </Link>
          </CardBody>
        </Card>
        {/* <Card className="bg-transparent">
                <Image src={portfolioList2Img} className="card-img" alt="" />
                <CardBody className="px-0 text-start pb-0">
                  <h6>
                    <Link href="">Brushstrokes and Beyond</Link>
                  </h6>
                  <p className="mb-2 small">We help our customers better manage their web presence.</p>
                  <Link href="/portfolio/case-study/v2" className="icon-link icon-link-hover stretched-link mb-0">
                    Learn more
                    <BsArrowRight />
                  </Link>
                </CardBody>
              </Card> */}
        {/* </div>
          </Col>
        </Row> */}
      </div>
    </Dropdown>
  )
}
export default PortfolioMenuDropdown
