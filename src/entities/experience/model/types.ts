/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ValidCategory,
  ValidExpType,
  ValidSkills,
} from "@/shared/config/constants";

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
