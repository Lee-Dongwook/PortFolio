/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/atoms/icons";
import ExperienceDescription from "@/components/molecules/exp-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";

interface ExperienceDetailOrganismProps {
  exp: any;
}

const ExperienceDetailOrganism = ({ exp }: ExperienceDetailOrganismProps) => {
  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/experience"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Experience
      </Link>
      <div>
        <time dateTime={Date.now().toString()}>
          {formatDateFromObj(exp.startDate)}
        </time>
      </div>
    </article>
  );
};

export default ExperienceDetailOrganism;
