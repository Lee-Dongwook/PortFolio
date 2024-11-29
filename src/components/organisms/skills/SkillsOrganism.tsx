import PageContainer from "@/components/molecules/page-container";
import SkillsCard from "@/components/molecules/skills-card";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";

const SkillsOrganism = () => {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
};

export default SkillsOrganism;
