import { ValidPages } from "@/shared/config/constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  about: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Lee DongWook's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Lee Dong Wook's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Lee DongWook's experience in building web applications.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "AI Native 정체성을 증명하는 사이드 프로젝트 컬렉션.",
    metadata: {
      title: "Projects",
      description:
        "Lee DongWook의 사이드 프로젝트 모음 — Multi-Agent Orchestration, Harness Engineering 등 AI Native 역량을 검증한 PoC 라인업.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Lee DongWook.",
    },
  },
  resume: {
    title: "Resume",
    description: "Lee DongWook's resume.",
    metadata: {
      title: "Resume",
      description: "Lee DongWook's resume.",
    },
  },
};
