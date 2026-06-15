# Career Intake

> 이 문서는 포트폴리오 개편 시 **갱신 소스(SoT)** 가 됩니다. 여기 적힌 내용이 `src/shared/config/{experience,skills,...}.ts`, 채팅 스크립트 노드(`content/chat/*`), 그리고 `/[locale]/experience` · `/[locale]/changelog` 등으로 흘러갑니다.
>
> 작성 가이드:
> - **모르거나 비공개로 두고 싶은 항목은 비워두세요.** 빈 항목은 페이지에 노출하지 않습니다.
> - 1인칭(저는 ~) 기준으로 적어주세요. 채팅 모듈에서 그대로 활용됩니다.
> - 정량 수치는 가능한 만큼만. "추정 N%" 도 OK, 없으면 생략.
> - 각 섹션 끝의 `// note:` 라인에 자유롭게 코멘트 남기셔도 됩니다.

---

## 0. 메타 / Identity
→ 사용처: 랜딩 Hero, footer, `<head>` meta, JSON-LD, 채팅 첫 인사

```
풀네임 (KR / EN):
한 줄 소개 (1인칭, 100자 이내):
현재 직책 / 소속:
가용성: [ ] 현직 - 이직 클로즈  [ ] 현직 - 이직 오픈  [ ] 프리랜서  [ ] 풀타임 오픈
위치 (도시):
이메일 (공개용):
GitHub:
LinkedIn:
velog (혹은 기존 블로그):
기타 외부 링크 (X, Threads, Speaker Deck 등):
```

`// note:`

---

## 1. 커리어 타임라인
→ 사용처: `/[locale]/experience` 리스트 + 상세, 채팅의 "경력 알려줘" 분기

회사/조직마다 아래 블록을 복제해서 채워주세요. 최신 → 과거 순.

### [회사명] — [직책]
```
기간: YYYY-MM ~ YYYY-MM (또는 "현재")
팀 / 부서:
회사 한줄 설명 (외부인이 모를 수 있으니):
재직 형태: [ ] 정규직  [ ] 계약직  [ ] 인턴  [ ] 프리랜서

본인이 한 일 (3~5개, 동사로 시작, 결과 중심 권장):
- 
- 
- 

핵심 기술 스택 (실제 손댄 것만):

정량 임팩트 (있는 만큼):
- 예) 응답 p95 800ms → 220ms / DAU N → M / 빌드 시간 X분 → Y분
- 

이 시기의 turning point (배움/결정/실패 모두 환영, 1~2개):
- 

외부에 공개 가능한 산출물 링크 (서비스 URL, GitHub, 글):
- 
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
한 줄 설명:
역할 (단독 / 팀이면 본인이 담당한 영역):
기간:
기술 스택:
가장 자랑할 기술적 의사결정 (1~2개, "왜" 중심):
- 

현재 상태: [ ] 운영 중  [ ] 개발 중  [ ] 폐기  [ ] 비공개
외부 링크 (GitHub, 데모, 글):
스크린샷/데모 영상 경로 (있으면):
```

### zIndexScan
(템플릿 복제)

### LinkBrain & Document Agent
(템플릿 복제)

### Interactive Portfolio Service (= 본 프로젝트)
(메타 항목이라 비워두셔도 OK)

### (기타 사이드 프로젝트가 있다면)

`// note:`

---

## 3. AI Native 역량 디테일
→ 사용처: `/[locale]/playground`, 채팅에서 "AI 작업 뭐 해봤어?" 분기, 차별화 카피

CLAUDE.md에 적힌 키워드(LangGraph, Multi-Agent, RAG, A2UI, Harness)별로 **실제 경험 깊이**를 적어주세요. 추정/과장 금지.

```
직접 다뤄본 LLM 프로바이더 (체크 + 사용 깊이):
[ ] OpenAI            (예: production / 실험 / 안 함)
[ ] Anthropic (Claude)
[ ] Google (Gemini)
[ ] 오픈소스 (Llama / Qwen 등)

직접 다뤄본 프레임워크 / SDK:
[ ] LangChain
[ ] LangGraph         (Supervisor 패턴 직접 설계 경험: Y/N)
[ ] Vercel AI SDK
[ ] Anthropic SDK 직접 사용
[ ] OpenAI SDK 직접 사용
[ ] 자체 구현 (어떤 부분?)

구축/기여해본 시스템 유형 (각각 1~2줄로 설명):
- RAG 파이프라인:
- Multi-Agent 오케스트레이션:
- Agent용 Tool/Function calling:
- Streaming UI / SSE:
- Server-Driven UI (A2UI):
- Prompt caching / 비용 최적화:
- Evaluation / Guardrails:

Harness Engineering 경험의 출처 (Claude Code skills / 자체 harness / etc):

가장 자신 있는 AI 관련 한 가지 (면접에서 30분 설명 가능한 주제):
```

`// note:`

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

`// note:`

---

## 5. 학력 / 자격증 / 외부 활동
→ 사용처: `/[locale]/experience` 하단 또는 "About" 섹션. **선택 사항** — 없으면 비워두세요.

```
학력 (학교, 전공, 졸업/재학):

자격증:

발표 / 기고 (콘퍼런스, 사내 발표, 외부 매체):

오픈소스 기여 (PR/이슈 링크):

수상 / 챌린지:
```

`// note:`

---

## 6. 엔지니어링 철학 (포트폴리오 톤 결정용)
→ 사용처: 채팅에서 "같이 일하면 어때?" 분기, 랜딩 카피, Pricing 페이지 톤

```
가장 중요하게 생각하는 엔지니어링 원칙 1~3가지:
1. 
2. 
3. 

싫어하는 코드/아키텍처 패턴 (1~3가지, 이유와 함께):
- 

같이 일하고 싶은 동료의 특성 (1~3가지):
- 

향후 1~2년 내 도달하고 싶은 모습:

본인이 자주 인용하는 책/글/사람이 있다면:
```

`// note:`

---

## 7. 채용 / 협업 컨택 디테일
→ 사용처: `/[locale]/contact`, Pricing 페이지(농담조여도 실제 조건은 정확히)

```
현재 상태: [ ] 현직 클로즈  [ ] 현직이지만 이직 오픈  [ ] 적극 구직  [ ] 사이드만 가능
선호 협업 형태: [ ] 정규직  [ ] 계약직  [ ] 시간제 (시급/일급)  [ ] 프로젝트 단가  [ ] 자문
지역 선호: [ ] 서울/수도권  [ ] 원격 OK  [ ] 해외 원격 OK
선호 회사 규모: [ ] 시드/얼리  [ ] Series A~B  [ ] 후기 스타트업  [ ] 대기업  [ ] 무관
관심 도메인 (있는 만큼):
- 

관심 없는 도메인 / 거절 영역 (있다면):
- 

응답 가능 시간대 (KST 기준):
선호 컨택 채널: [ ] 이메일  [ ] LinkedIn DM  [ ] 폼 제출
```

`// note:`

---

## 8. 자유 메모
포트폴리오에 꼭 넣고 싶은데 위 섹션에 안 들어가는 것 / 강조하고 싶은 스토리 / 회피하고 싶은 표현 등.

```


```
