/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icons } from "@/components/atoms/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description: "",
    rating: 3,
    icon: Icons.nextjs,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
