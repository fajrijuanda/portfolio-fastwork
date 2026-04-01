import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { getProjectImages } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [cover] = getProjectImages(project);
  const categoryClass = `badge-category-${project.category
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("/", "-")
    .replaceAll(" ", "-")}`;

  return (
    <Link className="card-link" href={`/project/${project.slug}`}>
      <article className="card">
        <Image
          src={cover}
          alt={project.title}
          width={640}
          height={400}
          priority={project.featured}
        />
        <div className="card-body">
          <div className="badges">
            <span className={`badge ${categoryClass}`}>{project.category}</span>
            {project.featured ? <span className="badge featured">Featured</span> : null}
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="badges">
            {project.tags.slice(0, 3).map((tag) => (
              <span className={`badge badge-tag ${categoryClass}`} key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <span className="btn btn-ghost card-action">Lihat Detail</span>
        </div>
      </article>
    </Link>
  );
}
