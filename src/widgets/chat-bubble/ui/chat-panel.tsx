"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { script, useChatStore } from "@/entities/chat";

export const ChatPanel = () => {
  const history = useChatStore((s) => s.history);
  const isBotTyping = useChatStore((s) => s.isBotTyping);
  const selectChip = useChatStore((s) => s.selectChip);
  const submitInput = useChatStore((s) => s.submitInput);
  const reset = useChatStore((s) => s.reset);
  const close = useChatStore((s) => s.close);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState("");

  const latestBot = [...history]
    .reverse()
    .find((entry) => entry.kind === "bot");
  const latestNode =
    latestBot && latestBot.kind === "bot" ? script[latestBot.nodeId] : null;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [history.length, isBotTyping]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = draft;
    submitInput(text);
    setDraft("");
  };

  const canSend = draft.trim().length > 0 && !isBotTyping;

  return (
    <div
      role="dialog"
      aria-label="DongWook 1:1 챗"
      className="mb-3 flex h-[560px] w-[min(360px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-xl"
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
        {history.map((entry, index) => {
          if (entry.kind === "visitor") {
            return (
              <div
                key={`visitor-${index}`}
                className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-sm leading-relaxed text-primary-foreground"
              >
                {entry.text}
              </div>
            );
          }
          const node = script[entry.nodeId];
          if (!node) return null;
          return (
            <div
              key={`bot-${entry.nodeId}-${index}`}
              className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm leading-relaxed"
            >
              {node.text}
            </div>
          );
        })}
        {isBotTyping && (
          <div
            aria-label="DongWook 가 입력 중"
            className="flex w-fit gap-1 rounded-2xl rounded-tl-sm bg-muted px-3 py-3"
          >
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:120ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:240ms]" />
          </div>
        )}
      </div>

      {latestNode && latestNode.chips.length > 0 && !isBotTyping && (
        <div className="flex gap-2 overflow-x-auto border-t border-border px-3 py-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {latestNode.chips.map((chip) => (
            <button
              key={`${chip.next}-${chip.label}`}
              type="button"
              onClick={() => selectChip(chip)}
              className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {chip.label}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-border px-3 py-3"
      >
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="메시지를 입력하세요…"
          maxLength={500}
          className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="메시지 입력"
        />
        <Button
          type="submit"
          size="icon"
          variant="default"
          disabled={!canSend}
          aria-label="전송"
          className="h-9 w-9 shrink-0 rounded-full"
        >
          <Icons.arrowRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
