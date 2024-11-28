import { ValidPages } from "@/config/constants";

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
