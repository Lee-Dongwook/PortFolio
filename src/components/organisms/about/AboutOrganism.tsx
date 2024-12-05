import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/atoms/icons";
import ProjectCard from "@/components/molecules/project-card";
import SkillsCard from "@/components/molecules/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { featuredSkills } from "@/config/skills";
import { featuredExperiences } from "@/config/experience";
import ProfileImage from "@/public/certificate.png";
import { cn } from "@/lib/utils";
const AboutOrganism = () => {
  return (
    <>
      <section className="h-screen flex items-center pt-6 pb-8 mb-0 md:pb-12 md:py-20 lg:py-32 space-y-6">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={ProfileImage}
            alt="Profile Image"
            height={100}
            width={100}
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
          />
          <h1 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
            Lee DongWook
          </h1>
          <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
            Frontend Developer
          </h3>
          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <Link
              href={"https://github.com/Lee-DongWook"}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
            </Link>
            <Link
              href={"/contact"}
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                })
              )}
            >
              <Icons.contact className="w-4 h-4 mr-2" /> Contact
            </Link>
          </div>
          <Icons.chevronDown className="h-6 w-6 mt-10" />
        </div>
      </section>
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
    </>
  );
};

export default AboutOrganism;
