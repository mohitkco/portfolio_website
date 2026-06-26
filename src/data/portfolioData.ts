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
  // ✨ Cleaned objective statement removing legacy wording
  objective: "Computer Science undergraduate specializing in full-stack engineering, high-throughput real-time systems, and vector-driven AI architectures.",
  education: [
    {
      degree: "B.Tech - Computer Science & Engineering",
      timeline: "2024 - 2028",
      institution: "Indian Institute of Technology (IIT) Bhilai",
      grade: "CGPA: 8.69/10"
    }
    // ❌ Legacy Class XII and Class X objects completely removed
  ],
  skills: [
    { category: "Languages", items: "C++, C, Bash Script, RISC-V Assembly, Python, JavaScript, TypeScript, SQL" },
    { 
      category: "Web Dev", 
      // 🚀 Expanded with your new workspace infrastructure definitions
      items: "React.js, Node.js, Express.js, MongoDB, Redis Memory Cache, PgVector Semantic Search, Prisma ORM, Socket.io, Tailwind CSS, JavaScript, HTML, CSS" 
    },
    { category: "CS Concepts", items: "Data Structures & Algorithms, OOP" },
    { category: "Tools, Cloud & OS", items: "Docker, Docker Compose, Nginx, AWS EC2, AWS EBS Volume Engineering, Git, GitHub, Linux, Vercel" }
  ],
  competitiveProgramming: [
    {
      platform: "Codeforces",
      handleUrl: "https://codeforces.com/profile/mohitsarraf107",
      stats: "Regular participant in rated contests specializing in advanced dynamic programming and greedy optimizations."
    },
    {
      platform: "Leetcode",
      handleUrl: "https://leetcode.com/u/mohitkkumar/",
      stats: "Solved 300+ combined problems across Leetcode and Codeforces (Trees, Graphs, Shortest Path, DP)."
    }
  ]
};

export const projectsData: Project[] = [
  // ❌ Legacy Food Ordering Website fully dropped from arrays as requested
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
  },
  {
    title: "Full-Stack AI Real-Time Collaboration Workspace",
    subtitle: "Multi-Container Microservice Platform",
    description: "A production-grade, multi-container microservice workspace featuring duplex Socket.io communication channels, Redis caching layers, and semantic history searching driven by PostgreSQL PgVector embeddings.",
    bullets: [
      "Architected and deployed a multi-container infrastructure on an AWS EC2 instance using Docker Compose and Nginx as a secure reverse proxy gateway.",
      "Implemented vector-driven semantic search pipelines using Prisma ORM and PgVector to manage 768-dimensional AI embeddings inside PostgreSQL databases.",
      "Eliminated direct-to-disk bottleneck points under high concurrent volume via a dual long-lived layer using Redis cache memory arrays and Socket.io.",
      "Engineered automated GitHub Actions workflows to build, verify, and deliver clean containers straight to the production infrastructure during git push events.",
      "Resolved complex runtime outages by expanding active cloud EBS block storage frameworks and dynamically scaling Linux filesystems safely in production configurations."
    ],
    tags: ["React", "Node.js", "PostgreSQL", "PgVector", "Redis", "Docker", "Nginx", "AWS", "Prisma", "Socket.io"],
    githubUrl: "https://github.com/mohitkco/ai-realtime-chat"
  }
];