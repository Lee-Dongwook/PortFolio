import React from "react";
import { redirect } from "next/navigation";
import { ExperienceDetail } from "@/widgets/experience-detail";
import { Experiences } from "@/shared/config/experience";

interface ExperienceDetailProps {
  params: {
    id: string;
  };
}

export default function ExperienceDetailPage({
  params,
}: ExperienceDetailProps) {
  const exp = Experiences.find((val) => val.id === params.id);
  if (!exp) {
    redirect("/experience");
  }
  return <ExperienceDetail exp={exp} />;
}
