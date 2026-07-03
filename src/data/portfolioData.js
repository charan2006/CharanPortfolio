// ── Real details pulled from Charanjeet's resume ──
// Edit anything here anytime; components read straight from this file.

export const profile = {
  name: 'Charanjeet Sattarapu',
  role: 'AI Web Engineer',
  tagline:
    'Building responsive, thoughtful interfaces — and exploring how AI can make them smarter.',
  location: 'Hyderabad, India',
  email: 'charan.sattarapu@gmail.com',
  phone: '+91 8008075869',
  resumeUrl: 'https://drive.google.com/file/d/1vzt6ScvSfeioINgeULgJ6APAhNJ49QY6/view?usp=sharing', // add a link to your PDF resume here
  socials: [
    { label: 'GitHub', href: 'https://github.com/charan2006' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/CharanSattarapu' },
  ],
}

export const about = {
  paragraphs: [
    "I’m a passionate Full-Stack Web Developer who enjoys transforming ideas into modern, scalable web applications. I specialize in building responsive user interfaces with React.js and developing secure, high-performance backends using Node.js, Express.js, and MongoDB.",
    "I have hands-on experience integrating REST APIs, authentication systems, and third-party services to create dynamic, data-driven applications. Whether it’s a portfolio website, an AI-powered tool, or a complete CRUD application, I focus on writing clean, maintainable code and delivering seamless user experiences.",
    "Currently, I’m expanding my expertise in AI integration, advanced React, and scalable backend architecture, while actively building real-world projects that solve meaningful problems. I’m always eager to learn new technologies, collaborate with others, and take on challenging opportunities that help me grow as a developer.",
  ],
  stats: [
    { value: '3rd Yr', label: 'B.Tech CSE, Sreenidhi University' },
    { value: '4+', label: 'projects shipped' },
    { value: '2', label: 'hackathons' },
  ],
}

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    label: 'Front-End',
    skills: ['Responsive Web Design', 'CSS', 'React.js ','Single Page Applications (SPA)'],
  },
  {
    label: 'Back-End',
    skills: ['MongoDB', 'Node.js', 'Express.js','JWT Authentication'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code','Postman','Vite','Vercel'],
  },
  {
    label: 'Currently Learning',
    skills: ['AI', 'API integrations'],
  },
]

export const projects = [
  {
    title: 'AI-Powered Smart Todo Application',
    description:
      'Built a full-stack AI-powered task management application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Integrated the Grok AI API to enable users to create, organize, update, and manage tasks through natural language commands. Designed a responsive and intuitive interface with secure authentication, real-time CRUD operations, and intelligent task automation.',
    tags: ['React.js' ,' Node.js', ' Express.js ','MongoDB',' Grok API ',' JWT Authentication', 'REST APIs',' CSS'],
    link: 'https://todo-frontend-coral-chi.vercel.app/todos',
  },
//   {
//     title: 'Spotify Clone',
//     description:
//       'A static, Spotify-inspired website built with HTML and CSS, with responsive layouts using Flexbox and media queries.',
//     tags: ['HTML', 'CSS'],
//     link: 'https://github.com/charan2006/Spotify-replica.git',
//   },
  {
    title: 'AMPUS',
    description:
      'A real-time facial and speech analysis API using MediaPipe to generate accurate heatmaps and perform speech analysis for enhanced emotion and behavior detection.',
    tags: ['MediaPipe', 'Python', 'Computer Vision'],
    link: 'https://github.com/charan2006/AMPUS.git',
  },
  {
    title: 'KhetiSahay',
    description:
      'A smart agriculture platform that helps farmers detect plant diseases, track market prices, monitor weather conditions, and get crop recommendations based on climate and soil.',
    tags: ['Web App', 'Agri-Tech'],
    link: 'https://github.com/charan2006/khetisahay.git',
  },
]
export const workExperience = [

  {
    role: "AI & Full-Stack Web Developer Intern",
    company: "AlgoLeap Technologies",
    period: "Jun 2025 – Present",
    description:
      "Developing responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Integrating REST APIs and AI-powered features, collaborating with the development team, and building scalable, user-focused solutions while following modern development practices."
  },

];

// Education + hackathons, shown in the "Journey" timeline section
export const experience = [

  {
    role: 'B.Tech, Computer Science & Engineering ',
    company: 'Sreenidhi University, Hyderabad',
    period: '2024 — Present · 3rd Year - CGPA: 9.25/10.0',
    description: 'Building projects and learning AI and API integration alongside coursework.',
  },
  {
    role: 'Techathon 2.0',
    company: 'Hackathon Participant',
    period: '',
    description: 'Competed in a hackathon focused on rapid prototyping and problem-solving.',
  },
  {
    role: 'RAMpage V2.6',
    company: 'Hackathon Participant',
    period: '',
    description: 'Built and pitched a project under time pressure alongside a team.',
  },
  {
    role: 'Intermediate (MPC) ',
    company: 'Narayana Junior College, Hyderabad',
    period: '2024 — 96.4%',
    description: 'Completed pre-university studies in Maths, Physics, and Chemistry.',
  },
  {
    role: 'Secondary Schooling  ',
    company: 'Sri Chaitanya School, Hyderabad',
    period: '2022 — 89%',
    description: '',
  },
]

// Shown as chips in the Skills section footer
export const certifications = ['DSA & Web Development — Apna College']