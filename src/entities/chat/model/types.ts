export interface ChatChip {
  label: string;
  next: string;
}

export interface ChatNode {
  id: string;
  text: string;
  chips: ChatChip[];
}

export type ChatScript = Record<string, ChatNode>;

export type ChatHistoryEntry =
  | { kind: "bot"; nodeId: string }
  | { kind: "visitor"; text: string };
