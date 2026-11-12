# FABIANCOMPAG — Landing Page de Contratista Rural

## Visión del Proyecto
Landing page profesional, de alta conversión y estética agroindustrial moderna para **FABIANCOMPAG**, orientada a servicios de contratista rural (siembra, cosecha, pulverización, embolsado/forrajes y labores agrícolas de precisión).

## Arquitectura de Agentes y Orquestación

El **Agente Principal (Orquestador)** coordina el trabajo a través de skills especializadas en `.agents/skills/` y un equipo de subagentes:

### Skills del Proyecto (`.agents/skills/`)
1. [`agro-brand-design`](.agents/skills/agro-brand-design/SKILL.md): Sistema de diseño agroindustrial, paleta de colores de alto contraste para lectura en exteriores, tipografía técnica y componentes visuales.
2. [`agro-conversion-ux`](.agents/skills/agro-conversion-ux/SKILL.md): Psicología del productor agropecuario, estructura de secciones, copywriting con terminología real de campo y embudo de consulta a WhatsApp.
3. [`modern-landing-engineering`](.agents/skills/modern-landing-engineering/SKILL.md): Estándares de desarrollo frontend, optimización para redes móviles rurales, SEO local (`Schema.org`) y cotizador interactivo de labores.

### Subagentes Especializados
1. **`ui-ux-designer`** (*Diseñador UI/UX & Director de Arte Agro*): Define el sistema visual, tokens de diseño, estructura de layouts, generación de recursos visuales y prototipado aplicando `agro-brand-design`.
2. **`copy-conversion-strategist`** (*Estratega de Copywriting Agro & Conversión*): Redacta los textos técnicos de servicios (siembra, cosecha, pulverización, flota), propuestas de valor, FAQs de campaña y mensajes pre-armados de WhatsApp aplicando `agro-conversion-ux`.
3. **`frontend-architect`** (*Arquitecto & Desarrollador Web Frontend*): Implementa el código de la landing page (componentes, estilos, interactividad del cotizador de hectáreas/labores, responsive mobile-first y SEO) aplicando `modern-landing-engineering`.
4. **`qa-performance-auditor`** (*Auditor de QA, Accesibilidad en Campo y SEO*): Verifica responsividad móvil, velocidad de carga, contraste bajo luz solar, funcionamiento de enlaces de WhatsApp y ausencia de errores.
