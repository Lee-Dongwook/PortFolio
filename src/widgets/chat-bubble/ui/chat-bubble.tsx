"use client";

import { Icons } from "@/shared/ui/icons";
import { useChatStore } from "@/entities/chat";
import { ChatPanel } from "./chat-panel";

export const ChatBubble = () => {
  const isOpen = useChatStore((s) => s.isOpen);
  const toggle = useChatStore((s) => s.toggle);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && <ChatPanel />}
      <button
        type="button"
        onClick={toggle}
        aria-label={isOpen ? "챗 닫기" : "챗 열기"}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {isOpen ? (
          <Icons.close className="h-6 w-6" />
        ) : (
          <Icons.chat className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};
