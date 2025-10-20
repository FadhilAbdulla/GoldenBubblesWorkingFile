import { MEGA_MENU_ITEMS } from '@/assets/data/menu-items'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Dropdown, DropdownHeader, DropdownItem, DropdownToggle, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa6'

const MegaMenuDropdown = () => {
  return (
    <Dropdown as={'li'} className="nav-item dropdown">
      <DropdownToggle
        as={Link}
        href=""
        variant="link"
        className="nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle"
        id="megaMenu"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Products
        <FaAngleDown size={12} className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu py-2" aria-labelledby="megaMenu">
        <ul className="list-unstyled mb-0">
          <li>
            {MEGA_MENU_ITEMS.integration.map((item, idx) => (
              <Link
                key={idx}
                className="dropdown-item d-flex align-items-center bg-light-hover icon-link icon-link-hover py-2"
                href={`${DEFAULT_PAGE_PREFIX}product?r=${item.id}`}>
                <div style={{ minWidth: 32, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <Image src={item.logo} className="h-30px" alt="" style={{ objectFit: 'contain', width: 30, height: 30 }} />
                </div>
                <span className="heading-color fw-bold ms-2">{item.name}</span>
                <BsArrowRight className="bi ms-auto" />
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </Dropdown>
  )
}
export default MegaMenuDropdown
