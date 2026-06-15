import type { ChatScript } from "@/entities/chat/model/types";

const PLACEHOLDER = "테스트 내용입니다.";

const branchChips = [{ label: "처음으로", next: "entry" }];

export const script: ChatScript = {
  entry: {
    id: "entry",
    text: PLACEHOLDER,
    chips: [
      { label: "Conflow가 뭐야?", next: "conflow" },
      { label: "FutureWorkLab 경력", next: "futureworklab" },
      { label: "AI Native 역량", next: "ai-native" },
      { label: "채용 / 이직 오픈?", next: "availability" },
      { label: "학력 / 자격증", next: "credentials" },
    ],
  },
  conflow: { id: "conflow", text: PLACEHOLDER, chips: branchChips },
  futureworklab: {
    id: "futureworklab",
    text: PLACEHOLDER,
    chips: branchChips,
  },
  "ai-native": { id: "ai-native", text: PLACEHOLDER, chips: branchChips },
  availability: { id: "availability", text: PLACEHOLDER, chips: branchChips },
  credentials: { id: "credentials", text: PLACEHOLDER, chips: branchChips },
};

export const ENTRY_NODE_ID = "entry";
