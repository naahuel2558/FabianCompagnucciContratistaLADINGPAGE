'use client';

import React, { useState, useMemo } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  PRECISION_COMPARISON_DATA,
  PrecisionSimulatorPreset,
} from '@/data/agro-content';

interface PrecisionSimulatorProps {
  onApplySimulationToQuote: (params: {
    mode: 'seeding' | 'harvest';
    crop: string;
    hectares: number;
  }) => void;
}

export default function PrecisionSimulator({
  onApplySimulationToQuote,
}: PrecisionSimulatorProps) {
  const [activeLabor, setActiveLabor] = useState<'seeding' | 'harvest'>('seeding');
  const [techMode, setTechMode] = useState<'fabiancompag' | 'traditional'>('fabiancompag');
  const [selectedPresetId, setSelectedPresetId] = useState<string>(
    PRECISION_COMPARISON_DATA.simulatorPresets[0].id
  );
  const [hectares, setHectares] = useState<number>(
    PRECISION_COMPARISON_DATA.simulatorPresets[0].defaultHectares
  );

  const currentPreset: PrecisionSimulatorPreset = useMemo(() => {
    return (
      PRECISION_COMPARISON_DATA.simulatorPresets.find((p) => p.id === selectedPresetId) ||
      PRECISION_COMPARISON_DATA.simulatorPresets[0]
    );
  }, [selectedPresetId]);

  const handleSelectCrop = (preset: PrecisionSimulatorPreset) => {
    setSelectedPresetId(preset.id);
    setHectares(preset.defaultHectares);
  };

  const metrics = useMemo(() => {
    const overlapSavingsPerHaUSD =
      currentPreset.seedPlusFertilizerCostPerHaUSD *
      (currentPreset.overlapReductionPercent / 100);
    const totalOverlapSavingsUSD = Math.round(overlapSavingsPerHaUSD * hectares);

    const estimatedSavedBags = Math.max(
      1,
      Math.round((hectares * (currentPreset.overlapReductionPercent / 100)) / 1.1)
    );

    const vraGainPerHaUSD =
      currentPreset.seedPlusFertilizerCostPerHaUSD *
      (currentPreset.variableRateYieldGainPercent / 100) *
      1.65;
    const totalVraGainUSD = Math.round(vraGainPerHaUSD * hectares);

    const recoveredTonsTotal = (currentPreset.harvestLossSavingKgPerHa * hectares) / 1000;
    const harvestRecoveryUSD = Math.round(
      recoveredTonsTotal * currentPreset.grainPricePerTonUSD
    );

    const totalCombinedBenefitUSD =
      totalOverlapSavingsUSD + totalVraGainUSD + harvestRecoveryUSD;

    return {
      totalOverlapSavingsUSD,
      estimatedSavedBags,
      totalVraGainUSD,
      recoveredTonsTotal: recoveredTonsTotal.toFixed(1),
      harvestRecoveryUSD,
      totalCombinedBenefitUSD,
    };
  }, [currentPreset, hectares]);

  return (
    <section
      id="comparador"
      aria-labelledby="comparador-heading"
      className="relative py-24 sm:py-32 bg-[#F5F2EB] text-[#161917] overflow-hidden border-b border-[#DDD6C7]"
    >
      <div id="simulador-precision" className="absolute -top-20" aria-hidden="true" />

      {/* Fondo con Marca de Agua Repetida igual a 00:08 del video */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.045] flex flex-col justify-between py-8"
        aria-hidden="true"
      >
        {Array.from({ length: 7 }).map((_, idx) => (
          <div
            key={idx}
            className="whitespace-nowrap font-serif italic text-5xl sm:text-7xl tracking-wider text-[#13261B]"
          >
            Fabián Compagnucci &amp; Familia &nbsp;&nbsp; Fabián Compagnucci &amp; Familia
            &nbsp;&nbsp; Fabián Compagnucci &amp; Familia
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Tarjeta Blanca Flotante Editorial (Exactamente como en 00:08 del video) */}
        <div className="bg-white border border-[#DDD6C7] shadow-2xl p-6 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Columna Izquierda (5 cols): Título en Serif + Pasos 01, 02, 03 */}
            <div className="lg:col-span-5">
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#C9B282] font-semibold block mb-3">
                SIMULADOR DE RENDIMIENTO
              </span>

              <h2
                id="comparador-heading"
                className="font-serif text-3xl sm:text-5xl text-[#161917] font-normal leading-[1.1] mb-4"
              >
                Precisión <span className="italic text-[#13261B]">Auditable.</span>
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#525854] leading-relaxed mb-8">
                Comprobá cómo la tecnología de corte surco por surco{' '}
                <strong className="text-[#161917]">Precision Planting</strong> +{' '}
                <strong className="text-[#161917]">Twin Force</strong> y el mapeo satelital en
                cosecha optimizan la inversión de tu campaña.
              </p>

              {/* Puntos numerados 01, 02, 03 calcados del diseño del video */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#13261B] text-[#E5D7B8] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    01
                  </span>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-[#161917]">
                      Corte Surco por Surco &amp; Dosis Variable
                    </h3>
                    <p className="font-sans text-xs text-[#525854] mt-1 leading-relaxed">
                      Ahorro estimado de{' '}
                      <strong className="font-mono text-[#13261B] tabular-nums">
                        USD {metrics.totalOverlapSavingsUSD.toLocaleString('es-AR')}
                      </strong>{' '}
                      ({metrics.estimatedSavedBags} bolsas eq.) al eliminar solapamiento en
                      cabeceras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#13261B] text-[#E5D7B8] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    02
                  </span>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-[#161917]">
                      Prescripción por Ambientes (Loma / Media Loma / Bajo)
                    </h3>
                    <p className="font-sans text-xs text-[#525854] mt-1 leading-relaxed">
                      Mejora productiva estimada en{' '}
                      <strong className="font-mono text-[#13261B] tabular-nums">
                        USD {metrics.totalVraGainUSD.toLocaleString('es-AR')}
                      </strong>{' '}
                      ajustando semilla y fertilizante.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#13261B] text-[#E5D7B8] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    03
                  </span>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-[#161917]">
                      Cosecha Mapeada (Case IH 7230 &amp; JD 9570 STS)
                    </h3>
                    <p className="font-sans text-xs text-[#525854] mt-1 leading-relaxed">
                      Recupero estimado de{' '}
                      <strong className="font-mono text-[#13261B] tabular-nums">
                        +{metrics.recoveredTonsTotal} tn (USD{' '}
                        {metrics.harvestRecoveryUSD.toLocaleString('es-AR')})
                      </strong>{' '}
                      y mapa satelital para la próxima campaña.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onApplySimulationToQuote({
                    mode: activeLabor,
                    crop: currentPreset.crop,
                    hectares,
                  })
                }
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#13261B] hover:bg-[#111412] text-[#F8F6F1] font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-3 transition-all shadow-md"
              >
                <span>
                  Agendar {hectares} ha de {currentPreset.crop}
                </span>
                <ArrowRight className="w-4 h-4 text-[#C9B282]" />
              </button>
            </div>

            {/* Columna Derecha (7 cols): Controles Interactivos + Monitor Gráfico de Lote */}
            <div className="lg:col-span-7 bg-[#F5F2EB] border border-[#DDD6C7] p-5 sm:p-7">
              {/* Tabs Labor */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                <button
                  type="button"
                  onClick={() => setActiveLabor('seeding')}
                  className={`py-3 px-4 text-xs uppercase tracking-[0.15em] font-semibold transition-all ${
                    activeLabor === 'seeding'
                      ? 'bg-[#13261B] text-[#F8F6F1]'
                      : 'bg-white text-[#525854] border border-[#DDD6C7]'
                  }`}
                >
                  Siembra Surco x Surco VRA
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLabor('harvest')}
                  className={`py-3 px-4 text-xs uppercase tracking-[0.15em] font-semibold transition-all ${
                    activeLabor === 'harvest'
                      ? 'bg-[#13261B] text-[#F8F6F1]'
                      : 'bg-white text-[#525854] border border-[#DDD6C7]'
                  }`}
                >
                  Cosecha con Mapeo Satelital
                </button>
              </div>

              {/* Selector de Cultivo y Slider de Hectáreas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {PRECISION_COMPARISON_DATA.simulatorPresets.map((preset) => {
                  const isSelected = preset.id === selectedPresetId;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectCrop(preset)}
                      className={`py-2.5 px-2 text-xs font-medium border transition-colors ${
                        isSelected
                          ? 'bg-[#C9B282] text-[#111412] border-[#C9B282] font-semibold'
                          : 'bg-white text-[#525854] border-[#DDD6C7] hover:border-[#13261B]'
                      }`}
                    >
                      {preset.crop.split('/')[0]}
                    </button>
                  );
                })}
              </div>

              <div className="mb-5 bg-white p-4 border border-[#DDD6C7]">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="sim-ha-slider"
                    className="font-sans text-[11px] uppercase tracking-wider text-[#525854]"
                  >
                    Superficie del lote a proyectar:
                  </label>
                  <span className="font-serif text-2xl font-semibold text-[#13261B] tabular-nums">
                    {hectares} ha
                  </span>
                </div>
                <input
                  id="sim-ha-slider"
                  type="range"
                  min={50}
                  max={1200}
                  step={25}
                  value={hectares}
                  onChange={(e) => setHectares(Number(e.target.value))}
                  className="w-full agro-slider"
                />
              </div>

              {/* Monitor SVG del Lote con Ambientes y Toggle Comparativo */}
              <div className="bg-[#111412] text-[#F8F6F1] p-4 sm:p-5 border border-[#13261B]">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C9B282]">
                    {techMode === 'fabiancompag'
                      ? 'PRECISIÓN COMPAGNUCCI (0% SOLAPAMIENTO + AMBIENTES)'
                      : 'MANEJO TRADICIONAL (DOBLE PASADA EN CABECERA)'}
                  </span>
                  <div className="inline-flex rounded-full bg-white/10 p-0.5">
                    <button
                      type="button"
                      onClick={() => setTechMode('traditional')}
                      className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider transition-colors ${
                        techMode === 'traditional'
                          ? 'bg-[#DC2626] text-white font-semibold'
                          : 'text-white/70'
                      }`}
                    >
                      Convencional
                    </button>
                    <button
                      type="button"
                      onClick={() => setTechMode('fabiancompag')}
                      className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider transition-colors ${
                        techMode === 'fabiancompag'
                          ? 'bg-[#C9B282] text-[#111412] font-semibold'
                          : 'text-white/70'
                      }`}
                    >
                      Compagnucci
                    </button>
                  </div>
                </div>

                <svg
                  viewBox="0 0 600 260"
                  className="w-full h-auto block"
                  role="img"
                  aria-label="Visualización de lote con corte surco por surco y ambientes"
                >
                  <polygon
                    points="20,20 440,15 580,100 580,240 20,240"
                    fill="#13261B"
                    stroke="#C9B282"
                    strokeWidth="1.5"
                  />

                  {techMode === 'fabiancompag' ? (
                    <>
                      <polygon
                        points="20,20 210,18 190,240 20,240"
                        fill="rgba(201, 178, 130, 0.25)"
                      />
                      <polygon
                        points="210,18 400,16 390,240 190,240"
                        fill="rgba(46, 139, 87, 0.35)"
                      />
                      <polygon
                        points="400,16 440,15 580,100 580,240 390,240"
                        fill="rgba(22, 163, 74, 0.45)"
                      />
                      <line
                        x1="440"
                        y1="15"
                        x2="580"
                        y2="100"
                        stroke="#C9B282"
                        strokeWidth="3"
                      />
                    </>
                  ) : (
                    <polygon
                      points="435,16 578,100 435,100"
                      fill="rgba(220, 38, 38, 0.55)"
                      stroke="#DC2626"
                      strokeWidth="1.5"
                    />
                  )}

                  {[80, 160, 240, 320, 400, 480, 540].map((x) => (
                    <line
                      key={x}
                      x1={x}
                      y1={x > 440 ? 15 + (x - 440) * 0.6 : 18}
                      x2={x}
                      y2={240}
                      stroke="rgba(255,255,255,0.16)"
                      strokeDasharray="3 3"
                    />
                  ))}

                  <g fontFamily="monospace" fontSize="10" fill="#F8F6F1">
                    <text x="40" y="135" fill="#E5D7B8" fontWeight="bold">
                      LOMA: {currentPreset.ambientPrescriptionSummary.loma.split('·')[0]}
                    </text>
                    <text x="220" y="135" fill="#F8F6F1" fontWeight="bold">
                      MEDIA LOMA: {currentPreset.ambientPrescriptionSummary.mediaLoma.split('·')[0]}
                    </text>
                    <text x="415" y="165" fill="#86EFAC" fontWeight="bold">
                      BAJO: {currentPreset.ambientPrescriptionSummary.bajo.split('·')[0]}
                    </text>
                  </g>
                </svg>

                <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[#E5D7B8] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9B282]" />
                    Beneficio total estimado en {hectares} ha:
                  </span>
                  <span className="text-base font-bold text-[#C9B282] tabular-nums">
                    USD {metrics.totalCombinedBenefitUSD.toLocaleString('es-AR')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
