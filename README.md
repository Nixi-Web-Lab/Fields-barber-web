# Fields Barbers Website

Sitio web profesional y bilingüe (ES/EN) para Fields Barbers, barbería premium en Córdoba, España.

## 🚀 Características

- ✅ **Next.js 16** con App Router y Turbopack
- ✅ **React 19** con las últimas características
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** con diseño custom dark/gold
- ✅ **next-intl** para internacionalización (ES/EN)
- ✅ **Framer Motion** para animaciones suaves
- ✅ **SEO optimizado** con metadata dinámica y structured data
- ✅ **Responsive** y mobile-first
- ✅ **Integración con Booksy** para reservas

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🌐 URLs

- **Desarrollo:** http://localhost:3000
- **Español:** http://localhost:3000/es
- **Inglés:** http://localhost:3000/en

## 📁 Estructura del Proyecto

```
fields-barbers-app/
├── app/
│   ├── [locale]/          # Rutas con i18n
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página home
│   └── globals.css        # Estilos globales
├── components/
│   ├── ui/                # Componentes UI reutilizables
│   │   └── Button.tsx
│   ├── Header.tsx         # Header con navegación
│   ├── Hero.tsx           # Sección hero
│   ├── Services.tsx       # Servicios
│   ├── About.tsx          # Sobre nosotros
│   ├── Schedule.tsx       # Horarios y contacto
│   ├── Footer.tsx         # Footer
│   └── LanguageSwitcher.tsx
├── lib/
│   ├── constants.ts       # Datos del negocio
│   ├── metadata.ts        # Configuración SEO
│   └── structured-data.ts # JSON-LD schema
├── messages/
│   ├── es.json            # Traducciones español
│   └── en.json            # Traducciones inglés
├── public/
│   └── images/            # Logos e imágenes
├── i18n/
│   └── request.ts         # Configuración i18n
└── middleware.ts          # Middleware para i18n

```

## 🎨 Diseño

### Colores
- **Gold:** #D4AF37
- **Dark:** #0A0A0A
- **Secondary Dark:** #1A1A1A
- **Text Gray:** #B8B8B8

### Tipografía
- **Sans:** Inter (body text)
- **Serif:** Playfair Display (headings)
- **Script:** Dancing Script (decorativo)

## 📝 Configuración

### Business Info
Editar [`lib/constants.ts`](lib/constants.ts) para actualizar:
- Dirección
- Teléfono
- Redes sociales
- Servicios y precios
- Horarios

### Traducciones
Editar archivos en [`messages/`](messages/):
- [`es.json`](messages/es.json) - Español
- [`en.json`](messages/en.json) - Inglés

### SEO
Editar [`lib/metadata.ts`](lib/metadata.ts) para metadatos personalizados.

## 🔧 Tecnologías

- **Next.js:** 16.0.0
- **React:** 19.0.0
- **TypeScript:** 5.6
- **Tailwind CSS:** 3.4.16
- **next-intl:** 3.23.0
- **Framer Motion:** 12.0.0
- **Lucide React:** 0.460.0

## 📱 Componentes Principales

### Header
Navegación sticky con logo, links y selector de idioma.

### Hero
Sección de bienvenida con título, subtítulo y CTAs.

### Services
Cards de servicios con precios y enlaces a Booksy.

### About
Información sobre Fernando y su experiencia internacional.

### Schedule
Horarios de apertura e información de contacto.

### Footer
Enlaces rápidos, redes sociales y copyright.

## 🌍 Internacionalización

El sitio soporta dos idiomas:
- **ES** (Español) - Por defecto
- **EN** (Inglés)

Las rutas son:
- `/es/*` - Versión española
- `/en/*` - Versión inglesa

## 🎯 SEO

- Metadatos optimizados por idioma
- Structured data (LocalBusiness schema)
- Open Graph tags
- Twitter cards
- Hreflang tags
- Sitemap automático

## 📞 Contacto

- **Dirección:** Av. Virgen de los Dolores, 19, 14004, Córdoba
- **Instagram:** [@fieldsbarbers](https://instagram.com/fieldsbarbers)
- **Booksy:** [Reservar cita](https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba)

## 📄 Licencia

© 2025 Fields Barbers. Todos los derechos reservados.

---

**Desarrollado con ❤️ usando Next.js 16 y React 19**
