import { getActiveClass } from '@/helpers/menu'
import Link from 'next/link'
import { Fragment } from 'react'
import { Dropdown, DropdownItem, DropdownToggle } from 'react-bootstrap'
import { BsCardText, BsLifePreserver } from 'react-icons/bs'
import { FaAngleDown, FaChevronRight } from 'react-icons/fa6'
const MenuItemWithChildren = ({ item, itemClassName, linkClassName, activeMenuItems }) => {
  return (
    <Dropdown className={itemClassName}>
      <DropdownToggle variant="link" className={linkClassName} data-bs-toggle="dropdown" aria-haspopup="true">
        {item.label}
        <FaChevronRight size={12} />
      </DropdownToggle>
      <div className="dropdown-menu" data-bs-popper="static">
        {(item.children || []).map((child, idx) => (
          <Fragment key={idx + child.key + idx}>
            {child.children ? (
              <MenuItemWithChildren
                item={child}
                activeMenuItems={activeMenuItems}
                itemClassName="dropdown dropend"
                linkClassName={`nav-link dropdown-link d-flex justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, child.key)}`}
              />
            ) : (
              <MenuItem item={child} linkClassName={`dropdown-item${getActiveClass(activeMenuItems, child.key)}`} activeMenuItems={activeMenuItems} />
            )}
          </Fragment>
        ))}
      </div>
    </Dropdown>
  )
}
const MenuItem = ({ item, linkClassName }) => {
  return (
    <li>
      <DropdownItem as={Link} className={linkClassName} target={item.target} href={item.url ?? ''}>
        {item.label}
        {item.badge && <span className="badge text-bg-primary ms-2">{item.badge}</span>}
      </DropdownItem>
    </li>
  )
}
const PagesMenuDropdown = ({ menuItems, activeMenuItems }) => {
  return (
    <Dropdown className="nav-item dropdown">
      <DropdownToggle
        as={Link}
        href=""
        variant="link"
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, 'pages')}`}
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-haspopup="true"
        aria-expanded="false">
        About
        <FaAngleDown size={12} className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu" data-bs-popper="static">
        {(menuItems ?? []).map((item, idx) => {
          return (
            <Fragment key={item.key + idx}>
              {item.children ? (
                <MenuItemWithChildren
                  item={item}
                  activeMenuItems={activeMenuItems}
                  itemClassName="dropdown dropend"
                  linkClassName={`nav-link dropdown-link arrow-none d-flex justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, item.key)}`}
                />
              ) : (
                <MenuItem item={item} linkClassName={`dropdown-item${getActiveClass(activeMenuItems, item.key)}`} activeMenuItems={activeMenuItems} />
              )}
            </Fragment>
          )
        })}

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" href="https://1.envato.market/stackbros-portfolio">
            <BsLifePreserver className="me-2" />
            Support
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" href="https://themes.stackbros.in/mizzle-nextjs/docs" target="_blank">
            <BsCardText className="me-2" />
            Documentation
          </Link>
        </li>
      </div>
    </Dropdown>
  )
}
export default PagesMenuDropdown
