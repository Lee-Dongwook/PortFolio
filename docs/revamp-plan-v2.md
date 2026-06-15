# Revamp Plan v2 — "Person as SaaS" 메타포 레이어

## 1. 목적과 변경 범위 (Why v2)

v1은 인터랙티브 포트폴리오의 *위젯 골격*을 완성하는 단계였다. v2는 그 위에 **"패러디형 SaaS LP" 메타포 레이어**를 얹어, 방문자가 "한 명의 엔지니어"가 아니라 "사용 가능한 SaaS 제품"을 탐색하듯 정보를 소비하게 만드는 작업이다. 새 위젯 시스템을 처음부터 짓는 것이 아니라, 이미 존재하는 13개 위젯을 _재포장(re-frame)_ 하는 것이 본 작업의 본질이다. Stripe / Linear / Vercel 류의 정보 밀도와 어휘를 차용하되, 농담조가 아닌 _진지한 정보 재배열_ 톤을 유지한다.

---

## 2. 메타포 사전 (Metaphor Dictionary)

| SaaS 어휘                    | 포트폴리오 의미                                              |
| ---------------------------- | ------------------------------------------------------------ |
| Hero                         | 정체성(AI Native FE) + 차별점 한 줄 진술                     |
| Trusted by                   | 협업/소속 이력 로고 (회사·팀·커뮤니티)                       |
| Capabilities / Bento         | 핵심 역량 영역(Multi-Agent, RAG, A2UI, Harness) 카드 그리드  |
| How it works                 | 협업 진행 흐름(상담 → 스코프 → 인도) 단계 시각화             |
| Pricing                      | 협업 가능 형태(상담 / 프로젝트 / 풀타임) 플랜 카드           |
| Use cases                    | 대표 프로젝트별 적용 사례 (Conflow / LinkBrain / zIndexScan) |
| Playground / Demo            | chat-bubble 격상 데모 + 인터랙티브 위젯                      |
| Changelog                    | 커리어 릴리즈 노트 (시기별 마일스톤)                         |
| API Reference                | 스킬 시그니처 (입력/출력/제약 명세 형태)                     |
| Status                       | 현재 채용/협업 가능 여부 라이브 인디케이터                   |
| Docs                         | 엔지니어링 철학 / 원칙 문서                                  |
| Credentials / Certifications | 자격증·학력 (Compliance 섹션 톤)                             |
| CTA                          | 연락/문의 폼 (Start trial · Talk to sales 패러디)            |

---

## 3. 페이지 IA (Information Architecture)

`/[locale]` 메인 페이지의 섹션 순서. SaaS LP 표준 흐름을 베이스로 하되, 자산과 매핑되지 않는 섹션은 **[후보]** 로 표시한다.

1. Nav — `header`, `navigation`
2. Hero — `about-profile` 재포장
3. Trusted by — **[후보 / 자산 부재]** (로고 슬롯 신규 필요)
4. Capabilities (Bento) — `featured-skills` 재포장
5. How it works — **[후보 / 자산 부재]**
6. Use cases — `projects-section`, `featured-experience` 재포장
7. Playground / Demo — `chat-bubble` 격상 + `project-detail` 일부 임베드
8. Pricing — `contact-availability` 재포장 + **[신규 위젯 필요]**
9. Changelog — `experience-section` 재포장 (릴리즈 노트 톤)
10. API Reference — `skills-section` 재포장 (시그니처 톤)
11. Docs — `engineering-philosophy` 재포장
12. Compliance — `credentials` 재포장
13. Status — `contact-availability` 일부 분리
14. CTA — `contact-section`, `features/contact-form`
15. Footer — `footer`

`/about`, `/projects` 라우트는 각각 _Docs_ 와 _Use cases 상세_ 로 의미를 재정렬한다.

---

## 4. 위젯 ↔ SaaS 섹션 매핑 표

```
위젯                       | SaaS 섹션              | 재포장 메모                                              | 신규 카피 필요 (Y/N)
---------------------------|------------------------|----------------------------------------------------------|---------------------
header                     | Top Nav                | 제품명 위치에 "이동욱" 브랜드 마크. 우측에 Status pill.   | Y
navigation                 | Top Nav (links)        | 섹션 앵커 + locale switcher. Docs/Pricing/Changelog 라벨. | Y
footer                     | Footer                 | SaaS 표준(Product / Resources / Legal) 컬럼 구조로 재배치.| Y
about-profile              | Hero                   | sub-headline 슬롯 비워둠. <<TBD: 차별점 한 줄>>.          | Y
featured-experience        | Use cases (highlight)  | 대표 1~2건을 "case study"로 강조. 수치 슬롯 placeholder.| Y
experience-section         | Changelog              | 시기별 entry. semver 톤(예: v2.x — 회사명) 적용 검토.    | Y
experience-detail          | Changelog entry detail | 릴리즈 노트 상세 페이지 톤. 변경 사항/임팩트 항목화.    | Y
featured-skills            | Capabilities (Bento)   | 4대 포커스(Multi-Agent/RAG/A2UI/Harness)를 큰 셀로.     | Y
skills-section             | API Reference          | 스킬을 함수 시그니처/타입처럼 표기. 입출력/제약 명세 톤. | Y
projects-section           | Use cases              | 카드형 그리드. 각 카드에 "Industry / Stack / Outcome".   | Y
project-detail             | Use case detail        | 문제 / 접근 / 결과 / 스택 4섹션 구조 강제.               | Y
engineering-philosophy     | Docs                   | 원칙 문서 톤. 지향형 카피만(부정 톤 금지).               | Y (가드레일 준수)
credentials                | Compliance             | 자격증/학력을 인증 배지 그리드처럼. <<TBD: 자격증 상세>>.| Y
contact-availability       | Status + Pricing 헤더  | 라이브 상태 인디케이터(green/yellow) + Pricing 가용성.   | Y
contact-section            | CTA                    | "Start trial / Talk to sales" 듀얼 CTA 구조.            | Y
chat-bubble                | Playground             | 글로벌 floating에서 Hero 내 in-line 데모로 *격상* 옵션.  | Y
```

---

## 5. 신규 추가 후보 섹션

위젯 자산이 없는, 그러나 SaaS LP 톤 완성을 위해 신규 제작이 필요한 섹션 목록.

- **Pricing Plans 위젯** — H. "협업 형태"를 플랜 카드로 시각화하려면 필수. 1차 페르소나 결정 후 플랜 수 확정.
- **Changelog 위젯 (semver entry list)** — H. `experience-section` 재사용이 가능하나, 릴리즈 노트 톤을 위해 별도 컴포넌트가 더 깔끔할 수 있음.
- **Trusted by Logos** — M. 소속/협업 이력 로고 슬롯. `<<TBD: 회사 이력>>` 채워진 뒤에만 가치 있음.
- **How it works (Step Flow)** — M. 협업 진행 흐름 시각화. 자산 없음.
- **Code Snippet / API Reference 위젯** — M. `skills-section` 의 시그니처 톤 표현을 위해 신택스 하이라이팅 필요.
- **Status Pill (Live indicator)** — L. `contact-availability` 일부 추출. 헤더 우측 상시 표시.
- **Stats Strip (수치 임팩트)** — L. `<<TBD: 정량 임팩트 수치>>` 채워진 뒤 결정.

---

## 6. 인터랙션 비트

SaaS 서비스처럼 _동작_ 하게 만드는 핵심 인터랙티브 비트 후보.

1. **Hero Playground 인라인 데모** — Hero 우측에 chat-bubble을 in-line으로 임베드, "AI Native Engineer with you" 데모 형태. 자산 활용: O (`chat-bubble`, `entities/chat`). 난이도: M.
2. **Pricing → Contact 트리거** — Pricing 카드의 "Start trial / Contact sales" 버튼이 실제 `features/contact-form` 모달을 띄움. 자산 활용: O. 난이도: S.
3. **Changelog Deep-link** — Changelog entry hover/click 시 해당 시기와 연관된 Use case(프로젝트)로 스크롤·전환. 자산 활용: O (`experience-section`, `projects-section`). 난이도: M.
4. **API Reference Hover Signature** — 스킬 항목 hover 시 시그니처/타입이 펼쳐지는 인터랙션. 자산 활용: O (`skills-section`). 난이도: S.
5. **Status Live Toggle** — 헤더 Status pill이 `entities/availability` 상태를 실시간 반영. 자산 활용: O. 난이도: S.

---

## 7. 카피 톤 가드레일

- (a) SaaS 어휘 차용은 하되 _농담조 금지_. "이동욱 SaaS v2.0 출시!" 같은 자기지시적 패러디는 쓰지 않는다. 어휘만 차용하고 정보는 진지하게 전달한다.
- (b) **부정/회피 톤 전면 금지.** "싫어하는 패턴", "안티패턴", "거절 영역", "지양하는 협업" 류 카피는 노출 표면에 등장하지 않는다. 오직 _지향형_(원칙 · 동료상 · 미래 모습)으로만 구성한다.
- (c) 정량 수치가 비면 `<<TBD: 항목명>>` placeholder를 그대로 둔다. 가짜 수치(예: "30% 절감")를 임의로 채우지 않는다.
- (d) 영어 jargon(Capabilities, Changelog, API Reference 등)은 i18n 키로 등록하여 한/영 동시 노출 가능성을 열어둔다. 한국어 라벨은 후속 세션에서 결정.
- (e) 톤 레퍼런스: Stripe(정보 밀도) / Linear(타이포 절제) / Vercel(여백·강조). 셋 중 어느 쪽으로 기울지는 페르소나 결정 이후.

---

## 8. 열린 결정 사항 (Open Questions)

1. **1차 타겟 페르소나** — 채용담당 / 시니어 FE / PM / AI 엔지니어 중 누구를 Hero 카피의 1순위 독자로 둘 것인가. 페르소나에 따라 Pricing 플랜의 어휘가 달라진다.
2. **Pricing 패러디의 플랜 수** — 2개(상담/프로젝트) / 3개(상담/프로젝트/풀타임) / 4개(+ 자문) 중 어느 구조인가.
3. **Playground 데모의 백엔드 연동 범위** — Hero 인라인 chat이 실제 LLM 호출까지 가는가, 사전 정의된 응답 시퀀스만 재생하는가.
4. **Changelog 시간 단위** — 연도 / 분기 / semver 가짜 버전 중 무엇으로 entry를 묶는가.
5. **About 라우트의 역할 재정의** — `/about` 을 Docs(철학)로 흡수할지, 별도 "Founder note" 톤으로 분리 유지할지.
6. **chat-bubble의 글로벌 마운트 유지 여부** — Hero in-line 격상 시 floating 형태를 동시 유지할지, Hero 이탈 시점에만 다시 나타낼지.
7. **i18n 범위** — SaaS 어휘를 영문 고정으로 둘지, 한국어 대체어를 모두 마련할지.
8. **Trusted by 로고 노출 정책** — 비공개 협업 이력의 경우 텍스트 라벨로 대체할지, 섹션 자체를 보류할지.

---

## 9. 비어 있는 원재료 (Placeholders)

- `<<TBD: 회사·소속 이력 (회사명/기간/직무/성과 수치)>>`
- `<<TBD: 학력 / 자격증 상세>>`
- `<<TBD: 정량 임팩트 수치 (X% 절감 / Y명 규모 / Z개 출시)>>`
- `<<TBD: 차별점 한 줄 (Hero sub-headline 후보)>>`
- `<<TBD: 1차 타겟 페르소나>>`
