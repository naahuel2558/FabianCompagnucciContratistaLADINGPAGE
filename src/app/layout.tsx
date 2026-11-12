import type { Metadata, Viewport } from 'next';
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from 'next/font/google';
import './globals.css';
import { BRAND_INFO, MAIN_SERVICES, WORKED_RURAL_ZONES } from '@/data/agro-content';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111412',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://fabiancompag.com.ar'),
  title:
    'Fabián Compagnucci & Familia | Contratista Rural · Herramientas de Precisión, Siembra y Cosecha',
  description:
    'Empresa familiar con +20 años en el rubro. Base en Bulnes (Córdoba). Catálogo de herramientas de alta precisión: Air Drill Agrometal APX SEED PRO (Twin Force + Precision Planting), Sembradoras PLA, Cosechadoras Case IH 7230 y John Deere 9570 STS con mapeo satelital y embolsado.',
  keywords: [
    'Fabián Compagnucci',
    'Agustín Compagnucci',
    'contratista rural Bulnes Córdoba',
    'Agrometal APX SEED PRO',
    'Precision Planting corte surco por surco',
    'Sistema Twin Force',
    'Sembradora PLA',
    'Case IH 7230',
    'John Deere 9570 STS',
    'cosecha con mapeo satelital',
    'embolsado de granos',
    'contratista rural San Luis La Pampa Córdoba Chaco Santiago del Estero',
  ],
  authors: [{ name: BRAND_INFO.legalTitle }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://fabiancompag.com.ar',
    siteName: BRAND_INFO.legalTitle,
    title:
      'Fabián Compagnucci & Familia — Contratista Rural (+20 Años) · Herramientas de Precisión',
    description:
      'Air Drill Agrometal APX SEED PRO (Twin Force + Precision Planting), PLA Neumática y Fino/Pasturas, Cosechadoras Case IH 7230 y JD 9570 STS con mapeo satelital. Base en Bulnes (Córdoba).',
    images: [
      {
        url: '/images/hero-agro.png',
        width: 1200,
        height: 630,
        alt: 'Fabián Compagnucci — Empresa Familiar Contratista Rural · Herramientas de Siembra, Cosecha y Embolsado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabián Compagnucci & Familia | Contratista Rural · Herramientas de Precisión',
    description:
      'Empresa familiar (+20 años). Agrometal APX SEED PRO (Precision Planting + Twin Force), Sembradoras PLA, Case IH 7230 y JD 9570 STS con mapeo satelital.',
    images: ['/images/hero-agro.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: BRAND_INFO.legalTitle,
    alternateName: 'Fabián Compagnucci & Familia · Contratista Rural',
    taxID: BRAND_INFO.cuit,
    description: BRAND_INFO.roleDescription,
    url: 'https://fabiancompag.com.ar',
    telephone: `+${BRAND_INFO.whatsappNumber}`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+${BRAND_INFO.whatsappNumber}`,
        contactType: 'customer service',
        name: 'Fabián Compagnucci',
        areaServed: 'AR',
        availableLanguage: 'Spanish',
      },
      {
        '@type': 'ContactPoint',
        telephone: `+${BRAND_INFO.secondaryWhatsappNumber}`,
        contactType: 'customer service',
        name: 'Agustín Compagnucci',
        areaServed: 'AR',
        availableLanguage: 'Spanish',
      },
    ],
    email: BRAND_INFO.email,
    image: 'https://fabiancompag.com.ar/images/hero-agro.png',
    priceRange: '$$$',
    openingHours: 'Mo-Su 00:00-23:59',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bv. Belgrano 433',
      addressLocality: 'Bulnes',
      addressRegion: 'Córdoba',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BRAND_INFO.coordinates.lat,
      longitude: BRAND_INFO.coordinates.lng,
    },
    areaServed: WORKED_RURAL_ZONES.map((zone) => ({
      '@type': 'City',
      name: `${zone.name}, ${zone.province}`,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Catálogo de Herramientas y Labores Agrícolas de Precisión',
      itemListElement: MAIN_SERVICES.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <html
      lang="es-AR"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#161917] selection:bg-[#C9B282] selection:text-[#111412]">
        {children}
      </body>
    </html>
  );
}
