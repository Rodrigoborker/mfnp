"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { id: string; question: string; answer: string };

export default function FaqAccordion({
  items,
  defaultOpenIds = [],
}: {
  items: FaqItem[];
  defaultOpenIds?: string[];
}) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(defaultOpenIds),
  );

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-px border border-border bg-border">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id} className="bg-white">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5.5 text-left font-heading text-[15px] font-semibold text-navy"
            >
              {item.question}
              {isOpen ? (
                <Minus
                  className="h-4.5 w-4.5 shrink-0 text-orange"
                  aria-hidden
                />
              ) : (
                <Plus
                  className="h-4.5 w-4.5 shrink-0 text-orange"
                  aria-hidden
                />
              )}
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${item.id}`}
                className="px-6 pb-5.5 text-[15px] leading-relaxed text-ink-soft"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
