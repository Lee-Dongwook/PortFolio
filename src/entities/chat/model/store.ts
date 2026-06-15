import { create } from "zustand";
import type { ChatHistoryEntry } from "@/entities/chat/model/types";
import { ENTRY_NODE_ID } from "@/entities/chat/config/script";

interface ChatState {
  isOpen: boolean;
  history: ChatHistoryEntry[];
  open: () => void;
  close: () => void;
  toggle: () => void;
  goTo: (nodeId: string) => void;
  reset: () => void;
}

const initialHistory = (): ChatHistoryEntry[] => [{ nodeId: ENTRY_NODE_ID }];

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
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
  goTo: (nodeId) => set((s) => ({ history: [...s.history, { nodeId }] })),
  reset: () => set({ history: initialHistory() }),
}));
