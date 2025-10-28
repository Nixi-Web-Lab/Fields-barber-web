export const getLocalBusinessSchema = (locale: 'es' | 'en') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'Fields Barbers',
    image: 'https://fieldsbarbers.com/images/logo-gold.svg',
    '@id': 'https://fieldsbarbers.com',
    url: 'https://fieldsbarbers.com',
    telephone: '+34-XXX-XXX-XXX',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Virgen de los Dolores, 19',
      addressLocality: 'Córdoba',
      postalCode: '14004',
      addressCountry: 'ES'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.8882,
      longitude: -4.7794
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '14:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '17:00',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00'
      }
    ],
    sameAs: [
      'https://www.instagram.com/fieldsbarbers',
      'https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba'
    ]
  };
};
