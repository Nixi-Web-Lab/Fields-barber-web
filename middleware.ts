import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Idiomas soportados
  locales: ['es', 'en'],

  // Idioma por defecto
  defaultLocale: 'es',

  // Siempre mostrar el prefijo del locale en la URL
  localePrefix: 'always'
});

export const config = {
  // Aplicar el middleware a todas las rutas excepto las de API y archivos estáticos
  matcher: ['/', '/(es|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
