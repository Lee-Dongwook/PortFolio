import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { featuredSkills } from "@/shared/config/skills";
import { Experiences } from "@/shared/config/experience";
import { SocialLinks } from "@/shared/config/socials";
import ProfileImage from "@/public/certificate.png";
import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/button";

export default function Home() {
  const totalProjects = Experiences.length;
  const yearsOfExperience = new Date().getFullYear() - 2023;
  const topSkills = featuredSkills.slice(0, 4);

  return (
    <div className="container py-8 space-y-8">
      {/* Profile Header Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Image
                src={ProfileImage}
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full border-4 border-primary"
              />
              <div>
                <h1 className="text-2xl font-bold">Lee DongWook</h1>
                <p className="text-muted-foreground">Frontend Developer</p>
              </div>
              <div className="flex gap-2 w-full">
                {SocialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <IconComponent className="h-4 w-4" />
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "sm" }), "w-full")}
              >
                <Icons.contact className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Years of Experience
              </CardTitle>
              <Icons.calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{yearsOfExperience}+ Years</div>
              <p className="text-xs text-muted-foreground">
                Since 2023
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Projects
              </CardTitle>
              <Icons.folder className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProjects}</div>
              <p className="text-xs text-muted-foreground">
                Professional experiences
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tech Skills
              </CardTitle>
              <Icons.code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{featuredSkills.length}+</div>
              <p className="text-xs text-muted-foreground">
                Technologies & Frameworks
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Current Role
              </CardTitle>
              <Icons.briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">FutureWorkLab</div>
              <p className="text-xs text-muted-foreground">
                Frontend Developer
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Top Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Top Skills</span>
            <Link href="/skills">
              <Button variant="ghost" size="sm">
                View All
                <Icons.chevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {topSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center space-x-4 rounded-lg border p-4"
                >
                  <IconComponent className="h-8 w-8" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {skill.name}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-2 w-2 rounded-full",
                            i < skill.rating
                              ? "bg-primary"
                              : "bg-muted"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Experience Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Work Experience</span>
            <Link href="/experience">
              <Button variant="ghost" size="sm">
                View All
                <Icons.chevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Experiences.map((exp, index) => {
              const isOngoing = exp.endDate === Date.now();
              return (
                <div key={exp.id} className="relative flex gap-4">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                      <Icons.briefcase className="h-5 w-5 text-primary" />
                    </div>
                    {index < Experiences.length - 1 && (
                      <div className="w-px h-full bg-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {exp.companyName}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.category.join(", ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {exp.startDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}{" "}
                          -{" "}
                          {isOngoing
                            ? "Present"
                            : new Date(exp.endDate).toLocaleDateString(
                                "en-US",
                                { year: "numeric", month: "short" }
                              )}
                        </p>
                        {isOngoing && (
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-sm">{exp.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
