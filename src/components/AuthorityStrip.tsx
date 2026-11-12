'use client';

import React from 'react';

const IMPACT_METRICS = [
  {
    number: '+20',
    label: 'AÑOS DE TRAYECTORIA FAMILIAR',
    detail: 'Experiencia en siembra, cosecha, embolsado y mecánica propia en el campo.',
  },
  {
    number: '6',
    label: 'HERRAMIENTAS EN CATÁLOGO',
    detail: 'Air Drill Agrometal APX SEED PRO, 2 Sembradoras PLA, 2 Cosechadoras y Embolsadora.',
  },
  {
    number: '22',
    label: 'ZONAS RURALES EN 4 REGIONES',
    detail: 'Córdoba, San Luis (Lartirigoyen y firmas), La Pampa, Chaco y Santiago del Estero.',
  },
  {
    number: '5/5',
    label: 'COMPROMISO Y PUNTUALIDAD',
    detail: 'Presentación anticipada de los equipos en el campo para comenzar con orden previo.',
  },
];

export default function AuthorityStrip() {
  return (
    <section
      aria-label="Nuestro Impacto en el Campo"
      className="relative bg-[#111412] text-[#F8F6F1] overflow-hidden border-b border-[#C9B282]/25"
    >
      <div className="flex flex-col lg:flex-row min-h-[420px] sm:min-h-[480px] items-stretch">
        {/* Área Principal con Imagen Oscurecida y 4 Columnas Divididas por Líneas Verticales Finas (como en 00:12 del video) */}
        <div className="relative flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/cosecha-mapeo.png"
              alt="Cosecha con mapeo satelital de Fabián Compagnucci"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#111412]/80 backdrop-blur-[1px]" />
          </div>

          {IMPACT_METRICS.map((item, idx) => (
            <div
              key={item.label}
              className={`relative z-10 p-8 sm:p-10 flex flex-col justify-center items-center text-center border-b sm:border-b-0 ${
                idx < 3 ? 'lg:border-r border-white/15' : ''
              }`}
            >
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal text-[#F8F6F1] tracking-tight leading-none mb-4 tabular-nums">
                {item.number}
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#C9B282] font-semibold mb-3">
                {item.label}
              </span>
              <p className="font-sans text-xs text-[#F8F6F1]/75 leading-relaxed max-w-[230px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Barra Vertical Derecha en Verde Monte Profundo (#13261B) con texto vertical "NUESTRO IMPACTO" */}
        <div className="bg-[#13261B] border-t lg:border-t-0 lg:border-l border-[#C9B282]/30 px-6 py-5 lg:py-12 lg:w-24 flex items-center justify-center shrink-0">
          <span className="lg:writing-vertical font-serif text-lg sm:text-xl uppercase tracking-[0.35em] text-[#E5D7B8]">
            NUESTRO IMPACTO
          </span>
        </div>
      </div>
    </section>
  );
}
