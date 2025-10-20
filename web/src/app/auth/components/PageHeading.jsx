import LogoBox from '@/components/LogoBox'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'
import Link from 'next/link'
const PageHeading = ({ heading, subHeading }) => {
  return (
    <>
      <Link href={`${DEFAULT_PAGE_PREFIX}`}>
        <LogoBox className="h-50px mb-4" smallIcon />
      </Link>
      <h3 className="mb-0">{heading}</h3>
      <p className="mb-0">{subHeading}</p>
    </>
  )
}
export default PageHeading
