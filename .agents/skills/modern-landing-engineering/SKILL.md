---
name: modern-landing-engineering
description: >-
  Use this skill when architecting, coding, styling, or optimizing the frontend
  of the landing page to ensure high performance, mobile-first responsiveness,
  clean component architecture, SEO, and smooth micro-interactions.
---

# Ingeniería Frontend para Landing Pages de Alto Rendimiento (`modern-landing-engineering`)

Esta skill define los estándares técnicos de desarrollo web para construir la landing page de **FABIANCOMPAG** con calidad de producción, carga instantánea en redes móviles rurales (3G/4G inestable) y mantenibilidad total.

## 1. Principios de Arquitectura Web

1. **Rendimiento en Conectividad Rural (First-Load Optimization)**:
   - Muchos usuarios abren la web desde el campo con señal móvil limitada.
   - Evitar dependencias pesadas innecesarias.
   - Imágenes optimizadas (`loading="lazy"` fuera del fold, `fetchpriority="high"` en el Hero, formatos modernos WebP/AVIF o SVG para iconografía técnica).
2. **Diseño Mobile-First Real**:
   - Diseñar primero para `360px`–`430px` de ancho.
   - Botón flotante o barra inferior móvil de acción rápida (*Consultar por WhatsApp*) que no tape contenido importante.
   - Inputs de formulario con tamaño de fuente mínimo de `16px` para evitar zoom automático en iOS/Android.
3. **Código Modular y Escalable**:
   - Separar datos de configuración (teléfono de WhatsApp, lista de servicios, equipos de la flota, zonas de cobertura, métricas) en un archivo central de constantes/datos para que actualizar campañas o máquinas sea inmediato.

## 2. Interactividad y Micro-Interacciones con Propósito

- **Cotizador Interactivo de Labores**:
  - Selector visual por tipo de labor y cultivo que arma dinámicamente la URL de `https://wa.me/<numero>?text=...` con `encodeURIComponent`.
- **Filtro o Tabs de Maquinaria / Servicios**:
  - Permitir explorar especificaciones técnicas sin recargar la página.
- **Animaciones Sutiles y Respetuosas**:
  - Transiciones suaves con GPU (`transform`, `opacity`) y soporte para `prefers-reduced-motion`.

## 3. SEO Técnico y Datos Estructurados (Schema.org)

Toda landing page de servicios locales/regionales debe incluir:
- Meta tags completos (`title`, `description`, `openGraph` para previsualización impecable cuando se comparte el link por WhatsApp).
- JSON-LD de tipo `LocalBusiness` / `ProfessionalService` especificando área de servicio (`areaServed`), servicios ofrecidos (`hasOfferCatalog`) y contacto directo.

## 4. Verificación Técnica Obligatoria
- [ ] ¿El link compartido por WhatsApp tiene `og:title`, `og:description` y `og:image` configurados?
- [ ] ¿Todos los botones de WhatsApp codifican correctamente el mensaje personalizado según la sección desde donde se hizo clic?
- [ ] ¿La página no presenta scroll horizontal en `375px` de ancho?
- [ ] ¿El contraste, los atributos `aria-label` y la semántica HTML (`header`, `main`, `section`, `footer`, `nav`) están completos?
