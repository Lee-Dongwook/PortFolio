import React from "react";
import Link from "next/link";
import { Icons } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/button";
import ProjectCard from "@/shared/ui/project-card";
import { pagesConfig } from "@/shared/config/pages";
import { featuredExperiences } from "@/shared/config/experience";

export const FeaturedExperience = () => {
  return (
    <section
      id="experience"
      className="container space-y-6 dark:bg-transparent py-10 my-14"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {pagesConfig.experience.title}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {pagesConfig.experience.description}
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4  md:w-full lg:grid-cols-3">
        {featuredExperiences.map((exp) => (
          <ProjectCard key={exp.id} project={exp} />
        ))}
      </div>
      <Link href="/experience" className="flex justify-center">
        <Button variant={"outline"} className="rounded-xl">
          <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
        </Button>
      </Link>
    </section>
  );
};
