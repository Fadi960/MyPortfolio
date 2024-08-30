import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  aws,
  netlify,
  vercel,
  postgresql,
  mitz,
  quickgem,
  streams,
  twopak,
  artio,
  diamond,
  intimegdt,
  restaura,
  virtualr,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "MITZ",
    icon: mitz,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Designing and creating visually appealing graphics and layouts using tools like Adobe Creative Suite and other design technologies.",
      "Collaborating with cross-functional teams including developers, product managers, and marketing teams to produce high-quality visual assets.",
      "Implementing responsive design principles to ensure graphics and layouts are optimized across different devices and screen sizes.",
      "Participating in design reviews and providing constructive feedback to other designers to maintain a cohesive visual identity.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Two Pakistani Traveller",
    icon: twopak,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Aug 2023",
    points: [
      "Developing and editing high-quality video content using Premiere Pro, After Effects, and other related technologies.",
      "Collaborating with cross-functional teams including designers, producers, and other editors to create visually compelling products.",
      "Implementing motion graphics and visual effects to enhance the overall production quality.",
      "Participating in video reviews and providing constructive feedback to other editors to ensure a cohesive and polished final product.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Streams Consultant",
    icon: streams,
    iconBg: "#383E56",
    date: "Dec 2023 - Jul 2024",
    points: [
      "Developing and maintaining web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrating PostgreSQL where needed.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create robust and scalable products.",
      "Implementing responsive design and ensuring cross-browser compatibility for a seamless user experience.",
      "Participating in code reviews and providing constructive feedback to other developers to maintain high code quality and best practices.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "QuickGem Solutions",
    icon: quickgem,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Developing and maintaining web applications using the PERN stack (PostgreSQL, Express.js, React.js, Node.js) and other related technologies, with integration of MongoDB as needed.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality and scalable products.",
      "Implementing responsive design and ensuring cross-browser compatibility for a consistent user experience across devices.",
      "Deploying and managing applications on platforms like Netlify, Vercel, Heroku, and AWS, ensuring smooth and efficient delivery of projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Fahad proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Fahad does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Fahad optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Artio",
    description:
      "A web application that allows users to create, share, and discover digital art collections, offering a platform for artists to connect and explore creative works.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "huggingface",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: artio,
    source_code_link: "https://github.com/Fadi960/Artio",
  },
  {
    name: "VirtualR",
    description:
      "A web-based platform that empowers developers to build, customize, and manage virtual reality tools, providing a seamless and efficient solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: virtualr,
    source_code_link: "https://github.com/Fadi960/VirtualR",
  },
  {
    name: "Restaura",
    description:
      "A comprehensive restaurant booking platform that allows users to explore menus, make reservations, and discover curated recommendations for dining experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: restaura,
    source_code_link: "https://github.com/Fadi960/RESTAURA",
  },
  {
    name: "Diamond Limousine",
    description:
      "A luxury car booking app that lets users reserve premium chauffeur-driven vehicles with ease, offering top-notch transportation services and personalized options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: diamond,
    source_code_link: "https://github.com/Fadi960/Diamond-Chauffeur-Limousine",
  },
  {
    name: "intimeGDT",
    description:
      "A data science marketplace that connects experts and clients, offering a platform to access, purchase, and implement data-driven solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: intimegdt,
    source_code_link: "https://github.com/Fadi960",
  },
];

export { services, technologies, experiences, testimonials, projects };
