import React from "react";
import Link from "next/link";

import { Icons } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/button";
import ChipContainer from "@/shared/ui/chip-container";
import type { ProjectInterface, ProjectStatus } from "@/entities/project/model/types";

interface ProjectListCardProps {
  project: ProjectInterface;
}

const statusLabel: Record<ProjectStatus, string> = {
  "in-progress": "In Progress",
  operating: "Operating",
  deprecated: "Deprecated",
  private: "Private",
};

const statusTone: Record<ProjectStatus, string> = {
  "in-progress":
    "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/20",
  operating:
    "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-300 dark:ring-green-500/20",
  deprecated:
    "bg-zinc-100 text-zinc-700 ring-zinc-600/20 dark:bg-zinc-500/10 dark:text-zinc-300 dark:ring-zinc-500/20",
  private:
    "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-500/20",
};

export default function ProjectListCard({ project }: ProjectListCardProps) {
  return (
    <div className="relative flex h-full max-w-sm flex-col rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-transparent">
      <div className="flex items-start justify-between gap-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h5>
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusTone[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="mt-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
        {project.tagline}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <ChipContainer textArray={project.techStack} />
      </div>
      <div className="mt-auto flex items-center gap-2 pt-5">
        <Link href={`/projects/${project.id}`}>
          <Button variant="default">
            Read More
            <Icons.chevronRight className="ml-1 w-4" />
          </Button>
        </Link>
        {project.githubLink && (
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub`}
          >
            <Button variant="outline" size="icon">
              <Icons.gitHub className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
