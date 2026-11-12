'use client';

import React, { useState, useCallback } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesBento from '@/components/ServicesBento';
import FleetSection from '@/components/FleetSection';
import PrecisionSimulator from '@/components/PrecisionSimulator';
import WorkedZonesMap from '@/components/WorkedZonesMap';
import AuthorityStrip from '@/components/AuthorityStrip';
import CoverageAndProcess from '@/components/CoverageAndProcess';
import FaqSection from '@/components/FaqSection';
import CampaignQuoter, { QuoterFormState } from '@/components/CampaignQuoter';
import { QUOTER_OPTIONS, ServiceItem } from '@/data/agro-content';

export default function HomePage() {
  const [quoterState, setQuoterState] = useState<QuoterFormState>({
    recipient: 'fabian',
    service: QUOTER_OPTIONS.services[0].id,
    crop: QUOTER_OPTIONS.crops[0],
    hectares: '300 ha',
    location: 'Bulnes / Sampacho / Levalle / Jovita / V. Huidobro (Córdoba)',
    targetDate: 'Planificación Campaña Gruesa',
    hasPrescriptionMap: true,
    customNotes: '',
  });

  const scrollToQuoter = useCallback(() => {
    const el = document.getElementById('cotizador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectServiceForQuote = useCallback(
    (serviceId: ServiceItem['id']) => {
      const targetService =
        serviceId === 'siembra-precision'
          ? QUOTER_OPTIONS.services[0].id
          : QUOTER_OPTIONS.services[2].id;

      setQuoterState((prev) => ({
        ...prev,
        service: targetService,
      }));
      scrollToQuoter();
    },
    [scrollToQuoter]
  );

  const handleApplySimulationToQuote = useCallback(
    ({
      mode,
      crop,
      hectares,
    }: {
      mode: 'seeding' | 'harvest';
      crop: string;
      hectares: number;
    }) => {
      const targetService =
        mode === 'seeding'
          ? QUOTER_OPTIONS.services[0].id
          : QUOTER_OPTIONS.services[2].id;

      const matchedCrop =
        QUOTER_OPTIONS.crops.find((c) =>
          c.toLowerCase().includes(crop.split(' ')[0].toLowerCase())
        ) || QUOTER_OPTIONS.crops[0];

      setQuoterState((prev) => ({
        ...prev,
        service: targetService,
        crop: matchedCrop,
        hectares: `${hectares} ha`,
      }));
      scrollToQuoter();
    },
    [scrollToQuoter]
  );

  const handleSelectLocationForQuote = useCallback(
    (location: string) => {
      setQuoterState((prev) => ({
        ...prev,
        location,
      }));
      scrollToQuoter();
    },
    [scrollToQuoter]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#161917]">
      <Header onQuickQuote={scrollToQuoter} />
      <main className="flex-1">
        <HeroSection />
        <ServicesBento onSelectServiceForQuote={handleSelectServiceForQuote} />
        <FleetSection />
        <PrecisionSimulator onApplySimulationToQuote={handleApplySimulationToQuote} />
        <WorkedZonesMap onSelectZoneForQuote={handleSelectLocationForQuote} />
        <AuthorityStrip />
        <CoverageAndProcess onSelectLocationForQuote={handleSelectLocationForQuote} />
        <FaqSection />
        <CampaignQuoter formState={quoterState} setFormState={setQuoterState} />
      </main>
    </div>
  );
}
