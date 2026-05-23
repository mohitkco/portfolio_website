export interface Project {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Profile {
  name: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  objective: string;
  education: {
    degree: string;
    timeline: string;
    institution: string;
    grade: string;
  }[];
  skills: {
    category: string;
    items: string;
  }[];
  competitiveProgramming: {
    platform: string;
    handleUrl: string;
    stats: string;
  }[];
}

export const profileData: Profile = {
  name: "MOHIT KUMAR",
  email: "mohitsarraf107@gmail.com",
  location: "Chapra, Bihar, India",
  github: "https://github.com/mohitkco",
  linkedin: "https://www.linkedin.com/in/mohit107",
  objective: "Motivated Computer Science undergraduate at IIT Bhilai with a strong foundation in Data Structures & Algorithms and full-stack web development. Seeking opportunities to apply my technical skills, contribute to impactful projects, and grow as a software engineer.",
  education: [
    {
      degree: "B.Tech - Computer Science & Engineering",
      timeline: "2024 - 2028",
      institution: "Indian Institute of Technology (IIT) Bhilai",
      grade: "CGPA: 8.69/10"
    },
    {
      degree: "Class XII - CBSE",
      timeline: "2024",
      institution: "Jyoti Central High School, Chapra, Bihar",
      grade: "94%"
    },
    {
      degree: "Class X - CBSE",
      timeline: "2022",
      institution: "Jyoti Central High School, Chapra, Bihar",
      grade: "95.8%"
    }
  ],
  skills: [
    { category: "Languages", items: "C++, C, Bash Script, RISC-V Assembly" },
    { category: "Web Dev", items: "MongoDB, Express.js, React.js, Node.js, JavaScript, Tailwind CSS, CSS, HTML" },
    { category: "CS Concepts", items: "Data Structures & Algorithms, OOP" },
    { category: "Tools & OS", items: "Git, GitHub, Linux" }
  ],
  competitiveProgramming: [
    {
      platform: "Codeforces",
      handleUrl: "https://codeforces.com/profile/mohitsarraf107",
      stats: "Regular participant in rated contests."
    },
    {
      platform: "Leetcode",
      handleUrl: "https://leetcode.com/u/mohitkkumar/",
      stats: "Solved 300+ combined problems across Leetcode and Codeforces (Trees, Graphs, Shortest Path, DP)."
    }
  ]
};

export const projectsData: Project[] = [
  {
    title: "Food Ordering Website",
    subtitle: "MERN Stack | Team Project",
    description: "Built a full-stack food ordering web application optimizing performance and secure architectures.",
    bullets: [
      "Integrated Stripe payment gateway for secure online transactions.",
      "Implemented JWT-based login authentication for secure user session management.",
      "Collaborated in a team of three, contributing across both frontend and backend delivery pipelines."
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe API", "JWT"],
    githubUrl: "https://github.com/mohitkco/zomato-clone.git"
  },
  {
    title: "Housing Website",
    subtitle: "Multi-Role Server Side Application",
    description: "A real-world based real estate implementation supporting distinct multi-seller (host) and guest workflows.",
    bullets: [
      "Features secure host and guest registration alongside real-time dynamic booking statuses.",
      "Guests can manage personal favorites arrays, process payments, and instantly block properties from concurrent guest visibility.",
      "Hosts manage completely isolated inventories, processing direct booking streams linked to specific profiles.",
      "Utilized express-session middleware to secure server-side user data maps via client-side cookie validation.",
      "Enforced robust cryptographic safety by integrating bcrypt/bcryptjs salted password hashing hooks into Mongoose schemas."
    ],
    tags: ["Node.js", "Express.js", "EJS", "Tailwind CSS", "MongoDB", "Mongoose", "Bcrypt"],
    githubUrl: "https://github.com/mohitkco/housing_web.git",
    liveUrl: "https://housing-web-xlf6.onrender.com"
  }
];