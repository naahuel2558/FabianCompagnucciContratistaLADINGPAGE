// ============================================================================
// FABIAN COMPAGNUCCI — Datos Oficiales de Empresa Familiar Contratista Rural
// Base Operativa: Bv. Belgrano 433, Bulnes, Córdoba · CUIT 20-20523582-6
// ============================================================================

export interface ContactPerson {
  id: 'fabian' | 'agustin';
  name: string;
  role: string;
  phoneDisplay: string;
  whatsappNumber: string;
}

export interface BrandInfo {
  name: string;
  legalTitle: string;
  shortName: string;
  ownerName: string;
  coOwnerName: string;
  cuit: string;
  address: string;
  locality: string;
  province: string;
  tagline: string;
  roleDescription: string;
  methodologyQuote: string;
  values: string[];
  whatsappNumber: string;
  whatsappDisplay: string;
  secondaryWhatsappNumber: string;
  secondaryWhatsappDisplay: string;
  contacts: ContactPerson[];
  email: string;
  baseRegion: string;
  subRegion: string;
  activeCampaign: string;
  campaignStatusBadge: string;
  operatingHours: string;
  coordinates: {
    lat: number;
    lng: number;
    label: string;
  };
}

export interface TelemetryIndicator {
  id: string;
  label: string;
  value: string;
  unit?: string;
  status: 'online' | 'active' | 'calibrated';
  detail: string;
}

export interface HeroContent {
  campaignBadge: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  subtitle: string;
  technicalPills: string[];
  primaryCta: {
    label: string;
    sublabel: string;
    whatsappPreset: string;
  };
  secondaryCta: {
    label: string;
    targetSection: string;
  };
  telemetryIndicators: TelemetryIndicator[];
}

export interface AuthorityMetric {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  prefix?: string;
  label: string;
  technicalContext: string;
  badge: string;
}

export interface TechnicalSpecItem {
  parameter: string;
  value: string;
  detail: string;
}

export interface ServiceItem {
  id: 'siembra-precision' | 'cosecha-mapeo';
  code: string;
  slug: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  campaignTag: string;
  heroStat: {
    value: string;
    label: string;
  };
  description: string;
  crops: string[];
  technicalSpecs: TechnicalSpecItem[];
  agronomicAdvantages: {
    title: string;
    description: string;
    metricHighlight: string;
  }[];
  onboardTech: string[];
  deliverables: string[];
  whatsappMessage: string;
  ctaLabel: string;
}

export interface PrecisionSimulatorPreset {
  id: string;
  name: string;
  crop: 'Maíz' | 'Soja' | 'Trigo / Cebada / Pasturas' | 'Girasol';
  defaultHectares: number;
  seedPlusFertilizerCostPerHaUSD: number;
  overlapReductionPercent: number;
  variableRateYieldGainPercent: number;
  harvestLossSavingKgPerHa: number;
  grainPricePerTonUSD: number;
  ambientPrescriptionSummary: {
    loma: string;
    mediaLoma: string;
    bajo: string;
  };
}

export interface PrecisionComparisonData {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
  tabs: {
    seeding: {
      title: string;
      badge: string;
      summary: string;
      traditionalMethod: {
        label: string;
        overlapRate: string;
        singulationRate: string;
        fertilizerStrategy: string;
        painPoints: string[];
      };
      fabianCompagMethod: {
        label: string;
        overlapRate: string;
        singulationRate: string;
        fertilizerStrategy: string;
        advantages: string[];
      };
    };
    harvest: {
      title: string;
      badge: string;
      summary: string;
      traditionalMethod: {
        label: string;
        dataOutput: string;
        headerloss: string;
        moistureTracking: string;
        painPoints: string[];
      };
      fabianCompagMethod: {
        label: string;
        dataOutput: string;
        headerloss: string;
        moistureTracking: string;
        advantages: string[];
      };
    };
  };
  simulatorPresets: PrecisionSimulatorPreset[];
  fileFormatsSupported: string[];
}

export interface FleetItem {
  id: string;
  category:
    | 'Equipos de Siembra'
    | 'Cosecha con Mapeo'
    | 'Tracción & Potencia'
    | 'Embolsado & Autonomía';
  code: string;
  name: string;
  configuration: string;
  assignedTractor?: string;
  imageUrl: string;
  gallery: string[];
  videoUrl?: string;
  keySpecs: {
    label: string;
    value: string;
  }[];
  precisionFeatures: string[];
  operationalBenefit: string;
  statusBadge: string;
}

export interface CoverageZone {
  id: string;
  regionName: string;
  province: string;
  hubs: string[];
  radiusType:
    | 'Base Operativa Directa'
    | 'Cobertura Frecuente Campaña Fina/Gruesa'
    | 'Traslado Programado por Superficie';
  responseEstimate: string;
  minHectaresSuggested: string;
  notes: string;
}

export type WorkedRegionId =
  | 'cordoba'
  | 'norte-chaco-santiago'
  | 'san-luis'
  | 'la-pampa';

export interface WorkedRuralPoint {
  id: string;
  name: string;
  province: string;
  regionId: WorkedRegionId;
  regionLabel: string;
  lat: number;
  lng: number;
  zoom: number;
  googleMapsQuery: string;
  routeCorridor: string;
  laborsPerformed: string[];
  clientHighlight?: string;
  description: string;
}

export interface WorkedRuralRegionGroup {
  id: WorkedRegionId;
  title: string;
  subtitle: string;
  badge: string;
  clientReference?: string;
  centerLat: number;
  centerLng: number;
  defaultZoom: number;
}

export interface WorkProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  technicalDeliverable: string;
}

export interface FaqItem {
  id: string;
  category:
    | 'Agricultura de Precisión'
    | 'Cosecha y Embolsado'
    | 'Operativa y Mecánica Propia'
    | 'Contratación';
  question: string;
  answer: string;
  technicalHighlight: string;
}

export interface WhatsAppInquiryParams {
  recipient?: 'fabian' | 'agustin';
  service?: string;
  crop?: string;
  hectares?: string | number;
  location?: string;
  targetDate?: string;
  hasPrescriptionMap?: boolean;
  customMessage?: string;
}

// ============================================================================
// 1. DATOS DE MARCA, FAMILIA COMPAGNUCCI Y CONTACTO REAL
// ============================================================================

export const BRAND_INFO: BrandInfo = {
  name: 'FABIÁN COMPAGNUCCI',
  legalTitle: 'Fabián Compagnucci — Contratista Rural (Empresa Familiar)',
  shortName: 'Fabián Compagnucci',
  ownerName: 'Fabián Compagnucci',
  coOwnerName: 'Agustín Compagnucci',
  cuit: '20-20523582-6',
  address: 'Bv. Belgrano 433, Bulnes, Córdoba',
  locality: 'Bulnes',
  province: 'Córdoba',
  tagline:
    'Empresa Familiar Contratista Rural · +20 Años en Siembra de Precisión (Precision Planting / Twin Force), Cosecha con Mapeo Satelital y Embolsado',
  roleDescription:
    'Empresa familiar con más de 20 años de experiencia en siembra directa surco por surco, dosis variable, cosecha axial con mapeo satelital, embolsado de granos y mecánica propia en lote. Base en Bulnes (Córdoba) con cobertura en Córdoba, San Luis, La Pampa, Chaco y Santiago del Estero.',
  methodologyQuote:
    'Presentamos los equipos de trabajo en el campo con anticipación para comenzar de forma puntual la campaña y trabajar con un orden previo para una mejor labor.',
  values: [
    'Responsables',
    'Trabajadores Comprometidos',
    'Puntuales en Ventana de Campaña',
    'Soluciones Rápidas (Mecánica Propia)',
    'Ordenados',
    'Autosuficientes',
    'Eficientes',
  ],
  whatsappNumber: '5493584113957',
  whatsappDisplay: '358 411-3957',
  secondaryWhatsappNumber: '5493584187814',
  secondaryWhatsappDisplay: '358 418-7814',
  contacts: [
    {
      id: 'fabian',
      name: 'Fabián Compagnucci',
      role: 'Titular · Coordinación General y Lote',
      phoneDisplay: '358 411-3957',
      whatsappNumber: '5493584113957',
    },
    {
      id: 'agustin',
      name: 'Agustín Compagnucci',
      role: 'Coordinación Operativa & Agricultura de Precisión',
      phoneDisplay: '358 418-7814',
      whatsappNumber: '5493584187814',
    },
  ],
  email: 'fabiandarioc@hotmail.com',
  baseRegion: 'Base en Bulnes (Córdoba) · San Luis · La Pampa · Chaco y Sgo. del Estero',
  subRegion:
    'Córdoba (Bulnes, Sampacho, Levalle, Jovita, V. Huidobro) · San Luis · La Pampa · Norte (Gancedo, Sachayoj, Pampa de los Guanacos, Otumpa, Quimilí)',
  activeCampaign: 'Campaña Fina & Gruesa · Equipos Listos en Lote',
  campaignStatusBadge: 'EMPRESA FAMILIAR · +20 AÑOS DE EXPERIENCIA · BULNES, CÓRDOBA',
  operatingHours:
    'Presentación anticipada de equipos en el campo · Mecánica y conducción propia',
  coordinates: {
    lat: -33.275,
    lng: -64.668,
    label: 'Bv. Belgrano 433, Bulnes, Córdoba (Base Operativa)',
  },
};

// ============================================================================
// 2. HERO PRINCIPAL Y TELEMETRÍA RÁPIDA
// ============================================================================

export const HERO_CONTENT: HeroContent = {
  campaignBadge:
    'FABIÁN Y AGUSTÍN COMPAGNUCCI · EMPRESA FAMILIAR (+20 AÑOS EN EL RUBRO)',
  eyebrow:
    'BASE EN BULNES (CÓRDOBA) · COBERTURA EN CÓRDOBA, SAN LUIS, LA PAMPA, CHACO Y SGO. DEL ESTERO',
  title: 'Siembra Directa Surco por Surco + Dosis Variable y',
  highlightedTitle: 'Cosecha con Mapeo Satelital y Embolsado.',
  subtitle:
    'Presentamos los equipos en el campo con anticipación para arrancar de forma puntual cada campaña. Operamos Sembradora Air Drill Agrometal APX SEED PRO (Twin Force + Precision Planting corte surco por surco y VRA), Sembradoras PLA Neumáticas y de Fino/Pasturas, y Cosechadoras Case IH 7230 Axial-Flow y John Deere 9570 STS con mapeo de rendimiento.',
  technicalPills: [
    'Agrometal APX SEED PRO · Twin Force + Precision Planting',
    'Corte Surco por Surco + VRA Semilla y Fertilizante',
    'PLA Neumática (Cuerpo y Dosificador John Deere)',
    'Case IH 7230 + John Deere 9570 STS con Mapeo',
    'Mecánica Propia y Embolsado en Lote',
  ],
  primaryCta: {
    label: 'Coordinar Campaña por WhatsApp',
    sublabel: 'Trato directo con Fabián (358 411-3957) o Agustín (358 418-7814)',
    whatsappPreset:
      'Hola Fabián, te escribo desde la web de Compagnucci Contratistas Rurales. Quería consultar disponibilidad de equipos para esta campaña.',
  },
  secondaryCta: {
    label: 'Simular Ahorro Surco x Surco y Mapeo',
    targetSection: '#comparador',
  },
  telemetryIndicators: [
    {
      id: 'precision-planting',
      label: 'AGROMETAL APX SEED PRO',
      value: '22 a 52',
      unit: 'cm · VRA',
      status: 'calibrated',
      detail:
        'Sistema TWIN FORCE + Dosificador Precision Planting con corte surco por surco y dosis variable',
    },
    {
      id: 'pla-seeding',
      label: 'PLA NEUMÁTICA + FINO',
      value: '41 a 19',
      unit: 'cm / 21 a 38',
      status: 'online',
      detail:
        'PLA 22 a 52 cm (Cuerpo y dosificador JD) + PLA Fino y Pasturas 41 a 19 cm / 21 a 38 cm',
    },
    {
      id: 'harvest-fleet',
      label: 'COSECHA CON MAPEO',
      value: 'CASE 7230',
      unit: '+ JD 9570',
      status: 'active',
      detail:
        'Case IH 7230 + John Deere 9570 STS con mapeo satelital, monitor de rinde y embolsado',
    },
    {
      id: 'family-experience',
      label: 'TRAYECTORIA Y RESPALDO',
      value: '+20',
      unit: 'AÑOS',
      status: 'online',
      detail:
        'Empresa familiar con mecánica propia, llegada anticipada al lote y soluciones rápidas',
    },
  ],
};

// ============================================================================
// 3. MÉTRICAS DE AUTORIDAD Y CREDIBILIDAD DE CAMPO
// ============================================================================

export const AUTHORITY_METRICS: AuthorityMetric[] = [
  {
    id: 'years-experience',
    value: '+20',
    numericValue: 20,
    prefix: '+',
    suffix: 'Años',
    label: 'De Experiencia Familiar en el Rubro',
    technicalContext:
      'Conducción directa de maquinaria y personal, mecánica propia del equipo y llegada con anticipación al lote para un trabajo ordenado.',
    badge: 'EMPRESA FAMILIAR COMPAGNUCCI',
  },
  {
    id: 'seed-fleet',
    value: '3',
    numericValue: 3,
    suffix: 'Sembradoras',
    label: 'Air Drill APX Seed Pro + 2 PLA',
    technicalContext:
      'Agrometal APX SEED PRO (Twin Force + Precision Planting surco a surco y VRA), PLA Neumática (2022) y PLA Fino/Pasturas.',
    badge: 'CORTE SURCO A SURCO & VRA',
  },
  {
    id: 'harvest-fleet-count',
    value: '2 Cosechadoras',
    numericValue: 2,
    suffix: '+ Embolsado',
    label: 'Case IH 7230 + John Deere 9570 STS',
    technicalContext:
      'Ambas equipadas con mapeo satelital y monitor de rendimiento en tiempo real, más servicio completo de embolsado en lote.',
    badge: 'MAPEO SATELITAL DE RINDE',
  },
  {
    id: 'regions-covered',
    value: '5',
    numericValue: 5,
    suffix: 'Provincias',
    label: 'Cba · San Luis · La Pampa · Chaco · Sgo.',
    technicalContext:
      'Base en Bulnes (Córdoba) y trayectoria comprobada junto a firmas como Lartirigoyen y productores de primera línea.',
    badge: 'AUTOSUFICIENTES EN CAMPO',
  },
];

// ============================================================================
// 4. SERVICIOS PRINCIPALES (FICHAS TÉCNICAS PROFUNDAS)
// ============================================================================

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: 'siembra-precision',
    code: 'SRV-01 // SIEMBRA DIRECTA DE PRECISIÓN & VRA',
    slug: 'siembra-directa-agrometal-apx-precision-planting-pla',
    shortTitle: 'Siembra Directa Surco x Surco + Dosis Variable (Gruesa, Fina y Pasturas)',
    title: 'Siembra Directa con Corte Surco por Surco, Twin Force y Dosis Variable',
    subtitle:
      'Implantación de máxima exactitud con Sembradora Air Drill Agrometal APX SEED PRO (Precision Planting + Twin Force), Sembradora PLA Neumática (Cuerpo John Deere) y Sembradora PLA para Fino, Pasturas y Soja a 38 cm.',
    campaignTag: 'MAÍZ · SOJA · GIRASOL · TRIGO · CEBADA · PASTURAS',
    heroStat: {
      value: 'Precision Planting + Twin Force',
      label: 'Corte surco por surco + Variable en semillas y fertilizante',
    },
    description:
      'Presentamos nuestros equipos de siembra en el campo con anticipación para comenzar de forma puntual la campaña. Contamos con 3 configuraciones de siembra traccionadas por Case IH Puma 200 y John Deere 7210J para cubrir desde gruesa a 52 cm con corte surco por surco y dosis variable hasta fina y pasturas a 19 cm o 38 cm.',
    crops: [
      'Maíz (22 a 52 cm)',
      'Soja (52 cm / 38 cm / 19 cm)',
      'Trigo y Cebada (41 a 19 cm)',
      'Girasol y Sorgo',
      'Pasturas y Verdeos',
    ],
    technicalSpecs: [
      {
        parameter: 'Equipo 1: Air Drill Agrometal APX SEED PRO',
        value: '22 líneas a 52 cm · Tractor Case IH Puma 200',
        detail:
          'Equipada con sistema de carga constante TWIN FORCE, dosificador Precision Planting con corte surco por surco y siembra variable en semillas y fertilizante.',
      },
      {
        parameter: 'Equipo 2: Sembradora PLA Neumática (Año 2022)',
        value: '22 líneas a 52 cm · Tractor John Deere 7210J',
        detail:
          'Configurada con cuerpo John Deere, sistema de presión constante en línea y dosificador neumático John Deere para emergencia uniforme.',
      },
      {
        parameter: 'Equipo 3: Sembradora PLA de Fino y Pasturas',
        value: '41 a 19 cm (o 21 a 38 cm) · Tractor Case IH Puma 200',
        detail:
          'Versatilidad total para campaña fina y pasturas en 41 líneas a 19 cm, o configuración en 21 líneas a 38 cm para planteos de acortamiento de hileras.',
      },
      {
        parameter: 'Prescripciones y Corte Automático',
        value: 'Corte Surco x Surco + Dosis Variable (VRA)',
        detail:
          'Eliminación de solapamientos en cabeceras y diagonales; ajuste en tiempo real de densidad de semilla y fertilizante según ambiente.',
      },
      {
        parameter: 'Mecánica y Puesta a Punto Propia',
        value: 'Autosuficiencia total en el lote',
        detail:
          'Llegada anticipada al establecimiento para calibrar profundidad, presión de cuerpos y dosificación antes de iniciar la ventana óptima.',
      },
    ],
    agronomicAdvantages: [
      {
        title: 'Sistema TWIN FORCE + Precision Planting en Gruesa',
        description:
          'La Agrometal APX SEED PRO mantiene presión constante de copiado sobre el suelo sin importar el rastrojo, mientras el dosificador Precision Planting corta línea por línea en cabeceras y aplica receta variable de semilla y fertilizante.',
        metricHighlight: '0% solapamiento en cabeceras',
      },
      {
        title: 'Cuerpo y Dosificador John Deere con Presión Constante',
        description:
          'La Sembradora PLA Neumática 2022 (22 a 52 cm) con cuerpo y dosificador John Deere garantiza un planteo limpio, profundidad clavada y emergencia pareja en todo el lote.',
        metricHighlight: 'Implantación 100% uniforme',
      },
      {
        title: 'Especialistas en Fina, Pasturas (19 cm) y Hileras a 38 cm',
        description:
          'Con la PLA 41 a 19 cm (configurable a 21 a 38 cm) cubrimos implantación de trigo, cebada, verdeos, alfalfas y soja con excelente distribución espacial.',
        metricHighlight: 'Doble configuración 19 / 38 cm',
      },
    ],
    onboardTech: [
      'Agrometal APX SEED PRO (22 a 52 cm): Sistema TWIN FORCE + Precision Planting',
      'Corte automático surco por surco y dosis variable en semillas y fertilizante',
      'PLA Neumática 2022 (22 a 52 cm): Cuerpo y dosificador John Deere + presión constante',
      'PLA Fino y Pasturas: 41 líneas a 19 cm con opción a 21 líneas a 38 cm',
      'Tractores Case IH Puma 200 (x2) y John Deere 7210J',
    ],
    deliverables: [
      'Ejecución precisa de recetas de siembra y fertilización variable por ambientes',
      'Presentación anticipada de los equipos en el campo para inicio puntual de campaña',
      'Control permanente de profundidad, singulación y tapado de surco por sus propios dueños',
    ],
    whatsappMessage:
      'Hola Fabián, te escribo desde la web. Quiero consultar disponibilidad para SIEMBRA DIRECTA (Agrometal APX Seed Pro Surco x Surco VRA / PLA Neumática / PLA Fino y Pasturas).',
    ctaLabel: 'Cotizar Siembra con Fabián / Agustín',
  },
  {
    id: 'cosecha-mapeo',
    code: 'SRV-02 // COSECHA CON MAPEO SATELITAL & EMBOLSADO',
    slug: 'cosecha-case-7230-john-deere-9570-sts-mapeo-embolsado',
    shortTitle: 'Cosecha con Mapeo Satelital (Case IH 7230 / JD 9570 STS) + Embolsado',
    title: 'Cosecha de Granos con Mapeo Satelital, Monitor de Rinde y Embolsado en Lote',
    subtitle:
      'Recolección de alta eficiencia con Cosechadora Case IH 7230 Axial-Flow y Cosechadora John Deere 9570 STS, equipadas con mapeo satelital, monitor de rendimiento y equipo propio de embolsado.',
    campaignTag: 'COSECHA FINA & GRUESA · MAPEO DE RINDE · EMBOLSADO DE GRANOS',
    heroStat: {
      value: 'Case IH 7230 + JD 9570 STS',
      label: 'Mapeo satelital + Monitor de rendimiento + Embolsadora en lote',
    },
    description:
      'Trabajamos con dos frentes de cosecha de probada confiabilidad: Case IH 7230 y John Deere 9570 STS, ambas equipadas con mapeo satelital y monitor de rendimiento. Complementamos la trilla con equipo de embolsado de granos y mecánica propia en el lote para dar soluciones rápidas sin detener la recolección.',
    crops: [
      'Soja de Primera y Segunda',
      'Maíz Temprano y Tardío',
      'Trigo y Cebada',
      'Girasol y Sorgo',
    ],
    technicalSpecs: [
      {
        parameter: 'Cosechadora 1: Case IH 7230 AFS',
        value: 'Trilla Axial · Mapeo Satelital y Monitor de Rinde',
        detail:
          'Gran capacidad de trilla y tratamiento suave del grano con registro satelital continuo de rendimiento y humedad.',
      },
      {
        parameter: 'Cosechadora 2: John Deere 9570 STS',
        value: 'Rotor STS · Mapeo Satelital y Monitor de Rinde',
        detail:
          'Separación rotativa STS de alta limpieza, excelente desempeño en todo tipo de condiciones de humedad y mapeo georreferenciado.',
      },
      {
        parameter: 'Servicio de Embolsado en Lote',
        value: 'Equipo de Embolsado Propio',
        detail:
          'Almacenamiento inmediato en silo bolsa directamente en el lote para que la cosechadora no pierda horas esperando camiones.',
      },
      {
        parameter: 'Mecánica y Conducción Propia',
        value: 'Autosuficientes y Rápidos en Soluciones',
        detail:
          'Más de 20 años en mecánica propia del equipo y conducción directa en lote, minimizando tiempos muertos en plena ventana de cosecha.',
      },
      {
        parameter: 'Orden y Puntualidad Operativa',
        value: 'Llegada anticipada al establecimiento',
        detail:
          'Presentamos las máquinas con antelación para calibrar todo en seco y comenzar a trillar apenas da la humedad del grano.',
      },
    ],
    agronomicAdvantages: [
      {
        title: 'Doble Capacidad de Trilla: Case IH 7230 + John Deere 9570 STS',
        description:
          'Contar con tecnología Axial-Flow y STS nos permite adaptarnos a lotes de alto rinde en maíz, soja, trigo o girasol cuidando la integridad física del grano y reduciendo mermas.',
        metricHighlight: 'Trilla limpia y grano sano',
      },
      {
        title: 'Mapeo Satelital y Monitor de Rendimiento en Ambas Máquinas',
        description:
          'Registramos el rendimiento lote por lote para que el productor y su ingeniero agrónomo conozcan con exactitud cómo rindió cada ambiente del campo.',
        metricHighlight: '100% mapeo satelital en cosecha',
      },
      {
        title: 'Cosecha + Embolsado Integral con Mecánica Propia',
        description:
          'Resolvemos tanto la recolección como el embolsado de granos en el campo con un solo equipo humano responsable, ordenado y autosuficiente.',
        metricHighlight: 'Cosecha + Embolsado coordinado',
      },
    ],
    onboardTech: [
      'Cosechadora Case IH 7230 con mapeo satelital y monitor de rendimiento',
      'Cosechadora John Deere 9570 STS con mapeo satelital y monitor de rendimiento',
      'Equipo completo de Embolsado de granos en lote',
      'Soporte mecánico propio permanente para soluciones inmediatas en campaña',
    ],
    deliverables: [
      'Datos de mapeo satelital y monitoreo de rendimiento por lote cosechado',
      'Servicio de embolsado prolijo y seguro en el establecimiento',
      'Atención y supervisión directa de Fabián y Agustín Compagnucci en el lote',
    ],
    whatsappMessage:
      'Hola Fabián, te escribo desde la web. Quiero consultar disponibilidad para COSECHA CON MAPEO SATELITAL (Case IH 7230 / John Deere 9570 STS) y EMBOLSADO.',
    ctaLabel: 'Cotizar Cosecha y Embolsado',
  },
];

// ============================================================================
// 5. DATOS DEL COMPARADOR / SIMULADOR DE PRECISIÓN
// ============================================================================

export const PRECISION_COMPARISON_DATA: PrecisionComparisonData = {
  sectionEyebrow: 'TECNOLOGÍA AGROMETAL APX SEED PRO (PRECISION PLANTING) & COSECHA MAPEADA',
  sectionTitle: 'Simulador de Ahorro Surco por Surco y Mapeo de Rinde',
  sectionSubtitle:
    'Calculá en tu lote el impacto real de sembrar con nuestra Air Drill Agrometal APX SEED PRO (Sistema Twin Force + Precision Planting con corte surco por surco y dosis variable) y cosechar con Case IH 7230 / John Deere 9570 STS.',
  tabs: {
    seeding: {
      title: 'Corte Surco x Surco + Dosis Variable (APX Seed Pro)',
      badge: 'PRECISION PLANTING + TWIN FORCE',
      summary:
        'Evitá superponer semilla y fertilizante en cabeceras o cuchillas y ajustá la densidad al potencial de cada ambiente con nuestra Agrometal APX SEED PRO.',
      traditionalMethod: {
        label: 'Siembra Convencional (Sin Corte Línea a Línea / Dosis Fija)',
        overlapRate: '6% a 11% de solapamiento en cabeceras, diagonales y bajos',
        singulationRate: '92% - 95% (variación por rueda de mando mecánica)',
        fertilizerStrategy:
          'Dosis única plana en todo el lote: desaprovecha los mejores ambientes y encarece las lomas',
        painPoints: [
          'Doble pasada de semilla en cabeceras: plantas encimadas que compiten por agua y se vuelcan.',
          'Falta de presión constante en los cuerpos cuando cambia la dureza del suelo o el volumen de rastrojo.',
          'Imposibilidad de variar semillas y fertilizante de forma automática según el ambiente.',
        ],
      },
      fabianCompagMethod: {
        label: 'Equipo Compagnucci (Agrometal APX SEED PRO + PLA Neumática)',
        overlapRate: '0% solapamiento con corte surco por surco Precision Planting',
        singulationRate: '99.2% con dosificadores Precision Planting / John Deere y Twin Force',
        fertilizerStrategy:
          'Siembra variable en semillas y fertilizante ajustada a Loma, Media Loma y Bajo',
        advantages: [
          'Ahorro directo del 4.5% al 8% en bolsas de semilla y fertilizante al eliminar superposiciones.',
          'Sistema TWIN FORCE y presión constante en línea para que todas las plantas nazcan el mismo día.',
          'Disponibilidad de 3 sembradoras: 22 a 52 cm (x2) y 41 a 19 cm / 21 a 38 cm para cubrir gruesa, fina y pasturas.',
        ],
      },
    },
    harvest: {
      title: 'Cosecha Case IH 7230 & JD 9570 STS con Mapeo + Embolsado',
      badge: 'MAPEO SATELITAL + EMBOLSADO',
      summary:
        'Cosechá en ventana óptima con equipos presentados con anticipación en el lote, registro satelital de rendimiento y embolsado inmediato.',
      traditionalMethod: {
        label: 'Cosecha sin Mapeo o con Demoras Operativas',
        dataOutput: 'Solo promedio general de camión sin conocer qué ambiente rindió más',
        headerloss: 'Pérdidas elevadas por falta de regulación o atrasos en la fecha de entrada',
        moistureTracking: 'Demoras por falta de embolsadora o auxilio mecánico externo',
        painPoints: [
          'No contar con mapa de rinde impide ajustar la dosis variable de la campaña siguiente.',
          'Paradas prolongadas cuando el contratista no cuenta con mecánica propia en el lote.',
          'Cuellos de botella logísticos cuando no se dispone de equipo de embolsado en el campo.',
        ],
      },
      fabianCompagMethod: {
        label: 'Equipo Compagnucci (Case IH 7230 + JD 9570 STS + Embolsadora)',
        dataOutput: 'Mapeo satelital y monitor de rendimiento activo en ambas cosechadoras',
        headerloss: 'Trilla Axial-Flow y STS regulada por sus dueños con mínima merma',
        moistureTracking: 'Llegada anticipada al lote, mecánica propia y embolsado continuo',
        advantages: [
          'Recuperación real de kilos por hectárea gracias a trilla axial/STS bien regulada y puntualidad en lote.',
          'Mapa satelital de rendimiento listo para planificar la siembra variable de la próxima campaña.',
          'Autonomía completa: cosecha + embolsado + mecánica propia para no perder horas de piso.',
        ],
      },
    },
  },
  simulatorPresets: [
    {
      id: 'maiz-52cm',
      name: 'Maíz (22 a 52 cm · APX Seed Pro)',
      crop: 'Maíz',
      defaultHectares: 300,
      seedPlusFertilizerCostPerHaUSD: 295,
      overlapReductionPercent: 6.2,
      variableRateYieldGainPercent: 5.5,
      harvestLossSavingKgPerHa: 110,
      grainPricePerTonUSD: 185,
      ambientPrescriptionSummary: {
        loma: '58.000 - 62.000 pl/ha · Dosis defensiva VRA',
        mediaLoma: '74.000 - 78.000 pl/ha · Dosis óptima P + N',
        bajo: '84.000 pl/ha (Bajo dulce) · Máximo potencial VRA',
      },
    },
    {
      id: 'soja-52-38cm',
      name: 'Soja (52 cm / 38 cm / 19 cm)',
      crop: 'Soja',
      defaultHectares: 350,
      seedPlusFertilizerCostPerHaUSD: 135,
      overlapReductionPercent: 5.4,
      variableRateYieldGainPercent: 4.2,
      harvestLossSavingKgPerHa: 65,
      grainPricePerTonUSD: 310,
      ambientPrescriptionSummary: {
        loma: '32 pl/m² · Rápido cierre de entresurco',
        mediaLoma: '28 pl/m² · Equilibrio con corte surco a surco',
        bajo: '24 pl/m² · Control de vuelco en ambientes fértiles',
      },
    },
    {
      id: 'trigo-pasturas-19cm',
      name: 'Trigo / Cebada / Pasturas (41 a 19 cm)',
      crop: 'Trigo / Cebada / Pasturas',
      defaultHectares: 300,
      seedPlusFertilizerCostPerHaUSD: 210,
      overlapReductionPercent: 5.0,
      variableRateYieldGainPercent: 4.8,
      harvestLossSavingKgPerHa: 75,
      grainPricePerTonUSD: 205,
      ambientPrescriptionSummary: {
        loma: '240 pl/m² · Ajuste según agua útil inicial',
        mediaLoma: '290 pl/m² · Implantación pareja a 19 cm',
        bajo: '320 pl/m² · Alta respuesta en macollaje y rinde',
      },
    },
    {
      id: 'girasol-52cm',
      name: 'Girasol (22 a 52 cm · Precision Planting)',
      crop: 'Girasol',
      defaultHectares: 250,
      seedPlusFertilizerCostPerHaUSD: 180,
      overlapReductionPercent: 6.5,
      variableRateYieldGainPercent: 5.0,
      harvestLossSavingKgPerHa: 55,
      grainPricePerTonUSD: 340,
      ambientPrescriptionSummary: {
        loma: '42.000 pl/ha · Equidistancia exacta Precision Planting',
        mediaLoma: '50.000 pl/ha · Capítulos uniformes con Twin Force',
        bajo: '56.000 pl/ha · Máximo rinde bonificable',
      },
    },
  ],
  fileFormatsSupported: [
    'Precision Planting (20|20 SeedSense / Corte Surco a Surco)',
    'Shapefile (.shp, .shx, .dbf) para Dosis Variable',
    'Case IH AFS & John Deere GreenStar / Ops Center',
    'Mapas de Rendimiento Satelital Georreferenciados',
  ],
};

// ============================================================================
// 6. PARQUE DE MAQUINARIA Y TECNOLOGÍA EXACTO (CV OFICIAL COMPAGNUCCI)
// ============================================================================

export const FLEET_EQUIPMENT: FleetItem[] = [
  {
    id: 'agrometal-apx-seed-pro',
    category: 'Equipos de Siembra',
    code: 'SIEMBRA 01 // AIR DRILL GRUESA & VRA',
    name: 'Sembradora Air Drill Agrometal APX SEED PRO (22 a 52 cm)',
    configuration:
      '22 líneas a 52 cm · Sistema TWIN FORCE · Precision Planting · Variable en Semilla y Fertilizante',
    assignedTractor: 'Tractor Case IH Puma 200',
    imageUrl: '/images/maquinaria/apx/apx-2.jpg',
    gallery: [
      '/images/maquinaria/apx/apx-2.jpg',
      '/images/maquinaria/apx/apx-1.jpg',
    ],
    keySpecs: [
      { label: 'Configuración', value: 'Air Drill 22 líneas a 52 cm' },
      { label: 'Estabilidad de Cuerpo', value: 'Sistema TWIN FORCE (carga constante)' },
      { label: 'Dosificación y Corte', value: 'Precision Planting con corte surco por surco' },
      { label: 'Tractor Asignado', value: 'Case IH Puma 200' },
    ],
    precisionFeatures: [
      'Corte automático surco por surco para 0% de superposición en cabeceras y cuchillas',
      'Siembra variable en semillas y fertilizante (VRA) según prescripción por ambientes',
      'Sistema TWIN FORCE que asegura profundidad uniforme en cualquier condición de rastrojo',
    ],
    operationalBenefit:
      'Máxima precisión de implantación en maíz, girasol y soja a 52 cm, ahorrando bolsas de semilla y optimizando cada ambiente del lote.',
    statusBadge: 'TWIN FORCE + PRECISION PLANTING',
  },
  {
    id: 'pla-neumatica-2022',
    category: 'Equipos de Siembra',
    code: 'SIEMBRA 02 // NEUMÁTICA MOD. 2022',
    name: 'Sembradora PLA Neumática (22 a 52 cm — Año 2022)',
    configuration:
      '22 líneas a 52 cm · Cuerpo John Deere · Presión Constante en Línea · Dosificador John Deere',
    assignedTractor: 'Tractor John Deere 7210J',
    imageUrl: '/images/maquinaria/pla-grande/pla-grande-1.jpg',
    gallery: [
      '/images/maquinaria/pla-grande/pla-grande-1.jpg',
      '/images/maquinaria/pla-grande/pla-grande-2.jpg',
      '/images/maquinaria/pla-grande/pla-grande-3.jpg',
      '/images/maquinaria/pla-grande/pla-grande-4.jpg',
    ],
    videoUrl: '/images/maquinaria/pla-grande/pla-grande-video.mp4',
    keySpecs: [
      { label: 'Configuración / Año', value: '22 líneas a 52 cm (Modelo 2022)' },
      { label: 'Cuerpo de Siembra', value: 'Cuerpo original John Deere' },
      { label: 'Dosificación y Carga', value: 'Dosificador John Deere + Presión constante en línea' },
      { label: 'Tractor Asignado', value: 'John Deere 7210J' },
    ],
    precisionFeatures: [
      'Cuerpo y dosificador neumático John Deere de altísima confiabilidad mecánica',
      'Presión constante en línea para emergencia homogénea en suelos variables',
      'Conjunto equilibrado con Tractor John Deere 7210J para alto ritmo diario de avance',
    ],
    operationalBenefit:
      'Implantación pareja y segura en plena ventana óptima, sumando un segundo tren de siembra gruesa de 22 a 52 cm.',
    statusBadge: 'MODELO 2022 · CUERPO JOHN DEERE',
  },
  {
    id: 'pla-fino-pasturas',
    category: 'Equipos de Siembra',
    code: 'SIEMBRA 03 // FINO, PASTURAS & SOJA 38 CM',
    name: 'Sembradora PLA de Fino y Pasturas (41 a 19 cm / 21 a 38 cm)',
    configuration:
      'Doble configuración: 41 líneas a 19 cm (Fina y Pasturas) o 21 líneas a 38 cm',
    assignedTractor: 'Tractor Case IH Puma 200',
    imageUrl: '/images/maquinaria/pla-fino/pla-fino-1.jpg',
    gallery: [
      '/images/maquinaria/pla-fino/pla-fino-1.jpg',
      '/images/maquinaria/pla-fino/pla-fino-2.jpg',
    ],
    keySpecs: [
      { label: 'Configuración Fino/Pasturas', value: '41 líneas a 19 cm' },
      { label: 'Configuración Alternativa', value: 'Opción 21 líneas a 38 cm' },
      { label: 'Cultivos Objetivo', value: 'Trigo, Cebada, Pasturas, Verdeos y Soja a 38/19 cm' },
      { label: 'Tractor Asignado', value: 'Case IH Puma 200' },
    ],
    precisionFeatures: [
      'Excelente distribución y control de profundidad en semillas finas, pasturas y cereales de invierno',
      'Opción de 21 hileras a 38 cm para planteos de soja con rápido cierre de entresurco',
      'Traccionada por Case IH Puma 200 para mantener velocidad constante sin patinamiento',
    ],
    operationalBenefit:
      'Cobertura integral del ciclo productivo: desde verdeos, pasturas y campaña fina a 19 cm hasta soja a 38 cm.',
    statusBadge: '41 A 19 CM / OPCIÓN 21 A 38 CM',
  },
  {
    id: 'cosechadora-case-7230',
    category: 'Cosecha con Mapeo',
    code: 'COSECHA 01 // AXIAL-FLOW CON MAPEO',
    name: 'Cosechadora Case IH 7230 AFS Axial-Flow',
    configuration: 'Sistema Axial-Flow · Mapeo Satelital · Monitor de Rendimiento en Tiempo Real',
    imageUrl: '/images/maquinaria/case-7230/case-1.jpg',
    gallery: [
      '/images/maquinaria/case-7230/case-1.jpg',
      '/images/regiones/frame-case-1.jpg',
      '/images/regiones/frame-case-2.jpg',
    ],
    videoUrl: '/images/maquinaria/case-7230/case-video.mp4',
    keySpecs: [
      { label: 'Marca y Modelo', value: 'Case IH 7230 Axial-Flow' },
      { label: 'Agricultura de Precisión', value: 'Mapeo satelital integrado' },
      { label: 'Telemetría en Cabina', value: 'Monitor de rendimiento y humedad continuo' },
      { label: 'Calidad de Trilla', value: 'Rotor axial de trato suave grano a grano' },
    ],
    precisionFeatures: [
      'Generación de mapas de rendimiento satelitales para evaluar cada ambiente del lote',
      'Mínimo porcentaje de grano partido y bajas pérdidas por cola',
      'Operada y regulada directamente por personal experimentado de la empresa familiar',
    ],
    operationalBenefit:
      'Alta capacidad diaria de cosecha en maíz, soja, trigo y girasol entregando información real de rinde por lote.',
    statusBadge: 'MAPEO SATELITAL ACTIVO',
  },
  {
    id: 'cosechadora-jd-9570-sts',
    category: 'Cosecha con Mapeo',
    code: 'COSECHA 02 // ROTOR STS CON MAPEO',
    name: 'Cosechadora John Deere 9570 STS',
    configuration: 'Tecnología STS (Single Tine Separator) · Mapeo Satelital · Monitor de Rendimiento',
    imageUrl: '/images/maquinaria/jd-9570/jd-2.jpg',
    gallery: [
      '/images/maquinaria/jd-9570/jd-2.jpg',
      '/images/maquinaria/jd-9570/jd-1.jpg',
      '/images/maquinaria/jd-9570/jd-3.jpg',
      '/images/maquinaria/jd-9570/jd-4.jpg',
      '/images/maquinaria/jd-9570/jd-5.jpg',
      '/images/regiones/frame-jd-1.jpg',
    ],
    videoUrl: '/images/maquinaria/jd-9570/jd-video.mp4',
    keySpecs: [
      { label: 'Marca y Modelo', value: 'John Deere 9570 STS' },
      { label: 'Agricultura de Precisión', value: 'Mapeo satelital georreferenciado' },
      { label: 'Control de Cosecha', value: 'Monitor de rendimiento y humedad en cabina' },
      { label: 'Separación', value: 'Rotor STS de alta eficiencia en todo rastrojo' },
    ],
    precisionFeatures: [
      'Mapeo satelital y monitor de rendimiento para auditoría completa de la cosecha',
      'Alimentación y separación uniforme aún en cultivos húmedos o de alto volumen de paja',
      'Mantenimiento preventivo exhaustivo realizado por mecánica propia antes de cada campaña',
    ],
    operationalBenefit:
      'Permite trabajar con dos cosechadoras en simultáneo (Case IH 7230 + JD 9570 STS) para levantar el lote rápido ante pronósticos de lluvia.',
    statusBadge: 'MAPEO SATELITAL ACTIVO',
  },
  {
    id: 'embolsado-y-mecanica-propia',
    category: 'Embolsado & Autonomía',
    code: 'APOYO // EMBOLSADO & MECÁNICA PROPIA',
    name: 'Equipo de Embolsado de Granos + Tracción (Puma 200 / JD 7210J) y Mecánica Propia',
    configuration:
      'Embolsadora de Granos en Lote + Tractores Case IH Puma 200 / John Deere 7210J + Taller Propio',
    imageUrl: '/images/maquinaria/case-7230/case-1.jpg',
    gallery: [
      '/images/maquinaria/case-7230/case-1.jpg',
      '/images/maquinaria/jd-9570/jd-1.jpg',
      '/images/maquinaria/apx/apx-2.jpg',
    ],
    keySpecs: [
      { label: 'Servicio Post-Trilla', value: 'Equipo de Embolsado de granos en el lote' },
      { label: 'Flota de Tracción', value: '2 Tractores Case IH Puma 200 + 1 John Deere 7210J' },
      { label: 'Soporte Técnico', value: 'Mecánica propia del equipo (+20 años de experiencia)' },
      { label: 'Metodología', value: 'Presentación anticipada de equipos en el campo' },
    ],
    precisionFeatures: [
      'Confección prolija de silo bolsas en el lote para asegurar la calidad del grano cosechado',
      'Autosuficiencia mecánica para dar soluciones rápidas sin depender de terceros',
      'Conducción directa de maquinaria y personal por Fabián y Agustín Compagnucci',
    ],
    operationalBenefit:
      'Servicio llave en mano: llegamos con anticipación al campo, sembramos, cosechamos con mapeo y embolsamos con orden y eficiencia.',
    statusBadge: 'AUTOSUFICIENTES EN LOTE',
  },
];

// ============================================================================
// 7. ZONAS RURALES TRABAJADAS REALES (4 REGIONES EN GOOGLE MAPS)
// ============================================================================

export const WORKED_RURAL_REGIONS: WorkedRuralRegionGroup[] = [
  {
    id: 'cordoba',
    title: 'Provincia de Córdoba (Base en Bulnes y Sur Cordobés)',
    subtitle: 'Bulnes (Base Bv. Belgrano 433) · Sampacho · General Levalle · Jovita · Villa Huidobro',
    badge: 'BASE OPERATIVA & SUR DE CÓRDOBA',
    clientReference: 'Base propia en Bulnes y amplia trayectoria en los Dptos. Río Cuarto, Sáenz Peña y Gral. Roca',
    centerLat: -34.0144,
    centerLng: -64.35,
    defaultZoom: 8,
  },
  {
    id: 'san-luis',
    title: 'Provincia de San Luis (Centro, Corredor RN 7 y Sur RN 188)',
    subtitle:
      'Alto Pelado · La Petra / Estancia Grande · El Soven · Buena Esperanza · Fortuna · Nueva Galia · La Cumbre',
    badge: 'TRABAJOS PARA LARTIRIGOYEN & FIRMAS',
    clientReference: 'Trabajos realizados para Lartirigoyen y firmas agropecuarias en toda la provincia de San Luis',
    centerLat: -34.12,
    centerLng: -65.72,
    defaultZoom: 8,
  },
  {
    id: 'la-pampa',
    title: 'Provincia de La Pampa (Norte Pampeano)',
    subtitle: 'Rancul · La Maruja · Chamaicó · Ingeniero Luiggi (Corredor RN 188 / RP 9 / RP 4)',
    badge: 'NORTE DE LA PAMPA',
    clientReference: 'Siembra directa gruesa/fina, cosecha con mapeo y embolsado en el norte pampeano',
    centerLat: -35.28,
    centerLng: -64.75,
    defaultZoom: 9,
  },
  {
    id: 'norte-chaco-santiago',
    title: 'Provincias del Norte (Chaco y Santiago del Estero)',
    subtitle: 'Gancedo (Chaco) · Pampa de los Guanacos · Sachayoj · Otumpa · Quimilí (Sgo. del Estero)',
    badge: 'CAMPAÑA EN EL NORTE',
    clientReference: 'Equipos autosuficientes trabajando en lotes extensivos de Chaco y Santiago del Estero',
    centerLat: -27.05,
    centerLng: -61.98,
    defaultZoom: 8,
  },
];

export const WORKED_RURAL_ZONES: WorkedRuralPoint[] = [
  // 1. PROVINCIA DE CÓRDOBA (5 LOCALIDADES)
  {
    id: 'bulnes-cba',
    name: 'Bulnes (Base Operativa)',
    province: 'Córdoba',
    regionId: 'cordoba',
    regionLabel: 'Córdoba',
    lat: -33.275,
    lng: -64.668,
    zoom: 13,
    googleMapsQuery: 'Bulnes, Cordoba, Argentina',
    routeCorridor: 'Base Operativa: Bv. Belgrano 433, Bulnes (Dpto. Río Cuarto)',
    laborsPerformed: [
      'Base Operativa y Taller Propio',
      'Siembra Directa Surco x Surco + VRA',
      'Cosecha con Mapeo y Embolsado',
    ],
    clientHighlight: 'Sede central de la familia Compagnucci (+20 años)',
    description:
      'Sede central y taller propio en Bv. Belgrano 433, Bulnes. Desde aquí alistamos los equipos con anticipación y atendemos campos de toda la región.',
  },
  {
    id: 'sampacho-cba',
    name: 'Sampacho',
    province: 'Córdoba',
    regionId: 'cordoba',
    regionLabel: 'Córdoba',
    lat: -33.3839,
    lng: -64.7222,
    zoom: 12,
    googleMapsQuery: 'Sampacho, Cordoba, Argentina',
    routeCorridor: 'Corredor Ruta Nacional 8 / RP E86 (Dpto. Río Cuarto)',
    laborsPerformed: [
      'Siembra Agrometal APX Seed Pro & PLA',
      'Cosecha Case IH 7230 / JD 9570 STS',
      'Embolsado de Granos',
    ],
    description:
      'Labores de siembra directa (gruesa, fina y pasturas), cosecha con mapeo satelital y embolsado en establecimientos de la zona de Sampacho.',
  },
  {
    id: 'general-levalle-cba',
    name: 'General Levalle',
    province: 'Córdoba',
    regionId: 'cordoba',
    regionLabel: 'Córdoba',
    lat: -34.0144,
    lng: -63.9247,
    zoom: 12,
    googleMapsQuery: 'General Levalle, Cordoba, Argentina',
    routeCorridor: 'Corredor RN 7 / RP 10 (Sur de Córdoba)',
    laborsPerformed: ['Trilla / Cosecha con Mapeo', 'Siembra Directa Surco x Surco + VRA'],
    description:
      'Trilla / cosecha de granos con monitoreo de rinde y siembra directa de precisión sobre el corredor productivo de Ruta Nacional 7 y Ruta Provincial 10.',
  },
  {
    id: 'jovita-cba',
    name: 'Jovita',
    province: 'Córdoba',
    regionId: 'cordoba',
    regionLabel: 'Córdoba',
    lat: -34.5222,
    lng: -63.9442,
    zoom: 12,
    googleMapsQuery: 'Jovita, Cordoba, Argentina',
    routeCorridor: 'Corredor RP 27 (Dpto. General Roca)',
    laborsPerformed: ['Trilla / Cosecha con Mapeo', 'Siembra Variable VRA', 'Embolsado'],
    description:
      'Campañas completas de siembra directa variable y cosecha con mapeo satelital en establecimientos agrícolas de Jovita.',
  },
  {
    id: 'villa-huidobro-cba',
    name: 'Villa Huidobro',
    province: 'Córdoba',
    regionId: 'cordoba',
    regionLabel: 'Córdoba',
    lat: -34.8383,
    lng: -64.5869,
    zoom: 12,
    googleMapsQuery: 'Villa Huidobro, Cordoba, Argentina',
    routeCorridor: 'Corredor RP 26 (Extremo Sur de Córdoba, límite con La Pampa)',
    laborsPerformed: ['Siembra Gruesa, Fina y Pasturas', 'Cosecha con Mapeo y Embolsado'],
    description:
      'Trabajos de implantación con sistema Twin Force / Precision Planting y cosecha de granos en el sur del Departamento General Roca.',
  },

  // 2. PROVINCIA DE SAN LUIS (8 ZONAS — LARTIRIGOYEN Y FIRMAS AGROPECUARIAS)
  {
    id: 'alto-pelado-san-luis',
    name: 'Alto Pelado',
    province: 'San Luis',
    regionId: 'san-luis',
    regionLabel: 'San Luis',
    lat: -33.7667,
    lng: -66.0667,
    zoom: 12,
    googleMapsQuery: 'Alto Pelado, San Luis, Argentina',
    routeCorridor: 'Corredor RP 11 (Dpto. Pueyrredón)',
    laborsPerformed: ['Siembra Directa Surco x Surco VRA', 'Cosecha con Mapeo y Embolsado'],
    clientHighlight: 'Trabajos para Lartirigoyen y establecimientos de San Luis',
    description:
      'Lotes agrícolas sobre Ruta Provincial 11 trabajados con corte surco por surco, dosis variable y cosecha con mapeo satelital.',
  },
  {
    id: 'la-petra-san-luis',
    name: 'La Petra',
    province: 'San Luis',
    regionId: 'san-luis',
    regionLabel: 'San Luis',
    lat: -33.58,
    lng: -65.95,
    zoom: 11,
    googleMapsQuery: '-33.5800,-65.9500',
    routeCorridor: 'Zona Rural La Petra (San Luis)',
    laborsPerformed: ['Siembra Air Drill APX Seed Pro', 'Cosecha Case IH 7230 / JD 9570'],
    clientHighlight: 'Trabajos realizados para Lartirigoyen y firmas agropecuarias',
    description:
      'Labores de siembra de precisión y cosecha realizadas para Lartirigoyen y firmas agropecuarias en establecimientos de La Petra.',
  },
  {
    id: 'estancia-grande-san-luis',
    name: 'Estancia Grande',
    province: 'San Luis',
    regionId: 'san-luis',
    regionLabel: 'San Luis',
    lat: -33.2147,
    lng: -66.1856,
    zoom: 12,
    googleMapsQuery: 'Estancia Grande, San Luis, Argentina',
    routeCorridor: 'Corredor RP 18 / RP 9 (Dpto. Pringles)',
    laborsPerformed: ['Siembra Directa Surco x Surco', 'Cosecha con Mapeo'],
    clientHighlight: 'Corte surco por surco ideal para contornos irregulares',
    description:
      'Siembra directa con corte automático surco por surco y cosecha con mapeo de rendimiento en lotes productivos de Estancia Grande.',
  },
  {
    id: 'el-soven-san-luis',
    name: 'Zona El Soven (Zoven)',
    province: 'San Luis',
    regionId: 'san-luis',
    regionLabel: 'San Luis',
    lat: -33.88,
    lng: -65.52,
    zoom: 11,
    googleMapsQuery: '-33.8800,-65.5200',
    routeCorridor: 'Zona Rural El Soven / Zoven (San Luis)',
    laborsPerformed: ['Trilla / Cosecha de Granos', 'Siembra Directa de Precisión', 'Embolsado'],
    clientHighlight: 'Trabajos para Lartirigoyen y firmas de la región',
    description:
      'Cobertura integral en establecimientos rurales de la zona de El Soven con presentación anticipada de equipos y mecánica propia en lote.',
  },
  {
    id: 'buena-esperanza-san-luis',
    name: 'Buena Esperanza',
    province: 'San Luis',
    regionId: 'san-luis',
    regionLabel: 'San Luis',
    lat: -34.7575,
    lng: -65.2539,
    zoom: 12,
    googleMapsQuery: 'Buena Esperanza, San Luis, Argentina',
    routeCorridor: 'Dpto. Gobernador Dupuy (RP 55 / RP 12)',
    laborsPerformed: ['Cosecha con Mapeo de Rendimiento', 'Siembra Surco x Surco + VRA'],
    clientHighlight: 'Trabajos para Lartirigoyen y productores del Sur Puntano',
    description:
      'Polo agrícola del sur de San Luis: siembra directa ajustada por ambientes y cosecha con mapeo satelital y embolsado.',
  },
  {
    id: 'fortuna-san-luis',
    name: 'Fortuna',
    province: 'San Luis',
    regionId: 'san-luis',
    regionLabel: 'San Luis',
    lat: -35.1419,
    lng: -65.3831,
    zoom: 12,
    googleMapsQuery: 'Fortuna, San Luis, Argentina',
    routeCorridor: 'Corredor RN 188 (Dpto. Gobernador Dupuy)',
    laborsPerformed: ['Cosecha con Mapeo', 'Siembra Directa Surco a Surco', 'Embolsado'],
    clientHighlight: 'Experiencia comprobada sobre el corredor RN 188',
    description:
      'Labores de cosecha de gruesa y fina, embolsado y siembra directa con corte surco por surco en lotes de la zona de Fortuna.',
  },
  {
    id: 'nueva-galia-san-luis',
    name: 'Nueva Galia',
    province: 'San Luis',
    regionId: 'san-luis',
    regionLabel: 'San Luis',
    lat: -35.1158,
    lng: -65.2439,
    zoom: 12,
    googleMapsQuery: 'Nueva Galia, San Luis, Argentina',
    routeCorridor: 'Corredor RN 188 / RP 55 (Sur de San Luis)',
    laborsPerformed: ['Trilla / Cosecha con Mapeo', 'Siembra Directa Variable'],
    clientHighlight: 'Trabajos para firmas líderes en el sur puntano',
    description:
      'Trabajos de cosecha y siembra de precisión sobre el corredor de Ruta Nacional 188 en Nueva Galia.',
  },
  {
    id: 'la-cumbre-san-luis',
    name: 'La Cumbre',
    province: 'San Luis',
    regionId: 'san-luis',
    regionLabel: 'San Luis',
    lat: -33.31,
    lng: -66.05,
    zoom: 12,
    googleMapsQuery: 'La Cumbre, San Luis, Argentina',
    routeCorridor: 'Corredor RN 7 (Autopista de las Serranías Puntanas)',
    laborsPerformed: ['Siembra Directa Variable', 'Trilla / Cosecha con Mapeo'],
    clientHighlight: 'Corredor productivo RN 7 en San Luis',
    description:
      'Operativa de siembra y cosecha sobre el eje de Ruta Nacional 7 en La Cumbre, adaptando densidad por ambiente.',
  },

  // 3. PROVINCIA DE LA PAMPA (4 LOCALIDADES DEL NORTE PAMPEANO)
  {
    id: 'rancul-la-pampa',
    name: 'Rancul',
    province: 'La Pampa',
    regionId: 'la-pampa',
    regionLabel: 'La Pampa',
    lat: -35.0667,
    lng: -64.6833,
    zoom: 12,
    googleMapsQuery: 'Rancul, La Pampa, Argentina',
    routeCorridor: 'Corredor RN 188 (Dpto. Rancul, Norte de La Pampa)',
    laborsPerformed: ['Siembra Gruesa, Fina y Pasturas', 'Cosecha con Mapeo y Embolsado'],
    description:
      'Cobertura directa en el norte de La Pampa sobre Ruta Nacional 188 con equipos de siembra gruesa/fina y cosecha.',
  },
  {
    id: 'la-maruja-la-pampa',
    name: 'La Maruja',
    province: 'La Pampa',
    regionId: 'la-pampa',
    regionLabel: 'La Pampa',
    lat: -35.6667,
    lng: -64.9333,
    zoom: 12,
    googleMapsQuery: 'La Maruja, La Pampa, Argentina',
    routeCorridor: 'Corredor RP 4 (Dpto. Rancul, La Pampa)',
    laborsPerformed: ['Siembra Directa Surco x Surco VRA', 'Cosecha con Mapeo Satelital'],
    description:
      'Labores de implantación de precisión y recolección de granos en establecimientos agropecuarios de La Maruja.',
  },
  {
    id: 'chamaico-la-pampa',
    name: 'Chamaicó',
    province: 'La Pampa',
    regionId: 'la-pampa',
    regionLabel: 'La Pampa',
    lat: -35.0333,
    lng: -64.9333,
    zoom: 12,
    googleMapsQuery: 'Chamaico, La Pampa, Argentina',
    routeCorridor: 'Corredor RN 188 (Noroeste de La Pampa)',
    laborsPerformed: ['Siembra Directa y Pasturas', 'Cosecha y Embolsado en Lote'],
    description:
      'Trabajos de siembra directa variable y trilla en el corredor productivo de Chamaicó sobre RN 188.',
  },
  {
    id: 'ingeniero-luiggi-la-pampa',
    name: 'Ingeniero Luiggi',
    province: 'La Pampa',
    regionId: 'la-pampa',
    regionLabel: 'La Pampa',
    lat: -35.3833,
    lng: -64.4667,
    zoom: 12,
    googleMapsQuery: 'Ingeniero Luiggi, La Pampa, Argentina',
    routeCorridor: 'Cruce RP 2 y RP 9 (Norte de La Pampa)',
    laborsPerformed: [
      'Siembra Air Drill APX Seed Pro & PLA',
      'Cosecha Case IH 7230 / JD 9570 STS',
      'Embolsado',
    ],
    description:
      'Servicios integrales de siembra directa, cosecha con mapeo satelital y embolsado en lotes de Ingeniero Luiggi.',
  },

  // 4. PROVINCIAS DEL NORTE (CHACO Y SANTIAGO DEL ESTERO — 5 LOCALIDADES)
  {
    id: 'gancedo-chaco',
    name: 'Gancedo',
    province: 'Chaco',
    regionId: 'norte-chaco-santiago',
    regionLabel: 'Norte (Chaco / Sgo. del Estero)',
    lat: -27.4906,
    lng: -61.6766,
    zoom: 12,
    googleMapsQuery: 'Gancedo, Chaco, Argentina',
    routeCorridor: 'Polo Agrícola RN 89 (Sudoeste de Chaco)',
    laborsPerformed: ['Cosecha con Mapeo Satelital', 'Siembra Directa Surco x Surco VRA'],
    description:
      'Labores de cosecha y siembra directa de precisión con corte surco por surco en lotes extensivos sobre el corredor de Ruta Nacional 89.',
  },
  {
    id: 'pampa-de-los-guanacos-sde',
    name: 'Pampa de los Guanacos',
    province: 'Santiago del Estero',
    regionId: 'norte-chaco-santiago',
    regionLabel: 'Norte (Chaco / Sgo. del Estero)',
    lat: -26.2333,
    lng: -61.85,
    zoom: 12,
    googleMapsQuery: 'Pampa de los Guanacos, Santiago del Estero, Argentina',
    routeCorridor: 'Corredor RN 16 (Dpto. Copo, Santiago del Estero)',
    laborsPerformed: ['Cosecha de Granos con Mapeo', 'Siembra Directa VRA', 'Embolsado'],
    description:
      'Cobertura operativa en el norte santiagueño sobre Ruta Nacional 16 con equipos autosuficientes y mecánica propia en campo.',
  },
  {
    id: 'sachayoj-sde',
    name: 'Sachayoj',
    province: 'Santiago del Estero',
    regionId: 'norte-chaco-santiago',
    regionLabel: 'Norte (Chaco / Sgo. del Estero)',
    lat: -26.6833,
    lng: -61.8333,
    zoom: 12,
    googleMapsQuery: 'Sachayoj, Santiago del Estero, Argentina',
    routeCorridor: 'Corredor RP 17 / RP 6 (Dpto. Alberdi)',
    laborsPerformed: ['Siembra Directa Surco x Surco', 'Cosecha con Mapeo y Embolsado'],
    description:
      'Ejecución de campaña gruesa y fina en lotes extensivos de Sachayoj con presentación anticipada de máquinas en el lote.',
  },
  {
    id: 'otumpa-sde',
    name: 'Otumpa',
    province: 'Santiago del Estero',
    regionId: 'norte-chaco-santiago',
    regionLabel: 'Norte (Chaco / Sgo. del Estero)',
    lat: -27.3167,
    lng: -62.2,
    zoom: 12,
    googleMapsQuery: 'Otumpa, Santiago del Estero, Argentina',
    routeCorridor: 'Corredor Agrícola Quimilí – Sachayoj (RP 6)',
    laborsPerformed: ['Trilla / Cosecha con Mapeo', 'Siembra Directa de Precisión'],
    description:
      'Labores de implantación y recolección en establecimientos productivos de Otumpa optimizando ventana de humedad.',
  },
  {
    id: 'quimili-sde',
    name: 'Quimilí',
    province: 'Santiago del Estero',
    regionId: 'norte-chaco-santiago',
    regionLabel: 'Norte (Chaco / Sgo. del Estero)',
    lat: -27.6444,
    lng: -62.4161,
    zoom: 12,
    googleMapsQuery: 'Quimili, Santiago del Estero, Argentina',
    routeCorridor: 'Cruce RN 89 y RP 6 (Dpto. Moreno, Santiago del Estero)',
    laborsPerformed: [
      'Siembra Directa Agrometal APX Seed Pro & PLA',
      'Cosecha Case IH 7230 / JD 9570 STS',
      'Embolsado',
    ],
    description:
      'Trabajos de siembra variable, cosecha con mapeo satelital y embolsado en el núcleo productivo de Quimilí.',
  },
];

export const COVERAGE_ZONES: CoverageZone[] = [
  {
    id: 'cordoba-base-sur',
    regionName: 'Provincia de Córdoba (Base Bulnes y Sur Cordobés)',
    province: 'Córdoba',
    hubs: ['Bulnes', 'Sampacho', 'General Levalle', 'Jovita', 'Villa Huidobro'],
    radiusType: 'Base Operativa Directa',
    responseEstimate: 'Base propia en Bv. Belgrano 433, Bulnes · Presentación anticipada en lote',
    minHectaresSuggested: 'Consultar según cercanía al corredor activo',
    notes:
      'Sede de la empresa familiar Compagnucci con más de 20 años atendiendo el sur de Córdoba.',
  },
  {
    id: 'san-luis-cobertura',
    regionName: 'Provincia de San Luis (Centro y Sur)',
    province: 'San Luis',
    hubs: [
      'Alto Pelado',
      'La Petra',
      'Estancia Grande',
      'Zona El Soven',
      'Buena Esperanza',
      'Fortuna',
      'Nueva Galia',
      'La Cumbre',
    ],
    radiusType: 'Cobertura Frecuente Campaña Fina/Gruesa',
    responseEstimate: 'Equipos presentados con anticipación en el campo para inicio puntual',
    minHectaresSuggested: 'Coordinación por corredor productivo en RN 7, RP 11 y RN 188',
    notes:
      'Amplia experiencia trabajando para Lartirigoyen y firmas agropecuarias en toda la provincia de San Luis.',
  },
  {
    id: 'la-pampa-cobertura',
    regionName: 'Provincia de La Pampa (Norte Pampeano)',
    province: 'La Pampa',
    hubs: ['Rancul', 'La Maruja', 'Chamaicó', 'Ingeniero Luiggi'],
    radiusType: 'Cobertura Frecuente Campaña Fina/Gruesa',
    responseEstimate: 'Ingreso directo por corredor RN 188 y RP 9 desde el sur de Córdoba',
    minHectaresSuggested: 'Siembra gruesa, fina, pasturas, cosecha y embolsado',
    notes:
      'Equipos adaptados tanto para gruesa con dosis variable como para fina y pasturas a 19 cm.',
  },
  {
    id: 'norte-chaco-santiago-cobertura',
    regionName: 'Provincias del Norte (Chaco y Santiago del Estero)',
    province: 'Chaco / Santiago del Estero',
    hubs: ['Gancedo', 'Pampa de los Guanacos', 'Sachayoj', 'Otumpa', 'Quimilí'],
    radiusType: 'Traslado Programado por Superficie',
    responseEstimate: 'Campaña planificada con equipos autosuficientes y mecánica propia en lote',
    minHectaresSuggested: 'Lotes extensivos y paquetes de campaña',
    notes:
      'Alta capacidad operativa en el eje RN 89 y RN 16 con 3 sembradoras, 2 cosechadoras y embolsadora.',
  },
];

// ============================================================================
// 8. PROCESO DE TRABAJO EN 4 PASOS (METODOLOGÍA COMPAGNUCCI)
// ============================================================================

export const WORK_PROCESS_STEPS: WorkProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Coordinación Directa con Fabián y Agustín Compagnucci',
    subtitle: 'Planificación ordenada de hectáreas, fechas y receta agronómica',
    description:
      'Hablás directo con los dueños. Definimos lote, cultivo, distanciamiento (52 cm, 38 cm o 19 cm) y prescripción de siembra variable o fecha de cosecha y embolsado.',
    technicalDeliverable: 'Compromiso de fecha y orden previo de campaña.',
  },
  {
    stepNumber: '02',
    title: 'Presentación Anticipada de los Equipos en el Campo',
    subtitle: 'Puntualidad para aprovechar al máximo la ventana óptima',
    description:
      'Presentamos los equipos de trabajo en el campo con anticipación para comenzar de forma puntual la campaña, calibrando cuerpos, neumáticos, dosificadores y monitores antes de arrancar.',
    technicalDeliverable: 'Equipos listos y calibrados en el lote antes del inicio.',
  },
  {
    stepNumber: '03',
    title: 'Ejecución Precisa con Mecánica y Conducción Propia',
    subtitle: 'Autosuficientes y rápidos en soluciones dentro del lote',
    description:
      'Trabajamos con conducción directa y mecánica propia del equipo (+20 años de experiencia). Si surge cualquier ajuste en campaña, lo resolvemos en el acto sin perder días operativos.',
    technicalDeliverable: 'Labor continua, ordenada y eficiente en cada hectárea.',
  },
  {
    stepNumber: '04',
    title: 'Entrega de Mapeo Satelital y Embolsado Prolijo',
    subtitle: 'Cierre de labor auditable y granos resguardados',
    description:
      'En siembra auditamos el corte surco por surco y la dosis variable aplicada; en cosecha registramos el mapeo satelital de rendimiento y dejamos el grano perfectamente embolsado en el lote.',
    technicalDeliverable: 'Datos de monitoreo de rinde / siembra + lote limpio y ordenado.',
  },
];

// ============================================================================
// 9. PREGUNTAS FRECUENTES (FAQs) CON DATOS REALES DE LA FLOTA
// ============================================================================

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-equipos-siembra',
    category: 'Agricultura de Precisión',
    question:
      '¿Con qué sembradoras cuentan y qué distanciamientos y tecnologías manejan en gruesa, fina y pasturas?',
    answer:
      'Contamos con 3 sembradoras: 1) Sembradora Air Drill Agrometal APX SEED PRO configurada en 22 líneas a 52 cm, equipada con sistema TWIN FORCE, dosificador Precision Planting con corte surco por surco y siembra variable en semillas y fertilizante (con tractor Case IH Puma 200). 2) Sembradora PLA Neumática (modelo 2022) de 22 líneas a 52 cm con cuerpo John Deere, presión constante en línea y dosificador John Deere (con tractor John Deere 7210J). 3) Sembradora PLA de Fino y Pasturas configurada en 41 líneas a 19 cm o con opción de 21 líneas a 38 cm (con tractor Case IH Puma 200).',
    technicalHighlight:
      'Agrometal APX SEED PRO (Twin Force + Precision Planting VRA) + PLA Neumática 2022 + PLA Fino/Pasturas.',
  },
  {
    id: 'faq-equipos-cosecha-embolsado',
    category: 'Cosecha y Embolsado',
    question:
      '¿Qué cosechadoras operan y cuentan con mapeo satelital y equipo de embolsado propio?',
    answer:
      'Sí. Operamos una Cosechadora Case IH 7230 y una Cosechadora John Deere 9570 STS, ambas equipadas con mapeo satelital y monitor de rendimiento en tiempo real. Además, contamos con equipo propio de embolsado para almacenar el grano en bolsa directamente en el lote sin demoras.',
    technicalHighlight:
      'Case IH 7230 + John Deere 9570 STS con mapeo satelital + Equipo de Embolsado en lote.',
  },
  {
    id: 'faq-metodologia-puntualidad',
    category: 'Operativa y Mecánica Propia',
    question:
      '¿Cómo trabajan para asegurar la puntualidad en la fecha pactada y evitar paradas mecánicas?',
    answer:
      'Nuestra filosofía de trabajo es presentar los equipos en el campo con anticipación para comenzar de forma puntual la campaña y trabajar con un orden previo. Llevamos más de 20 años en el rubro haciendo nosotros mismos la mecánica propia de los equipos y la conducción de maquinaria y personal, lo que nos permite ser autosuficientes y dar soluciones rápidas en el lote.',
    technicalHighlight:
      '+20 años de experiencia · Mecánica propia del equipo y llegada anticipada al campo.',
  },
  {
    id: 'faq-zonas-trabajo',
    category: 'Contratación',
    question:
      '¿En qué provincias y localidades trabajan habitualmente?',
    answer:
      'Nuestra base está en Bv. Belgrano 433, Bulnes (Córdoba). Trabajamos activamente en: 1) Córdoba (Bulnes, Sampacho, General Levalle, Jovita y Villa Huidobro), 2) San Luis (Alto Pelado, La Petra, Estancia Grande, Zona El Soven, Buena Esperanza, Fortuna, Nueva Galia y La Cumbre, incluyendo trabajos para Lartirigoyen y otras firmas), 3) La Pampa (Rancul, La Maruja, Chamaicó e Ingeniero Luiggi) y 4) Norte Argentino (Gancedo en Chaco; Pampa de los Guanacos, Sachayoj, Otumpa y Quimilí en Santiago del Estero).',
    technicalHighlight:
      'Cobertura real en Córdoba, San Luis, La Pampa, Chaco y Santiago del Estero.',
  },
  {
    id: 'faq-contacto-directo',
    category: 'Contratación',
    question:
      '¿Con quién me comunico para coordinar hectáreas y disponibilidad de máquinas?',
    answer:
      'El trato es 100% directo con nosotros, sin intermediarios. Podés comunicarte por WhatsApp o llamada con Fabián Compagnucci al 358 411-3957 o con Agustín Compagnucci al 358 418-7814, o por correo a fabiandarioc@hotmail.com.',
    technicalHighlight:
      'Contacto directo: Fabián (358 411-3957) · Agustín (358 418-7814).',
  },
];

// ============================================================================
// 10. OPCIONES RÁPIDAS DEL COTIZADOR INTERACTIVO DE WHATSAPP
// ============================================================================

export const QUOTER_OPTIONS = {
  services: [
    {
      id: 'Siembra Directa Gruesa (Agrometal APX Seed Pro Surco x Surco VRA / PLA 22 a 52 cm)',
      label: 'Siembra Gruesa (APX Seed Pro Surco x Surco VRA / PLA 52 cm)',
      shortLabel: 'Siembra Gruesa 52 cm (VRA)',
      badge: 'TWIN FORCE + PRECISION PLANTING',
    },
    {
      id: 'Siembra Fina, Pasturas o Soja 38 cm (PLA 41 a 19 cm / 21 a 38 cm)',
      label: 'Siembra Fina / Pasturas (41 a 19 cm) o Soja (21 a 38 cm)',
      shortLabel: 'Siembra Fina / Pasturas / 38 cm',
      badge: '41 A 19 CM / 21 A 38 CM',
    },
    {
      id: 'Cosecha con Mapeo Satelital (Case IH 7230 / JD 9570 STS) + Embolsado',
      label: 'Cosecha con Mapeo (Case 7230 / JD 9570 STS) + Embolsado',
      shortLabel: 'Cosecha con Mapeo + Embolsado',
      badge: 'MAPEO SATELITAL + EMBOLSADO',
    },
    {
      id: 'Campaña Completa (Siembra de Precisión + Cosecha con Mapeo y Embolsado)',
      label: 'Campaña Completa (Siembra + Cosecha Mapeada + Embolsado)',
      shortLabel: 'Campaña Completa',
      badge: 'SERVICIO INTEGRAL',
    },
  ],
  crops: [
    'Maíz (22 a 52 cm)',
    'Soja (52 cm / 38 cm / 19 cm)',
    'Trigo / Cebada (41 a 19 cm)',
    'Pasturas / Verdeos (41 a 19 cm)',
    'Girasol / Sorgo',
  ],
  hectareRanges: [
    { label: '100 a 200 ha', value: '100 a 200 ha' },
    { label: '200 a 400 ha', value: '200 a 400 ha' },
    { label: '400 a 800 ha', value: '400 a 800 ha' },
    { label: '+800 ha', value: 'Más de 800 ha' },
  ],
  prescriptionOptions: [
    {
      label: 'Sí, requerimos Corte Surco x Surco + Dosis Variable (Semilla y Fertilizante)',
      value: true,
    },
    {
      label: 'Dosis uniforme con presión constante / Cosecha con mapeo y embolsado',
      value: false,
    },
  ],
  SuggestedLocations: [
    'Bulnes / Sampacho / Levalle / Jovita / V. Huidobro (Córdoba)',
    'La Petra / Estancia Grande / Alto Pelado / El Soven (San Luis)',
    'Buena Esperanza / Fortuna / Nueva Galia / La Cumbre (San Luis)',
    'Rancul / La Maruja / Chamaicó / Ing. Luiggi (La Pampa)',
    'Gancedo (Chaco) / Quimilí / Sachayoj / Guanacos / Otumpa (Norte)',
  ],
};

// ============================================================================
// 11. HELPER PARA ARMAR URLs DE WHATSAPP (FABIÁN O AGUSTÍN COMPAGNUCCI)
// ============================================================================

export function buildWhatsAppUrl(params?: WhatsAppInquiryParams): string {
  const recipientId = params?.recipient || 'fabian';
  const targetNumber =
    recipientId === 'agustin'
      ? BRAND_INFO.secondaryWhatsappNumber
      : BRAND_INFO.whatsappNumber;
  const recipientName = recipientId === 'agustin' ? 'Agustín' : 'Fabián';

  const baseUrl = `https://wa.me/${targetNumber}`;

  if (!params) {
    const defaultText = `Hola ${recipientName}, te contacto desde el sitio web de Fabián Compagnucci Contratista Rural. Quería consultar disponibilidad de equipos para esta campaña.`;
    return `${baseUrl}?text=${encodeURIComponent(defaultText)}`;
  }

  if (
    params.customMessage &&
    !params.service &&
    !params.crop &&
    !params.hectares &&
    !params.location
  ) {
    return `${baseUrl}?text=${encodeURIComponent(params.customMessage.trim())}`;
  }

  const lines: string[] = [
    `Hola ${recipientName}, te escribo desde la web de *Fabián Compagnucci — Contratista Rural*. Quería consultar disponibilidad de equipos para la siguiente labor:`,
    '',
  ];

  if (params.service) {
    lines.push(`• *Servicio / Equipo:* ${params.service}`);
  }

  if (params.crop) {
    lines.push(`• *Cultivo:* ${params.crop}`);
  }

  if (params.hectares !== undefined && String(params.hectares).trim() !== '') {
    const haText = String(params.hectares).toLowerCase().includes('ha')
      ? String(params.hectares).trim()
      : `${String(params.hectares).trim()} ha`;
    lines.push(`• *Superficie estimada:* ${haText}`);
  }

  if (params.location && params.location.trim() !== '') {
    lines.push(`• *Localidad / Zona del campo:* ${params.location.trim()}`);
  }

  if (params.targetDate && params.targetDate.trim() !== '') {
    lines.push(`• *Fecha / Ventana estimada:* ${params.targetDate.trim()}`);
  }

  if (typeof params.hasPrescriptionMap === 'boolean') {
    lines.push(
      `• *Tecnología requerida:* ${
        params.hasPrescriptionMap
          ? 'Corte Surco x Surco + Siembra Variable en Semilla y Fertilizante (Precision Planting)'
          : 'Manejo estándar con presión constante / Mapeo satelital en cosecha y embolsado'
      }`
    );
  }

  if (params.customMessage && params.customMessage.trim() !== '') {
    lines.push('');
    lines.push(`*Detalle adicional:* ${params.customMessage.trim()}`);
  }

  lines.push('');
  lines.push('Quedo atento para coordinar con anticipación. ¡Gracias!');

  return `${baseUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
}
