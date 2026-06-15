import { create } from "zustand";
import type {
  ChatChip,
  ChatHistoryEntry,
} from "@/entities/chat/model/types";
import {
  BOT_REPLY_DELAY_MS,
  ENTRY_NODE_ID,
  FALLBACK_NODE_ID,
} from "@/entities/chat/config/script";

interface ChatState {
  isOpen: boolean;
  isBotTyping: boolean;
  history: ChatHistoryEntry[];
  open: () => void;
  close: () => void;
  toggle: () => void;
  selectChip: (chip: ChatChip) => void;
  submitInput: (text: string) => void;
  reset: () => void;
}

const initialHistory = (): ChatHistoryEntry[] => [
  { kind: "bot", nodeId: ENTRY_NODE_ID },
];

const scheduleBotReply = (
  set: (
    update:
      | Partial<ChatState>
      | ((s: ChatState) => Partial<ChatState>),
  ) => void,
  nodeId: string,
) => {
  set({ isBotTyping: true });
  setTimeout(() => {
    set((s) => ({
      isBotTyping: false,
      history: [...s.history, { kind: "bot", nodeId }],
    }));
  }, BOT_REPLY_DELAY_MS);
};

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  isBotTyping: false,
  history: [],
  open: () =>
    set((s) => ({
      isOpen: true,
      history: s.history.length === 0 ? initialHistory() : s.history,
    })),
  close: () => set({ isOpen: false }),
  toggle: () =>
    set((s) => {
      const next = !s.isOpen;
      return {
        isOpen: next,
        history: next && s.history.length === 0 ? initialHistory() : s.history,
      };
    }),
  selectChip: (chip) => {
    set((s) => ({
      history: [...s.history, { kind: "visitor", text: chip.label }],
    }));
    scheduleBotReply(set, chip.next);
  },
  submitInput: (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    set((s) => ({
      history: [...s.history, { kind: "visitor", text: trimmed }],
    }));
    scheduleBotReply(set, FALLBACK_NODE_ID);
  },
  reset: () => set({ isBotTyping: false, history: initialHistory() }),
}));
