export const profile = {
  name: "Portfolio",
  role: "Full Stack Developer",
  summary:
    "Saya membangun portfolio ini dengan fokus di software engineering, dari UI modern sampai sistem web yang terukur.",
  contact: {
    email: "fajriyanuar1@gmail.com",
    whatsapp: "https://wa.me/6285217861296",
    github: "https://github.com/fajrijuanda",
    linkedin: "https://linkedin.com/in/fajri-yanuar-shiddiq-juanda-3054502b8"
  }
};

export type TeamMember = {
  name: string;
  role: string;
  linkedin: string;
  github?: string;
  photo: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Fajri Yanuar Shiddiq Juanda",
    role: "Full Stack Developer & Mobile Developer",
    linkedin: "https://linkedin.com/in/fajri-yanuar-shiddiq-juanda-3054502b8",
    github: "https://github.com/fajrijuanda",
    photo: "/images/profile-fajri.png"
  }
];

export const education = [
  {
    institution: "Universitas Buana Perjuangan Karawang",
    program: "S1 Teknik Informatika",
    period: "2022 - Sekarang",
    description: "Fokus pada software engineering, cloud deployment, dan integrasi AI/IoT."
  },
  {
    institution: "SMAN 1 Karawang",
    program: "MIPA",
    period: "2016 - 2019",
    description: "Aktif di kegiatan berbasis komputer dan pengembangan problem solving."
  }
];

export const experiences = [
  {
    company: "PT. Century Batteries Indonesia",
    role: "Internship - IT Support & Development",
    period: "Feb 2025 - Aug 2025",
    summary:
      "Menangani support infrastruktur IT internal, debugging aplikasi web, dan dokumentasi aset teknis."
  },
  {
    company: "MariBelajar (MSIB Batch 7)",
    role: "Data Analyst & AI Engineer",
    period: "Sep 2024 - Dec 2024",
    summary:
      "Membangun Echolytics untuk analisis sentimen, data processing, dan visualisasi insight."
  }
];

export const skills = {
  dev: [
    "HTML",
    "CSS",
    "Python (Django)",
    "Go",
    "Laravel",
    "Next.js",
    "Flutter",
    "Ionic",
    "CodeIgniter",
    "Figma"
  ],
  devops: [],
  data: [
    "SQL",
    "NoSQL"
  ],
  workflow: ["Git-based workflow"]
};

export const languages = [
  { name: "Indonesia", level: "Native", percent: 100 },
  { name: "English", level: "Proficient", percent: 85 },
  { name: "Korean", level: "Intermediate", percent: 60 },
  { name: "Japanese", level: "Basic", percent: 25 }
];

export const services = [
  {
    title: "Landing Page",
    icon: "🧩",
    tone: "dev",
    description: "Website cepat untuk profil personal, campaign, atau product showcase."
  },
  {
    title: "Company Profile",
    icon: "🏢",
    tone: "dev",
    description: "Website bisnis dengan panel manajemen konten yang fleksibel."
  },
  {
    title: "Web Application",
    icon: "🖥",
    tone: "dev",
    description: "Sistem bisnis custom dengan otentikasi, dashboard, dan workflow data."
  },
  {
    title: "Mobile App",
    icon: "📱",
    tone: "dev",
    description: "Aplikasi Android/iOS untuk operasional bisnis dan pengalaman pelanggan."
  },
  {
    title: "Git-based Team Workflow",
    icon: "🔀",
    tone: "workflow",
    description: "Standarisasi branch strategy, code review flow, dan kolaborasi tim berbasis Git."
  }
];
