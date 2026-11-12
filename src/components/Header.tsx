'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_INFO, buildWhatsAppUrl } from '@/data/agro-content';

interface HeaderProps {
  onQuickQuote?: () => void;
}

export default function Header({ onQuickQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('#inicio');

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#maquinaria', label: 'Herramientas' },
    { href: '#filosofia', label: 'Nosotros' },
    { href: '#zonas-trabajadas', label: 'Zonas' },
    { href: '#cotizador', label: 'Contacto' },
  ];

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 h-20 bg-[#111412]/95 backdrop-blur-md border-b border-[#C9B282]/25 text-[#F8F6F1]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Izquierda: Isotipo Geométrico Lineal Dorado + Nombre en Serif */}
        <a
          href="#inicio"
          onClick={() => handleNavClick('#inicio')}
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="Fabián Compagnucci & Familia — Contratista Rural"
        >
          {/* Isotipo Lineal Fino inspirado en el emblema arquitectónico del video */}
          <svg
            viewBox="0 0 44 44"
            className="w-10 h-10 text-[#C9B282] shrink-0 transition-transform duration-500 group-hover:scale-105"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path d="M6 34L22 10L38 34" />
            <path d="M13 34L22 20L31 34" />
            <line x1="4" y1="34" x2="40" y2="34" />
            <line x1="22" y1="6" x2="22" y2="34" strokeOpacity="0.45" />
          </svg>

          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl tracking-[0.16em] uppercase text-[#F8F6F1] font-medium leading-none">
              FABIÁN COMPAGNUCCI
            </span>
            <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#C9B282] mt-1">
              &amp; FAMILIA · CONTRATISTA RURAL
            </span>
          </div>
        </a>

        {/* Derecha Desktop: Píldora Editorial de Navegación + Botón Cápsula "Agendar" */}
        <div className="hidden lg:flex items-center gap-4">
          <nav
            aria-label="Navegación principal"
            className="flex items-center rounded-full border border-white/15 bg-white/[0.04] p-1.5 backdrop-blur-sm"
          >
            {navLinks.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#C9B282] text-[#111412] font-semibold shadow-sm'
                      : 'text-[#F8F6F1]/85 hover:text-[#E5D7B8]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#cotizador"
            onClick={() => {
              handleNavClick('#cotizador');
              if (onQuickQuote) onQuickQuote();
            }}
            className="rounded-full bg-[#E5D7B8] hover:bg-[#C9B282] text-[#111412] font-sans text-xs font-semibold tracking-wider px-6 py-3 transition-all duration-300 shadow-sm"
          >
            Agendar
          </a>
        </div>

        {/* Controles Móviles */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href="#cotizador"
            onClick={() => handleNavClick('#cotizador')}
            className="rounded-full bg-[#E5D7B8] text-[#111412] font-sans text-xs font-semibold px-4 py-2.5"
          >
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 text-[#F8F6F1] flex items-center justify-center focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111412] border-b border-[#C9B282]/30 px-6 pt-4 pb-8 shadow-2xl">
          <nav className="flex flex-col gap-2" aria-label="Navegación móvil">
            {navLinks.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-5 py-3.5 rounded-full text-sm tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#C9B282] text-[#111412] font-semibold'
                      : 'text-[#F8F6F1] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={buildWhatsAppUrl({ recipient: 'fabian' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 rounded-full bg-[#13261B] border border-[#C9B282]/50 text-[#F8F6F1] text-xs tracking-wider uppercase text-center font-medium"
            >
              WhatsApp Fabián ({BRAND_INFO.whatsappDisplay})
            </a>
            <a
              href={buildWhatsAppUrl({ recipient: 'agustin' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 rounded-full bg-[#E5D7B8] text-[#111412] text-xs tracking-wider uppercase text-center font-semibold"
            >
              WhatsApp Agustín ({BRAND_INFO.secondaryWhatsappDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
