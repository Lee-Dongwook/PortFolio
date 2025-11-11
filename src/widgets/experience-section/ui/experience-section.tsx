import PageContainer from "@/shared/ui/page-container";
import ProjectCard from "@/shared/ui/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Experiences } from "@/shared/config/experience";
import { pagesConfig } from "@/shared/config/pages";

const renderContent = (tabValue: string) => {
  let experienceArray = Experiences;
  if (tabValue === "personal") {
    experienceArray = experienceArray.filter(
      (value) => value.type === "Personal Project"
    );
  } else if (tabValue === "professional") {
    experienceArray = experienceArray.filter(
      (value) => value.type === "Professional"
    );
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {experienceArray.map((experience) => (
        <ProjectCard project={experience} key={experience.id} />
      ))}
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="container grid max-w-[30rem] grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          {renderContent("all")}
        </TabsContent>
        <TabsContent value="professional">
          {renderContent("professional")}
        </TabsContent>
        <TabsContent value="personal">{renderContent("personal")}</TabsContent>
      </Tabs>
    </PageContainer>
  );
};
