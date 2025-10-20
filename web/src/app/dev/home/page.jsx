import TopNavigationBarProd from '@/components/topbar/TopNavigationBarProd'
import Hero from './components/Hero'
import Features from './components/Features'
import Features2 from './components/Features2'
import Pricing from './components/Pricing'
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
      <Features />
      <Features2 />
      <Pricing />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <DigitalJourney /> */}
      {/* <Steps /> */}
      {/* <TourVideo /> */}
      {/* <Projects /> */}
      {/* <Statistics /> */}
      {/* <Testimonials /> */}
      {/* <CTA /> */}
      {/* <Blogs /> */}
    </main>

    <Footerprod />
  </>
)
export default page
