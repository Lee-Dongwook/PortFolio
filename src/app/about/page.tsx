import React from "react";
import { AboutProfile } from "@/widgets/about-profile";
import { FeaturedSkills } from "@/widgets/featured-skills";
import { FeaturedExperience } from "@/widgets/featured-experience";

export default function About() {
  return (
    <>
      <AboutProfile />
      <FeaturedSkills />
      <FeaturedExperience />
    </>
  );
}
