import type { PhilosophyContent } from "@/entities/philosophy/model/types";

export const philosophy: PhilosophyContent = {
  principles: [
    {
      title: "비즈니스 가치와 기술의 정렬",
      body: "기술은 그 자체로 목적이 될 수 없다. 모든 아키텍처 개선과 신기술 도입은 제품의 출시 속도(Time-to-Market)를 앞당기거나 운영 비용을 절감하는 등 회사의 비즈니스 지표에 기여해야 한다.",
    },
    {
      title: "부수 효과 제어를 통한 유지보수 비용 최소화",
      body: "코드 내 불변성(Immutability)을 엄격히 통제하고 FSD 구조로 도메인 경계를 나누는 이유는, 제품 스케일업 시 기능 추가 및 디버깅에 소모되는 개발 공수(Opportunity Cost)를 줄이기 위함이다.",
    },
    {
      title: "데이터 기반의 인과관계 증명",
      body: "성능 개선이든 구조 변경이든, 모든 의사결정은 감정이 아닌 성능 프로파일러와 지표로 증명하여 자원의 낭비를 막는다.",
    },
  ],
  idealTeammates: [
    '제품의 기능 명세만 보고 코딩하는 것이 아니라, "이 기능이 유저와 회사에 어떤 가치를 주는가?"를 먼저 질문하는 동료.',
    "도메인 경계를 넘어 엔지니어링 파이프라인 전체(FE-BE-AI)의 흐름을 이해하고, 전체 시스템 관점에서 최적의 비용 효율성을 고민하는 동료.",
  ],
  aspiration:
    "프론트엔드 아키텍처 최적화 역량과 LangGraph 기반 오케스트레이션 제어 능력을 결합하여, 회사의 비즈니스 요구사항을 가장 빠르고 안정적인 제품의 형태로 시장에 인도하는 'AI Native 비즈니스 지향형 솔루션 아키텍트'.",
};
