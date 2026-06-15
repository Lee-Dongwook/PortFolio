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

export const Experiences: ExperienceInterface[] = [
  {
    id: "futureworklab",
    companyName: "FutureWorkLab",
    type: "Professional",
    category: ["Frontend Developer"],
    shortDescription: "제조 AI 에이전트 플랫폼을 개발하는 기업입니다.",
    websiteLink: "https://www.axflow.io/",
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Playwright",
      "StoryBook",
    ],
    startDate: new Date("2024-10-07"),
    endDate: Date.now(),
    companyLogoImg: "",
    pagesInfoArray: [],
    descriptionDetails: {
      paragraphs: [
        "프론트엔드 개발 팀에서 2024년 10월부터 재직 중입니다. 제품의 제로베이스 초기 구축을 시작으로, A2UI 프로토콜 기반 선언적 UI 렌더러와 SSE 스트리밍 파이프라인 구축, 그리고 Next.js v16 · Tailwind CSS v4 마이그레이션 전 과정을 단계적으로 리드하고 있습니다.",
      ],
      bullets: [
        "Google A2UI 프로토콜을 채택하여 에이전트가 전송한 비정형 JSON 스키마를 자체 디자인 시스템 컴포넌트로 동적 매핑하는 선언적 UI 렌더러 구현.",
        "fetch · ReadableStream 기반 SSE 스트리밍 파이프라인(readSSELines AsyncGenerator)을 설계하여 AI 문서 생성 시 발생하는 타임아웃을 해소하고 점진적 UI 렌더링 구현.",
        "초기 진입 경로(/main)의 리소스 직렬화 구조를 분리하고 크리티컬 패스를 최적화하여 초기 렌더링 지연 시간을 7,868ms → 3,756ms (약 52%) 단축. Chrome DevTools · Lighthouse로 검증.",
        "웹팩 · 터보팩 빌드 매니페스트 분석을 통해 서비스 워커 프리캐시 대상을 필수 리소스 중심으로 재정의하여 네트워크 비용 절감과 캐시 업데이트 신뢰성 개선.",
        "필드 타입 20종 이상의 동적 폼에 대해 react-hook-form 제네릭 통합을 적용하여 A2UI 연계 런타임 스키마 에러를 방어.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
