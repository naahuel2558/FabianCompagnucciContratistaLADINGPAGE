'use client';

import React from 'react';
import { ArrowRight, Navigation } from 'lucide-react';
import {
  COVERAGE_ZONES,
  WORK_PROCESS_STEPS,
  BRAND_INFO,
} from '@/data/agro-content';

interface CoverageAndProcessProps {
  onSelectLocationForQuote: (location: string) => void;
}

export default function CoverageAndProcess({
  onSelectLocationForQuote,
}: CoverageAndProcessProps) {
  return (
    <section
      id="cobertura"
      aria-labelledby="cobertura-heading"
      className="py-24 sm:py-32 bg-[#F5F2EB] text-[#161917] border-b border-[#DDD6C7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Parte 1: Proceso de Trabajo en 4 Etapas Editorial */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#13261B] block mb-3">
                ORDEN PREVIO Y SOLVENCIA EN EL CAMPO
              </span>
              <h2
                id="cobertura-heading"
                className="font-serif text-4xl sm:text-6xl text-[#161917] font-normal leading-[1.06]"
              >
                Metodología de <span className="italic text-[#13261B]">Campaña.</span>
              </h2>
            </div>

            <p className="font-serif italic text-xl text-[#525854] max-w-md">
              &ldquo;{BRAND_INFO.methodologyQuote}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white border border-[#DDD6C7] hover:border-[#C9B282] p-7 flex flex-col justify-between transition-colors shadow-sm"
              >
                <div>
                  <span className="font-serif text-5xl text-[#13261B] italic block mb-4">
                    {step.stepNumber}.
                  </span>
                  <h3 className="font-serif text-2xl text-[#161917] font-normal leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-[#C9B282] font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  <p className="font-sans text-xs text-[#525854] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBE6DC] font-mono text-[11px] text-[#13261B]">
                  {step.technicalDeliverable}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parte 2: Síntesis de Cobertura por Provincia con Nodos Rápidos */}
        <div className="bg-[#13261B] text-[#F8F6F1] p-8 sm:p-12 border border-[#C9B282]/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-8 border-b border-white/15">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#C9B282] block mb-2">
                BASE EN BV. BELGRANO 433, BULNES (CÓRDOBA)
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Selección Rápida de <span className="italic text-[#E5D7B8]">Localidades.</span>
              </h3>
            </div>
            <a
              href="#cotizador"
              className="px-6 py-3 rounded-full bg-[#E5D7B8] hover:bg-[#C9B282] text-[#111412] font-sans text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2 self-start md:self-auto transition-colors"
            >
              <span>Agendar Lote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COVERAGE_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="p-6 bg-[#111412]/60 border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9B282] block mb-1">
                    {zone.province}
                  </span>
                  <h4 className="font-serif text-2xl text-white font-normal mb-2">
                    {zone.regionName}
                  </h4>
                  <p className="font-sans text-xs text-[#A3ABA6] mb-4 leading-relaxed">
                    {zone.notes}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {zone.hubs.map((hub) => (
                    <button
                      key={hub}
                      type="button"
                      onClick={() => onSelectLocationForQuote(`${hub} (${zone.province})`)}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#C9B282] text-[#F8F6F1] hover:text-[#111412] border border-white/15 font-sans text-xs transition-colors flex items-center gap-1.5"
                    >
                      <Navigation className="w-3 h-3 text-[#C9B282]" />
                      <span>{hub}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
