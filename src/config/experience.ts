/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidCategory, ValidExpType, ValidSkills } from "@/config/constants";

interface PagesInfoInterface {
  title: string;
  imageArray: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date | number;
  companyLogoImg?: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArray: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "futureworklab",
    companyName: "Future WorkLab",
    type: "Professional",
    category: ["Frontend Developer"],
    shortDescription: "",
    websiteLink: "",
    techStack: ["Next.js"],
    startDate: new Date("2024-10-07"),
    endDate: Date.now(),
    companyLogoImg: "",
    pagesInfoArray: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
