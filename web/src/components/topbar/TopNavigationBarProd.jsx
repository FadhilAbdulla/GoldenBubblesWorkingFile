'use client'

import LogoBox from '@/components/LogoBox'
import AppMenu from '@/components/topbar/AppMenu/page'
import StickyHeader from '@/components/topbar/AppMenu/StickyHeader'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'
import { Suspense } from 'react'
import { Button, Container } from 'react-bootstrap'
import { BsPersonFill } from 'react-icons/bs' // Use a filled icon for modern look
import FloatingSearch from './FloatingSearch'
import SearchInput from './SearchInput'
import ShoppingCartOffcanvas from './ShoppingCartOffcanvas'
import ThemeToggleDropdown from './ThemeToggleDropdown'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'
const TopNavigationBarProd = ({
  showBuyNow,
  showSignUp,
  showSearchInput,
  showShoppingCart,
  navClassName,
  hideThemeToggler,
  darkButton,
  showFloatingSearch,
  menuProps,
  containerFluid,
  children,
  ...props
}) => {
  const { isTrue: isMenuOpen, toggle: toggleMenu } = useToggle(window.innerWidth >= 1200)
  return (
    <StickyHeader className="header-absolute" {...props}>
      {children}
      <nav className={`navbar navbar-expand-xl ${navClassName ?? ''}`}>
        <Container fluid={containerFluid}>
          <LogoBox className="me-0" />

          <Suspense>
            <AppMenu mobileMenuOpen={isMenuOpen} {...menuProps} />
          </Suspense>

          <ul className="nav align-items-center ms-sm-2">
            {/* <Suspense>{!hideThemeToggler && <ThemeToggleDropdown />}</Suspense> */}

            <li className="nav-item me-2 d-none d-sm-block">
              <Link
                href={`${DEFAULT_PAGE_PREFIX}auth/login`}
                className="btn btn-sm mb-0 d-flex align-items-center btn-light"
                style={{
                  // border: '1px solid grey',
                  marginTop: '1px',
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  minHeight: 38,
                  padding: '0 18px',
                  letterSpacing: '0.01em',
                  transition: 'background 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                {/* <BsPersonFill className="me-1" size={18} /> */}
                <span style={{ position: 'relative', zIndex: 1 }}>Login</span>
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-60%',
                    width: '40%',
                    height: '100%',
                    transform: 'skewX(-20deg)',
                    animation: 'shineLogin 2.5s infinite linear',
                    pointerEvents: 'none',
                    filter: 'blur(1px)',
                    opacity: 0.5,
                  }}
                />
                <style jsx>{`
                  @keyframes shineLogin {
                    0% {
                      left: -60%;
                    }
                    100% {
                      left: 120%;
                    }
                  }
                `}</style>
              </Link>
            </li>

            <li className="nav-item d-none d-sm-block">
              <Link
                href={`${DEFAULT_PAGE_PREFIX}auth/register`}
                className="btn btn-sm mb-0 d-flex align-items-center"
                style={{
                  background: 'linear-gradient(90deg, #FFD700 0%, #FFEA70 40%, #FFC300 70%, #B6862C 100%)',
                  color: '#222',
                  border: '1px solid #FFD700',
                  fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(255, 215, 0, 0.18), 0 1.5px 6px rgba(0,0,0,0.10)',
                  minHeight: 38,
                  padding: '0 18px',
                  letterSpacing: '0.02em',
                  textShadow: '0 1px 6px rgba(255,255,255,0.25)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.2s',
                }}>
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-75%',
                    width: '60%',
                    height: '100%',
                    background: 'linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 100%)',
                    transform: 'skewX(-20deg)',
                    animation: 'shine 2s infinite linear',
                    pointerEvents: 'none',
                    filter: 'blur(1px)',
                    opacity: 0.7,
                  }}
                />
                <span style={{ position: 'relative', zIndex: 1 }}>Start Trading</span>
                <style jsx>{`
                  @keyframes shine {
                    0% {
                      left: -75%;
                    }
                    100% {
                      left: 125%;
                    }
                  }
                `}</style>
              </Link>
            </li>

            {showFloatingSearch && (
              <Suspense>
                <FloatingSearch />
              </Suspense>
            )}

            {darkButton && (
              <li className="nav-item d-none d-sm-block ms-2">
                <Button variant="dark" size={darkButton.size} className="btn mb-0">
                  {darkButton.text}
                </Button>
              </li>
            )}

            {showSearchInput && (
              <Suspense>
                <SearchInput />
              </Suspense>
            )}

            {showShoppingCart && (
              <Suspense>
                <ShoppingCartOffcanvas />
              </Suspense>
            )}

            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>
          </ul>
        </Container>
      </nav>
    </StickyHeader>
  )
}
export default TopNavigationBarProd
