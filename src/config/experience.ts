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
    companyName: "FutureWorkLab",
    type: "Professional",
    category: ["Frontend Developer"],
    shortDescription:
      "LLM과 GraphRAG 솔루션을 기반으로 소프트웨어 사업을 쉽고 효율적으로 운영하도록 돕는 지식 관리 및 워크플로우 자동화 SaaS를 제공하는 기업입니다.",
    websiteLink: "https://www.futureworklab.co.kr/",
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
  {
    id: "EXEM",
    companyName: "EXEM",
    type: "Professional",
    category: ["Frontend Intern"],
    shortDescription:
      "데이터베이스를 비롯한 시스템 전 구간 성능 관리에서 클라우드, 인공지능, 빅데이터 등의 서비스를 제공하는 B2B IT 기업입니다.",
    websiteLink: "https://www.ex-em.com/",
    techStack: ["JavaScript", "TypeScript", "Playwright", "StoryBook"],
    startDate: new Date("2023-07-10"),
    endDate: new Date("2023-12-15"),
    companyLogoImg: "",
    pagesInfoArray: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
