'use client';

import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Satellite,
  Map as MapIcon,
  ExternalLink,
  Navigation,
  Award,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import {
  WORKED_RURAL_ZONES,
  WorkedRuralPoint,
  WorkedRegionId,
} from '@/data/agro-content';

interface WorkedZonesMapProps {
  onSelectZoneForQuote: (locationLabel: string) => void;
}

type RegionFilter = 'all' | WorkedRegionId;

const FIVE_SHOWCASE_CARDS: Array<{
  id: string;
  regionId: WorkedRegionId;
  province: string;
  subtitle: string;
  locations: string;
  image: string;
}> = [
  {
    id: 'showcase-cordoba',
    regionId: 'cordoba',
    province: 'Córdoba',
    subtitle: 'Base Operativa & Sur Cordobés',
    locations: 'Bulnes · Sampacho · Gral. Levalle · Jovita · Villa Huidobro',
    image: '/images/maquinaria/apx/apx-2.jpg',
  },
  {
    id: 'showcase-san-luis-centro',
    regionId: 'san-luis',
    province: 'San Luis Centro',
    subtitle: 'Lartirigoyen & Firmas Agropecuarias',
    locations: 'La Petra · Estancia Grande · Alto Pelado · La Cumbre · El Soven',
    image: '/images/regiones/frame-case-2.jpg',
  },
  {
    id: 'showcase-san-luis-sur',
    regionId: 'san-luis',
    province: 'Sur de San Luis',
    subtitle: 'Corredor Productivo RN 188 / RP 55',
    locations: 'Buena Esperanza · Fortuna · Nueva Galia',
    image: '/images/regiones/frame-pla-1.jpg',
  },
  {
    id: 'showcase-la-pampa',
    regionId: 'la-pampa',
    province: 'La Pampa',
    subtitle: 'Norte Pampeano · Gruesa, Fina y Pasturas',
    locations: 'Rancul · La Maruja · Chamaicó · Ingeniero Luiggi',
    image: '/images/maquinaria/pla-fino/pla-fino-1.jpg',
  },
  {
    id: 'showcase-norte',
    regionId: 'norte-chaco-santiago',
    province: 'Chaco & Sgo. del Estero',
    subtitle: 'Campaña Activa en el Norte Argentino',
    locations: 'Gancedo · Pampa de los Guanacos · Sachayoj · Otumpa · Quimilí',
    image: '/images/regiones/frame-jd-1.jpg',
  },
];

export default function WorkedZonesMap({ onSelectZoneForQuote }: WorkedZonesMapProps) {
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('all');
  const [selectedPointId, setSelectedPointId] = useState<string>(
    WORKED_RURAL_ZONES[0].id // Bulnes
  );
  const [mapType, setMapType] = useState<'h' | 'm'>('h');

  const filteredZones = useMemo(() => {
    if (regionFilter === 'all') return WORKED_RURAL_ZONES;
    return WORKED_RURAL_ZONES.filter((z) => z.regionId === regionFilter);
  }, [regionFilter]);

  const selectedPoint: WorkedRuralPoint = useMemo(() => {
    return (
      WORKED_RURAL_ZONES.find((z) => z.id === selectedPointId) ||
      filteredZones[0] ||
      WORKED_RURAL_ZONES[0]
    );
  }, [selectedPointId, filteredZones]);

  const handleRegionChange = (newRegion: RegionFilter) => {
    setRegionFilter(newRegion);
    if (newRegion !== 'all') {
      const firstInRegion = WORKED_RURAL_ZONES.find((z) => z.regionId === newRegion);
      if (firstInRegion) {
        setSelectedPointId(firstInRegion.id);
      }
    }
  };

  const googleMapsEmbedUrl = useMemo(() => {
    return `https://maps.google.com/maps?q=${encodeURIComponent(
      selectedPoint.googleMapsQuery
    )}&ll=${selectedPoint.lat},${selectedPoint.lng}&t=${mapType}&z=${
      selectedPoint.zoom
    }&output=embed`;
  }, [selectedPoint, mapType]);

  const googleMapsExternalUrl = useMemo(() => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${selectedPoint.lat},${selectedPoint.lng}`
    )}`;
  }, [selectedPoint]);

  const getPinPosition = (lat: number, lng: number) => {
    const minLat = -36.0;
    const maxLat = -25.8;
    const minLng = -66.6;
    const maxLng = -61.2;

    const xPercent = ((lng - minLng) / (maxLng - minLng)) * 80 + 10;
    const yPercent = ((maxLat - lat) / (maxLat - minLat)) * 80 + 10;

    return {
      x: Math.max(7, Math.min(93, xPercent)),
      y: Math.max(7, Math.min(93, yPercent)),
    };
  };

  return (
    <section
      id="zonas-trabajadas"
      aria-labelledby="zonas-trabajadas-heading"
      className="py-24 sm:py-32 bg-[#111412] text-[#F8F6F1] border-b border-[#C9B282]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Encabezado Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#C9B282] block mb-3">
              PRESENCIA REGIONAL · 5 PROVINCIAS EN GOOGLE MAPS
            </span>
            <h2
              id="zonas-trabajadas-heading"
              className="font-serif text-4xl sm:text-6xl text-[#F8F6F1] font-normal leading-[1.06]"
            >
              Lugares de <span className="italic text-[#E5D7B8]">Trabajo.</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#A3ABA6] max-w-md leading-relaxed">
            Desde nuestra sede en <strong className="text-[#F8F6F1]">Bulnes (Córdoba)</strong>,
            desplegamos nuestros equipos en Córdoba, San Luis, La Pampa, Chaco y Santiago del
            Estero.
          </p>
        </div>

        {/* 1. Tira Galería de 5 Columnas Verticales (Calcado del segundo 00:10 del video) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {FIVE_SHOWCASE_CARDS.map((card, idx) => {
            const isActive = regionFilter === card.regionId;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => handleRegionChange(card.regionId)}
                className={`group relative h-80 sm:h-96 overflow-hidden border text-left p-5 flex flex-col justify-between transition-all duration-500 ${
                  isActive
                    ? 'border-[#C9B282] ring-1 ring-[#C9B282]'
                    : 'border-white/15 hover:border-[#C9B282]/60'
                }`}
              >
                <img
                  src={card.image}
                  alt={card.province}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(17,20,18,0.35) 0%, rgba(19,38,27,0.88) 100%)',
                  }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#E5D7B8]">
                    0{idx + 1} // REGIÓN
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#C9B282] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div className="relative z-10">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C9B282] block mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal mb-2">
                    {card.province}
                  </h3>
                  <p className="font-sans text-[11px] text-[#F8F6F1]/80 leading-relaxed">
                    {card.locations}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Barra de Filtros por Provincia + Conmutador Satélite */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-white/15">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: `Todas las Localidades (${WORKED_RURAL_ZONES.length})` },
              { id: 'cordoba', label: 'Córdoba (5)' },
              { id: 'san-luis', label: 'San Luis (8 · Lartirigoyen)' },
              { id: 'la-pampa', label: 'La Pampa (4)' },
              { id: 'norte-chaco-santiago', label: 'Norte: Chaco y Sgo. (5)' },
            ].map((tab) => {
              const active = regionFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleRegionChange(tab.id as RegionFilter)}
                  className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider transition-all ${
                    active
                      ? 'bg-[#C9B282] text-[#111412] font-semibold'
                      : 'bg-white/5 text-[#F8F6F1]/80 hover:text-[#E5D7B8] border border-white/15'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="inline-flex rounded-full border border-white/15 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setMapType('h')}
              className={`px-4 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-colors ${
                mapType === 'h'
                  ? 'bg-[#C9B282] text-[#111412] font-semibold'
                  : 'text-[#F8F6F1]/80'
              }`}
            >
              <Satellite className="w-3.5 h-3.5" />
              <span>Satélite</span>
            </button>
            <button
              type="button"
              onClick={() => setMapType('m')}
              className={`px-4 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-colors ${
                mapType === 'm'
                  ? 'bg-[#C9B282] text-[#111412] font-semibold'
                  : 'text-[#F8F6F1]/80'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Rutas</span>
            </button>
          </div>
        </div>

        {/* 3. Visor Google Maps En Vivo + Lista y Radar de 22 Puntos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Columna Izquierda (7 cols): Google Maps Satelital */}
          <div className="lg:col-span-7 bg-[#13261B]/60 border border-[#C9B282]/30 flex flex-col justify-between">
            <div className="p-5 bg-[#111412] border-b border-[#C9B282]/25 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9B282] block">
                  PUNTO SELECCIONADO EN GOOGLE MAPS
                </span>
                <h3 className="font-serif text-2xl text-white font-normal">
                  {selectedPoint.name} — <span className="italic text-[#E5D7B8]">{selectedPoint.province}</span>
                </h3>
              </div>

              <a
                href={googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-[#C9B282]/50 text-[#E5D7B8] hover:bg-[#C9B282] hover:text-[#111412] font-sans text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative w-full h-[360px] sm:h-[430px] bg-[#0D100E]">
              <iframe
                key={`${selectedPoint.id}-${mapType}`}
                title={`Ubicación satelital de ${selectedPoint.name}, ${selectedPoint.province}`}
                src={googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="p-5 bg-[#111412] border-t border-[#C9B282]/25">
              <button
                type="button"
                onClick={() =>
                  onSelectZoneForQuote(`${selectedPoint.name} (${selectedPoint.province})`)
                }
                className="w-full py-3.5 px-6 bg-[#C9B282] hover:bg-[#E5D7B8] text-[#111412] font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
              >
                Agendar Herramientas en {selectedPoint.name} ({selectedPoint.province})
              </button>
            </div>
          </div>

          {/* Columna Derecha (5 cols): Radar de Pines + Listado de Localidades */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Radar Cartográfico */}
            <div className="bg-[#13261B]/40 border border-[#C9B282]/30 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#C9B282]">
                  MAPA MULTI-PUNTO ({WORKED_RURAL_ZONES.length} LOCALIDADES)
                </span>
                <span className="font-mono text-[11px] text-[#A3ABA6] tabular-nums">
                  {selectedPoint.lat.toFixed(2)}°, {selectedPoint.lng.toFixed(2)}°
                </span>
              </div>

              <div className="relative h-52 bg-[#0D100E] border border-white/10 overflow-hidden">
                {WORKED_RURAL_ZONES.map((point) => {
                  const pos = getPinPosition(point.lat, point.lng);
                  const isCurrent = point.id === selectedPoint.id;
                  const isDimmed =
                    regionFilter !== 'all' && point.regionId !== regionFilter;

                  return (
                    <button
                      key={point.id}
                      type="button"
                      onClick={() => setSelectedPointId(point.id)}
                      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      title={`${point.name} (${point.province})`}
                      aria-label={`Enfocar ${point.name}, ${point.province}`}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all ${
                        isCurrent ? 'z-30 scale-125' : 'z-10 hover:scale-110'
                      } ${isDimmed ? 'opacity-25' : 'opacity-100'}`}
                    >
                      <span
                        className={`flex items-center justify-center w-5 h-5 rounded-full border ${
                          isCurrent
                            ? 'bg-[#C9B282] border-white text-[#111412]'
                            : 'bg-[#13261B] border-[#C9B282] text-[#E5D7B8]'
                        }`}
                      >
                        <MapPin className="w-3 h-3" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Listado Seleccionable */}
            <div className="bg-[#13261B]/40 border border-[#C9B282]/30 p-4 flex-1 flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5D7B8] block mb-3">
                SELECCIONÁ UNA LOCALIDAD PARA VER EN GOOGLE MAPS:
              </span>

              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                {filteredZones.map((zone) => {
                  const isActive = zone.id === selectedPoint.id;
                  return (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setSelectedPointId(zone.id)}
                      className={`w-full p-3.5 text-left border transition-all flex items-center justify-between gap-3 ${
                        isActive
                          ? 'bg-[#13261B] border-[#C9B282]'
                          : 'bg-[#111412]/70 border-white/10 hover:border-[#C9B282]/50'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-lg text-white truncate">
                            {zone.name}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#C9B282] border border-[#C9B282]/30 px-2 py-0.5 rounded-full shrink-0">
                            {zone.province}
                          </span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15 font-mono text-[10px] uppercase text-[#E5D7B8] flex items-center gap-1 shrink-0">
                        <Navigation className="w-3 h-3 text-[#C9B282]" />
                        <span>Ver</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
