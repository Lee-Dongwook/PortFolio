import React from "react";
import Link from "next/link";
import { Icons } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/button";
import SkillsCard from "@/shared/ui/skills-card";
import { pagesConfig } from "@/shared/config/pages";
import { featuredSkills } from "@/shared/config/skills";

export const FeaturedSkills = () => {
  return (
    <section
      id="skills"
      className="container space-y-6 bg-slate-50 dark:bg-transparent py-10"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {pagesConfig.skills.title}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {pagesConfig.skills.description}
        </p>
      </div>
      <SkillsCard skills={featuredSkills} />
      <Link href="/skills" className="flex justify-center">
        <Button variant={"outline"} className="rounded-xl">
          <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
        </Button>
      </Link>
    </section>
  );
};
