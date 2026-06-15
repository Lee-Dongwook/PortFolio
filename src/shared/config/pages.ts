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
    title: "Engineering Philosophy",
    description:
      "내가 코드와 아키텍처를 어떤 원칙으로 다루는지, 그리고 어디로 향하고 있는지에 대한 기록.",
    metadata: {
      title: "About",
      description:
        "Lee DongWook의 엔지니어링 원칙, 이상적인 동료상, 그리고 AI Native 솔루션 아키텍트로서의 향후 방향성.",
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
