import TopNavigationBarProd from '@/components/topbar/TopNavigationBarProd'
import Hero from './components/Hero'
import React from 'react'
import Footerprod from '@/components/footer/Footerprod'

const page = () => (
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
    </main>
    <Footerprod />
  </>
)
export default page
