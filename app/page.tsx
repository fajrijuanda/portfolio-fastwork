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

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="pill">Open to Work • Full Stack Developer & Data Engineer</span>
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
                Hubungi Kami
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
              Fokus kolaborasi kami ada di pengembangan aplikasi full-stack, cloud deployment,
              dan data engineering workflow yang siap dipakai untuk kebutuhan production.
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
            <h2>Tentang Kami</h2>
            <p>
              {profile.summary}
            </p>
            <h3 style={{ marginTop: 14 }}>Tim Inti</h3>
            <div className="team-members">
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
                    <a href={member.linkedin} rel="noreferrer" target="_blank">
                      Lihat LinkedIn
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </article>
          <article className="panel">
            <h2>Quick Stats</h2>
            <p>Total Proyek: {projects.length}</p>
            <p>Featured: {featuredProjects.length}</p>
            <p>Domain: Cloud, Web App, Mobile, AI/Data, IoT, Data Engineering</p>
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
