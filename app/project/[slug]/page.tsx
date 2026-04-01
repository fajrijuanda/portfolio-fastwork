import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectCard } from "@/components/project-card";
import {
  getProjectBySlug,
  getProjectImages,
  getRelatedProjects,
  projects
} from "@/lib/projects";

type ProjectPageParams = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const images = getProjectImages(project);
  const relatedProjects = getRelatedProjects(project.slug, project.category);

  return (
    <section>
      <div className="container project-header">
        <Link className="btn btn-ghost" href="/#projects">
          ← Kembali ke Proyek
        </Link>
        <h1 style={{ marginTop: 14, fontSize: "clamp(2rem, 4vw, 3rem)" }}>{project.title}</h1>
        <p className="text-muted" style={{ marginTop: 8 }}>
          {project.description}
        </p>
        <div className="badges" style={{ marginTop: 10 }}>
          <span className="badge">{project.category}</span>
          {project.tags.map((tag) => (
            <span className="badge" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="container section" style={{ paddingTop: 0 }}>
        <ProjectGallery images={images} title={project.title} />
      </div>

      <div className="container section" style={{ paddingTop: 0 }}>
        <article className="panel">
          <h2>Tentang Proyek</h2>
          <p>{project.content}</p>
        </article>
      </div>

      {project.caseStudy ? (
        <div className="container section" style={{ paddingTop: 0 }}>
          <article className="panel case-study-panel">
            <h2>Kenapa {project.title} Menarik Untuk Client?</h2>
            <p className="text-muted" style={{ marginTop: 8 }}>
              {project.caseStudy.hook}
            </p>

            <div className="case-study-grid">
              {project.caseStudy.featureCards.map((feature) => (
                <article className={`case-feature tone-${feature.tone}`} key={feature.title}>
                  <div className="case-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="case-two-col">
              <div>
                <h3>Alur Produk</h3>
                <ul className="case-list">
                  {project.caseStudy.journey.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Dampak Bisnis</h3>
                <ul className="case-list">
                  {project.caseStudy.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      ) : null}

      {relatedProjects.length ? (
        <div className="container section" style={{ paddingTop: 0 }}>
          <h2 style={{ marginBottom: 14 }}>Proyek Terkait</h2>
          <div className="projects-grid">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.slug} project={related} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
