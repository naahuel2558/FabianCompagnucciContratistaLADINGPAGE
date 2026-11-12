# Especificación de Diseño e Interfaz UI/UX — FABIANCOMPAG

**Proyecto:** Landing Page de Contratista Rural de Alta Precisión (`FABIANCOMPAG`)
**Región Operativa:** Zona Núcleo / Pampa Húmeda
**Dirección de Arte:** *"Potencia Industrial & Precisión Satelital en el Campo"*
**Pilares de Negocio:**
1. **Cosecha de Granos con Mapeo de Rendimiento** (Soja, Maíz, Trigo, Girasol — entrega de mapas de rinde georreferenciados para agricultura por ambientes, cabezales Draper y Maicero, mínima pérdida por cola).
2. **Siembra Directa de Precisión con Corte Surco por Surco y Dosis Variable en Semillas (VRA)** (Lectura de prescripciones `.shp` / ISOXML, cero superposición en cabeceras o lotes irregulares, ahorro de insumos y emergencia uniforme).

---

## 1. Sistema de Color y Tokens Semánticos (CSS + Tailwind)

El sistema cromático está diseñado para **lectura crítica en condiciones de campo** (pantallas móviles bajo luz solar directa en la chata o en el lote, contraste WCAG AAA en textos principales y estados activos de alta visibilidad inspirados en monitores de cabina RTK/ISOXML y maquinaria pesada).

### 1.1 Variables CSS (`:root`)

```css
:root {
  /* Fondos Orgánicos y Superficies Técnicas */
  --bg-primary: #F7F5F0;         /* Hueso / Trigo Seco - Reduce el encandilamiento al sol */
  --bg-surface: #FFFFFF;         /* Blanco Puro - Fichas técnicas y tarjetas interactivas */
  --bg-surface-muted: #EFECE6;   /* Tierra Clara / Rastrojo - Fondos secundarios de grillas */
  --bg-dark: #141E18;            /* Verde Monte Profundo / Carbón - Hero, Telemetría y Comparador */
  --bg-dark-elevated: #1C2A22;   /* Cabina / Panel Oscuro - Tarjetas sobre fondo oscuro */
  --bg-glass-dark: rgba(20, 30, 24, 0.85); /* HUD Táctico con backdrop-blur */

  /* Textos de Alto Contraste */
  --text-primary: #161A17;       /* Carbón Vegetal - Contraste > 14:1 sobre --bg-primary */
  --text-secondary: #4A554E;     /* Gris Pizarra Rural - Subtítulos y etiquetas de especificación */
  --text-on-dark: #F7F5F0;       /* Texto principal sobre bloques oscuros */
  --text-muted-on-dark: #9CA8A0; /* Etiquetas técnicas sobre paneles oscuros */

  /* Acentos Mecánicos y Satelitales */
  --accent-primary: #D97706;     /* Ámbar Maquinaria / Baliza - CTAs principales y alertas operativas */
  --accent-highlight: #EAB308;   /* Amarillo Cosecha / Telemetría - Indicadores activos sobre fondo oscuro */
  --accent-agro: #1F5E3B;        /* Verde Lote / Agricultura de Precisión - Bordes activos, badges VRA */
  --accent-agro-light: #2E8B57;  /* Verde Vigor NDVI - Visualización de alta productividad en mapas */
  --accent-whatsapp: #16A34A;    /* Verde Conversión Directa (Hover: #15803D) */

  /* Semántica de Mapas de Rinde y Prescripción VRA */
  --zone-high: #16A34A;          /* Ambiente Alto Potencial / Alta Dosis / Rinde Óptimo */
  --zone-mid: #EAB308;           /* Ambiente Medio / Dosis Estándar */
  --zone-low: #DC2626;           /* Ambiente Restrictivo / Merma / Solapamiento en siembra convencional */
  --zone-telemetry: #0EA5E9;     /* Azul RTK / Línea de guiado satelital autoguiado */

  /* Bordes y Divisores */
  --border-subtle: #DCD7CC;      /* Divisor técnico sobre fondo claro */
  --border-strong: #1F5E3B;      /* Borde de foco o tarjeta destacada */
  --border-dark: #2C3E33;        /* Divisor tipo grilla satelital sobre fondo oscuro */
}
```

### 1.2 Equivalencias y Clases Utilitarias en Tailwind CSS

| Token Semántico | Configuración Tailwind / Clases Recomendadas | Aplicación en Interfaz |
| :--- | :--- | :--- |
| `bg-primary` | `bg-[#F7F5F0]` | Fondo general del documento (`body`) y secciones de lectura técnica |
| `bg-surface` | `bg-white border border-[#DCD7CC]` | Fichas de Bento Grid, tarjetas de servicios, contenedor claro |
| `bg-dark` | `bg-[#141E18] text-[#F7F5F0]` | Hero principal, Visualizador Interactivo de Precisión, Parque de Maquinaria y Footer |
| `bg-dark-elevated` | `bg-[#1C2A22] border border-[#2C3E33]` | Módulos de telemetría, KPIs dentro del Hero, tarjetas de maquinaria |
| `accent-primary` | `bg-[#D97706] hover:bg-[#B45309] text-white` | Botones primarios de acción rápida y pestañas activas |
| `accent-highlight` | `text-[#EAB308]` / `bg-[#EAB308] text-[#141E18]` | Badges de campaña activa, resaltado de ahorro de insumos e indicadores RTK |
| `accent-agro` | `bg-[#1F5E3B] text-white` / `border-[#1F5E3B]` | Píldoras de tecnología VRA, etiquetas de cultivo y bordes activos |
| `accent-whatsapp` | `bg-[#16A34A] hover:bg-[#15803D] text-white` | CTA de cierre en Cotizador y botón flotante / Header a WhatsApp |

---

## 2. Sistema Tipográfico y Jerarquía Mecánica

La combinación tipográfica une la **fuerza estructural de un chasis agrícola** con la **exactitud digital de un monitor de siembra y cosecha**.

### 2.1 Familias Tipográficas

1. **Display / Titulares (`--font-display`: `'Space Grotesk'` o `'Barlow Condensed'`)**:
   - **Pesos:** `700` (Bold) y `800` (ExtraBold).
   - **Carácter:** Industrial, geométrico, compacto y autoritario.
   - **Reglas CSS:** `letter-spacing: -0.025em; line-height: 1.08;` (En `Barlow Condensed` usar `uppercase` con `letter-spacing: 0.01em` para encabezados de ficha técnica).
2. **Cuerpo y UI (`--font-sans`: `'Plus Jakarta Sans'`)**:
   - **Pesos:** `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold).
   - **Carácter:** Máxima apertura de contraformas para lectura rápida en pantallas de 360px a 430px bajo reflejo solar.
3. **Datos Técnicos, Telemetría y Unidades (`--font-mono`: `'JetBrains Mono'`)**:
   - **Pesos:** `500` (Medium) y `700` (Bold).
   - **Regla obligatoria:** `font-variant-numeric: tabular-nums;` (`tabular-nums` en Tailwind).
   - **Aplicación:** Hectáreas (`ha`), densidad (`sem/ha` o `kg/ha`), humedad (`%`), ancho de labor (`m` / `pies`), potencia (`HP`), velocidad (`km/h`), pérdida por cola (`%`), coordenadas GPS y archivos (`.shp`, `ISOXML`).

### 2.2 Escala Tipográfica Responsiva

| Rol | Clases Tailwind | Especificación |
| :--- | :--- | :--- |
| **H1 (Hero Title)** | `font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06]` | Impacto inmediato sobre imagen de lote |
| **H2 (Títulos de Sección)** | `font-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.12]` | Encabezados de Servicios, Comparador y Flota |
| **H3 (Título de Ficha / Card)** | `font-display text-xl sm:text-2xl font-bold leading-snug` | Nombre del servicio o equipo principal |
| **Subtítulo / Lead** | `font-sans text-base sm:text-lg font-medium leading-relaxed` | Bajadas explicativas orientadas a beneficio productivo |
| **Dato / KPI Numérico** | `font-mono text-2xl sm:text-3xl font-bold tabular-nums tracking-tight` | Métricas de ahorro, rinde, ancho de labor y hectáreas |
| **Badge / Etiqueta Técnica** | `font-mono text-xs uppercase tracking-wider font-semibold tabular-nums` | Etiquetas tipo HUD (`RTK ±2.5cm`, `ARCHIVOS .SHP / ISOXML`) |

---

## 3. Reglas de Ergonomía en Campo ("Sunlight & Cab UX")

- **Touch Targets (Áreas Táctiles):** Todo botón, selector de cultivo, toggle del comparador o campo de formulario debe tener una altura mínima de `48px` (`min-h-[48px]`, idealmente `h-12` o `h-14` en CTAs primarios) para uso cómodo con una sola mano en movimiento.
- **Bordes Técnicos Visibles:** No depender de sombras difusas (`shadow-sm` invisibles al sol). Usar bordes definidos de `1px` o `2px` (`border-[#DCD7CC]` en claro, `border-[#2C3E33]` en oscuro) que estructuren la información como una ficha mecánica.
- **Cero Texto Decorativo Ilegible:** Prohibido usar opacidades menores a `0.75` en textos informativos o fuentes de peso `300` (Light).

---

## 4. Especificación Detallada de Componentes Interactivos

### 4.1 Header Fijo de Respuesta Rápida
- **Estilo:** Barra superior fija (`sticky top-0 z-50 h-20 bg-[#141E18]/95 backdrop-blur-md border-b border-[#2C3E33]`).
- **Izquierda (Identidad):** Logotipo tipográfico mecánico **FABIANCOMPAG** (`font-display font-extrabold text-xl tracking-tight text-white`) + sub-etiqueta técnica en mono `CONTRATISTA RURAL · PRECISIÓN SATELITAL` con punto verde pulsante.
- **Centro (Navegación Desktop):** Enlaces ancla claros (`#comparador`, `#servicios`, `#maquinaria`, `#cobertura`, `#cotizador`) con hover en `#EAB308`.
- **Derecha (CTA Inmediato):** Botón compacto de alto contraste `"Coordinar Campaña"` (`bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold min-h-[44px] px-4 rounded-lg flex items-center gap-2`).

---

### 4.2 Hero Agro-Tecnológico (Estado de Campaña + HUD Táctico)

- **Layout:** Sección full-bleed sobre `--bg-dark` (`min-h-[88vh] flex items-center relative overflow-hidden py-16 lg:py-24`).
- **Fondo Visual y Overlay Táctico:**
  - Imagen de alta resolución de cosechadora axial con cabezal Draper o sembradora de directa operando en rastrojo dorado.
  - **Overlay Graduado:** `linear-gradient(115deg, rgba(20,30,24,0.95) 0%, rgba(20,30,24,0.82) 55%, rgba(20,30,24,0.45) 100%)`.
  - **Retícula Satelital Sutil:** Patrón CSS de grilla técnica (`background-size: 48px 48px`, líneas `rgba(255,255,255,0.04)`) que evoca un SIG/GIS de agricultura por ambientes.
- **Columna Izquierda (7 columnas en Desktop — Propuesta de Valor):**
  1. **Badge de Estado de Campaña en Vivo:**
     - Contenedor `inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1C2A22] border border-[#EAB308]/50 text-[#EAB308] font-mono text-xs uppercase tracking-wider mb-6`.
     - Indicador LED animado (`w-2.5 h-2.5 rounded-full bg-[#EAB308] animate-pulse`) + Texto: `CAMPAÑA GRUESA / FINA ACTIVA · DISPONIBILIDAD EN ZONA NÚCLEO`.
  2. **Titular Principal (H1):**
     > **"SIEMBRA DIRECTA SURCO POR SURCO Y COSECHA CON MAPEO DE RINDE."**
     - Las palabras `"SURCO POR SURCO"` y `"MAPEO DE RINDE"` destacadas en color `#EAB308`.
  3. **Subtítulo Técnico:**
     > *"Ejecutamos tus prescripciones de Dosis Variable (VRA) sin solapamientos en cabeceras y cosechamos con cabezales Draper y Maicero entregando mapas de rendimiento georreferenciados listos para tu ingeniero agrónomo."*
  4. **Grupo de Doble CTA (Altura mínima 52px):**
     - **CTA Primario:** `"Planificar Lote por WhatsApp"` (`bg-[#D97706] hover:bg-[#B45309] text-white font-bold px-6 min-h-[52px] rounded-lg shadow-lg flex items-center gap-3`). Desplaza al cotizador o abre consulta directa.
     - **CTA Secundario:** `"Simular Ahorro y Mapeo"` (`bg-[#1C2A22] hover:bg-[#2C3E33] text-[#F7F5F0] border border-[#2C3E33] font-semibold px-6 min-h-[52px] rounded-lg flex items-center gap-2`). Ancla directa al Comparador Interactivo.
- **Columna Derecha / Barra Inferior (HUD de KPIs Técnicos en `JetBrains Mono`):**
  - Panel estilo monitor de cabina (`bg-[#1C2A22]/90 backdrop-blur-md border border-[#2C3E33] rounded-xl p-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4`):
    - **KPI 1 (Siembra VRA):** `0% SOLAPAMIENTO` — *Corte automático surco x surco en cabeceras y cuchillas*.
    - **KPI 2 (Prescripciones):** `.SHP / ISOXML` — *Lectura nativa de mapas de ambientes en semilla y fertilizante*.
    - **KPI 3 (Cosecha):** `< 0.8% MERMA` — *Cabezales Draper / Maicero y regulación axial según humedad*.
    - **KPI 4 (Entregable):** `100% MAPEADO` — *Capa GIS de rinde seco y humedad entregada post-cosecha*.

---

### 4.3 Visualizador / Comparador Interactivo de Agricultura de Precisión (Componente Estrella)

Este componente demuestra de forma visual y cuantitativa por qué contratar tecnología de precisión paga el servicio con el propio ahorro de semilla y la captura de datos del lote.

- **Ubicación:** Inmediatamente después del Hero (`id="comparador"`).
- **Estilo del Contenedor:** Bloque de alto contraste tipo consola de monitoreo (`bg-[#141E18] text-[#F7F5F0] rounded-2xl border-2 border-[#2C3E33] p-6 sm:p-10 shadow-2xl`).
- **Selector Principal de Labor (Tabs de 52px de alto):**
  - **Tab 1:** `🌱 SIEMBRA: Convencional vs. Surco x Surco + VRA`
  - **Tab 2:** `🌾 COSECHA: A Ciegas vs. Mapeo de Rinde Satelital`
- **Switch / Toggle Comparativo de Estado:**
  - Botones segmentados grandes (`min-h-[48px]`): `[ Modo Tradicional (Pérdida Oculta) ]` vs. `[ Tecnología FABIANCOMPAG (Precisión Activa) ]`.

#### Escenario A: Siembra Directa (Convencional vs. Corte Surco x Surco + Dosis Variable)
- **Visualización Gráfica del Lote (Canvas SVG / Grilla Interactiva de Ambientes):**
  - Representación de un lote con **cabecera en diagonal / cuchilla irregular** y **3 ambientes edáficos** (Loma, Media Loma, Bajo Dulce).
  - **En estado "Siembra Convencional":**
    - Muestra en rojo (`#DC2626`) las zonas de **doble pasada / solapamiento en cabeceras y diagonales** (exceso de plantas, vuelco y gasto inútil de bolsas de maíz/soja).
    - Muestra una **dosis fija plana** en todo el lote (sub-aprovechando el Bajo Dulce y estresando la Loma).
  - **En estado "Corte Surco x Surco + Dosis Variable (VRA)":**
    - Los cuerpos de siembra se apagan individualmente al cruzar la línea de cabecera (indicadores verdes `#16A34A` `CORTADO AUTOMÁTICO`).
    - El lote se colorea en 3 zonas de prescripción (Verde Oscuro: `82.000 sem/ha`, Verde Medio: `70.000 sem/ha`, Ámbar: `58.000 sem/ha`).
- **Panel de Impacto Técnico (Comparativa Numérica `tabular-nums`):**
  - **Ahorro en Semilla por Cero Solapamiento:** `De 8%–12% de desperdicio` $\rightarrow$ **`0% superposición (Ahorro directo en bolsas/ha)`**.
  - **Ajuste por Ambiente (VRA):** `Dosis única rígida` $\rightarrow$ **`Prescripción .SHP / ISOXML en tiempo real`**.
  - **Emergencia y Stand de Plantas:** `Competencia entre plantas en cabeceras` $\rightarrow$ **`Distribución equidistante y profundidad uniforme`**.

#### Escenario B: Cosecha de Granos (Cosecha a Ciegas vs. Cosecha con Mapeo de Rinde Satelital)
- **Visualización Gráfica del Lote:**
  - **En estado "Cosecha a Ciegas":**
    - El lote se ve como un bloque gris uniforme donde solo se conoce el promedio de balanza en camión (`Ej. Promedio general: 4.100 kg/ha`), ocultando manchones de bajo rinde, problemas de compactación o pérdidas por cola.
  - **En estado "Cosecha con Mapeo de Rinde FABIANCOMPAG":**
    - Se despliega la **capa de mapa de calor georreferenciado (Heatmap NDVI / Rinde)** con puntos de lectura cada segundo (`Bajo: 2.600 kg/ha` en rojo, `Medio: 4.200 kg/ha` en amarillo, `Alto: 5.800 kg/ha` en verde) junto con telemetría de humedad en grano (`13.8%`) y ancho de corte Draper (`35-40 pies`).
- **Panel de Impacto Técnico (Comparativa Numérica `tabular-nums`):**
  - **Información post-cosecha:** `Solo ticket de balanza general` $\rightarrow$ **`Mapa GIS de Rinde Seco + Humedad listo para prescribir la próxima campaña`**.
  - **Pérdida por Cola y Cabezal:** `Sin control continuo` $\rightarrow$ **`Cabezal Draper / Maicero regulado y sensores de pérdida activos`**.
  - **Toma de Decisiones:** `Fertilización a ciegas el próximo año` $\rightarrow$ **`Base exacta para reposición de nutrientes y VRA`**.
- **CTA Contextual del Comparador:** Botón inferior `"Aplicar esta tecnología en mi lote →"` que pre-selecciona la labor activa en el Cotizador de WhatsApp.

---

### 4.4 Bento Grid de Servicios y Fichas Técnicas (`id="servicios"`)

Diseño estructurado en dos grandes módulos maestros (los 2 pilares centrales) más una franja complementaria de logística y soporte en lote, sobre fondo `--bg-primary` (`#F7F5F0`).

- **Estructura de Cada Ficha Maestra (6 columnas c/u en Desktop, 12 en Mobile):**
  - Contenedor `bg-white border-2 border-[#DCD7CC] hover:border-[#1F5E3B] rounded-2xl overflow-hidden transition-all flex flex-col justify-between`.
  - **Cabecera Técnica Oscura (`bg-[#141E18] p-6 text-white`):**
    - Código de servicio en mono (`SERVICIO 01 // COSECHA` y `SERVICIO 02 // SIEMBRA VRA`).
    - Título en `Space Grotesk` (`text-2xl font-bold`) + Badge de cultivos (`SOJA · MAÍZ · TRIGO · GIRASOL`).
  - **Cuerpo de Especificaciones (Tabla de Ingeniería en `JetBrains Mono`):**
    - **Ficha 1: Cosecha de Granos con Mapeo de Rendimiento**
      - **Cabezales Disponibles:** Draper flexible (copiado de terreno al ras en soja/trigo) y Maicero de bajo desgrane.
      - **Agricultura de Precisión:** Monitor de rinde y humedad calibrado por lote + antena GPS satelital.
      - **Entregable Agronómico:** Exportación de mapas de rendimiento georreferenciados (`.shp` / PDF / plataforma digital) para zonificación de ambientes.
      - **Calidad de Grano:** Sistema de trilla axial para mínimo daño mecánico y merma controlada por cola.
    - **Ficha 2: Siembra Directa Surco por Surco y Dosis Variable (VRA)**
      - **Control de Surco:** Embragues eléctricos/neumáticos con **Corte Surco por Surco** automático por GPS (elimina 100% la superposición en cabeceras, diagonales y terrazas).
      - **Dosificación Variable (VRA):** Motores electrónicos capaces de variar densidad de `semillas/ha` y `kg/ha` de fertilizante según mapa de prescripción `.shp` o `ISOXML`.
      - **Implantación:** Planteo neumático de alta precisión, control de profundidad constante y excelente corte de rastrojo pesado.
      - **Retorno Directo:** Ahorro comprobado del `5% al 12%` en bolsas de semilla y mayor rinde en ambientes de alto potencial.
  - **Pie de Ficha (Acción Directa):**
    - Botón full-width `min-h-[50px]` `"Cotizar este Servicio en mi Zona"` (`bg-[#141E18] hover:bg-[#1F5E3B] text-white font-semibold`). Al hacer clic, salta al `#cotizador` y marca automáticamente la labor correspondiente.

---

### 4.5 Parque de Maquinaria, Telemetría y Logística Propia (`id="maquinaria"`)

Sección sobre fondo oscuro `--bg-dark` (`#141E18`) para resaltar la robustez mecánica y la autonomía operativa en campaña.

- **Grid de 3 Tarjetas Técnicas (`bg-[#1C2A22] border border-[#2C3E33] rounded-xl p-6`):**
  1. **Unidad de Cosecha Axial & Cabezales:**
     - Especificaciones con `tabular-nums`: Potencia `HP`, ancho de labor Draper (`pies`/`m`), cabezal maicero, tolva de descarga rápida y sensores de rinde/humedad calibrados.
  2. **Tren de Siembra Directa VRA & Piloto RTK:**
     - Especificaciones: Dosificadores neumáticos, corte sección/surco a surco, monitor multi-capa (`.shp`/`ISOXML`), piloto automático con corrección satelital para surcos rectos sin fallas de empalme.
  3. **Logística Propia, Carretón y Taller Rodante en Lote:**
     - Factor crítico de conversión rural: **Traslado propio en carretón** (cumplimiento estricto de la fecha pactada), **casilla rural equipada** y **taller móvil con repuestos críticos en el lote** para no perder horas de ventana óptima de siembra o cosecha.

---

### 4.6 Cobertura Regional y Ventana Operativa (`id="cobertura"`)

- **Layout:** Dos columnas sobre `--bg-surface-muted` (`#EFECE6`).
- **Información Clave:**
  - Radio de cobertura en **Zona Núcleo y Pampa Húmeda** (atención a productores, administraciones agropecuarias y asesores).
  - Indicador de **Mínimo de Hectáreas / Coordinación por Hoja de Ruta** para optimizar costos de traslado.
  - Compromiso de **Puntualidad en Ventana Óptima**: planificación anticipada de campaña fina y gruesa.

---

### 4.7 Cotizador / Planificador de Campaña para WhatsApp (`id="cotizador"`)

Componente de conversión final diseñado para que el productor o ingeniero agrónomo arme una solicitud técnica completa en **menos de 25 segundos** desde el celular, sin registros ni esperas de correo electrónico.

- **Diseño del Contenedor:** Ficha de alto impacto (`bg-white border-2 border-[#1F5E3B] rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto`).
- **Cabecera del Cotizador:** `bg-[#1F5E3B] text-white p-6` con título `"Planificador Rápido de Campaña → Directo al WhatsApp de Fabián"` y subtítulo `"Seleccioná los datos de tu lote para enviar una consulta técnica estructurada y verificar disponibilidad de equipos."`
- **Campos Interactivos del Formulario (Todos con `min-h-[48px]`):**
  1. **Paso 1 — Labor Requerida (Pills Táctiles Grandes con Ícono):**
     - `[ 🌱 Siembra Directa Surco x Surco + VRA ]`
     - `[ 🌾 Cosecha con Mapeo de Rinde ]`
     - `[ 🔄 Campaña Completa (Siembra + Cosecha) ]`
  2. **Paso 2 — Cultivo Principal (Selector de Botones Táctiles):**
     - `[ Soja ]` `[ Maíz ]` `[ Trigo ]` `[ Girasol ]` `[ Otros / Cobertura ]`
  3. **Paso 3 — Superficie Estimada (`ha`):**
     - Input numérico con fuente `JetBrains Mono tabular-nums` + botones rápidos de incremento o presets (`100 ha`, `250 ha`, `500 ha`, `+1.000 ha`).
  4. **Paso 4 — Agricultura por Ambientes / Prescripción:**
     - Selector rápido:
       - `Cuento con mapa de prescripción (.shp / ISOXML)`
       - `Requiero entrega de Mapa de Rinde post-cosecha`
       - `Manejo convencional con corte surco por surco`
  5. **Paso 5 — Localidad / Zona del Campo y Fecha Estimada:**
     - Input de texto para Localidad / Ruta (ej. *"Pergamino / Rojas / Marcos Juárez"*) + Selector de ventana (*"Próxima quincena"*, *"Mes próximo"*, *"Planificación de campaña"*).
- **Vista Previa en Tiempo Real del Mensaje Técnico:**
  - Recuadro estilo terminal/WhatsApp (`bg-[#F7F5F0] border border-[#DCD7CC] rounded-lg p-4 font-mono text-xs text-[#161A17]`) que muestra cómo saldrá el mensaje:
    > *"Hola Fabián, te escribo desde la web. Quiero consultar disponibilidad para *Siembra Directa Surco x Surco + VRA* de *Maíz* en *350 ha* en la zona de *Pergamino*. Cuento con prescripción por ambientes (.shp). Ventana estimada: *1ra quincena Octubre*."*
- **Botón de Disparo a WhatsApp:**
  - `w-full min-h-[56px] bg-[#16A34A] hover:bg-[#15803D] text-white font-display font-bold text-lg rounded-xl flex items-center justify-center gap-3 shadow-lg`.
  - Texto: `"Enviar Consulta Técnica por WhatsApp"`.

---

## 5. Checklist de Implementación para `frontend-architect`

- [ ] Cargar fuentes `Space Grotesk` (700), `Plus Jakarta Sans` (400, 500, 600, 700) y `JetBrains Mono` (500, 700) desde Google Fonts.
- [ ] Aplicar `font-variant-numeric: tabular-nums` en todos los contadores, KPIs del Hero, métricas del Comparador y campo de hectáreas del Cotizador.
- [ ] Garantizar que los botones de cada tarjeta del Bento de Servicios y del Comparador actualicen dinámicamente el estado del Cotizador de WhatsApp y hagan scroll suave hacia `#cotizador`.
- [ ] Verificar contraste WCAG AAA y alturas mínimas de `48px` en todos los controles interactivos en vista móvil (`375px`).
