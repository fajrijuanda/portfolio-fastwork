export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
  featured: boolean;
  order: number;
  imageCount: number;
  imageExtension: "png" | "jpg" | "jpeg" | "webp";
  caseStudy?: {
    hook: string;
    featureCards: Array<{
      icon: string;
      title: string;
      tone: "dev" | "devops" | "data" | "workflow";
      description: string;
    }>;
    journey: string[];
    outcomes: string[];
  };
  githubUrl?: string;
  demoUrl?: string;
};

const projectsData = [
  {
    slug: "hostoo",
    title: "Hostoo",
    category: "Cloud & DevOps",
    tags: ["Laravel", "GCP", "CyberPanel", "Billing"],
    description:
      "Platform penyedia jasa hosting PHP otomatis yang terintegrasi dengan Google Cloud Platform dan CyberPanel.",
    content:
      "Hostoo adalah platform deployment hosting yang memudahkan pembuatan environment PHP, otomasi manajemen server, dan billing dalam satu dashboard.",
    featured: true,
    order: 1,
    imageCount: 8,
    imageExtension: "png",
    caseStudy: {
      hook:
        "Hostoo dirancang sebagai platform end-to-end untuk bisnis hosting: dari landing page marketing, onboarding pengguna, sampai operasional admin dan billing langganan dalam satu alur yang rapi.",
      featureCards: [
        {
          icon: "🚀",
          title: "Landing & Product Marketing",
          tone: "dev",
          description:
            "Halaman utama menonjolkan value proposition, fitur unggulan, langkah penggunaan, testimonial, dan pricing plan untuk meningkatkan konversi visitor menjadi user." 
        },
        {
          icon: "🔐",
          title: "Authentication & User Access",
          tone: "workflow",
          description:
            "Flow login/register dibuat clean dengan security check agar proses onboarding cepat sekaligus tetap aman untuk pengguna baru." 
        },
        {
          icon: "📦",
          title: "Project & Deployment Management",
          tone: "devops",
          description:
            "Dashboard user menyediakan manajemen project, status deployment, dan monitoring penggunaan resource untuk operasional harian yang efisien." 
        },
        {
          icon: "💳",
          title: "Billing & Subscription",
          tone: "data",
          description:
            "Panel billing menampilkan status paket aktif, histori pembayaran, metode pembayaran, serta aksi upgrade plan dalam satu tempat." 
        },
        {
          icon: "🛠️",
          title: "Admin Operations Console",
          tone: "devops",
          description:
            "Area admin memfasilitasi monitoring performa, pengelolaan langganan user, validasi request, dan kontrol operasional platform secara menyeluruh." 
        },
        {
          icon: "🎨",
          title: "Theme-aware UI Experience",
          tone: "workflow",
          description:
            "Interface konsisten di light/dark mode dengan komponen dashboard yang fokus pada keterbacaan, hierarki data, dan pengalaman pengguna modern." 
        }
      ],
      journey: [
        "Pengunjung melihat landing page, fitur, dan paket yang tersedia.",
        "User membuat akun lalu login ke client area.",
        "User membuat project dan mengelola resource deployment.",
        "Sistem menampilkan status subscription serta opsi upgrade.",
        "Admin memonitor performa platform dan memproses operasional user."
      ],
      outcomes: [
        "Mempercepat onboarding user dari halaman promosi ke dashboard produk.",
        "Mengurangi friksi operasional karena deployment dan billing berada dalam satu ekosistem.",
        "Meningkatkan visibilitas bisnis dengan metrik user, subscription, dan status sistem yang realtime-ready."
      ]
    }
  },
  {
    slug: "skyflow",
    title: "SkyFlow",
    category: "Cloud & DevOps",
    tags: ["Nuxt.js", "Go", "Docker", "PaaS"],
    description:
      "Layanan deployment modern berbasis container (mirip Railway/Heroku) untuk berbagai bahasa pemrograman.",
    content:
      "SkyFlow fokus pada pengalaman deployment yang cepat dengan fitur project management, build logs, dan konfigurasi environment statis.",
    featured: true,
    order: 2,
    imageCount: 13,
    imageExtension: "png"
  },
  {
    slug: "kumbung-jamur",
    title: "Kumbung Jamur IoT",
    category: "IoT & Systems",
    tags: ["Next.js", "IoT", "MQTT", "Real-time"],
    description:
      "Dashboard monitoring suhu dan kelembaban kumbung jamur tiram terintegrasi sensor IoT.",
    content:
      "Sistem ini menampilkan data sensor secara visual agar pengelolaan lingkungan budidaya jamur lebih stabil dan efisien.",
    featured: true,
    order: 3,
    imageCount: 3,
    imageExtension: "png"
  },
  {
    slug: "posify",
    title: "Posify",
    category: "Mobile App",
    tags: ["Flutter", "Dart", "API Integration"],
    description:
      "Aplikasi mobile e-commerce makanan dengan UI modern, keranjang belanja, dan tracking pesanan.",
    content:
      "Posify dirancang untuk alur transaksi yang cepat dari katalog produk, checkout, sampai status pesanan.",
    featured: true,
    order: 4,
    imageCount: 1,
    imageExtension: "png"
  },
  {
    slug: "besra-geonet",
    title: "BESRA GeoNet",
    category: "Web App",
    tags: ["Next.js", "WebGIS", "Asset Mgmt"],
    description:
      "Sistem Informasi Geografis untuk manajemen aset jaringan fiber optic PT Besra Utama Sinaran.",
    content:
      "Platform GIS ini membantu tracking homepass, splitter, dan cakupan jaringan dalam satu tampilan operasional.",
    featured: false,
    order: 5,
    imageCount: 11,
    imageExtension: "png"
  },
  {
    slug: "sikatup",
    title: "Sikatup (PLN)",
    category: "IoT & Systems",
    tags: ["Laravel", "Monitoring", "Enterprise"],
    description:
      "Sistem monitoring kondisi trafo untuk PT PLN guna membantu pencegahan kerusakan aset vital.",
    content:
      "Aplikasi ini menampilkan indikator perangkat, alarm, dan ringkasan operasional untuk kebutuhan maintenance.",
    featured: false,
    order: 6,
    imageCount: 12,
    imageExtension: "jpg"
  },
  {
    slug: "siaga",
    title: "SIAGA",
    category: "Web App",
    tags: ["Laravel", "Emergency Response", "Real-time"],
    description:
      "Sistem informasi dan penanganan gawat darurat untuk koordinasi respons cepat.",
    content:
      "SIAGA menghadirkan dashboard status, modul user, dan data operasional untuk tim tanggap darurat.",
    featured: false,
    order: 7,
    imageCount: 4,
    imageExtension: "jpg"
  },
  {
    slug: "swiftyle",
    title: "Swiftyle",
    category: "Mobile App",
    tags: ["Laravel", "Ionic", "E-commerce"],
    description:
      "Platform fashion hybrid: web admin untuk penjual dan mobile app untuk pembeli.",
    content:
      "Swiftyle menyatukan manajemen produk, pengalaman belanja mobile, wishlist, checkout, dan pembayaran.",
    featured: false,
    order: 8,
    imageCount: 16,
    imageExtension: "jpg"
  },
  {
    slug: "echolytics",
    title: "Echolytics",
    category: "AI & Data",
    tags: ["Django", "Python", "NLP", "Crawling"],
    description:
      "Tool analisis sentimen otomatis yang melakukan crawling komentar media sosial berdasarkan topik.",
    content:
      "Echolytics memberikan insight sentimen positif, netral, dan negatif untuk monitoring persepsi publik.",
    featured: false,
    order: 9,
    imageCount: 6,
    imageExtension: "png"
  },
  {
    slug: "green-cold",
    title: "Green Cold Products",
    category: "Web App",
    tags: ["Laravel", "QR Code", "Inventory"],
    description:
      "Manajemen inventaris dengan fitur generasi dan scan QR code untuk label fisik barang.",
    content:
      "Aplikasi ini membantu kontrol stok masuk, label tracking, dan validasi data inventaris.",
    featured: false,
    order: 10,
    imageCount: 2,
    imageExtension: "png"
  },
  {
    slug: "certisend",
    title: "Certisend",
    category: "Tools",
    tags: ["Laravel", "Automation", "Mail"],
    description:
      "Aplikasi pengirim sertifikat massal otomatis berbasis data Excel dan template PDF.",
    content:
      "Certisend mempercepat proses distribusi sertifikat digital secara batch ke penerima yang tepat.",
    featured: false,
    order: 11,
    imageCount: 2,
    imageExtension: "png"
  },
  {
    slug: "aurora",
    title: "Aurora",
    category: "Creative",
    tags: ["React.js", "Canvas", "Drawing"],
    description:
      "Aplikasi sketchpad berbasis web dengan fokus pada pengalaman visual dan interaksi kreatif.",
    content:
      "Aurora menawarkan UI bertema futuristik, layer management, dan kontrol brush untuk eksplorasi desain.",
    featured: false,
    order: 12,
    imageCount: 6,
    imageExtension: "png"
  },
  {
    slug: "cbi-portal-supplier",
    title: "Portal Supplier (CBI)",
    category: "Internship",
    tags: ["CodeIgniter 4", "Enterprise"],
    description:
      "Sistem manajemen supplier untuk PT Century Batteries Indonesia.",
    content:
      "Portal ini mendukung proses data supplier, monitoring dokumen, dan alur administrasi internal.",
    featured: false,
    order: 13,
    imageCount: 3,
    imageExtension: "png"
  },
  {
    slug: "cbi-audit-vendor",
    title: "Portal Audit Vendor (CBI)",
    category: "Internship",
    tags: ["CodeIgniter 4", "Audit"],
    description:
      "Digitalisasi proses audit vendor eksternal perusahaan.",
    content:
      "Modul audit ini memudahkan pencatatan temuan, penilaian vendor, dan pelacakan tindak lanjut.",
    featured: false,
    order: 14,
    imageCount: 3,
    imageExtension: "png"
  },
  {
    slug: "web-desa-mekarjaya",
    title: "Web Desa Mekarjaya",
    category: "Community",
    tags: ["Laravel", "Public Service"],
    description:
      "Portal informasi desa dan layanan pengajuan surat online untuk warga.",
    content:
      "Website desa ini menggabungkan profil wilayah, peta interaktif, artikel, dan katalog layanan publik.",
    featured: false,
    order: 15,
    imageCount: 12,
    imageExtension: "png"
  }
] satisfies Project[];

export const projects: Project[] = [...projectsData].sort((a, b) => a.order - b.order);

export const categories = Array.from(new Set(projects.map((project) => project.category))).sort();

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectImages(project: Project) {
  return Array.from({ length: project.imageCount }, (_, index) => {
    const imageId = String(index + 1).padStart(2, "0");
    return `/images/projects/${project.slug}/${imageId}.${project.imageExtension}`;
  });
}

export function getRelatedProjects(slug: string, category: string, limit = 3) {
  return projects
    .filter((project) => project.slug !== slug && project.category === category)
    .slice(0, limit);
}
