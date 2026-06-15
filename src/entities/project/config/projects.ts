import type { ProjectInterface } from "@/entities/project/model/types";

export const Projects: ProjectInterface[] = [
  {
    id: "conflow",
    name: "Conflow",
    tagline:
      "학업 및 스터디 그룹을 위한 Monorepo 기반의 AI 협업 솔루션 — Multi-Agent 오케스트레이션 검증 프로젝트.",
    role: "Solo",
    roleDetail: "시스템 아키텍처 및 멀티 에이전트 오케스트레이션 전량 설계",
    status: "in-progress",
    startDate: new Date("2026-05-01"),
    techStack: ["Python", "LangGraph", "TypeScript", "Next.js"],
    description: {
      paragraphs: [
        "학업 및 스터디 그룹의 협업 흐름을 Multi-Agent 오케스트레이션으로 자동화하는 Monorepo 기반 솔루션입니다. 단일 에이전트의 역할 붕괴와 컨텍스트 오염을 방지하기 위해 Supervisor가 작업을 분할하고 전문 하위 에이전트에게 라우팅하는 구조를 채택했습니다.",
      ],
      decisions: [
        "LangChain 대신 LangGraph 프레임워크 선택: 순차적 체인 구조의 한계를 탈피하고, 스터디 협업 중 발생하는 복잡한 예외 처리 및 루프(Loop)를 유연하게 통제하기 위해 상태(State) 중심의 그래프 구조 채택.",
        "Supervisor Agent 패턴 구축: 단일 에이전트의 역할 붕괴와 컨텍스트 오염을 방지하기 위해 최상위 Supervisor가 작업을 분할하고 전문 하위 에이전트에게 라우팅하는 오케스트레이션 설계 기법 증명.",
      ],
    },
    githubLink: "https://github.com/Lee-Dongwook/Conflow",
  },
];

export const featuredProjects = Projects.slice(0, 3);
