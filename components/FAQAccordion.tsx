"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className={isOpen ? "faq-item open" : "faq-item"}>
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            {isOpen && <div className="faq-answer">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
