import Footerprod from '@/components/footer/Footerprod'
import React from 'react'
import FAQs from './component/FAQs'
import Testimonials from './component/Testimonials'
import About from './component/About'
import Hero from './component/Hero'
import TopNavigationBarProd from '@/components/topbar/TopNavigationBarProd'
import Features from './component/Features'

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
        <About />
        <Features />
        {/* <Testimonials /> */}
        {/* <Location /> */}
        <FAQs />
      </main>

      <Footerprod />
    </>
  )
}
export default page
