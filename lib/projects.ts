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
    imageExtension: "png",
    caseStudy: {
      hook:
        "SkyFlow diposisikan sebagai platform deployment cloud-native all-in-one: menggabungkan marketing funnel, onboarding aman, workspace manajemen project, observability deployment, hingga billing plan dalam satu pengalaman produk yang konsisten.",
      featureCards: [
        {
          icon: "🌐",
          title: "High-converting Landing Experience",
          tone: "dev",
          description:
            "Landing page menampilkan hero value, feature matrix, FAQ, serta pricing yang jelas sehingga visitor cepat memahami manfaat produk dan terdorong mencoba platform."
        },
        {
          icon: "🔐",
          title: "Modern Auth & Account Flow",
          tone: "workflow",
          description:
            "Login dan register mendukung alur email serta social sign-in, dengan UX yang clean untuk menurunkan friction di tahap onboarding user baru."
        },
        {
          icon: "📁",
          title: "Project Workspace Management",
          tone: "devops",
          description:
            "User dapat mengelola project, melihat daftar deployment, dan memantau status build dari dashboard terstruktur yang fokus ke efisiensi kerja tim."
        },
        {
          icon: "📈",
          title: "Operational Dashboard & Health View",
          tone: "data",
          description:
            "Overview account menghadirkan status sistem, ringkasan resource, dan log aktivitas untuk keputusan operasional yang lebih cepat dan berbasis data."
        },
        {
          icon: "💳",
          title: "Pricing, Subscription & Billing",
          tone: "data",
          description:
            "Flow komersial lengkap dari halaman pricing hingga billing detail: plan aktif, histori pembayaran, metode pembayaran, dan opsi upgrade plan."
        },
        {
          icon: "🎛",
          title: "Personalization & Settings",
          tone: "workflow",
          description:
            "Pengguna dapat mengatur profil, preferensi tampilan (theme-aware), dan notifikasi sehingga pengalaman platform terasa personal dan profesional."
        }
      ],
      journey: [
        "Visitor memahami value produk melalui landing, feature section, FAQ, dan pricing.",
        "Prospect melakukan sign-up/sign-in untuk masuk ke workspace cloud.",
        "User membuat project lalu memonitor proses deployment pada dashboard.",
        "User mengelola subscription, billing, dan metode pembayaran sesuai kebutuhan scale.",
        "Platform menjaga retensi lewat observability, settings, dan UX yang konsisten."
      ],
      outcomes: [
        "Meningkatkan conversion dari landing ke onboarding berkat alur produk yang jelas.",
        "Mengurangi context switching karena project, deployment, dan billing menyatu dalam satu panel.",
        "Mempercepat pengambilan keputusan operasional melalui dashboard status dan log yang actionable."
      ]
    }
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

const enrichedContentBySlug: Partial<Record<Project["slug"], string>> = {
  "kumbung-jamur":
    "Kumbung Jamur IoT dibangun untuk menjaga stabilitas lingkungan budidaya jamur tiram melalui pembacaan sensor suhu dan kelembaban secara real-time. Dashboard menampilkan kondisi terkini, histori perubahan, dan notifikasi ambang batas agar petani dapat mengambil tindakan cepat sebelum kualitas panen menurun.",
  posify:
    "Posify adalah aplikasi mobile food commerce dengan alur belanja end-to-end: mulai dari browsing menu, tambah keranjang, checkout, sampai pemantauan status pesanan. Fokus utamanya adalah membuat pengalaman order tetap cepat, jelas, dan nyaman untuk pengguna sekaligus mudah dikelola oleh tim operasional.",
  "besra-geonet":
    "BESRA GeoNet menggabungkan data aset jaringan fiber optic ke dalam peta operasional berbasis WebGIS. Tim lapangan dan manajemen dapat memantau lokasi homepass, splitter, dan cakupan jaringan untuk mempercepat proses troubleshooting, perencanaan ekspansi, serta validasi data infrastruktur.",
  sikatup:
    "Sikatup (PLN) dirancang sebagai sistem monitoring kondisi trafo untuk mendeteksi gejala gangguan lebih awal. Aplikasi menyatukan indikator perangkat, alarm prioritas, dan ringkasan performa sehingga tim maintenance dapat menyusun tindakan preventif dengan lebih terstruktur.",
  siaga:
    "SIAGA adalah platform koordinasi penanganan gawat darurat yang membantu tim respons mengelola laporan kejadian, status penanganan, dan komunikasi antar unit. Sistem ini menurunkan waktu respons dengan menyajikan informasi penting dalam dashboard yang mudah dipahami.",
  swiftyle:
    "Swiftyle menghadirkan ekosistem fashion commerce hybrid: web admin untuk seller dan aplikasi mobile untuk buyer. Platform ini mengelola katalog produk, pengalaman belanja, checkout, hingga pelacakan order agar proses bisnis berjalan rapi dari sisi penjual maupun pembeli.",
  echolytics:
    "Echolytics memproses data komentar media sosial menjadi insight sentimen yang siap dipakai untuk pengambilan keputusan. Dengan pipeline crawling dan analisis NLP, tim dapat melihat tren opini publik, topik yang meningkat, serta perubahan persepsi terhadap brand atau isu tertentu.",
  "green-cold":
    "Green Cold Products adalah sistem inventaris berbasis QR code untuk mempermudah pelabelan dan pelacakan barang fisik. Setiap pergerakan stok tercatat secara digital sehingga proses stock opname, validasi item, dan audit data menjadi lebih cepat dan akurat.",
  certisend:
    "Certisend mengotomasi pengiriman sertifikat digital secara massal dari data peserta berbasis Excel. Proses pembuatan file, personalisasi nama, dan distribusi email dilakukan dalam batch sehingga pekerjaan administrasi acara dapat diselesaikan jauh lebih efisien.",
  aurora:
    "Aurora merupakan aplikasi sketchpad web interaktif untuk kebutuhan eksplorasi desain cepat. Pengguna dapat menggambar dengan berbagai pengaturan brush, mengelola layer, dan mengekspor hasil karya tanpa perlu instalasi software desktop.",
  "cbi-portal-supplier":
    "Portal Supplier CBI mendigitalisasi proses administrasi vendor agar data supplier, dokumen pendukung, dan status verifikasi dapat dikelola dalam satu sistem. Solusi ini membantu tim procurement menjaga kepatuhan dokumen sekaligus mempercepat proses evaluasi vendor.",
  "cbi-audit-vendor":
    "Portal Audit Vendor CBI dibuat untuk menstandardisasi proses audit eksternal secara terstruktur. Tim auditor dapat mencatat temuan, memberikan skor penilaian, dan memantau tindak lanjut perbaikan vendor dalam alur kerja yang transparan.",
  "web-desa-mekarjaya":
    "Web Desa Mekarjaya menjadi pusat layanan informasi dan administrasi digital untuk warga. Website ini menggabungkan profil desa, berita, agenda, peta wilayah, serta layanan pengajuan surat online agar pelayanan publik lebih mudah dijangkau."
};

const caseStudiesBySlug: Partial<Record<Project["slug"], NonNullable<Project["caseStudy"]>>> = {
  "kumbung-jamur": {
    hook:
      "Kumbung Jamur IoT difokuskan untuk menjaga mikroklimat budidaya secara konsisten: data sensor ditarik otomatis, divisualisasikan real-time, lalu diterjemahkan menjadi aksi operasional harian yang mudah dipahami petani.",
    featureCards: [
      {
        icon: "IOT",
        title: "Sensor Telemetry Stream",
        tone: "devops",
        description:
          "Data suhu dan kelembaban dikirim dari perangkat IoT melalui MQTT secara kontinu agar kondisi kumbung dapat dipantau tanpa jeda manual."
      },
      {
        icon: "UI",
        title: "Realtime Monitoring Dashboard",
        tone: "workflow",
        description:
          "Dashboard menampilkan metrik lingkungan terkini dengan visual yang jelas sehingga operator cepat mengenali perubahan kondisi kritis."
      },
      {
        icon: "ALRT",
        title: "Threshold Alerting",
        tone: "data",
        description:
          "Sistem menandai saat nilai sensor melewati ambang ideal dan membantu tim mengambil tindakan korektif sebelum berdampak ke hasil panen."
      },
      {
        icon: "LOG",
        title: "Historical Trend Analysis",
        tone: "data",
        description:
          "Riwayat pembacaan sensor tersimpan untuk melihat pola harian, evaluasi SOP, dan perencanaan siklus budidaya berikutnya."
      },
      {
        icon: "OPS",
        title: "Operational Workflow Guidance",
        tone: "workflow",
        description:
          "Tampilan ringkas memandu urutan pemeriksaan lapangan agar keputusan operasional lebih konsisten meskipun dijalankan oleh operator berbeda."
      }
    ],
    journey: [
      "Perangkat IoT membaca suhu dan kelembaban pada interval tertentu.",
      "Data dikirim ke server dan divisualisasikan pada dashboard monitoring.",
      "Operator mengecek status lingkungan serta notifikasi ambang batas.",
      "Tim menjalankan tindakan korektif seperti pengaturan ventilasi atau penyiraman.",
      "Data historis dievaluasi untuk menyempurnakan strategi budidaya."
    ],
    outcomes: [
      "Menurunkan risiko gagal panen akibat fluktuasi suhu atau kelembaban yang terlambat terdeteksi.",
      "Meningkatkan konsistensi keputusan operasional melalui data real-time dan histori.",
      "Membantu proses budidaya lebih terukur dengan indikator lingkungan yang mudah ditracking."
    ]
  },
  posify: {
    hook:
      "Posify dirancang sebagai pengalaman belanja makanan mobile-first: pengguna dapat menemukan produk, melakukan checkout cepat, dan memantau pesanan dalam alur yang sederhana namun lengkap.",
    featureCards: [
      {
        icon: "UX",
        title: "Menu Discovery Experience",
        tone: "dev",
        description:
          "Katalog produk ditata agar user mudah menemukan menu populer, detail harga, dan varian yang relevan dalam beberapa sentuhan."
      },
      {
        icon: "CART",
        title: "Cart & Checkout Flow",
        tone: "workflow",
        description:
          "Alur keranjang hingga pembayaran dioptimalkan untuk mobile agar proses transaksi tetap cepat tanpa langkah yang membingungkan."
      },
      {
        icon: "ORDR",
        title: "Order Tracking",
        tone: "data",
        description:
          "Status pesanan ditampilkan bertahap mulai dari diproses, dikirim, hingga selesai sehingga user selalu tahu progres order."
      },
      {
        icon: "API",
        title: "Payment & Service Integration",
        tone: "devops",
        description:
          "Integrasi API mendukung sinkronisasi data produk, transaksi, dan status pengiriman agar operasional tetap konsisten antar sistem."
      },
      {
        icon: "OPS",
        title: "Merchant Operations View",
        tone: "workflow",
        description:
          "Tim operasional dapat memonitor order masuk dan ritme transaksi harian untuk menjaga SLA layanan tetap terjaga."
      }
    ],
    journey: [
      "User menjelajahi katalog makanan dan memilih produk yang diinginkan.",
      "Item dimasukkan ke keranjang lalu user melakukan checkout.",
      "Sistem memproses pembayaran dan membuat tiket pesanan.",
      "User memantau status order hingga pesanan selesai diterima.",
      "Tim merchant mengevaluasi transaksi untuk optimasi layanan berikutnya."
    ],
    outcomes: [
      "Mengurangi friction transaksi pada perangkat mobile.",
      "Meningkatkan kejelasan komunikasi status pesanan ke pelanggan.",
      "Menyediakan alur operasional yang lebih terstruktur untuk merchant."
    ]
  },
  "besra-geonet": {
    hook:
      "BESRA GeoNet memetakan seluruh aset jaringan fiber optic ke dalam satu workspace WebGIS agar aktivitas monitoring, validasi data lapangan, dan ekspansi jaringan dapat dikelola lebih cepat dan akurat.",
    featureCards: [
      {
        icon: "GIS",
        title: "Asset Mapping Layer",
        tone: "dev",
        description:
          "Homepass, splitter, dan elemen jaringan divisualisasikan sebagai layer peta untuk memudahkan navigasi data infrastruktur."
      },
      {
        icon: "SRCH",
        title: "Spatial Search & Filtering",
        tone: "workflow",
        description:
          "Tim dapat memfilter area, status aset, dan titik jaringan tertentu untuk mempercepat proses investigasi operasional."
      },
      {
        icon: "DATA",
        title: "Network Coverage Insights",
        tone: "data",
        description:
          "Dashboard cakupan membantu melihat wilayah yang sudah terlayani dan area prioritas pengembangan jaringan berikutnya."
      },
      {
        icon: "SYNC",
        title: "Field Update Synchronization",
        tone: "devops",
        description:
          "Perubahan data dari aktivitas lapangan dapat disinkronkan agar informasi aset tetap relevan dengan kondisi aktual di lapangan."
      },
      {
        icon: "PLAN",
        title: "Expansion Planning Support",
        tone: "workflow",
        description:
          "Visual peta dipakai sebagai dasar koordinasi lintas tim untuk menentukan prioritas pembangunan dan jalur infrastruktur baru."
      }
    ],
    journey: [
      "Data aset jaringan dikumpulkan dan dipetakan ke layer GIS.",
      "Operator melakukan pencarian titik jaringan berdasarkan area dan atribut.",
      "Tim memvalidasi data lapangan serta memperbarui perubahan aset.",
      "Manajemen menggunakan peta cakupan untuk menyusun rencana ekspansi.",
      "Laporan operasional disusun berdasarkan data spasial yang terpusat."
    ],
    outcomes: [
      "Meningkatkan visibilitas infrastruktur jaringan dalam satu dashboard peta.",
      "Mempercepat investigasi gangguan dan koordinasi tim lapangan.",
      "Mendukung keputusan ekspansi jaringan berbasis data spasial yang akurat."
    ]
  },
  sikatup: {
    hook:
      "Sikatup membantu PLN memantau kesehatan trafo secara berkala melalui dashboard indikator dan alarm prioritas, sehingga potensi gangguan dapat direspons lebih cepat sebelum menimbulkan dampak luas.",
    featureCards: [
      {
        icon: "MON",
        title: "Transformer Condition Monitoring",
        tone: "devops",
        description:
          "Parameter utama kondisi trafo ditampilkan dalam panel ringkas untuk memudahkan pemantauan status perangkat secara berkelanjutan."
      },
      {
        icon: "ALRM",
        title: "Priority Alarm Handling",
        tone: "data",
        description:
          "Sistem mengelompokkan alarm berdasarkan tingkat urgensi agar tim maintenance fokus pada masalah dengan risiko tertinggi terlebih dahulu."
      },
      {
        icon: "OPS",
        title: "Maintenance Coordination",
        tone: "workflow",
        description:
          "Dashboard operasional membantu pembagian tugas pemeriksaan, tindak lanjut lapangan, dan pelaporan penyelesaian gangguan."
      },
      {
        icon: "HIST",
        title: "Health Trend History",
        tone: "data",
        description:
          "Riwayat performa perangkat memudahkan analisis pola kerusakan untuk menyusun strategi maintenance preventif."
      },
      {
        icon: "RPT",
        title: "Operational Reporting",
        tone: "workflow",
        description:
          "Ringkasan status dan tindakan tersedia untuk kebutuhan review manajemen serta audit operasional internal."
      }
    ],
    journey: [
      "Sistem menerima indikator kondisi perangkat dari titik monitoring.",
      "Dashboard menampilkan status normal maupun alarm berdasarkan prioritas.",
      "Tim maintenance menindaklanjuti alert melalui prosedur pemeriksaan.",
      "Hasil tindakan dicatat untuk membangun histori kesehatan perangkat.",
      "Data histori dianalisis sebagai dasar pencegahan gangguan berikutnya."
    ],
    outcomes: [
      "Mempercepat deteksi dini potensi kerusakan aset trafo.",
      "Membantu prioritisasi tindakan lapangan pada alarm paling kritis.",
      "Meningkatkan kualitas perencanaan maintenance berbasis histori performa."
    ]
  },
  siaga: {
    hook:
      "SIAGA menyatukan alur penanganan gawat darurat mulai dari penerimaan laporan, koordinasi tim, hingga pemantauan status insiden secara real-time agar respons lapangan lebih terkendali.",
    featureCards: [
      {
        icon: "CALL",
        title: "Incident Intake Module",
        tone: "workflow",
        description:
          "Laporan kejadian dicatat dengan data lokasi, jenis kasus, dan tingkat urgensi agar informasi awal respons lebih lengkap."
      },
      {
        icon: "DISP",
        title: "Dispatch Coordination",
        tone: "devops",
        description:
          "Koordinator dapat mengatur penugasan unit respons berdasarkan ketersediaan sumber daya dan prioritas kejadian."
      },
      {
        icon: "LIVE",
        title: "Realtime Status Board",
        tone: "data",
        description:
          "Perubahan status insiden terlihat langsung sehingga seluruh pihak memiliki sumber informasi yang sama selama penanganan."
      },
      {
        icon: "RES",
        title: "Resource Allocation View",
        tone: "workflow",
        description:
          "Sistem membantu memantau beban tim dan peralatan agar distribusi resource tetap proporsional di banyak kejadian."
      },
      {
        icon: "RPT",
        title: "Post-Incident Reporting",
        tone: "data",
        description:
          "Dokumentasi penanganan, waktu respons, dan hasil akhir direkap untuk evaluasi kualitas layanan tanggap darurat."
      }
    ],
    journey: [
      "Operator menerima laporan dan mencatat detail kejadian ke sistem.",
      "Koordinator menunjuk unit respons yang paling siap ditugaskan.",
      "Tim lapangan memperbarui progres penanganan secara berkala.",
      "Pusat komando memantau status real-time hingga insiden selesai.",
      "Data penanganan dievaluasi untuk perbaikan SOP respons berikutnya."
    ],
    outcomes: [
      "Mengurangi waktu respons melalui koordinasi digital yang terpusat.",
      "Meningkatkan transparansi status penanganan antar tim.",
      "Menyediakan data evaluasi yang kuat untuk peningkatan layanan darurat."
    ]
  },
  swiftyle: {
    hook:
      "Swiftyle menghubungkan pengalaman belanja fashion mobile dengan kontrol operasional seller melalui dashboard web, sehingga alur dari katalog hingga fulfillment berjalan dalam satu ekosistem.",
    featureCards: [
      {
        icon: "SELL",
        title: "Seller Catalog Management",
        tone: "workflow",
        description:
          "Penjual dapat mengelola produk, stok, harga, dan konten promosi dari panel admin berbasis web yang terstruktur."
      },
      {
        icon: "MOB",
        title: "Mobile Shopping Experience",
        tone: "dev",
        description:
          "Aplikasi buyer menekankan browsing cepat, detail produk jelas, dan interaksi yang nyaman untuk meningkatkan conversion."
      },
      {
        icon: "WISH",
        title: "Wishlist & Promo Features",
        tone: "workflow",
        description:
          "Fitur wishlist dan promo membantu user menyimpan item favorit serta mendorong pembelian pada momen campaign."
      },
      {
        icon: "PAY",
        title: "Checkout & Payment Flow",
        tone: "devops",
        description:
          "Integrasi pembayaran mendukung proses checkout yang konsisten sekaligus menjaga sinkronisasi status transaksi."
      },
      {
        icon: "TRK",
        title: "Order Fulfillment Tracking",
        tone: "data",
        description:
          "Status order dari diproses hingga diterima pembeli dapat dipantau untuk menjaga kualitas layanan purna jual."
      }
    ],
    journey: [
      "Seller memperbarui katalog produk dan stok dari web admin.",
      "Buyer menjelajahi produk melalui aplikasi mobile lalu menambahkan ke wishlist atau keranjang.",
      "User menyelesaikan checkout dan pembayaran sesuai metode yang tersedia.",
      "Order diproses oleh seller dan statusnya diperbarui bertahap.",
      "Pembeli menerima notifikasi progres sampai pesanan selesai."
    ],
    outcomes: [
      "Menyatukan sisi operasional seller dan pengalaman belanja buyer.",
      "Meningkatkan keteraturan proses order dengan status fulfillment yang jelas.",
      "Mendukung campaign penjualan melalui fitur promo dan wishlist."
    ]
  },
  echolytics: {
    hook:
      "Echolytics mengubah data komentar media sosial menjadi insight sentimen yang actionable, sehingga tim dapat memahami persepsi publik dan merespons isu dengan lebih cepat.",
    featureCards: [
      {
        icon: "CRWL",
        title: "Automated Data Crawling",
        tone: "devops",
        description:
          "Sistem mengumpulkan komentar berdasarkan kata kunci atau topik untuk memastikan data monitoring selalu terbarui."
      },
      {
        icon: "NLP",
        title: "Sentiment Classification Engine",
        tone: "data",
        description:
          "Pipeline NLP mengklasifikasikan sentimen positif, netral, dan negatif agar pola opini dapat dianalisis secara kuantitatif."
      },
      {
        icon: "TOP",
        title: "Topic-Based Insight Dashboard",
        tone: "workflow",
        description:
          "Dashboard menampilkan sebaran sentimen per topik sehingga tim komunikasi dapat fokus pada isu paling berpengaruh."
      },
      {
        icon: "TRND",
        title: "Trend & Spike Monitoring",
        tone: "data",
        description:
          "Perubahan volume percakapan dan lonjakan sentimen terdeteksi untuk membantu mitigasi reputasi lebih dini."
      },
      {
        icon: "RPT",
        title: "Summary Reporting",
        tone: "workflow",
        description:
          "Hasil analisis dirangkum dalam format yang mudah dipresentasikan ke stakeholder non-teknis."
      }
    ],
    journey: [
      "Tim menentukan topik atau keyword yang ingin dipantau.",
      "Sistem melakukan crawling dan membersihkan data komentar.",
      "Model NLP mengklasifikasikan sentimen dan menghasilkan agregasi metrik.",
      "Dashboard menampilkan tren opini berdasarkan periode tertentu.",
      "Tim menyusun strategi komunikasi berdasarkan insight yang ditemukan."
    ],
    outcomes: [
      "Mempercepat pemahaman sentimen publik tanpa analisis manual besar.",
      "Membantu identifikasi isu reputasi sejak fase awal.",
      "Menyediakan dasar data yang kuat untuk keputusan komunikasi."
    ]
  },
  "green-cold": {
    hook:
      "Green Cold Products memodernisasi inventaris fisik dengan sistem QR code end-to-end, sehingga proses pencatatan stok, validasi barang, dan audit dapat dilakukan lebih akurat.",
    featureCards: [
      {
        icon: "QR",
        title: "QR Label Generation",
        tone: "dev",
        description:
          "Setiap item inventaris memiliki label QR unik untuk mempermudah identifikasi barang di gudang maupun area operasional."
      },
      {
        icon: "SCAN",
        title: "Stock In-Out Scanning",
        tone: "workflow",
        description:
          "Pergerakan barang masuk dan keluar dicatat lewat proses scan agar data stok selalu sinkron dengan kondisi fisik."
      },
      {
        icon: "VAL",
        title: "Data Validation Control",
        tone: "data",
        description:
          "Sistem memvalidasi duplikasi dan ketidaksesuaian data sehingga kesalahan input dapat diminimalkan sejak awal."
      },
      {
        icon: "AUD",
        title: "Inventory Audit Trail",
        tone: "data",
        description:
          "Riwayat aktivitas stok terekam lengkap untuk mempermudah penelusuran saat stock opname dan pemeriksaan internal."
      },
      {
        icon: "OPS",
        title: "Warehouse Workflow",
        tone: "workflow",
        description:
          "Antarmuka operasional dibuat sederhana agar tim gudang dapat menjalankan proses harian dengan waktu input yang lebih singkat."
      }
    ],
    journey: [
      "Admin mendaftarkan item inventaris dan mencetak label QR.",
      "Tim gudang melakukan scan saat barang masuk atau keluar.",
      "Sistem memperbarui stok secara otomatis dan menyimpan histori transaksi.",
      "Supervisor melakukan validasi berkala terhadap data inventaris.",
      "Audit trail digunakan untuk rekonsiliasi data saat pelaporan."
    ],
    outcomes: [
      "Mengurangi kesalahan pencatatan inventaris berbasis input manual.",
      "Mempercepat proses stock opname dan validasi data barang.",
      "Meningkatkan keterlacakan setiap pergerakan stok secara digital."
    ]
  },
  certisend: {
    hook:
      "Certisend dibangun untuk mengotomasi pekerjaan administratif pengiriman sertifikat digital massal agar tim event atau pelatihan dapat menyelesaikan distribusi dokumen dalam waktu jauh lebih singkat.",
    featureCards: [
      {
        icon: "TPL",
        title: "Certificate Template Engine",
        tone: "dev",
        description:
          "Template sertifikat dapat disiapkan sekali lalu digunakan berulang untuk berbagai batch peserta dengan format yang konsisten."
      },
      {
        icon: "XLS",
        title: "Excel Data Import",
        tone: "workflow",
        description:
          "Data peserta diimpor dari file Excel dan divalidasi agar kesalahan nama atau alamat email dapat dideteksi sebelum pengiriman."
      },
      {
        icon: "MAIL",
        title: "Batch Email Delivery",
        tone: "devops",
        description:
          "Sistem mengirim sertifikat secara paralel dalam batch terkontrol sehingga throughput tinggi tetap menjaga stabilitas proses."
      },
      {
        icon: "STAT",
        title: "Delivery Status Tracking",
        tone: "data",
        description:
          "Status sukses, gagal, atau perlu kirim ulang ditampilkan agar tim bisa menindaklanjuti penerima yang belum menerima dokumen."
      },
      {
        icon: "LOG",
        title: "Campaign History Management",
        tone: "workflow",
        description:
          "Riwayat distribusi tersimpan per campaign untuk keperluan dokumentasi acara dan audit administrasi."
      }
    ],
    journey: [
      "Admin menyiapkan template sertifikat dan mengunggah data peserta.",
      "Sistem memvalidasi data lalu menghasilkan sertifikat personal.",
      "Email dikirim dalam batch sesuai daftar penerima.",
      "Tim memantau status pengiriman dan mengeksekusi retry jika diperlukan.",
      "Riwayat campaign disimpan sebagai dokumentasi distribusi."
    ],
    outcomes: [
      "Menghemat waktu distribusi sertifikat untuk peserta dalam jumlah besar.",
      "Mengurangi human error pada proses personalisasi dokumen.",
      "Meningkatkan akuntabilitas melalui tracking status pengiriman."
    ]
  },
  aurora: {
    hook:
      "Aurora menawarkan ruang gambar digital berbasis web yang ringan namun ekspresif, cocok untuk eksplorasi ide visual cepat tanpa ketergantungan pada aplikasi desktop.",
    featureCards: [
      {
        icon: "CANV",
        title: "Interactive Canvas Workspace",
        tone: "dev",
        description:
          "Canvas responsif memfasilitasi proses menggambar langsung di browser dengan pengalaman interaksi yang natural."
      },
      {
        icon: "LAYR",
        title: "Layer Management",
        tone: "workflow",
        description:
          "Pengguna dapat menata objek pada beberapa layer untuk menjaga proses editing lebih rapi dan mudah dikontrol."
      },
      {
        icon: "BRSH",
        title: "Brush & Tool Controls",
        tone: "workflow",
        description:
          "Pengaturan ukuran, opacity, dan jenis kuas membantu pengguna menyesuaikan gaya ilustrasi sesuai kebutuhan."
      },
      {
        icon: "EXP",
        title: "Export Ready Output",
        tone: "devops",
        description:
          "Hasil gambar dapat diekspor untuk dipakai pada presentasi, media sosial, atau kebutuhan prototyping desain."
      },
      {
        icon: "UX",
        title: "Creative User Experience",
        tone: "data",
        description:
          "Desain antarmuka menekankan fokus kerja visual dengan navigasi sederhana agar pengguna cepat masuk ke alur kreatif."
      }
    ],
    journey: [
      "User membuka workspace dan mulai menggambar pada canvas.",
      "Layer serta pengaturan kuas disesuaikan sesuai kebutuhan ilustrasi.",
      "Proses revisi dilakukan dengan kombinasi tool editing yang tersedia.",
      "Hasil akhir diekspor ke format gambar yang diinginkan.",
      "File dapat digunakan untuk kebutuhan desain atau dokumentasi ide."
    ],
    outcomes: [
      "Memudahkan eksplorasi ide visual langsung dari browser.",
      "Meningkatkan produktivitas sketsa cepat tanpa instalasi software tambahan.",
      "Memberikan alur kreatif yang ringan untuk desainer maupun non-desainer."
    ]
  },
  "cbi-portal-supplier": {
    hook:
      "Portal Supplier CBI membantu tim procurement mengelola siklus data vendor dari onboarding hingga monitoring kepatuhan dokumen dalam alur yang lebih terstandarisasi.",
    featureCards: [
      {
        icon: "REG",
        title: "Supplier Registration Management",
        tone: "workflow",
        description:
          "Proses pendaftaran supplier dirapikan dalam formulir digital agar data vendor tercatat lengkap sejak tahap awal."
      },
      {
        icon: "DOC",
        title: "Document Compliance Tracking",
        tone: "data",
        description:
          "Sistem memantau kelengkapan dan masa berlaku dokumen penting untuk menjaga kepatuhan administrasi perusahaan."
      },
      {
        icon: "APR",
        title: "Approval Workflow",
        tone: "workflow",
        description:
          "Tahap verifikasi dan persetujuan vendor berjalan terstruktur dengan status yang jelas bagi setiap pihak terkait."
      },
      {
        icon: "PROF",
        title: "Supplier Profile Dashboard",
        tone: "dev",
        description:
          "Informasi profil, histori dokumen, dan status kerja sama tersaji dalam panel terpusat untuk memudahkan evaluasi."
      },
      {
        icon: "LOG",
        title: "Administrative Audit Log",
        tone: "devops",
        description:
          "Perubahan data dan aktivitas pengguna dicatat untuk meningkatkan transparansi proses dan keamanan administrasi."
      }
    ],
    journey: [
      "Supplier didaftarkan melalui formulir onboarding digital.",
      "Dokumen pendukung diverifikasi oleh tim terkait.",
      "Status approval diproses sesuai tahapan administrasi internal.",
      "Profil supplier aktif dipantau untuk kebutuhan operasional procurement.",
      "Riwayat aktivitas disimpan sebagai referensi audit."
    ],
    outcomes: [
      "Mempercepat proses onboarding vendor baru.",
      "Meningkatkan kepatuhan dokumen dengan status monitoring yang jelas.",
      "Membuat evaluasi supplier lebih mudah melalui data terpusat."
    ]
  },
  "cbi-audit-vendor": {
    hook:
      "Portal Audit Vendor CBI menstandarkan proses audit eksternal dengan workflow digital yang memudahkan pencatatan temuan, scoring, dan tindak lanjut perbaikan vendor.",
    featureCards: [
      {
        icon: "PLAN",
        title: "Audit Planning Module",
        tone: "workflow",
        description:
          "Jadwal audit, ruang lingkup, dan tim pemeriksa dapat ditetapkan lebih rapi sebelum proses inspeksi dimulai."
      },
      {
        icon: "CHK",
        title: "Checklist-Based Assessment",
        tone: "dev",
        description:
          "Evaluator menggunakan checklist terstruktur agar penilaian antar vendor tetap konsisten dan terukur."
      },
      {
        icon: "FIND",
        title: "Findings & Corrective Action",
        tone: "workflow",
        description:
          "Temuan audit dicatat beserta rencana tindakan korektif sehingga proses follow-up dapat dipantau hingga tuntas."
      },
      {
        icon: "SCORE",
        title: "Scoring & Ranking Dashboard",
        tone: "data",
        description:
          "Skor hasil audit divisualisasikan untuk melihat performa vendor dan menentukan prioritas pembinaan."
      },
      {
        icon: "EVID",
        title: "Evidence Repository",
        tone: "devops",
        description:
          "Dokumen bukti audit disimpan terpusat agar mudah diakses saat review manajemen atau audit lanjutan."
      }
    ],
    journey: [
      "Tim menyusun rencana audit dan menentukan checklist penilaian.",
      "Proses audit lapangan dilakukan lalu temuan dicatat ke sistem.",
      "Vendor menerima daftar perbaikan sesuai hasil evaluasi.",
      "Tim memonitor progres corrective action sampai status closed.",
      "Hasil akhir dipakai untuk pemetaan kualitas vendor secara berkala."
    ],
    outcomes: [
      "Meningkatkan konsistensi proses audit vendor antar periode.",
      "Memperjelas tindak lanjut perbaikan melalui tracking corrective action.",
      "Menyediakan basis data penilaian vendor untuk keputusan strategis."
    ]
  },
  "web-desa-mekarjaya": {
    hook:
      "Web Desa Mekarjaya dirancang sebagai kanal informasi publik dan layanan administrasi online agar warga dapat mengakses kebutuhan desa lebih cepat tanpa banyak hambatan birokrasi.",
    featureCards: [
      {
        icon: "INFO",
        title: "Village Information Hub",
        tone: "dev",
        description:
          "Profil wilayah, data potensi desa, dan informasi umum dipublikasikan dalam struktur konten yang mudah diakses warga."
      },
      {
        icon: "SERV",
        title: "Online Letter Services",
        tone: "workflow",
        description:
          "Warga dapat mengajukan layanan surat secara online sehingga proses administrasi lebih efisien dibanding alur manual."
      },
      {
        icon: "NEWS",
        title: "News & Agenda Management",
        tone: "workflow",
        description:
          "Perangkat desa dapat memperbarui berita, pengumuman, dan agenda kegiatan untuk menjaga komunikasi publik tetap aktif."
      },
      {
        icon: "MAP",
        title: "Interactive Area Mapping",
        tone: "data",
        description:
          "Peta interaktif membantu warga memahami wilayah, fasilitas publik, dan informasi lokasi penting di lingkungan desa."
      },
      {
        icon: "ADM",
        title: "Administrative Backoffice",
        tone: "devops",
        description:
          "Panel admin memusatkan pengelolaan konten dan layanan sehingga tim desa dapat bekerja lebih terstruktur."
      }
    ],
    journey: [
      "Warga mengakses portal untuk melihat informasi desa dan layanan yang tersedia.",
      "Permohonan layanan administrasi dikirim melalui formulir online.",
      "Perangkat desa memproses permohonan dari panel backoffice.",
      "Status layanan diperbarui sehingga warga dapat memantau progresnya.",
      "Konten berita dan agenda desa dikelola rutin untuk menjaga keterbukaan informasi."
    ],
    outcomes: [
      "Meningkatkan aksesibilitas layanan publik bagi warga desa.",
      "Mempercepat proses administrasi melalui digitalisasi pengajuan surat.",
      "Memperkuat transparansi informasi antara pemerintah desa dan masyarakat."
    ]
  }
};

export const projects: Project[] = [...projectsData]
  .map((project) => ({
    ...project,
    content: enrichedContentBySlug[project.slug] ?? project.content,
    caseStudy: project.caseStudy ?? caseStudiesBySlug[project.slug]
  }))
  .sort((a, b) => a.order - b.order);

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
