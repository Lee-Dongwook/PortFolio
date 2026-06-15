import { redirect } from "next/navigation";
import { ProjectDetail } from "@/widgets/project-detail";
import { Projects } from "@/entities/project";

interface ProjectDetailProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { id } = await params;
  const project = Projects.find((val) => val.id === id);
  if (!project) {
    redirect("/projects");
  }
  return <ProjectDetail project={project} />;
}
