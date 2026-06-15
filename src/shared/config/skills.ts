/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icons } from "@/shared/ui/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "TypeScript",
    description:
      "엄격한 타입 모델링으로 A2UI 스키마처럼 비정형 외부 페이로드를 안전하게 받아내는 경계를 설계합니다. 제네릭과 판별 유니온을 활용한 런타임 가드 패턴을 실무에서 사용합니다.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "React",
    description:
      "Server Components와 Suspense 경계를 활용해 스트리밍 응답을 점진적으로 렌더링하는 구조를 설계합니다. 불변 패턴과 단방향 데이터 흐름을 우선합니다.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "App Router 환경에서 v15에서 v16으로의 마이그레이션을 단계적으로 리드했습니다. 크리티컬 패스 최적화로 초기 렌더링 지연을 52% 단축한 경험이 있습니다.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "LangGraph",
    description:
      "Conflow 프로젝트에서 Supervisor 패턴 기반 Multi-Agent 오케스트레이션을 설계했습니다. 상태 그래프로 루프와 예외 분기를 통제하는 구조를 직접 구현합니다.",
    rating: 4,
    icon: Icons.langGraph,
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind v3에서 v4로의 마이그레이션을 주도했습니다. 디자인 토큰과 유틸리티 합성으로 컴포넌트 응집도를 유지하면서 스타일 중복을 제거합니다.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "Zustand",
    description:
      "전역 상태를 최소화하고 슬라이스 단위로 의존성을 좁히는 패턴을 사용합니다. 불변 업데이트와 selector 메모이제이션으로 리렌더링을 통제합니다.",
    rating: 4,
    icon: Icons.zustand,
  },
  {
    name: "TanStack Query",
    description:
      "서버 상태와 클라이언트 상태를 분리하고 캐시 키 전략으로 동기화를 단순화합니다. Suspense 통합과 낙관적 업데이트를 실무에서 다룹니다.",
    rating: 4,
    icon: Icons.tanstackQuery,
  },
  {
    name: "Server-Driven UI (A2UI)",
    description:
      "Google A2UI 프로토콜 기반으로 에이전트가 전송하는 동적 레이아웃 스키마를 자체 디자인 시스템 컴포넌트로 매핑하는 선언적 렌더러를 구현했습니다.",
    rating: 4,
    icon: Icons.streaming,
  },
  {
    name: "SSE Streaming",
    description:
      "fetch와 ReadableStream 기반 AsyncGenerator(readSSELines)로 AI 문서 생성 시 발생하는 타임아웃을 해소하고 점진적 UI 렌더링 파이프라인을 구축했습니다.",
    rating: 4,
    icon: Icons.streaming,
  },
  {
    name: "Python",
    description:
      "Conflow의 LangGraph 런타임과 에이전트 노드를 직접 구현하는 수준에서 사용합니다. 프론트엔드와의 SSE 연동 및 오케스트레이션 흐름 제어에 활용합니다.",
    rating: 3,
    icon: Icons.python,
  },
  {
    name: "LangChain",
    description:
      "LangChain 기반 체인을 실험하며 한계를 파악한 뒤, 상태 중심 그래프인 LangGraph로 전환한 의사결정 경험이 있습니다.",
    rating: 3,
    icon: Icons.langChain,
  },
  {
    name: "Playwright",
    description:
      "사내 제품의 사용자 시나리오 기반 E2E 회귀 테스트에 사용합니다. 스트리밍 응답이 포함된 비결정적 UI의 안정적 검증 전략을 다룹니다.",
    rating: 3,
    icon: Icons.playwright,
  },
  {
    name: "Storybook",
    description:
      "디자인 시스템 컴포넌트의 시각적 회귀와 상태 격리에 사용합니다. A2UI 렌더러가 다루는 비정형 입력의 엣지 케이스를 스토리로 고정합니다.",
    rating: 3,
    icon: Icons.storybook,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
