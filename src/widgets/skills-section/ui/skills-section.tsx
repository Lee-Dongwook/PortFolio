import PageContainer from "@/shared/ui/page-container";
import SkillsCard from "@/shared/ui/skills-card";
import { pagesConfig } from "@/shared/config/pages";
import { skills } from "@/shared/config/skills";

export const SkillsSection = () => {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
};
