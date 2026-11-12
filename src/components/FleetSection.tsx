'use client';

import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Tractor,
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
} from 'lucide-react';
import { FLEET_EQUIPMENT, FleetItem, buildWhatsAppUrl } from '@/data/agro-content';

const CATEGORIES: Array<{ id: 'Todos' | FleetItem['category']; label: string }> = [
  { id: 'Todos', label: 'Todas las Herramientas (6)' },
  { id: 'Equipos de Siembra', label: 'Sembradoras & Tracción (3)' },
  { id: 'Cosecha con Mapeo', label: 'Cosechadoras con Mapeo (2)' },
  { id: 'Embolsado & Autonomía', label: 'Embolsado & Mecánica Propia' },
];

function ToolMediaGallery({ item }: { item: FleetItem }) {
  const images = item.gallery && item.gallery.length > 0 ? item.gallery : [item.imageUrl];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingVideo(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingVideo(false);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-60 sm:h-64 overflow-hidden bg-[#111412] border-b border-[#EBE6DC] select-none group/gallery">
      {isPlayingVideo && item.videoUrl ? (
        <video
          src={item.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={images[currentIndex]}
          alt={`${item.name} - Foto ${currentIndex + 1}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-all duration-500"
        />
      )}

      {/* Degradé sutil inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Contador de fotos */}
      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-[#E5D7B8] font-mono text-[10px] tracking-wider">
        {isPlayingVideo ? 'VIDEO EN LOTE' : `${currentIndex + 1} / ${images.length} FOTOS`}
      </span>

      {/* Botón switch Video/Foto */}
      {item.videoUrl && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsPlayingVideo(!isPlayingVideo);
          }}
          className={`absolute top-3 right-3 px-2.5 py-1 rounded-full backdrop-blur-sm border text-[10px] font-mono tracking-wider transition-colors flex items-center gap-1.5 ${
            isPlayingVideo
              ? 'bg-[#C9B282] text-[#111412] border-[#C9B282] font-semibold'
              : 'bg-black/60 text-[#E5D7B8] border-white/20 hover:border-[#C9B282]'
          }`}
        >
          {isPlayingVideo ? (
            <>
              <ImageIcon className="w-3 h-3 text-[#111412]" />
              <span>Ver Fotos</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span>Ver Video</span>
            </>
          )}
        </button>
      )}

      {/* Flechas de navegación (si hay más de 1 foto) */}
      {!isPlayingVideo && images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevPhoto}
            aria-label="Foto anterior"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-[#13261B] text-white border border-white/20 hover:border-[#C9B282] flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/gallery:opacity-100 z-10"
          >
            <ChevronLeft className="w-4 h-4 text-[#E5D7B8]" />
          </button>
          <button
            type="button"
            onClick={nextPhoto}
            aria-label="Foto siguiente"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-[#13261B] text-white border border-white/20 hover:border-[#C9B282] flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/gallery:opacity-100 z-10"
          >
            <ChevronRight className="w-4 h-4 text-[#E5D7B8]" />
          </button>
        </>
      )}

      {/* Dots indicadores */}
      {!isPlayingVideo && images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 z-10">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              aria-label={`Ir a foto ${dotIdx + 1}`}
              className={`transition-all rounded-full ${
                dotIdx === currentIndex
                  ? 'w-4 h-1.5 bg-[#C9B282]'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FleetSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<'Todos' | FleetItem['category']>('Todos');

  const filteredFleet =
    selectedCategory === 'Todos'
      ? FLEET_EQUIPMENT
      : FLEET_EQUIPMENT.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="maquinaria"
      aria-labelledby="maquinaria-heading"
      className="relative py-24 sm:py-32 bg-[#F5F2EB] text-[#161917] overflow-hidden border-b border-[#DDD6C7]"
    >
      {/* Fondo con Marca de Agua Tipográfica Repetida ("Fabián Compagnucci & Familia") como en 00:08 del video */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.045] flex flex-col justify-between py-6"
        aria-hidden="true"
      >
        {Array.from({ length: 8 }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className="whitespace-nowrap font-serif italic text-5xl sm:text-7xl tracking-wider text-[#13261B]"
            style={{
              transform: `translateX(${rowIdx % 2 === 0 ? '-4%' : '-12%'})`,
            }}
          >
            Fabián Compagnucci &amp; Familia &nbsp;&nbsp; Fabián Compagnucci &amp; Familia
            &nbsp;&nbsp; Fabián Compagnucci &amp; Familia &nbsp;&nbsp; Fabián Compagnucci &amp;
            Familia
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Encabezado Editorial de "HERRAMIENTAS" (en lugar de Propiedades) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#13261B] block mb-3">
              CATÁLOGO EXCLUSIVO · PARQUE PROPIO
            </span>
            <h2
              id="maquinaria-heading"
              className="font-serif text-4xl sm:text-6xl text-[#161917] font-normal leading-[1.06]"
            >
              Nuestras <span className="italic text-[#13261B]">Herramientas.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#525854] max-w-md leading-relaxed">
            Equipos propios mantenidos con mecánica de la familia y presentados con anticipación en
            el campo para garantizar precisión desde el primer surco.
          </p>
        </div>

        {/* Filtros Cápsula */}
        <div
          className="flex flex-wrap gap-2.5 mb-12"
          role="tablist"
          aria-label="Filtrar catálogo de herramientas"
        >
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-sans text-xs uppercase tracking-[0.16em] transition-all duration-300 ${
                  active
                    ? 'bg-[#13261B] text-[#F8F6F1] font-semibold shadow-md'
                    : 'bg-white border border-[#DDD6C7] text-[#525854] hover:border-[#13261B] hover:text-[#161917]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grilla de las 6 Herramientas Reales del CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredFleet.map((item, index) => (
            <article
              key={item.id}
              className="bg-white border border-[#DDD6C7] hover:border-[#C9B282] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Cabecera de Ficha de Colección */}
                <div className="bg-[#13261B] text-[#F8F6F1] px-6 py-4 flex items-center justify-between border-b border-[#C9B282]/30">
                  <span className="font-serif italic text-lg text-[#E5D7B8]">
                    Herramienta 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9B282] border border-[#C9B282]/40 px-2.5 py-0.5 rounded-full">
                    {item.statusBadge}
                  </span>
                </div>

                {/* Galería Interactiva de Fotos y Video en Lote */}
                <ToolMediaGallery item={item} />

                <div className="p-6 sm:p-7">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#525854] block mb-2">
                    {item.code}
                  </span>
                  <h3 className="font-serif text-2xl text-[#161917] font-normal leading-snug mb-2">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-[#13261B] font-medium mb-4">
                    {item.configuration}
                  </p>

                  {item.assignedTractor && (
                    <div className="mb-5 px-3.5 py-2 bg-[#F5F2EB] border-l-2 border-[#C9B282] flex items-center gap-2 text-xs font-mono text-[#161917]">
                      <Tractor className="w-4 h-4 text-[#13261B] shrink-0" />
                      <span>{item.assignedTractor}</span>
                    </div>
                  )}

                  {/* Especificaciones */}
                  <div className="space-y-2 border-t border-b border-[#EBE6DC] py-4 mb-5">
                    {item.keySpecs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-baseline justify-between gap-3 text-xs"
                      >
                        <span className="text-[#525854] font-sans">{spec.label}</span>
                        <span className="font-mono font-semibold text-[#161917] text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Atributos */}
                  <ul className="space-y-2 mb-4">
                    {item.precisionFeatures.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-xs text-[#525854] leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#13261B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 sm:px-7 py-4 bg-[#F5F2EB]/60 border-t border-[#EBE6DC] flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#525854]">
                  DISPONIBLE EN CAMPAÑA
                </span>
                <a
                  href={buildWhatsAppUrl({
                    recipient: 'fabian',
                    customMessage: `Hola Fabián, te consulto por la herramienta: ${item.name}.`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#13261B] hover:text-[#C9B282] transition-colors"
                >
                  <span>Consultar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
