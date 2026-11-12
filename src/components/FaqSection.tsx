'use client';

import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/agro-content';

export default function FaqSection() {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28 bg-[#F5F2EB] text-[#161917] border-b border-[#DDD6C7]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#13261B] block mb-3">
            CONSULTAS FRECUENTES
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-4xl sm:text-5xl text-[#161917] font-normal"
          >
            Detalles <span className="italic text-[#13261B]">Operativos.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white border border-[#DDD6C7] hover:border-[#C9B282] transition-colors"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#13261B] block mb-1">
                      {item.category}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-[#161917]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#13261B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#EBE6DC]">
                    <p className="font-sans text-sm text-[#525854] leading-relaxed mb-4">
                      {item.answer}
                    </p>
                    <div className="p-3 bg-[#13261B] text-[#E5D7B8] font-mono text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C9B282] shrink-0" />
                      <span>{item.technicalHighlight}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
