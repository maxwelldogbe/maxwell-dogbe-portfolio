import heroImage from './assets/hero.png'
import projectOne from './assets/project-1.svg'
import projectTwo from './assets/project-2.svg'
import projectThree from './assets/project-3.svg'

export const personalInfo = {
  name: 'Maxwell Dogbe',
  title: 'Full Stack Developer and Brand Designer',
  position: 'Co-Founder, The Compel Tech',
  summary:
    'I build polished digital experiences across web, design, and growth. From product strategy to production-ready code, I deliver modern systems that feel intentional and perform reliably.',
  location: 'Accra, Ghana',
  email: 'dogbemaxwelldziedzorm@gmail.com',
  heroImage,
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maxwell-dogbe-80864b249' },
    // { label: 'Behance', href: 'https://www.behance.net' },
    { label: 'GitHub', href: 'https://github.com/maxwelldogbe' },
    { label: 'WhatsApp', href: 'https://wa.me/233201114026' },
  ],
  callNumber: '+233535859825',
}

export const experience = [
  {
    company: 'The Compel Tech',
    role: 'Software Engineer',
    duration: 'Present',
    achievements: [
      'Led end-to-end delivery of a multi-tenant platform, reducing onboarding time by 35%.',
      'Defined the UI system and design tokens used across our product lines.',
      'Collaborated with growth and sales teams to launch conversion-ready landing pages.',
    ],
  },
  {
    company: 'Brainartz',
    role: 'Graphic Designer',
    duration: 'Present',
    achievements: [
      'Built marketing and management system to coordinate work records and manage inventory using Django,React and relevant APIs.',
      'Setup proper system network architecture,and implemented security measures to protect against cyber threats.',
      'Mentored junior designers on responsive layout and accessibility practices.',
    ],
  },
  {
    company: 'Teleconic',
    role: 'Marketing Designer & Customer Support',
    duration: 'Present',
    achievements: [
      'Crafted brand promotion designs and videos. Optimizing the use of AI tools to create engaging content that resonates with our audience.',
      'Delivered social campaigns that lifted engagement by 22%.',
      'Respond to customer complaints and reports on system failures and hurdles.',
    ],
  },
]

export const projects = [
  {
    title: 'Brainartzgh Website',
    description:
      'A headless storefront with a bespoke checkout, inventory sync, and growth analytics.',
    tags: ['React', 'Node.js'],
    category: 'Full Stack',
    image: projectOne,
    demoLink: 'https://brainartzgh.com',
    // repoLink: 'https://github.com',
  },
  {
    title: 'Catalorga',
    description:
      'Web application to help vendors organise products in their catalog',
    tags: ['Branding', 'Market Place', 'Seamless payments'],
    category: 'Full Stack',
    image: projectTwo,
    demoLink: 'https://example.com',
    // repoLink: 'https://github.com',
  },
//   {
//     title: 'Pulse Campaign Sprint',
//     description:
//       'Growth campaign toolkit with landing pages, social assets, and KPI dashboards.',
//     tags: ['Marketing', 'HubSpot', 'Analytics'],
//     category: 'Marketing',
//     image: projectThree,
//     demoLink: 'https://example.com',
//     repoLink: 'https://github.com',
//   },
]

export const skills = [
  {
    categoryName: 'Engineering',
    skillsList: [
      'Python',
      'Django',
      'React',
      'Node.js',
      'Laravel',
      'REST APIs',
      'PostgreSQL',
    ],
  },
  {
    categoryName: 'Design',
    skillsList: ['Design Systems', 'Figma','Coreldraw','Adobe Photoshop', 'Webflow', 'Brand Identity', 'UX Copy'],
  },
  {
    categoryName: 'Growth',
    skillsList: ['Content Strategy', 'Campaigns', 'SEO', 'Analytics', 'Email'],
  },
]

export const education = [
  {
    school: 'Ho Technical University',
    program: 'BTech. Computer Science',
    duration: '2025 - 2028',
    details: 'Focused on software engineering, human-computer interaction, data science, System Administration and data systems.',
  },
  {
    school: 'ALx Africa',
    program: 'Virtual Assistant program',
    duration: '2024',
    details: 'Focused on data management, email optimization, project planning, project management and SEO',
  },

  {
    school: 'Sogakope Senior High School',
    program: 'General Science',
    duration: '2019 - 2022',
    details: 'Focused on physics, chemistry and further mathematics',
  },
]
