"use client";

import { useEffect, useRef } from "react";

import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { script, useChatStore } from "@/entities/chat";

export const ChatPanel = () => {
  const history = useChatStore((s) => s.history);
  const goTo = useChatStore((s) => s.goTo);
  const reset = useChatStore((s) => s.reset);
  const close = useChatStore((s) => s.close);

  const scrollRef = useRef<HTMLDivElement>(null);

  const messages = history
    .map((entry) => script[entry.nodeId])
    .filter((node): node is NonNullable<typeof node> => Boolean(node));
  const latest = messages[messages.length - 1];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  return (
    <div
      role="dialog"
      aria-label="DongWook 1:1 챗"
      className="mb-3 flex h-[520px] w-[min(360px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-xl"
    >
      <header className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold leading-none">
            Ask Me Anything
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            DongWook · 1:1 인터랙티브 프로필
          </p>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={reset}
            aria-label="대화 초기화"
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Icons.trash className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={close}
            aria-label="닫기"
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Icons.close className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
      >
        {messages.map((node, index) => (
          <div
            key={`${node.id}-${index}`}
            className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm leading-relaxed"
          >
            {node.text}
          </div>
        ))}
      </div>

      {latest && latest.chips.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-border px-3 py-3">
          {latest.chips.map((chip) => (
            <Button
              key={`${chip.next}-${chip.label}`}
              variant="outline"
              size="sm"
              onClick={() => goTo(chip.next)}
            >
              {chip.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
