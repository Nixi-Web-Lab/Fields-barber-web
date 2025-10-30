import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  // Idiomas soportados
  locales: ['es', 'en'],

  // Idioma por defecto (español) - fallback cuando no hay cookie ni idioma del navegador soportado
  defaultLocale: 'es',

  // Siempre mostrar el prefijo del locale en la URL
  localePrefix: 'always',

  // Detectar el idioma automáticamente
  localeDetection: true
});

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Aplicar el middleware a todas las rutas excepto las de API y archivos estáticos
  matcher: ['/', '/(es|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
