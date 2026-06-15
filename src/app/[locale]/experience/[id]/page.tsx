import { redirect } from "next/navigation";
import { ExperienceDetail } from "@/widgets/experience-detail";
import { Experiences } from "@/shared/config/experience";

interface ExperienceDetailProps {
  params: Promise<{ id: string }>;
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailProps) {
  const { id } = await params;
  const exp = Experiences.find((val) => val.id === id);
  if (!exp) {
    redirect("/experience");
  }
  return <ExperienceDetail exp={exp} />;
}
