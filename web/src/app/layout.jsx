import '@/assets/scss/style.scss'
import BackToTop from '@/components/BackToTop'
import PageWrapper from '@/components/PageWrapper'
import { DEFAULT_PAGE_TITLE } from '@/states/constants'
import { Instrument_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const Instrument = Instrument_Sans({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
export const metadata = {
  title: {
    template: 'Golden Bubbles - %s',
    default: DEFAULT_PAGE_TITLE,
  },
  description: 'Bubbles of Opportunity, Profits in Gold!',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Instrument.className}>
        <PageWrapper>
          {children}
          <BackToTop />
        </PageWrapper>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
