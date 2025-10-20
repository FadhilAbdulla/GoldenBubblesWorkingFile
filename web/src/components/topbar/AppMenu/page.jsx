import { Suspense, useCallback, useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { findAllParent, findMenuItem, getAppMenuItems, getMenuItemFromURL } from '@/helpers/menu'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'
const DemosMenuDropdown = dynamic(() => import('./DemosMenuDropdown'))
const PagesMenuDropdown = dynamic(() => import('./PagesMenuDropdown'))
const ResourcesMenuDropdown = dynamic(() => import('./ResourcesMenuDropdown'))
const PortfolioMenuDropdown = dynamic(() => import('./PortfolioMenuDropdown'))
const MegaMenuDropdown = dynamic(() => import('./MegaMenuDropdown'))
const loading = () => <div></div>
const AppMenu = ({ mobileMenuOpen, ulClassName, showMegaMenu, showResourceMenu, showContactUs, showDocs }) => {
  const pathname = usePathname()
  const [activeMenuItems, setActiveMenuItems] = useState([])
  const menuItems = getAppMenuItems()
  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    // const trimmedURL = pathname?.replaceAll(basePath !== '' ? basePath : '', '/')

    const trimmedURL = pathname?.replaceAll('', '')
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)
    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)])
      }
    }
  }, [pathname, menuItems])
  useEffect(() => {
    activeMenu()
  }, [pathname, menuItems])
  return (
    <Collapse in={mobileMenuOpen} className="navbar-collapse">
      <div>
        <ul className={`navbar-nav navbar-nav-scroll ${ulClassName ?? ''}`}>
          <li className="nav-item">
            <Link className="nav-link" href={`${DEFAULT_PAGE_PREFIX}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={`${DEFAULT_PAGE_PREFIX}about`}>
              About
            </Link>
          </li>

          <Suspense fallback={loading()}>
            <MegaMenuDropdown />
          </Suspense>

          {/* <Suspense fallback={loading()}>
            <DemosMenuDropdown menuItems={menuItems[0].children} activeMenuItems={activeMenuItems} />
          </Suspense> */}

          {/* <Suspense fallback={loading()}>
            <PagesMenuDropdown menuItems={menuItems[1].children} activeMenuItems={activeMenuItems} />
          </Suspense> */}

          {/* {showResourceMenu && (
            <Suspense fallback={loading()}>
              <ResourcesMenuDropdown />
            </Suspense>
          )} */}

          <Suspense fallback={loading()}>
            <PortfolioMenuDropdown menuItems={menuItems[2].children} activeMenuItems={activeMenuItems} />
          </Suspense>

          <li className="nav-item">
            <Link className="nav-link" href={`${DEFAULT_PAGE_PREFIX}contact`}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item d-block d-sm-none">
            <Link className="nav-link" href={`${DEFAULT_PAGE_PREFIX}auth/login`}>
              Login
            </Link>
          </li>
          <li className="nav-item d-block d-sm-none ">
            <Link className="nav-link text-primary" href={`${DEFAULT_PAGE_PREFIX}auth/register`}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </Collapse>
  )
}
export default AppMenu
