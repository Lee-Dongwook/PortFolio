"use client";

import Link from "next/link";

import { Icons } from "@/shared/ui/icons";
import { buttonVariants } from "@/shared/ui/button";
import ChipContainer from "@/shared/ui/chip-container";
import CustomTooltip from "@/shared/ui/custom-tooltip";
import ExperienceDescription from "@/shared/ui/experience-description";
import { cn, formatDateFromObj } from "@/shared/lib/utils";
import type { ProjectInterface, ProjectStatus } from "@/entities/project";

interface ProjectDetailProps {
  project: ProjectInterface;
}

const statusLabel: Record<ProjectStatus, string> = {
  "in-progress": "In Progress",
  operating: "Operating",
  deprecated: "Deprecated",
  private: "Private",
};

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const periodText = `${formatDateFromObj(project.startDate)} – ${
    project.endDate ? formatDateFromObj(project.endDate) : "Present"
  }`;

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex",
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>

      <div>
        <time dateTime={project.startDate.toISOString()}>{periodText}</time>
        <h1 className="mt-2 flex items-center justify-between font-heading text-4xl leading-tight lg:text-5xl">
          {project.name}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="ml-4 w-6 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Link to the live website.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="ml-4 w-6 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.demoLink && (
              <CustomTooltip text="Link to the demo.">
                <Link href={project.demoLink} target="_blank">
                  <Icons.link className="ml-4 w-6 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
        <ChipContainer
          textArray={[
            `Role: ${project.role}${project.roleDetail ? ` — ${project.roleDetail}` : ""}`,
            `Status: ${statusLabel[project.status]}`,
          ]}
        />
      </div>

      <div className="mt-8 mb-7">
        <h2 className="mb-2 inline-block font-heading text-3xl leading-tight lg:text-3xl">
          Tech Stack
        </h2>
        <ChipContainer textArray={project.techStack} />
      </div>

      <div className="mb-7">
        <h2 className="mb-2 inline-block font-heading text-3xl leading-tight lg:text-3xl">
          Overview
        </h2>
        <ExperienceDescription
          paragraphs={project.description.paragraphs}
          bullets={[]}
        />
      </div>

      <div className="mb-7">
        <h2 className="mb-2 inline-block font-heading text-3xl leading-tight lg:text-3xl">
          Key Decisions
        </h2>
        <ul className="mt-4 list-disc pl-6">
          {project.description.decisions.map((decision, index) => (
            <li key={index} className="mb-2">
              {decision}
            </li>
          ))}
        </ul>
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
};
