# Interactive Portfolio Revamp Plan

> 작성일: 2026-06-15
> 대상 코드베이스: Next.js 16 (App Router) / TS / Tailwind v4 / Zustand / Radix UI / FSD
> 본 문서의 목표: "정적 텍스트 포트폴리오"가 아닌 **"방문자가 조작 가능한 SaaS 형태의 자기소개 프로덕트"** 로 재정의하기 위한 의사결정용 초안.

---

## 1. 포지셔닝 & 제품 컨셉

### 1-1. "나를 SaaS로 본다면" — 카테고리 후보

| 안 | 카테고리 정의 | Core Value Proposition | 장점 | 단점 |
|---|---|---|---|---|
| **A. "AI Native FE Engineer as a Service" (추천)** | Developer Tool / Talent SaaS 메타포 | "당신의 다음 AI 프로덕트의 프론트엔드 아키텍처를 1명의 엔지니어로 구성하라" | 정체성과 직결, Multi-Agent/Harness 같은 키워드가 그대로 기능 카피로 전환됨 | 메타포가 과하면 가벼워 보일 위험 |
| **B. "Interactive Engineer Profile Platform"** | Notion/Linktree 류의 프로필 플랫폼 메타포 | "엔지니어 한 명을 탐색 가능한 문서로 만든다" | 추상적이라 안전, 일반 채용 담당자에게 친숙 | 차별화 부족, AI Native 정체성이 희석됨 |

**권고:** **A안 채택.** 근거: 사용자의 정체성(Multi-Agent Orchestration / Harness Engineering / A2UI)이 SaaS의 "기능 모듈"로 자연스럽게 매핑되며, 포트폴리오 철학("하나의 완성된 서비스")과 정합. B는 안전하지만 "단순 정적 페이지 거부" 원칙과 충돌.

### 1-2. 타깃 방문자 페르소나 & Journey

| 페르소나 | 1차 관심사 | 진입 페이지 | 핵심 Path | CTA |
|---|---|---|---|---|
| **P1. 채용 담당자 / HR** | "이 사람 뽑을만 한가?" — 빠른 검증 | `/` 랜딩 → `/changelog`(이력) | Hero → Skill 요약 → 회사/기간 표 → 연락 | "Resume PDF / 이메일" |
| **P2. 시니어 엔지니어 / 면접관** | 아키텍처 의사결정 수준, 깊이 | `/` → `/chat` 또는 `/playground` | 챗으로 "Conflow 아키텍처 설명" 직접 질의 → 코드 링크 | "GitHub / 기술 블로그" |
| **P3. 협업 제안자 / PM / 창업자** | "같이 만들 수 있나, 비용/속도는?" | `/pricing` → `/chat` | 패키지(농담형) → 협업 문의 폼 | "Book a call / Inquiry" |
| **P4. 동료 개발자 / 학습자** | 기술 글, 회고 | `/changelog` (블로그) | 글 목록 → 상세 → 관련 프로젝트 링크 | "RSS / GitHub follow" |

각 페르소나별로 **Hero CTA를 동적으로 바꾸지 않는다** (개인화는 과잉 엔지니어링). 대신 Hero 아래 **"Who are you?" 분기 카드 3개**를 두어 사용자가 스스로 라우팅하도록 한다 (관찰 가능성 ↑).

---

## 2. 정보 아키텍처 (IA) & 사이트맵

### 2-1. 라우트 구조 (SaaS 메타포 적용)

| Route | SaaS 메타포 | 실제 콘텐츠 | 우선순위 |
|---|---|---|---|
| `/` | Landing (Hero / Features / Social Proof / CTA) | Hero + 핵심 모듈 프리뷰 + 페르소나 분기 | Must |
| `/chat` | "Talk to the Product" | 채팅 UI 기반 인터랙티브 이력서 | Must |
| `/changelog` | Product Changelog | velog 마이그레이션된 기술 블로그 + 프로젝트 업데이트 | Must |
| `/playground` | Interactive Demo | Multi-Agent 시각화, zIndexScan 데모 등 | Should |
| `/docs` | Documentation | 프로젝트별 상세 케이스 스터디 (Conflow, LinkBrain 등) | Should |
| `/pricing` | Pricing (위트) | 협업 패키지 — "Hourly / Project / Full-time" 농담조 + 실제 문의 폼 | Could |
| `/status` | System Status | GitHub 활동, 현재 학습 중인 토픽, 작업 가능 여부 | Could |

### 2-2. FSD 레이어 매핑 가이드

```
app/                  ← Next.js App Router (각 route segment + layout)
  (marketing)/        ← /, /pricing, /status
  (product)/          ← /chat, /playground, /changelog, /docs

widgets/              ← 페이지 단위 조합 (HeroSection, ChatWindow, ChangelogFeed)
features/             ← 사용자 시나리오 단위 (send-chat-message, filter-changelog, persona-router)
entities/             ← 도메인 모델 (post, project, persona, chat-message, skill)
shared/               ← UI primitives (Button, Card, MarkdownRenderer), lib (mdx, api client), config
```

- `/chat`은 `widgets/chat-window`가 `features/send-chat-message` + `entities/chat-message`를 조합.
- `/changelog`는 `widgets/changelog-feed`가 `entities/post`(velog 마이그레이션 결과) + `features/filter-by-tag`를 조합.
- **참조 방향성 위반 금지**: shared ← entities ← features ← widgets ← app 단방향.

---

## 3. 핵심 인터랙티브 모듈

### 3-1. 우선순위 매트릭스

| 모듈 | 분류 | 임팩트 | 구현 난이도 | 비고 |
|---|---|---|---|---|
| (a) 채팅 UI 인터랙티브 이력서 | **Must** | 高 | 中~高 | 정체성 직결 |
| (b) Velog 블로그 마이그레이션 (Changelog) | **Must** | 中 | 低~中 | SEO 자산 회수 |
| (c) Multi-Agent Visualizer Playground | **Should** | 高 | 高 | Conflow 역량 증명 |
| (d) Persona Router (Hero 분기) | **Should** | 中 | 低 | 빠른 효과 |
| (e) Live Status Module (GitHub/현재 작업) | **Could** | 低 | 低 | 신선도 시그널 |

### 3-2. 모듈 상세

#### (a) 채팅 UI 인터랙티브 이력서 — Must
- **목적:** 방문자가 "이 사람한테 직접 물어보는 듯한" 경험으로 이력을 탐색. 정적 텍스트보다 체류시간/기억 잔존 우위.
- **UX 시나리오:**
  1. 진입 시 시스템 메시지로 "안녕하세요, 저는 OO의 인터랙티브 프로필입니다. Conflow / LinkBrain / 채용 관심 중 무엇이 궁금하신가요?" 추천 프롬프트 칩 4~6개 노출.
  2. 사용자가 칩 클릭 또는 자유 입력 → 스트리밍 응답 → 응답 하단에 "Related: 프로젝트 카드 / 블로그 글 / GitHub Repo" 링크 카드 자동 첨부.
  3. 대화 종료 시 "이 대화 요약을 이메일로 받기" CTA.
- **기술 포인트:**
  - Server-Driven UI 원칙 적용 — 응답 payload에 `{ text, attachments: Card[] }` 형태로 UI 블록 지시.
  - 스트리밍은 SSE 또는 `ReadableStream` + Server Action. Next.js 16 App Router의 `app/api/chat/route.ts` Edge runtime 권장.
  - 상태는 Zustand `useChatStore` (대화 배열, isStreaming, error). `let` 금지 — 모든 업데이트는 `set((s) => ({ messages: [...s.messages, m] }))` 식 불변 패턴.
- **엣지 케이스:** 네트워크 끊김 시 마지막 부분 응답 보존 + retry 버튼 / Rate limit 초과 시 폴백 응답 / 빈 입력 차단 / XSS 방지 (Markdown sanitizer).
- **리스크:** LLM 비용, 환각(없는 경력 만들어내기). → §5에서 상세.

#### (b) Velog 블로그 마이그레이션 (Changelog) — Must
- §4에서 상세 다룸.

#### (c) Multi-Agent Visualizer Playground — Should
- **목적:** "Multi-Agent Orchestration을 안다"를 글이 아니라 **눈으로** 증명.
- **UX 시나리오:** 좌측 입력 → "Supervisor → Researcher / Writer / Critic" 노드 그래프가 실시간 활성화 → 각 노드의 상태 변화를 색/펄스로 시각화 → 최종 출력.
- **기술 포인트:** React Flow 또는 자체 SVG. 실제 LangGraph 호출은 mock 우선, 추후 백엔드 연결. 노드 간 상태 전이는 단방향 store (Zustand) 기반.
- **리스크:** 실제 LangGraph 연동까지 가면 백엔드 비용/배포 부담. **MVP는 사전 정의된 시나리오 재생만** 권장.

#### (d) Persona Router — Should
- **목적:** Hero 직하 3카드("채용 담당자다 / 함께 일할 엔지니어다 / 협업 제안하러 왔다")로 라우팅. 클릭률 분석으로 방문자 구성 파악.
- **기술 포인트:** 상태 없는 단순 라우팅. `localStorage`에 페르소나 저장 → 재방문 시 해당 섹션 우선 노출.

#### (e) Live Status Module — Could
- **목적:** "지금 살아있는 프로필"이라는 신선도 시그널.
- **구현:** GitHub GraphQL API로 최근 commit / 현재 학습 중인 토픽(수동 업데이트 가능한 MDX) / 가용성(available / busy).

---

## 4. 블로그 마이그레이션 전략

### 4-1. 옵션 비교

| 옵션 | 방식 | 장점 | 단점 | 추천도 |
|---|---|---|---|---|
| **O1. MDX 정적 임포트** | velog 글을 `.mdx`로 일괄 다운로드 → `content/posts/` 디렉토리 커밋 | 완전 통제, SEO 최강, 빌드 타임 최적화, 코드블록 highlighting 자유, 컴포넌트 임베드 가능 | 초기 이관 수작업 (스크립트로 완화 가능), velog 신규 글마다 동기화 필요 | **★★★★★** |
| O2. RSS 동기화 (런타임 fetch) | velog RSS 주기 폴링 → ISR 캐싱 | 글 작성 위치는 velog 그대로 유지 | velog UI/포맷 제약, 본문이 잘려서 오는 경우 있음, 외부 의존, **포트폴리오 안에 통합**된다는 컨셉 약화 | ★★ |
| O3. Headless CMS (Sanity/Contentlayer 등) | 외부 CMS에 글 이관 | 비개발자 친화 작성 UX | 사용자는 개발자 본인이라 불필요한 오버헤드, 비용 | ★ |
| O4. velog API + 캐시 레이어 하이브리드 | velog 정식 API 없음 → 비공식 스크래핑 | 자동 동기화 | velog 정책 변경 시 깨짐, 비공식 의존 비추 | ★ |

**권고:** **O1 (MDX 정적 임포트).** 근거:
1. SaaS 메타포의 "Changelog/Docs" 형식과 가장 잘 맞음 (글마다 메타데이터, 태그, 관련 프로젝트 링크를 frontmatter에 추가 가능).
2. 채팅 모듈(a)이 글 내용을 컨텍스트로 사용할 때 로컬 파일 시스템이 가장 다루기 쉬움 (RAG 인덱싱 / llms.txt 생성 용이).
3. Next.js 16 + MDX는 `@next/mdx` 또는 contentlayer-next 대안으로 안정적.

### 4-2. 재맥락화 — 블로그가 아니라 "Changelog"

- 글을 시간순이 아니라 **프로젝트/주제별 컬렉션**으로도 묶어 노출 (`/changelog?project=conflow`).
- 각 글 상단에 "이 글이 속한 모듈" 배지 — 예: `[Multi-Agent]` `[RAG]` `[FSD]`.
- 글 하단에 "이 글과 관련된 코드/프로젝트" 카드 자동 매핑 (frontmatter `relatedProjects` 필드).
- velog 캐노니컬 URL 처리 → §8 Open Questions.

### 4-3. 이관 절차 (스크립트 기반)

1. velog RSS / 사용자 페이지 크롤링으로 글 목록 수집.
2. 각 글의 마크다운 본문 + 이미지 추출 → `content/posts/{slug}.mdx` + `public/posts/{slug}/images/`.
3. frontmatter 자동 생성 (title, date, tags, original_url).
4. 이미지 경로 일괄 치환.
5. 수동 검수 1회 (코드블록 언어, 깨진 임베드).

---

## 5. 채팅 UI 이력서 — 디테일 설계

### 5-1. 구현 옵션 비교

| 옵션 | 설명 | 월 비용 (가정) | 체감 품질 | 환각 리스크 | 구현 공수 |
|---|---|---|---|---|---|
| **S1. 스크립트 기반 결정형 챗** | 추천 칩 + 사전 정의 응답 트리. LLM 미사용 | $0 | 中 (예측가능하지만 자유질문 불가) | 0 | 低 |
| **S2. Full LLM (OpenAI/Anthropic API)** | 자유 입력 → API 직접 호출. 시스템 프롬프트 + RAG | $5~$50 (트래픽 의존) | 高 | 中 (프롬프트로 완화) | 中 |
| **S3. 하이브리드 (추천)** | 진입 시 추천 칩 = 사전 정의 응답 (즉시/무료), 자유 입력 시에만 LLM 호출 + RAG | $1~$15 | 高 | 低 | 中 |

**권고:** **S3 (하이브리드).** 근거:
1. 방문자 70%+ 는 추천 칩에서 끝남 → API 비용 80%+ 절감.
2. 자유 입력 시에만 LLM이 동작하므로 진성 관심 방문자에게만 LLM 품질을 제공.
3. 환각 방지를 위해 **RAG 컨텍스트(이력서 + 블로그 글 인덱스 + 프로젝트 README)** 강제 주입 + 시스템 프롬프트에 "주어진 컨텍스트 밖의 질문에는 '잘 모르겠습니다, 직접 이메일로 문의 주세요'로 답변" 명시.
4. `llms.txt` / `llms_ctx.txt` 표준 같이 채택하면 외부 LLM에서도 본인 프로필을 쿼리 가능 — 부가 효과.

### 5-2. 기술 구현 가이드

- **API 라우트:** `app/api/chat/route.ts` (Edge runtime) — `streamText` (Vercel AI SDK) 사용 권장.
- **모델 후보:** GPT-4o-mini / Claude Haiku / Gemini Flash. 본 작업자의 정확한 가격/성능 비교는 트래픽 추정 후 결정. **모름 명시:** 실제 월 비용은 방문자 수 추정 없이는 단언 불가.
- **RAG 인덱싱:**
  - MVP: 컨텍스트 길이가 충분한 모델(Gemini Flash 1M context, Claude 200k)을 쓰면 **벡터 DB 없이** 전체 컨텍스트(블로그+이력)를 시스템 프롬프트에 주입하는 게 합리적. 운영 단순.
  - 글이 50개 초과로 늘어나면 그때 pgvector / Upstash Vector 도입 검토.
- **상태 관리:** Zustand store
  ```ts
  // 예시 (let 금지, 불변 업데이트)
  export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    isStreaming: false,
    error: null,
    append: (m) => set((s) => ({ messages: [...s.messages, m] })),
    setStreaming: (v) => set({ isStreaming: v }),
  }));
  ```
- **엣지케이스 체크리스트 (CLAUDE.md §4-3 준수):**
  - [ ] 스트리밍 중 사용자가 페이지 떠나면 `AbortController.abort()`.
  - [ ] 네트워크 끊김 시 부분 응답 보존 + 재시도.
  - [ ] Rate limit (IP 기반, Upstash Ratelimit 1req/3s 권장) — 초과 시 대기 메시지.
  - [ ] 입력 검증: 빈 문자열 / 4000자 초과 / 프롬프트 인젝션 키워드 1차 필터.
  - [ ] API 키 노출 방지 — 절대 클라이언트에서 직접 호출 금지, 항상 서버 라우트 경유.
  - [ ] Markdown 렌더링 시 `rehype-sanitize` 필수.
  - [ ] 응답에 코드블록 포함 시 syntax highlighting + copy 버튼.

### 5-3. 대화 상태 저장

- MVP: `sessionStorage` (페이지 닫으면 초기화) — GDPR/프라이버시 부담 0.
- 확장: 익명 대화 익명 ID + Supabase에 익명 저장 → 본인이 어떤 질문이 자주 들어오는지 분석 (PostHog 또는 자체 대시보드).

---

## 6. 로드맵 & 마일스톤

| Phase | 기간 (상대 추정) | 목표 | 산출물 |
|---|---|---|---|
| **Phase 0. 정리** | 3~5일 | 현 FSD 구조 점검, 디자인 토큰 정리, MDX 파이프라인 셋업 | Tailwind v4 토큰, `@next/mdx` 설정, ESLint `no-let` 룰 추가 |
| **Phase 1. MVP (Must)** | 2~3주 | 랜딩 + 채팅 (S1 스크립트) + Changelog(블로그 이관) 공개 | `/`, `/chat`(스크립트형), `/changelog`, persona router |
| **Phase 2. AI 통합 (Should)** | 2~3주 | 채팅을 S3 하이브리드로 업그레이드, Playground 시각화 추가 | `/api/chat` (LLM + RAG), `/playground` (mock 시나리오), llms.txt 발행 |
| **Phase 3. 차별화 (Could)** | 2~4주 | Live Status, Pricing 농담 페이지, A/B 테스트, 분석 대시보드 | `/status`, `/pricing`, PostHog 연동, 페르소나별 클릭률 리포트 |

각 Phase 종료 시 **체크포인트**: KPI 측정 → 다음 Phase 진입 여부 결정.

---

## 7. 성공 지표 (KPI)

| 지표 카테고리 | 메트릭 | 목표치 (가설) | 측정 방법 |
|---|---|---|---|
| 체류 | 평균 세션 길이 | > 90초 | Vercel Analytics / PostHog |
| 인터랙션 깊이 | 페이지당 평균 클릭 수 | > 3 | PostHog event capture |
| 채팅 사용률 | 방문자 중 `/chat` 진입 비율 | > 25% | route view tracking |
| 채팅 깊이 | 세션당 평균 메시지 수 | > 3 | chat event |
| 채팅 자유 입력 비율 | (자유입력 / 전체 메시지) | 20~40% (너무 낮으면 칩 의존, 너무 높으면 비용↑) | event tag |
| 블로그 도달 | `/changelog` 글 상세 진입률 | > 40% (목록 진입자 대비) | funnel |
| 컨버전 | 이메일 / GitHub / 외부 링크 클릭 | > 5% | outbound event |
| 재방문 | 7일 내 재방문율 | > 10% | cookie |

**핵심 통합 지표:** "방문자 1명당 의미있는 인터랙션 수" (페이지뷰 + 채팅 메시지 + 외부 링크 클릭의 가중합).

---

## 8. 열린 의사결정 사항 (Open Questions)

답이 정해져야 다음 단계가 잠금해제되는 질문들. 우선순위 순.

1. **[비용] 채팅 모듈에 실제 LLM 비용을 월 얼마까지 감당할 의향이 있는가?** ($0 / $10 이하 / $50 이하) — Phase 2 진입 조건.
2. **[모델 선택] OpenAI / Anthropic / Google 중 어느 SDK를 메인으로 쓸 것인가?** — 본인이 가장 능숙한 것 + 무료 크레딧 잔여량으로 결정 권장.
3. **[velog 캐노니컬]** 기존 velog 글의 SEO를 살릴지(rel=canonical을 velog로) vs 본 사이트가 정본이 되도록(velog 글 비공개 또는 본 사이트로 canonical) — **둘 다 살리기는 SEO 패널티 위험.**
4. **[채팅 페르소나] "1인칭(저는 OO입니다)" vs "3인칭(OO은 ~한 엔지니어입니다)"** 어느 톤? — 1인칭이 몰입 ↑이나 환각 시 신뢰도 손상 큼.
5. **[Pricing 페이지의 톤]** 진짜 가격 공개 vs 농담조 패키지(BYOC, Hire-by-the-hour) vs 아예 생략 — 채용 담당자에게는 위트가 마이너스일 수도.
6. **[Playground의 실제성]** Multi-Agent Visualizer를 mock 시나리오 재생으로 둘 것인가, 실제 LangGraph 백엔드까지 붙일 것인가? — 후자는 별도 백엔드 배포(Railway/Fly.io) 필요.
7. **[Analytics]** PostHog (self-host 가능, 무료 한도 큼) vs Vercel Analytics (간단, 한도 작음) vs Plausible — 페르소나별 funnel 추적 깊이가 필요하면 PostHog.
8. **[ko/en 다국어]** 영어 버전 제공 여부 — 글로벌 채용 타겟이면 필수, 국내 한정이면 후순위.
9. **[디자인 시스템]** 기존 Radix UI 위에 자체 토큰만 얹을지, shadcn/ui 도입해서 속도 우선할지.

---

## 부록 A. SaaS 랜딩 트렌드 (2026) — 적용 항목 메모

검색 기반 (2026 트렌드 리서치) 중 본 프로젝트에 적용할 것:
- **Interactive embedded demo above the fold** → Hero에 `/chat` 미니 버전 임베드 후보.
- **Pricing transparency as trust signal** → `/pricing` 페이지에 실제 협업 조건 명시(농담조라도).
- **Dark mode UI for developer ICP** → 시니어 엔지니어 페르소나 P2가 타깃이므로 다크 우선.
- **Pre-launch waitlist** → 본 프로젝트는 해당 없음 (이미 본인이 라이브 상태).

리서치 소스:
- SaaS Landing Page Trends 2026 (saasframe.io)
- SaaS Design Trends 2026 (designstudiouiux.com)
- Self-Talking Portfolio (Krishna A.V., Medium)
- portfolio-llm (Vishal Bakshi) — `llms.txt` 표준 적용 사례

---

## 부록 B. 모르는 영역 / 추정 불가 명시 (CLAUDE.md §4-2 준수)

- 실제 월 LLM 비용은 트래픽 데이터 없이 단언 불가. 위 표의 $1~$50은 일반적 개인 포트폴리오 트래픽 가정치이며 실측 필요.
- velog의 비공식 API 정책 변경 가능성 → 마이그레이션은 1회성 스크립트로 한정 권장.
- Next.js 16 App Router에서 Edge runtime + AI SDK 스트리밍의 모든 엣지케이스 검증은 본 작업자가 직접 PoC 필요. 본 문서는 일반적 패턴 기준.
