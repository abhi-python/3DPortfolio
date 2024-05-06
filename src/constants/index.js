import { meta, shopify, starbucks, tesla, tech, nline } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "FiftyFive Technologies",
    icon: tech,
    iconBg: "#1b1525",
    date: "June 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Integration Expert",
    company_name: "NlineAxis IT Solutions Private Limited",
    icon: nline,
    iconBg: "#ffffff",
    date: "May 2021 - April 2023",
    points: [
      "Video encoding, DRM configuration, content management platforms, and streaming protocols.",
      "Debugging custom code in JavaScript, HTML/CSS and React.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Network log analysis and console log inspection to find inconsistencies.",
      "API v1 and v2 endpoint CRUD request and fecthing and posting data using react.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/abhi-python",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/abhilash-saini-693108138",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Nug Inc.",
    description:
      "NUG, Inc. is a leading California-based cannabis company renowned for its commitment to innovation and quality across its diverse portfolio of products and services. As a Frontend Developer at NUG, I have been integral to the development of engaging and user-friendly digital experiences that showcase the company's world-class R&D, cultivation, extraction, and retail offerings.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Logical Contracts",
    description:
      'It facilitate the creation and management of various types of contracts including e-signatures, business contracts, buy and sell agreements, director agreements, and employment contracts.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Invoicing System",
    description:
      "Invoicing system is to automate and optimize the invoicing process within a business. This system aims to replace manual or paper-based invoicing methods, reduce errors, improve efficiency, and enhance the overall financial management of the organization.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "RunViable",
    description:
      "Runviable was a management system which monitors the profit and losses of an ecommerce organization. It shows various business aspects in visual forms like cashflow, sales, marketing expenses etc. Initially it supported only shopify businesses with the support of Xero account. It also has a chat module with ChatGPT which interacts with the business owners about these aspects.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "JW Player",
    description:
      "It is a Video Platform for Video-Driven Companies.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Malta Web App",
    description:
      "A single page visiting web application includes different routes (i.e. Home, About, services, Contact, Product).",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "3D Portfolio",
    description:
      "Developed a portfolio website utilizing React 3 Fiber. Implemented 3D modeling and animations using Three.js library. Utilized various camera angles and lighting techniques to enhance scene depth, shadows, and highlights. Integrated materials, textures, and shaders for realistic 3D rendering.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "Portfolio Website",
    description:
      "My portfolio website showcases my expertise as a front-end developer using React. The site features a clean and modern design with smooth animations and responsive layout. It includes sections for my projects, skills, education, and interests. Visitors can easily navigate and interact with the site, and get a sense of my capabilities and personality.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "Web application using React",
    description:
      "Created a website using react and styled component. Comfortably work with NPM, react routers, props and manage states and work with reusable components.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
