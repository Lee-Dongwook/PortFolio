import PageContainer from "@/shared/ui/page-container";
import { ProjectListCard, Projects } from "@/entities/project";
import { pagesConfig } from "@/shared/config/pages";

export const ProjectsSection = () => {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project) => (
          <ProjectListCard project={project} key={project.id} />
        ))}
      </div>
    </PageContainer>
  );
};
