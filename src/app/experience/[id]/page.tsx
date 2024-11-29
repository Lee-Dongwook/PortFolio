import React from "react";
import { redirect } from "next/navigation";
import ExperienceDetailTemplate from "@/components/template/experience/detail/ExperienceDetailTemplate";
import { Experiences } from "@/config/experience";

interface ExperienceDetailPageProps {
  params: {
    expId: string;
  };
}

export default function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const exp = Experiences.find((val) => val.id === params.expId);
  if (!exp) {
    redirect("/experience");
  }
  return <ExperienceDetailTemplate exp={exp} />;
}
