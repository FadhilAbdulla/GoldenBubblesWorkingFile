import React from 'react'
import Hero from './components/Hero'
import Work from './components/Work'
import OfficeLocation from './components/OfficeLocation'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBarProd from '@/components/topbar/TopNavigationBarProd'
import Footerprod from '@/components/footer/Footerprod'

const page = () => {
  return (
    <>
      <TopNavigationBarProd
        showSignUp
        showBuyNow
        menuProps={{
          showContactUs: true,
          showResourceMenu: true,
          ulClassName: 'mx-auto',
        }}
      />
      <main>
        <Hero />
        {/* <Work /> */}
        {/* <OfficeLocation /> */}
      </main>
      <Footerprod />
    </>
  )
}
export default page
