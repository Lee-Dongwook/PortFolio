import type { ChatChip, ChatScript } from "@/entities/chat/model/types";

const PLACEHOLDER = "테스트 내용입니다.";

const quickReplyChips: ChatChip[] = [
  { label: "Conflow", next: "conflow" },
  { label: "FutureWorkLab", next: "futureworklab" },
  { label: "AI Native", next: "ai-native" },
  { label: "채용 / 이직", next: "availability" },
  { label: "학력 / 자격증", next: "credentials" },
];

export const script: ChatScript = {
  entry: {
    id: "entry",
    text: PLACEHOLDER,
    chips: quickReplyChips,
  },
  conflow: { id: "conflow", text: PLACEHOLDER, chips: quickReplyChips },
  futureworklab: {
    id: "futureworklab",
    text: PLACEHOLDER,
    chips: quickReplyChips,
  },
  "ai-native": { id: "ai-native", text: PLACEHOLDER, chips: quickReplyChips },
  availability: {
    id: "availability",
    text: PLACEHOLDER,
    chips: quickReplyChips,
  },
  credentials: {
    id: "credentials",
    text: PLACEHOLDER,
    chips: quickReplyChips,
  },
  fallback: { id: "fallback", text: PLACEHOLDER, chips: quickReplyChips },
};

export const ENTRY_NODE_ID = "entry";
export const FALLBACK_NODE_ID = "fallback";
export const BOT_REPLY_DELAY_MS = 600;
