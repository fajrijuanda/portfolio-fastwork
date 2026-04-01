"use client";

import { useMemo, useState } from "react";
import { categories, projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

type FilterKey = "all" | "featured" | string;

const filterItems: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "featured", label: "Featured" },
  ...categories.map((category) => ({ key: category, label: category }))
];

export function ProjectFilterGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "featured") return projects.filter((project) => project.featured);
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Project category filters">
        {filterItems.map((item) => (
          <button
            aria-selected={activeFilter === item.key}
            className={`filter-btn ${activeFilter === item.key ? "active" : ""}`}
            key={item.key}
            onClick={() => setActiveFilter(item.key)}
            role="tab"
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-muted" style={{ marginTop: 16 }}>
          Tidak ada proyek pada kategori ini.
        </p>
      ) : null}
    </>
  );
}
