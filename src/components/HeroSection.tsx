'use client';

import React from 'react';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { BRAND_INFO, buildWhatsAppUrl } from '@/data/agro-content';

function CircularSeal({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 240 240"
        className="w-64 h-64 sm:w-80 sm:h-80 text-[#C9B282] animate-spin-slow"
      >
        <defs>
          <path
            id="sealCirclePath"
            d="M 120, 120 m -92, 0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"
          />
        </defs>
        <circle
          cx="120"
          cy="120"
          r="112"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.4"
        />
        <circle
          cx="120"
          cy="120"
          r="68"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.4"
        />
        <text
          fill="currentColor"
          fontSize="11.5"
          letterSpacing="5.2px"
          className="font-serif uppercase"
        >
          <textPath href="#sealCirclePath" startOffset="0%">
            DONDE TU CAMPAÑA CRECE · FABIÁN COMPAGNUCCI ·
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div id="inicio" className="bg-[#111412] text-[#F8F6F1]">
      {/* 1. Banner Panorámico Cinematográfico de Apertura */}
      <section
        aria-label="Presentación panorámica Fabián Compagnucci & Familia"
        className="relative min-h-[78vh] flex items-end overflow-hidden border-b border-[#C9B282]/20"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-agro.png"
            alt="Herramientas agrícolas de precisión de Fabián Compagnucci trabajando al atardecer en el lote"
            fetchPriority="high"
            className="w-full h-full object-cover object-center scale-[1.02]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(17,20,18,0.35) 0%, rgba(17,20,18,0.68) 60%, rgba(17,20,18,0.98) 100%)',
            }}
          />
        </div>

        {/* Marco Editorial Fino */}
        <div className="absolute inset-4 sm:inset-8 border border-[#C9B282]/25 pointer-events-none z-10 hidden sm:block" />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-12 pb-14 pt-28">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-block font-sans text-[11px] uppercase tracking-[0.28em] text-[#C9B282] mb-4">
                BULNES, CÓRDOBA · +20 AÑOS DE TRAYECTORIA FAMILIAR
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.03] text-[#F8F6F1]">
                Herramientas de <span className="italic text-[#E5D7B8]">Precisión.</span>
                <br />
                Nobleza de <span className="italic text-[#C9B282]">Campo.</span>
              </h1>
              <p className="mt-5 font-sans text-sm sm:text-base text-[#F8F6F1]/80 leading-relaxed max-w-2xl font-light">
                Siembra directa con corte surco por surco y dosis variable (Air Drill Agrometal
                APX SEED PRO &amp; Sembradoras PLA), cosecha con mapeo satelital (Case IH 7230
                &amp; John Deere 9570 STS) y embolsado en lote.
              </p>
            </div>

            {/* Tarjeta Editorial de Contacto Rápido */}
            <div className="bg-[#111412]/85 backdrop-blur-md border border-[#C9B282]/35 p-6 sm:p-7 max-w-sm w-full">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C9B282] block mb-2">
                ATENCIÓN DIRECTA DE SUS DUEÑOS
              </span>
              <p className="font-serif text-2xl text-[#F8F6F1] italic mb-4">
                Fabián &amp; Agustín Compagnucci
              </p>
              <div className="space-y-2 text-xs font-mono text-[#F8F6F1]/85 mb-5">
                <a
                  href={buildWhatsAppUrl({ recipient: 'fabian' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1.5 border-b border-white/10 hover:text-[#E5D7B8] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C9B282]" />
                    Fabián Compagnucci
                  </span>
                  <span className="tabular-nums text-[#E5D7B8]">{BRAND_INFO.whatsappDisplay}</span>
                </a>
                <a
                  href={buildWhatsAppUrl({ recipient: 'agustin' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1.5 border-b border-white/10 hover:text-[#E5D7B8] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C9B282]" />
                    Agustín Compagnucci
                  </span>
                  <span className="tabular-nums text-[#E5D7B8]">
                    {BRAND_INFO.secondaryWhatsappDisplay}
                  </span>
                </a>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-[#A3ABA6]">
                  <MapPin className="w-3.5 h-3.5 text-[#C9B282] shrink-0" />
                  <span>{BRAND_INFO.address}</span>
                </div>
              </div>

              <a
                href="#maquinaria"
                className="w-full py-3 px-5 bg-[#C9B282] hover:bg-[#E5D7B8] text-[#111412] font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Ver Catálogo de Herramientas</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bloque "NUESTRA FILOSOFÍA" calcado del segundo 00:01 del video con 2 Sellos Circulares en Esquinas */}
      <section
        id="filosofia"
        aria-labelledby="filosofia-heading"
        className="relative bg-[#111412] py-24 sm:py-32 px-4 sm:px-8 overflow-hidden border-b border-[#C9B282]/20"
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#C9B282] block mb-5">
            NUESTRA FILOSOFÍA · EMPRESA FAMILIAR
          </span>

          <h2
            id="filosofia-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-[54px] uppercase tracking-[0.06em] leading-[1.14] text-[#F8F6F1] font-normal mb-7"
          >
            LABORES PENSADAS
            <br />
            PARA TRASCENDER
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#A3ABA6] leading-relaxed max-w-xl mx-auto mb-10 font-light">
            Con más de veinte años en el rubro, en{' '}
            <strong className="text-[#F8F6F1] font-medium">Fabián Compagnucci &amp; Familia</strong>{' '}
            combinamos la solvencia de la mecánica y conducción propia con herramientas de última
            generación en siembra surco por surco, cosecha con mapeo satelital y embolsado.
          </p>

          <a
            href="#maquinaria"
            className="inline-block border border-white/40 hover:border-[#C9B282] hover:bg-[#C9B282] hover:text-[#111412] text-[#F8F6F1] font-sans text-[11px] uppercase tracking-[0.24em] px-8 py-3.5 transition-all duration-300"
          >
            DESCUBRIR HERRAMIENTAS
          </a>
        </div>

        {/* Sellos Circulares Gigantes en Esquinas Inferiores (Exactamente como en 00:01 del video) */}
        <CircularSeal className="absolute -bottom-24 -left-20 opacity-15" />
        <CircularSeal className="absolute -bottom-24 -right-20 opacity-15" />
      </section>

      {/* 3. Sección Corte Diagonal Asimétrico + Sello Circular Central ("Puntualidad Exclusiva.") */}
      <section
        aria-label="Metodología exclusiva de trabajo en el campo"
        className="relative bg-[#F5F2EB] text-[#161917] overflow-hidden border-b border-[#DDD6C7]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px] items-stretch relative">
          {/* Mitad Izquierda: Fotografía de Campo con Corte Diagonal */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-full overflow-hidden">
            <div
              className="w-full h-full lg:[clip-path:polygon(0_0,100%_0,84%_100%,0%_100%)]"
              style={{ minHeight: '100%' }}
            >
              <img
                src="/images/puntualidad-cosechadora.jpg"
                alt="Cosechadora John Deere 9570 STS de Fabián Compagnucci al atardecer en plena campaña"
                loading="lazy"
                className="w-full h-full object-cover object-[center_30%] min-h-[380px] lg:min-h-[540px]"
              />
              <div className="absolute inset-0 bg-[#111412]/20" />
            </div>
          </div>

          {/* Botón Circular Central con Doble Anillo sobre la Diagonal (como en 00:03 del video) */}
          <div className="lg:absolute lg:left-[46%] lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 flex justify-center -my-12 lg:my-0">
            <a
              href="#cotizador"
              className="group w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#13261B] text-[#F8F6F1] p-2.5 shadow-2xl flex items-center justify-center transition-transform duration-500 hover:scale-105"
              aria-label="Iniciar consulta de campaña"
            >
              <div className="w-full h-full rounded-full border border-[#C9B282]/70 group-hover:border-[#E5D7B8] flex flex-col items-center justify-center text-center px-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#E5D7B8] leading-relaxed">
                  INICIAR
                  <br />
                  CONSULTA
                </span>
              </div>
            </a>
          </div>

          {/* Mitad Derecha sobre Fondo Crema #F5F2EB */}
          <div className="lg:col-span-6 flex items-center px-6 sm:px-12 lg:pl-20 lg:pr-16 py-16 lg:py-20">
            <div className="max-w-lg">
              <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#13261B]/70 block mb-3">
                METODOLOGÍA FAMILIAR · +20 AÑOS
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl text-[#161917] font-normal leading-[1.1] mb-6">
                Puntualidad <span className="italic font-normal text-[#13261B]">Exclusiva.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#525854] leading-relaxed mb-6">
                &ldquo;{BRAND_INFO.methodologyQuote}&rdquo;
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#525854] leading-relaxed mb-6">
                Nos encargamos personalmente de la{' '}
                <strong className="text-[#161917]">mecánica propia del equipo</strong> y de la{' '}
                <strong className="text-[#161917]">conducción de maquinaria y personal</strong>,
                garantizando soluciones rápidas y autonomía total en Córdoba, San Luis, La Pampa,
                Chaco y Santiago del Estero.
              </p>

              {/* Píldoras de Valores del CV */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#DDD6C7]">
                {BRAND_INFO.values.map((val) => (
                  <span
                    key={val}
                    className="px-3 py-1 rounded-full bg-white border border-[#DDD6C7] font-sans text-[11px] tracking-wide text-[#13261B] font-medium"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
