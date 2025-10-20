import { BsEnvelope, BsFileEarmarkTextFill, BsGeoAlt, BsPuzzleFill, BsStickiesFill, BsTelephone } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6'
import flagUK from '@/assets/images/flags/uk.svg'
import flagGR from '@/assets/images/flags/gr.svg'
import flagSP from '@/assets/images/flags/sp.svg'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'

export const quickLinks = [
  {
    name: 'Home',
    link: `${DEFAULT_PAGE_PREFIX}`,
  },
  {
    name: 'About',
    link: `${DEFAULT_PAGE_PREFIX}about`,
  },
  {
    name: 'Products',
    link: `${DEFAULT_PAGE_PREFIX}product`,
  },
  {
    name: 'Contact Us',
    link: `${DEFAULT_PAGE_PREFIX}contact`,
    // badge: '2 Job',
  },
  {
    name: 'Register Now',
    link: `${DEFAULT_PAGE_PREFIX}auth/register`,
  },
]

export const quickLinks2 = [
  {
    name: 'About us',
    link: '/about/v1',
  },
  {
    name: 'Contact us',
    link: '/contact/v1',
  },
  {
    name: 'Services',
    link: '/services/v1',
  },
  {
    name: 'Career',
    link: '/career',
    badge: '2 Job',
  },
  {
    name: 'Career detail',
    link: '/career/single',
  },
  {
    name: 'Case studies',
    link: '/portfolio/showcase',
  },
  {
    name: 'Team',
    link: '/team',
  },
]
export const quickLinks3 = [
  {
    name: 'About us',
    link: '/about/v1',
  },
  {
    name: 'Contact us',
    link: '/contact/v1',
  },
  {
    name: 'Career',
    link: '/career',
  },
  {
    name: 'Career detail',
    link: '/career/single',
  },
  {
    name: 'Become a partner',
    link: '/contact/v1',
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
  {
    name: 'Cookie',
  },
]
export const quickLinks4 = [
  {
    name: 'Become a partner',
    link: '/contact/v1',
  },
  {
    name: 'Customer stories',
    link: '/customer/stories',
  },
  {
    name: 'Sign in',
    link: '/auth/sign-in',
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
]
export const communityLinks = [
  {
    name: 'Forex',
    link: `${DEFAULT_PAGE_PREFIX}product?r=forex`,
  },
  {
    name: 'Metals',
    link: `${DEFAULT_PAGE_PREFIX}product?r=metals`,
  },
  {
    name: 'Shares',
    link: `${DEFAULT_PAGE_PREFIX}product?r=shares`,
  },
  {
    name: 'Indices',
    link: `${DEFAULT_PAGE_PREFIX}product?r=indices`,
  },
  {
    name: 'Commodities',
    link: `${DEFAULT_PAGE_PREFIX}product?r=commodities`,
  },
]
export const communityLinks2 = [
  {
    title: 'Documentation',
    icon: BsFileEarmarkTextFill,
    variant: 'bg-warning',
  },
  {
    title: 'Snippets',
    icon: BsStickiesFill,
    variant: 'bg-success',
  },
  {
    title: 'Components',
    icon: BsPuzzleFill,
    variant: 'bg-info',
  },
]
export const socialMediaLinks = [
  {
    icon: FaFacebookF,
    iconClassName: 'bg-facebook',
  },
  {
    icon: FaInstagram,
    iconClassName: 'bg-instagram',
  },
  {
    icon: FaTwitter,
    iconClassName: 'bg-twitter',
  },
  {
    icon: FaLinkedinIn,
    iconClassName: 'bg-linkedin',
  },
  {
    icon: FaYoutube,
    iconClassName: 'bg-youtube',
  },
]
export const contactDetail = {
  address: '55/123 Norman street, Banking road.',
  contact: '469-537-2410',
  email: 'example@gmail.com',
  weekDays: 'Mon - Fri: 09:00 - 21:00',
  weekEnds: 'Sat - Sun: Closed',
}
export const contactDetails2 = [
  {
    title: 'Give us a call',
    icon: BsTelephone,
    description: contactDetail.contact,
  },
  {
    title: 'Send us an email',
    icon: BsEnvelope,
    description: contactDetail.email,
  },
  {
    title: 'Visit us in',
    icon: BsGeoAlt,
    description: contactDetail.address,
  },
]
export const translationLanguages = [
  {
    name: 'English',
    flag: flagUK,
  },
  {
    name: 'German',
    flag: flagGR,
  },
  {
    name: 'French',
    flag: flagSP,
  },
]
