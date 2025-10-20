import serviceImg1 from '@/assets/images/services/4by3/01.jpg'
import serviceImg2 from '@/assets/images/services/4by3/02.jpg'
import serviceImg3 from '@/assets/images/services/4by3/03.jpg'
import serviceImg4 from '@/assets/images/services/4by3/04.jpg'
import serviceImg5 from '@/assets/images/services/4by3/05.jpg'
import serviceImg6 from '@/assets/images/services/4by3/06.jpg'
import project1 from '@/assets/images/portfolio/list/02.jpg'
import project2 from '@/assets/images/portfolio/list/03.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import blogImg3 from '@/assets/images/blog/4by3/03.jpg'
import blogImg7 from '@/assets/images/blog/4by3/07.jpg'
import blogImg8 from '@/assets/images/blog/4by3/08.jpg'
import { BsBullseye, BsHeadset, BsRocketTakeoff, BsSearch, BsCheckCircleFill } from 'react-icons/bs'

export const services = [
  {
    title: 'Custom Software Development',
    description: 'We prioritize user experience, scalability, and security to ensure your...',
    image: serviceImg1,
    url: '/services/single',
  },
  {
    title: 'Web Design and Development',
    description: 'From responsive websites to e-commerce platforms.',
    image: serviceImg2,
    url: '/services/single',
  },
  {
    title: 'Digital Marketing Strategies',
    description: 'Reach your target drive results with our comprehensive digital marketing.',
    image: serviceImg3,
    url: '/services/single',
  },
  {
    title: 'Custom Software Development',
    description: 'We prioritize user experience, scalability, and security to ensure your...',
    image: serviceImg1,
    url: '/services/single',
  },
  {
    title: 'Web Design and Development',
    description: 'From responsive websites to e-commerce platforms.',
    image: serviceImg2,
    url: '/services/single',
  },
  {
    title: 'Digital Marketing Strategies',
    description: 'Reach your target drive results with our comprehensive digital marketing.',
    image: serviceImg3,
    url: '/services/single',
  },
  {
    title: 'Custom Software Development',
    description: 'We prioritize user experience, scalability, and security to ensure your...',
    image: serviceImg1,
    url: '/services/single',
  },
  {
    title: 'Web Design and Development',
    description: 'From responsive websites to e-commerce platforms.',
    image: serviceImg2,
    url: '/services/single',
  },
  {
    title: 'Digital Marketing Strategies',
    description: 'Reach your target drive results with our comprehensive digital marketing.',
    image: serviceImg3,
    url: '/services/single',
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Protect your business from cyber threats with our cybersecurity solutions.',
    image: serviceImg4,
    url: '/services/single',
  },
  {
    title: 'IT Consulting and Support',
    description: 'Leverage our expertise to optimize your IT infrastructure and operations.',
    image: serviceImg5,
    url: '/services/single',
  },
  {
    title: 'UI/UX Design Services',
    description: 'Enhance user satisfaction and engagement with our services.',
    image: serviceImg6,
    url: '/services/single',
  },
]
export const steps = [
  {
    title: 'Discovery and Consultation',
    description: 'We begin by getting to know your unique requirements, goals, and challenges.',
    icon: BsSearch,
  },
  {
    title: 'Planning and Strategy',
    description: 'We define project milestones and deliverables to keep the process on track.',
    icon: BsBullseye,
  },
  {
    title: 'Deployment and Launch',
    description: 'We ensure a smooth transition to the live, providing support every step of the way.',
    icon: BsRocketTakeoff,
  },
  {
    title: 'Support and Maintenance',
    description: 'We offer ongoing support and maintenance services to keep your software running.',
    icon: BsHeadset,
  },
]
export const projects = [
  {
    name: 'Website optimization for techWave',
    category: 'Graphic design',
    image: project1,
    url: '/portfolio/case-study/v2',
  },
  {
    name: 'Transforming ideas into reality',
    category: 'UI/UX design',
    image: project2,
    url: '/portfolio/case-study/v2',
  },
]
export const statData = [
  {
    title: 'Worldwide client',
    stat: 30,
    prefix: '>',
    suffix: 'K',
  },
  {
    title: 'Analyze business reports',
    stat: 99,
    suffix: '%',
  },
  {
    title: 'Worldwide projects',
    stat: 350,
    suffix: '+',
  },
]
export const testimonials = [
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 5,
    user: {
      firstName: 'Louis',
      lastName: 'Ferguson',
      role: 'Web Developer',
      avatar: avatar4,
    },
  },
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 4.5,
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      role: 'Co-Founder',
      avatar: avatar5,
    },
  },
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 4.5,
    user: {
      firstName: 'Samuel',
      lastName: 'Bishop',
      role: 'Product designer',
      avatar: avatar6,
    },
  },
]
export const blogs = [
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    category: 'Technology',
    publishedAt: {
      date: 15,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    image: blogImg3,
    url: '/blog/single/v2',
  },
  {
    title: 'Mastering HTML Website Templates - Unleash Your Creativity with Bootstrap',
    category: 'Research',
    publishedAt: {
      date: 12,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    image: blogImg8,
    url: '/blog/single/v2',
  },
  {
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    category: 'Design',
    publishedAt: {
      date: 8,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar9,
      firstName: 'Allen',
      lastName: 'Smith',
    },
    image: blogImg7,
    url: '/blog/single/v2',
  },
]

export const pricingData = [
  {
    title: 'Basic Plan',
    price: 25,
    features: [
      {
        icon: BsCheckCircleFill,
        title: 'Access to basic feature',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Basic reporting and analytics',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Up to 10 individual users',
      },
      {
        icon: BsCheckCircleFill,
        title: '20GB individual data each year',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Basic chat and email support',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Ongoing best practices and reviews',
      },
    ],
  },
  {
    title: 'Business Plan',
    isPopular: true,
    price: 50,
    features: [
      {
        icon: BsCheckCircleFill,
        title: '200+ integrations',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Basic reporting and analytics',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Up to 10 individual users',
      },
      {
        icon: BsCheckCircleFill,
        title: '40GB individual data each year',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Prioritychat and email support',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Ongoing best practices and reviews',
      },
    ],
  },
  {
    title: 'Enterprise Plan',
    price: 85,
    features: [
      {
        icon: BsCheckCircleFill,
        title: 'Advanced custom field',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Audit log and data history',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Ultimate individual users',
      },
      {
        icon: BsCheckCircleFill,
        title: '60GB individual data each year',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Basic chat and email support',
      },
      {
        icon: BsCheckCircleFill,
        title: 'Ongoing best practices and reviews',
      },
    ],
  },
]
