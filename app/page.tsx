import Image from "next/image";
import Link from "next/link";
import { ProjectFilterGrid } from "@/components/project-filter-grid";
import { featuredProjects, projects } from "@/lib/projects";
import { profile, services, skills, teamMembers } from "@/lib/profile";

export default function HomePage() {
  const skillBadges = [
    ...skills.dev.map((label) => ({ label, tone: "dev" })),
    ...skills.devops.map((label) => ({ label, tone: "devops" })),
    ...skills.data.map((label) => ({ label, tone: "data" })),
    ...skills.workflow.map((label) => ({ label, tone: "workflow" }))
  ];
  const totalCategories = new Set(projects.map((project) => project.category)).size;
  const totalTechnologies = new Set(projects.flatMap((project) => project.tags)).size;
  const coreTeamSize = teamMembers.length;
  const topProjectDomains = Object.entries(
    projects.reduce<Record<string, number>>((acc, project) => {
      acc[project.category] = (acc[project.category] ?? 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="pill">Open to Work • Full Stack & Mobile Developer</span>
            <h1>
              Bangun Produk Digital
              <span className="gradient"> yang Cepat, Solid, dan Terukur.</span>
            </h1>
            <p>
              Versi ini dibuat sepenuhnya statis di Next.js: tanpa koneksi database, tanpa API backend,
              dengan data proyek lokal agar mudah dipindah, cepat di-load, dan siap deploy.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="#projects">
                Lihat Proyek
              </Link>
              <Link className="btn btn-ghost" href="#contact">
                Hubungi Saya
              </Link>
            </div>
            <div className="badges" style={{ marginTop: 14 }}>
              {skillBadges.map((item) => (
                <span className={`badge badge-skill-${item.tone}`} key={item.label}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-card hero-info-card">
            <h3>{profile.role}</h3>
            <p>
              Fokus utama saya ada di pengembangan aplikasi full-stack, mobile development,
              dan cloud deployment yang siap dipakai untuk kebutuhan production.
            </p>
            <div className="badges">
              <span className="badge">Web Development</span>
              <span className="badge">Data Pipeline</span>
              <span className="badge">Cloud Deployment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container grid-2">
          <article className="panel">
            <h2>Tentang Saya</h2>
            <p>
              Saya berdedikasi untuk mengembangkan solusi digital berkualitas tinggi yang menggabungkan keahlian dalam full-stack development dan mobile development. Saya menangani proses end-to-end dari perencanaan hingga deployment, dengan fokus pada teknologi modern dan praktik terbaik dalam industri.
            </p>
            <div className="team-members" style={{ marginTop: 24 }}>
              {teamMembers.map((member) => (
                <article className="team-member" key={member.name}>
                  <div className="team-avatar-wrap">
                    <Image
                      src={member.photo}
                      alt={`Foto ${member.name}`}
                      width={80}
                      height={80}
                      className="team-avatar"
                    />
                  </div>
                  <div className="team-member-body">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                    <div className="team-member-links">
                      {member.github && (
                        <a href={member.github} rel="noreferrer" target="_blank">
                          GitHub
                        </a>
                      )}
                      <a href={member.linkedin} rel="noreferrer" target="_blank">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>
          <article className="panel">
            <h2>Quick Stats</h2>
            <div className="quick-stats-grid">
              <article className="quick-stat-card">
                <p className="quick-stat-label">Total Proyek</p>
                <p className="quick-stat-value">{projects.length}</p>
              </article>
              <article className="quick-stat-card">
                <p className="quick-stat-label">Featured Project</p>
                <p className="quick-stat-value">{featuredProjects.length}</p>
              </article>
              <article className="quick-stat-card">
                <p className="quick-stat-label">Kategori Domain</p>
                <p className="quick-stat-value">{totalCategories}</p>
              </article>
              <article className="quick-stat-card">
                <p className="quick-stat-label">Teknologi Digunakan</p>
                <p className="quick-stat-value">{totalTechnologies}+</p>
              </article>
            </div>

            <div className="quick-stats-summary">
              <p>Fokus keahlian: Full Stack Developer & Mobile Developer.</p>
              <p>Layanan aktif yang ditawarkan: {services.length} kategori.</p>
              <p>Pendekatan kerja: end-to-end dari perencanaan, development, hingga deployment.</p>
            </div>

            <h3 style={{ marginTop: 14 }}>Top Domain Proyek</h3>
            <ul className="quick-stats-list">
              {topProjectDomains.map(([category, count]) => (
                <li key={category}>
                  <span>{category}</span>
                  <strong>{count} proyek</strong>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Layanan</h2>
              <p className="section-sub">Pilihan layanan pengembangan yang bisa dikerjakan secara end-to-end.</p>
            </div>
          </div>

          <div className="projects-grid">
            {services.map((service) => (
              <article className={`panel service-card service-${service.tone}`} key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="text-muted" style={{ marginTop: 6 }}>
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Project Showcase</h2>
              <p className="section-sub">Filter kategori jalan sepenuhnya di sisi client dengan data lokal.</p>
            </div>
          </div>
          <ProjectFilterGrid />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container panel">
          <h2>Kontak</h2>
          <p className="text-muted">Terbuka untuk kolaborasi freelance, proyek internal tim, atau konsultasi teknis.</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={profile.contact.whatsapp} rel="noreferrer" target="_blank">
              Chat WhatsApp
            </a>
            <a className="btn btn-ghost" href={profile.contact.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a className="btn btn-ghost" href={profile.contact.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
