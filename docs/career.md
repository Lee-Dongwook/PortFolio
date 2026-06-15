# Career Intake

## 코드 반영 현황 (last update: 2026-06-15 / projects 추가 2026-06-15)

> 다음 세션 진입 시 이 표부터 확인. 체크된 섹션은 이미 코드에 반영됨, 미체크는 SoT만 작성된 상태.

| 섹션                               | 상태 | 반영 위치 / 메모                                                                                                                                                                                                                                         |
| ---------------------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| §0 메타 / Identity                 | [x]  | `src/shared/config/site.ts`, `src/shared/config/socials.ts` (commit `64c5485 feat: meta for bio`)                                                                                                                                                        |
| §1 커리어 타임라인 — FutureWorkLab | [x]  | `src/shared/config/experience.ts` 의 `futureworklab` 엔트리 (shortDescription / techStack 8종 / paragraphs 1 / bullets 5 / websiteLink = axflow.io). 이전 EXEM 엔트리 제거. `ValidSkills` 에 `"TanStack Query"` 추가 (`src/shared/config/constants.ts`). |

| §1 커리어 타임라인 — 추가 회사 | [ ] | career.md 본문에 추가 회사 블록 미작성. EXEM 의도적으로 제외(SoT에 없음). |
| §2 프로젝트 (Conflow 등) | [x] | `entities/project/{model,config,ui}` 신설 (Conflow 1건 SoT 반영). `widgets/projects-section` · `widgets/project-detail` 신규. 라우트 `/[locale]/projects`, `/[locale]/projects/[id]` 추가. `routesConfig.mainNav` 에 `Projects` 삽입. `ValidPages` + `pagesConfig.projects` 확장. 처음부터 `entities/` 슬라이스로 정착 — experience 도메인 FSD 위반과 달리 정합. CLAUDE.md 4개 프로젝트 중 Interactive Portfolio / zIndexScan / LinkBrain 은 SoT 비어있어 미노출. |
| §3 AI Native 역량 디테일 | [ ] | playground / chat 스크립트 데이터 아직 미생성 (`content/chat/*` 부재). |
| §4 기술 스택 (rating) | [x] | `src/shared/config/skills.ts` 재작성 — career.md §3 키워드 기반 13종(TS / React / Next.js / LangGraph / Tailwind / Zustand / TanStack Query / A2UI / SSE / Python / LangChain / Playwright / Storybook). rating 은 보수 등급(prod=4 / hands-on=3, 5점 회피). Hero topSkills(0,4) = TS·React·Next·LangGraph 로 AI Native 정체성 anchor. UI(skills-card, page.tsx) 무수정. `entities/skills/` dead 트리 삭제. 아이콘은 `src/shared/ui/icons.tsx` 에 lucide(Network/Workflow/Layers/Radio/Database) + Si(Python/Reactquery/Storybook) 추가. SiPlaywright 미존재로 lucide Code 폴백. |
| §5 학력 / 자격증 | [x] | `entities/credentials/{model,config}` 신설 (학력 1·자격증 3·OSS 기여 1, 빈 항목인 발표/수상 미노출). `widgets/credentials` 신규 — `/[locale]/about` 페이지의 `EngineeringPhilosophy` 아래로 합성. 별도 라우트 추가 없음. |
| §6 엔지니어링 철학 | [x] | `entities/philosophy/{model,config}` 신설 (원칙 3·동료상 2·향후 모습 1, 부정 톤 항목 일체 제외). `widgets/engineering-philosophy` + `/[locale]/about` 라우트 추가. `routesConfig.mainNav` 에 `About` 삽입. `pagesConfig.about` 의미를 'Home' → 'Engineering Philosophy' 로 재정의(미사용 키였음). |
| §7 채용 / 협업 컨택 | [x] | `entities/availability/{model,config}` 신설 (status=open, full-time, Seoul/Remote/Intl Remote, Any size, Cloud Monitoring·Manufacturing AX, KST 09–20, Email·LinkedIn·Form). `widgets/contact-availability` 신규 — `widgets/contact-section` 안 form 위에 카드 1개로 삽입. 별도 라우트 추가 없음. Pricing 페이지는 Phase 3 까지 보류. |
| §8 자유 메모 | [-] | 본인 보류. |

### 부수 정리

- `src/entities/experience/` 트리(미사용 중복 데이터·UI) 삭제 — `shared/config/experience.ts` + `shared/ui/project-card.tsx` + `shared/ui/experience-description.tsx` 가 active SoT.
- 알려진 FSD 위반: 위 active 트리가 도메인 데이터·엔티티 UI를 `shared/` 레이어에 두고 있음. 정렬 시 위젯 3개(`experience-section`, `experience-detail`, `featured-experience`) + 페이지 2개의 import 경로 변경 필요. 별도 청크로 분리.
- ~~알려진 코드 위반: `src/widgets/experience-section/ui/experience-section.tsx` 의 `let experienceArray`~~ → 삼항 단일 const 로 전환 완료 (CLAUDE.md §4-3 준수).

### 다음 후보 (가벼운 청크 순)

1. websiteLink 정책 확정 (axflow.io 유지 vs 회사 URL 복귀 + product URL은 bullets로 이전).
2. ~~Projects 엔티티 신설 (Conflow 우선).~~ → 완료 (2026-06-15).
3. ~~§6 엔지니어링 철학 about 위젯.~~ → 완료 (2026-06-15).
4. CLAUDE.md 4 프로젝트 SoT 보강 (Interactive Portfolio / zIndexScan / LinkBrain) — career.md §2 본문에 템플릿 복제 작성 필요.
5. ~~§7 채용/협업 컨택 → `/[locale]/contact` 연결.~~ → 완료 (2026-06-15).
6. §3 AI Native 채팅 스크립트 (`content/chat/{locale}/*.json` + ChatNode 타입, revamp-plan S1).
7. FSD 정렬 리팩터(experience 도메인을 `entities/experience` 로 환원, skills dead 트리 동반 정리, `let` 위반 처리).

---

> 이 문서는 포트폴리오 개편 시 **갱신 소스(SoT)** 가 됩니다. 여기 적힌 내용이 `src/shared/config/{experience,skills,...}.ts`, 채팅 스크립트 노드(`content/chat/*`), 그리고 `/[locale]/experience` · `/[locale]/changelog` 등으로 흘러갑니다.
>
> 작성 가이드:
>
> - **모르거나 비공개로 두고 싶은 항목은 비워두세요.** 빈 항목은 페이지에 노출하지 않습니다.
> - 1인칭(저는 ~) 기준으로 적어주세요. 채팅 모듈에서 그대로 활용됩니다.
> - 정량 수치는 가능한 만큼만. "추정 N%" 도 OK, 없으면 생략.
> - 각 섹션 끝의 `// note:` 라인에 자유롭게 코멘트 남기셔도 됩니다.

---

## 0. 메타 / Identity

→ 사용처: 랜딩 Hero, footer, `<head>` meta, JSON-LD, 채팅 첫 인사

```
풀네임 (KR / EN): 이동욱 (DongWook Lee)
한 줄 소개 (1인칭, 100자 이내):
현재 직책 / 소속: FE Engineer / FutureWorkLab
가용성: [ O ] 현직 - 이직 클로즈  [ O ] 현직 - 이직 오픈  [ ] 프리랜서  [ ] 풀타임 오픈
위치 (도시): Pyeongtaek, Gyeonggi-do, Republic of Korea  (대한민국, 경기도 평택시)
이메일 (공개용): dlehddnr0713@gmail.com
GitHub: https://github.com/Lee-Dongwook
LinkedIn: https://www.linkedin.com/in/dong-wook-lee-1095112a0
velog (혹은 기존 블로그): https://velog.io/@dlehddnr99
기타 외부 링크 (X, Threads, Speaker Deck 등): 지금 현재는 여기까지만
```

`// note:`

---

## 1. 커리어 타임라인

→ 사용처: `/[locale]/experience` 리스트 + 상세, 채팅의 "경력 알려줘" 분기

회사/조직마다 아래 블록을 복제해서 채워주세요. 최신 → 과거 순.

### [퓨처워크랩(FutureWorkLab)] — [FE Engineer]

```
기간: 2024.10 ~ 현재 (약 1년 9개월 재직 중)
팀 / 부서: 프론트엔드 개발 팀
회사 한줄 설명 (외부인이 모를 수 있으니): 제조 AI 에이전트 플랫폼 개발사
재직 형태: [ O ] 정규직  [ ] 계약직  [ ] 인턴  [ ] 프리랜서

본인이 한 일 (3~5개, 동사로 시작, 결과 중심 권장):
- Google A2UI 프로토콜을 채택하여 에이전트가 전송한 비정형 JSON 스키마를 자체 디자인 시스템 컴포넌트로 동적 매핑하는 선언적 UI 렌더러 구현
- fetch 및 ReadableStream 기반 SSE 스트리밍 파이프라인(readSSELines AsyncGenerator)을 설계하여 AI 문서 생성 시 발생하는 타임아웃 해소 및 점진적 UI 렌더링 구현
- 초기 진입 경로(/main)의 리소스 직렬화 구조를 분리하고 크리티컬 패스(Critical Path) 최적화를 주도하여 초기 렌더링 지연 시간 단축
- 웹팩/터보팩 빌드 매니페스트 분석을 통해 서비스 워커 프리캐시 대상을 필수 리소스 중심으로 재정의하여 캐시 안정성 개선
- 제품의 제로베이스 초기 구축을 시작으로 Next.js v16 및 Tailwind CSS v4 프레임워크 마이그레이션 전 과정을 단계적으로 리드

핵심 기술 스택 (실제 손댄 것만): TypeScript, React, Next.js (v15~v16), TanStack Query, Zustand, Tailwind CSS (v3~v4), Playwright, StoryBook

정량 임팩트 (있는 만큼):
- 초기 렌더링 크리티컬 패스(Critical Path) 지연 시간 52% 단축 (7,868ms → 3,756ms, Chrome DevTools 및 Lighthouse 검증)
- 서비스 워커 프리캐시 용량 최적화를 통한 네트워크 비용 절감 및 캐시 업데이트 신뢰성 확보
- 필드 타입 20종 이상의 동적 폼에 대한 react-hook-form 제네릭 통합으로 런타임 스키마 에러율 방어 (문서 생성 에이전트 내, A2UI 프로토콜 연계된 내용입니다.)

이 시기의 turning point (배움/결정/실패 모두 환영, 1~2개):
- 백엔드 팀원들과 Spring AI 스터디를 진행하며 단순 API 연동을 넘어 서버 구조와 AI 에이전트의 연계 흐름(Orchestration)을 깊게 이해하게 됨. 이는 단순 FE 개발자에서 AI Native 엔지니어로 시야를 확장하는 계기가 됨
- 최신 프레임워크(Next.js 16, Tailwind v4) 업그레이드를 주도하며 하이퍼 스케일 환경에서의 리스크 사전 검증 및 단계적 마이그레이션 전략의 중요성을 학습함.

외부에 공개 가능한 산출물 링크 (서비스 URL, GitHub, 글):
- 사내 프로젝트 구 주소 : https://www.linkbrain.kr/
- 사내 프로젝트 신 주소 : https://www.axflow.io/
```

### [회사명] — [직책]

(위 템플릿 복제)

`// note:`

---

## 2. 프로젝트 (회사 외 / 사이드 포함)

→ 사용처: `/[locale]/experience` 안의 프로젝트 카드, 채팅의 "Conflow가 뭐야?" 같은 분기

CLAUDE.md에 적힌 4개(Interactive Portfolio, Conflow, zIndexScan, LinkBrain & Document Agent)는 기본 포함. 각각에 대해 아래를 채워주세요. 추가 프로젝트도 같은 템플릿.

### Conflow

```
한 줄 설명:학업 및 스터디 그룹을 위한 Monorepo 기반의 AI 협업 솔루션 (Multi-Agent 오케스트레이션 검증 프로젝트)
역할: 단독 개발 (시스템 아키텍처 및 멀티 에이전트 오케스트레이션 전량 설계)
기간: 2026-05 ~ 현재
기술 스택: Python, LangGraph, TypeScript, Next.js
가장 자랑할 기술적 의사결정 (1~2개, "왜" 중심):
- LangChain 대신 LangGraph 프레임워크 선택: 순차적 체인 구조의 한계를 탈피하고, 스터디 협업 중 발생하는 복잡한 예외 처리 및 루프(Loop)를 유연하게 통제하기 위해 상태(State) 중심의 그래프 구조 채택.
- Supervisor Agent 패턴 구축: 단일 에이전트의 역할 붕괴와 컨텍스트 오염을 방지하기 위해 최상위 Supervisor가 작업을 분할하고 전문 하위 에이전트에게 라우팅하는 오케스트레이션 설계 기법 증명.

현재 상태: [ ] 운영 중  [ O ] 개발 중  [ ] 폐기  [ ] 비공개
외부 링크 (GitHub, 데모, 글): https://github.com/Lee-Dongwook/Conflow
스크린샷/데모 영상 경로 (있으면): https://github.com/Lee-Dongwook/Conflow README 참고할것
```

`// note: 현재는 우선 여기까지만 적어볼것.`

---

## 3. AI Native 역량 디테일

→ 사용처: `/[locale]/playground`, 채팅에서 "AI 작업 뭐 해봤어?" 분기, 차별화 카피

CLAUDE.md에 적힌 키워드(LangGraph, Multi-Agent, RAG, A2UI, Harness)별로 **실제 경험 깊이**를 적어주세요. 추정/과장 금지.

```
직접 다뤄본 LLM 프로바이더 (체크 + 사용 깊이):
[O] OpenAI            (실험 및 프롬프트 테스트)
[O] Anthropic (Claude) (실무 적용 및 Claude Code 활용 고도화)
[O] Google (Gemini)    (실험 및 RAG 파이프라인 연동)
[ ] 오픈소스 (Llama / Qwen 등) (직접 다뤄본 적은 없으나 현재 사내 LLM Agent에 내장되어 있음을 구조적 파악)

직접 다뤄본 프레임워크 / SDK:
[O] LangChain
[O] LangGraph         (Supervisor 패턴 직접 설계 경험: Y)
[X] Vercel AI SDK
[X] Anthropic SDK 직접 사용
[O] OpenAI SDK 직접 사용
[ ] 자체 구현 (어떤 부분?)

구축/기여해본 시스템 유형 (각각 1~2줄로 설명):
- RAG 파이프라인: AxFlow 플랫폼 내부 문서 생성 및 파싱 결과물에 대한 컨텍스트 추출 파이프라인 이해 및 결합.
- Multi-Agent 오케스트레이션: Conflow 프로젝트 내에서 중앙 라우팅 에이전트 기반의 Supervisor 멀티 에이전트 워크플로우 설계.
- Agent용 Tool/Function calling: 에이전트가 전송하는 다양한 필드 타입(20종 이상)을 안전하게 처리하기 위한 JSON 스키마 명세 및 프론트엔드 액션 매핑.
- Streaming UI / SSE: fetch와 ReadableStream을 이용한 AsyncGenerator 기반의 실시간 청크 단위 점진적 UI 렌더링 파이프라인 구축.
- Server-Driven UI (A2UI): Google A2UI 프로토콜 기반으로 에이전트가 동적으로 생성하는 레이아웃 스키마를 런타임에서 파싱하여 렌더링하는 클라이언트 구현.
- Evaluation / Guardrails: allowedFieldPaths 가드 로직을 설계하여 비정상적으로 들어오는 에이전트 스키마 아웃풋의 프론트엔드 폭주 방어.

가장 자신 있는 AI 관련 한 가지 (면접에서 30분 설명 가능한 주제): "비정형 데이터를 생성하는 AI 에이전트 아웃풋을 안전하게 받아내기 위한 A2UI 프로토콜 설계와, SSE 스트리밍 청크의 안정적 결합을 보장하는 프론트엔드 아키텍처 구축 전략"
```

`// note: 우선 제미나이의 응답을 참고하였는데 다소 진솔하게 수정을 해야할듯 싶음.`

---

## 4. 기술 스택 (현재 시점 기준)

→ 사용처: `/[locale]/skills`, Hero "Top Skills" 4개 선정 근거

5단계로 자가 평가. **3 이상만 적어주세요** (1~2는 노출 가치 낮음).

`5 = 프로덕션에서 비표준 영역까지 자신, 4 = 프로덕션 OK, 3 = 작은 기능 단독 가능`

```
Language:
- TypeScript: ?/5
- (그 외)

Framework / Runtime:
- Next.js (버전 명시): ?/5
- React: ?/5
- (그 외)

Styling / UI:
- Tailwind: ?/5
- Radix UI / shadcn:
- (그 외)

State / Data:
- Zustand:
- (TanStack Query / Jotai / 기타)

AI / LLM:
- (§3에서 적은 항목별 점수)

Infra / DevOps:
- Vercel / Cloudflare / AWS / GCP:
- Docker:
- CI (GitHub Actions 등):

Backend (다루는 만큼):
- Node.js:
- Python (FastAPI / LangGraph runtime):

Testing:
- Vitest / Jest / Playwright:

기타 도구 (꼭 적고 싶은 것):
```

`// note: 솔직히 기술 측정 영역은 지금 현재 점수를 부여하기에는 주니어로서 다소 오버 엔지니어링이라 생각하여 빈 칸으로 둠`

---

## 5. 학력 / 자격증 / 외부 활동

→ 사용처: `/[locale]/experience` 하단 또는 "About" 섹션. **선택 사항** — 없으면 비워두세요.

```
학력 (학교, 전공, 졸업/재학): 홍익대학교 정보컴퓨터공학부 컴퓨터공학전공 (2018.03 ~ 2024.08 졸업)

자격증:
- 정보처리기사 (2023.09)
- SQLD (2023.04)
- 리눅스마스터 2급 (2022.09)

발표 / 기고 (콘퍼런스, 사내 발표, 외부 매체):

오픈소스 기여 (PR/이슈 링크): https://github.com/meursyphus/headless-chart/pull/12

수상 / 챌린지:
```

`// note: 우선 현재 이정도 부분까지만 작성. 지속적인 업데이트 필요`

---

## 6. 엔지니어링 철학 (포트폴리오 톤 결정용)

가장 중요하게 생각하는 엔지니어링 원칙 1~3가지:

1. 비즈니스 가치와 기술의 정렬: 기술은 그 자체로 목적이 될 수 없다. 모든 아키텍처 개선과 신기술 도입은 제품의 출시 속도(Time-to-Market)를 앞당기거나 운영 비용을 절감하는 등 회사의 비즈니스 지표에 기여해야 한다.
2. 부수 효과(Side Effect) 제어를 통한 유지보수 비용 최소화: 코드 내 불변성(Immutability)을 엄격히 통제하고 FSD 구조로 도메인 경계를 나누는 이유는, 제품 스케일업 시 기능 추가 및 디버깅에 소모되는 개발 공수(Opportunity Cost)를 줄이기 위함이다.
3. 데이터 기반의 인과관계 증명: 성능 개선이든 구조 변경이든, 모든 의사결정은 감정이 아닌 성능 프로파일러와 지표로 증명하여 자원의 낭비를 막는다.

같이 일하고 싶은 동료의 특성 (1~3가지):

- 제품의 기능 명세만 보고 코딩하는 것이 아니라, "이 기능이 유저와 회사에 어떤 가치를 주는가?"를 먼저 질문하는 동료
- 도메인 경계를 넘어 엔지니어링 파이프라인 전체(FE-BE-AI)의 흐름을 이해하고, 전체 시스템 관점에서 최적의 비용 효율성을 고민하는 동료

향후 1~2년 내 도달하고 싶은 모습:

- 프론트엔드 아키텍처 최적화 역량과 LangGraph 기반 오케스트레이션 제어 능력을 결합하여, 회사의 비즈니스 요구사항을 가장 빠르고 안정적인 제품의 형태로 시장에 인도하는 'AI Native 비즈니스 지향형 솔루션 아키텍트'

```

`// note:`

---

## 7. 채용 / 협업 컨택 디테일

→ 사용처: `/[locale]/contact`, Pricing 페이지(농담조여도 실제 조건은 정확히)

```

현재 상태: [ ] 현직 클로즈 [ O ] 현직이지만 이직 오픈 [ ] 적극 구직 [ ] 사이드만 가능
선호 협업 형태: [ O ] 정규직 [ ] 계약직 [ ] 시간제 (시급/일급) [ ] 프로젝트 단가 [ ] 자문
지역 선호: [ O ] 서울/수도권 [ O ] 원격 OK [ O ] 해외 원격 OK
선호 회사 규모: [ ] 시드/얼리 [ ] Series A~B [ ] 후기 스타트업 [ ] 대기업 [ O ] 무관
관심 도메인 (있는 만큼): CLOUD Monitoring, Manufacturing AX

-

## 관심 없는 도메인 / 거절 영역 (있다면):

응답 가능 시간대 (KST 기준): ASAP AnyTime (Prefer Time: 09:00 - 20:00)
선호 컨택 채널: [ O ] 이메일 [ O ] LinkedIn DM [ O ] 폼 제출

```

`// note:`

---

## 8. 자유 메모

포트폴리오에 꼭 넣고 싶은데 위 섹션에 안 들어가는 것 / 강조하고 싶은 스토리 / 회피하고 싶은 표현 등.
- 일단 이거는 보류

```

```

```
