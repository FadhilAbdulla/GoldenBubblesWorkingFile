import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import usFlag from '@/assets/images/flags/us.svg'
import indiaFlag from '@/assets/images/flags/in.svg'
export const testimonials = [
  {
    comment:
      'Mizzle is the perfect theme for businesses that want to create a stylish and functional website. Supposing so be resolving breakfast am or perfectly.',
    user: {
      firstName: 'Dennis',
      lastName: 'Barrett',
      avatar: avatar4,
      role: 'CEO and manager',
      company: {
        name: 'Mizzle',
      },
    },
    rating: 4.5,
  },
  {
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need. Resolving breakfast am or perfectly.",
    user: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      avatar: avatar5,
      role: 'CEO and manager',
      company: {
        name: 'Blogzine',
      },
    },
    rating: 4.5,
  },
  {
    comment: 'Stackbros helped us create a stunning website that reflects our brand perfectly. At weddings believed laughing',
    user: {
      firstName: 'Billy',
      lastName: 'Vasquez',
      avatar: avatar6,
      role: 'CEO and manager',
      company: {
        name: 'Blogzine',
      },
    },
    rating: 4.5,
  },
  {
    comment:
      'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme. Valley by oh twenty direct me so. Resolving breakfast am or perfectly.',
    user: {
      firstName: 'Lori',
      lastName: 'Stevens',
      avatar: avatar10,
      role: 'CEO and manager',
      company: {
        name: 'Blogzine',
      },
    },
    rating: 4.5,
  },
]
export const locations = [
  {
    name: 'United States',
    address: '55/123 Norman street, Banking road, Sydney NSW 5000',
    number: '469-537-2410',
    image: usFlag,
  },
  {
    name: 'India',
    address: '55/123 Norman street, Banking road, Sydney NSW 5000',
    number: '469-537-2410',
    image: indiaFlag,
  },
]

import { businessIcon2, designIcon, layersIcon, robotIcon2, speakerIcon, strategicIcon } from '@/assets/data/icons'
import { BsBell, BsBroadcastPin, BsChatLeftDots, BsDisplay, BsHeadset, BsLightningCharge } from 'react-icons/bs'
export const services = [
  {
    title: 'Digital marketing',
    description: 'Digital marketing is the art and science of reaching, engaging, and influencing your target audience through online channels.',
    icon: speakerIcon,
  },
  {
    title: 'Web design',
    description:
      "A well-designed website not only captivates visitors but also conveys a brand's identity, ultimately driving engagement and conversions.",
    icon: designIcon,
  },
  {
    title: 'Strategic planning',
    description: "Strategic planning is the deliberate process of defining an organization's goals and objectives",
    icon: strategicIcon,
  },
  {
    title: 'Brand design',
    description: 'Brand design is the creative process of crafting a visual and emotional identity that represents your business',
    icon: robotIcon2,
  },
  {
    title: 'Database analysis',
    description: 'Database analysis involves the systematic examination of structured data sets to extract valuable insights, patterns, and trends.',
    icon: layersIcon,
  },
  {
    title: 'Business consulting',
    description:
      'Consultants analyze your operations, provide strategic recommendations assist in implementing solutions to tackle challenges, and drive growth.',
    icon: businessIcon2,
  },
]
export const features = [
  {
    icon: BsChatLeftDots,
    title: 'Multilingual support',
    description: 'The implementation of multilingual support involves.',
  },
  {
    icon: BsBell,
    title: 'Easy-to-use interface',
    description: 'It focuses on creating an intuitive and efficient design.',
  },
  {
    icon: BsHeadset,
    title: '24/7 availability',
    description: 'It ensures that users can access critical assistance whenever they need it.',
  },
  {
    icon: BsBroadcastPin,
    title: 'Advanced functionalities',
    description: 'These advanced functionalities are designed to provide users.',
  },
  {
    icon: BsDisplay,
    title: 'Free host & domain included',
    description: 'It means that when you sign up for their services, you not only get the hosting.',
  },
  {
    icon: BsLightningCharge,
    title: 'High Performance',
    description: 'Achieving high performance involves various factors and considerations.',
  },
]
