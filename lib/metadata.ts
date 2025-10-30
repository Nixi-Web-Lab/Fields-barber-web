import { Metadata } from 'next';

export const getMetadata = (locale: 'es' | 'en'): Metadata => {
  const isSpanish = locale === 'es';

  return {
    metadataBase: new URL("fields-barber-web.vercel.app"),
    title: {
      default: isSpanish
        ? "Fields Barbers | Barbería Premium en Córdoba"
        : "Fields Barbers | Premium Barber Shop in Córdoba",
      template: "%s | Fields Barbers",
    },
    description: isSpanish
      ? "Barbería profesional en Córdoba. Cortes modernos, arreglo de barba. Atención en inglés y español. Reserva tu cita online."
      : "Professional barber shop in Córdoba. Modern haircuts, beard grooming. English-speaking barber. Book your appointment online.",
    keywords: isSpanish
      ? [
          "barbería córdoba",
          "barbero profesional córdoba",
          "corte de pelo hombre córdoba",
          "arreglo barba córdoba",
          "barbería inglés córdoba",
          "fields barbers",
        ]
      : [
          "barber córdoba",
          "english speaking barber spain",
          "barber shop córdoba",
          "mens haircut córdoba",
          "beard trim córdoba",
          "fields barbers",
        ],
    authors: [{ name: "Fields Barbers" }],
    creator: "Fields Barbers",
    publisher: "Fields Barbers",
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: `/${locale}`,
      siteName: "Fields Barbers",
      title: isSpanish
        ? "Fields Barbers | Barbería Premium en Córdoba"
        : "Fields Barbers | Premium Barber Shop in Córdoba",
      description: isSpanish
        ? "Barbería profesional en Córdoba con atención en inglés y español."
        : "Professional barber shop in Córdoba with English-speaking service.",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Fields Barbers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish
        ? "Fields Barbers | Barbería Premium"
        : "Fields Barbers | Premium Barber Shop",
      description: isSpanish
        ? "Barbería profesional en Córdoba"
        : "Professional barber shop in Córdoba",
      images: ["/images/og-image.jpg"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/images/F_gold_icon.ico",
      shortcut: "/images/F_gold_icon.ico",
      apple: "/images/F_gold_icon.ico",
    },
  };
};
