// Mock data for Soubhagya Ranjan Rout's Developer Portfolio

export const personalInfo = {
  name: "Soubhagya Ranjan Rout",
  firstName: "Soubhagya",
  title: "UI Full Stack Developer",
  tagline: "Crafting scalable, user-friendly web experiences with React, Node & a taste for pixel-perfect UI.",
  location: "Bhubaneswar, India",
  email: "routsoubhagyar433@gmail.com",
  phone: "+91 7735249873",
  linkedin: "https://linkedin.com/in/rout-soubhagya-r",
  github: "https://github.com/soubhagya2",
  resumeUrl: "#",
  availability: "Open to opportunities",
  summary:
    "Aspiring UI Full Stack Developer with hands-on experience building responsive, production-grade web applications. I blend clean engineering with thoughtful UI design \u2014 from payment gateways to pixel-level motion. Currently focused on React, Node.js and modern tooling.",
  stats: [
    { label: "Projects Shipped", value: "8+" },
    { label: "Technologies", value: "15+" },
    { label: "Years Coding", value: "3+" },
    { label: "Coffee / Week", value: "\u221E" },
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript"],
  Frontend: ["React.js", "Redux", "Tailwind CSS", "Bootstrap", "Sass", "jQuery"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Photoshop", "CorelDraw"],
  Web: ["HTML5", "CSS3", "Responsive Design", "DOM APIs"],
};

export const skillLevels = [
  { name: "React.js", level: 92 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "Node.js & Express", level: 82 },
  { name: "Tailwind CSS / UI Design", level: 90 },
  { name: "MongoDB & MySQL", level: 78 },
  { name: "REST APIs", level: 85 },
];

export const projects = [
  {
    id: "printzet",
    title: "Printzet",
    subtitle: "Online Printing Service Platform",
    description:
      "A full-stack online printing platform featuring a product catalog, order workflows, and secure Razorpay payments. Built end-to-end with REST APIs and a responsive dashboard.",
    highlights: [
      "Built product management & dynamic order workflows",
      "Integrated Razorpay for secure payment processing",
      "Designed a mobile-first responsive interface",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind", "Razorpay"],
    image: "https://images.unsplash.com/photo-1773525912431-ee1eff5e1ab9",
    liveUrl: "https://printzet.com/",
    codeUrl: "https://github.com/soubhagya2",
    year: "2025",
    featured: true,
  },
  {
    id: "partha-sarathi",
    title: "Partha Sarathi Musical",
    subtitle: "Musical Instruments E-commerce",
    description:
      "An end-to-end storefront for musical instruments with a smooth browsing experience, real-time checkout, and multi-gateway payments.",
    highlights: [
      "Designed inventory, users and order lifecycle APIs",
      "Integrated Razorpay + PhonePe with live transaction updates",
      "Polished UI micro-interactions for a retail-grade feel",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay", "PhonePe"],
    image: "https://images.unsplash.com/photo-1556379118-7034d926d258",
    liveUrl: "#",
    codeUrl: "https://github.com/soubhagya2",
    year: "2024",
    featured: true,
  },
  {
    id: "ui-lab",
    title: "UI Lab Experiments",
    subtitle: "Component & Motion Playground",
    description:
      "A personal lab of reusable React components, micro-interactions and Tailwind design experiments \u2014 used as the foundation for shipped products.",
    highlights: [
      "Reusable component patterns with accessibility baked in",
      "Motion studies with CSS + Framer Motion concepts",
      "Design-token driven theming system",
    ],
    stack: ["React", "Tailwind", "TypeScript", "Sass"],
    image: "https://images.unsplash.com/photo-1725800066480-7ccf189e9513",
    liveUrl: "#",
    codeUrl: "https://github.com/soubhagya2",
    year: "2024",
    featured: false,
  },
];

export const experience = [
  {
    role: "UI Full Stack Developer Intern",
    company: "Zenlynx Technologies Pvt. Ltd.",
    location: "Bhubaneswar, India",
    period: "Jan 2026 \u2014 Present",
    bullets: [
      "Developed full-stack web applications using React.js, Node.js, Express.js and MongoDB.",
      "Built Printzet \u2014 an online printing platform with payment integration and product management.",
      "Shipped responsive interfaces using Tailwind CSS with strong accessibility defaults.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Fakir Mohan University, Balasore",
    period: "May 2023 \u2014 Apr 2025",
    score: "CGPA 7.93",
  },
  {
    degree: "B.Sc. in Physics",
    school: "Fakir Mohan University, Balasore",
    period: "Apr 2019 \u2014 Aug 2022",
    score: "CGPA 7.19",
  },
  {
    degree: "Higher Secondary (Science)",
    school: "CHSE, Odisha",
    period: "Apr 2017 \u2014 Mar 2019",
    score: "64.83%",
  },
];

export const certifications = [
  {
    title: "UI Full Stack Development",
    issuer: "NareshIT, Hyderabad",
    year: "2024",
  },
  {
    title: "Big Data Computing",
    issuer: "NPTEL",
    year: "2023",
  },
];

export const services = [
  {
    title: "Frontend Engineering",
    description:
      "Responsive, accessible interfaces in React with clean component architecture and a design-system mindset.",
    icon: "Code2",
  },
  {
    title: "Full-Stack Apps",
    description:
      "End-to-end MERN applications \u2014 authentication, payments, dashboards and secure REST APIs.",
    icon: "Layers",
  },
  {
    title: "UI / UX Polish",
    description:
      "Motion, micro-interactions, dark-mode theming and pixel-level refinement to make products feel premium.",
    icon: "Wand2",
  },
];
