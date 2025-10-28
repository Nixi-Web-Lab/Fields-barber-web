export const BUSINESS_INFO = {
  name: 'Fields Barbers',
  owner: 'Fernando Campos',
  address: {
    street: 'Av. Virgen de los Dolores, 19',
    city: 'Córdoba',
    postalCode: '14004',
    country: 'España',
    coordinates: {
      lat: 37.8882,
      lng: -4.7794
    }
  },
  contact: {
    phone: '+34 XXX XXX XXX', // Pendiente
    email: 'info@fieldsbarbers.com',
    instagram: '@fieldsbarbers',
    booksy: 'https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba'
  }
};

export const SERVICES = [
  {
    id: 'haircut',
    nameES: 'Corte caballero',
    nameEN: "Men's Haircut",
    price: 12.00,
    duration: 40,
    descriptionES: 'Corte profesional adaptado a tu estilo',
    descriptionEN: 'Professional haircut tailored to your style',
    icon: 'scissors'
  },
  {
    id: 'haircut-beard',
    nameES: 'Corte y arreglo de barba',
    nameEN: 'Haircut & Beard Trim',
    price: 16.00,
    duration: 60,
    descriptionES: 'Servicio completo de corte y arreglo de barba',
    descriptionEN: 'Complete haircut and beard grooming service',
    icon: 'razor'
  },
  {
    id: 'beard-trim',
    nameES: 'Recorte de la barba',
    nameEN: 'Beard Trim',
    price: 6.00,
    duration: 20,
    descriptionES: 'Perfilado y arreglo profesional de barba',
    descriptionEN: 'Professional beard shaping and grooming',
    icon: 'beard'
  }
];

export const SCHEDULE = {
  es: [
    { day: 'Lunes', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Martes', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Miércoles', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Jueves', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Viernes', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Sábado', hours: '10:00 - 14:00', open: true },
    { day: 'Domingo', hours: 'Cerrado', open: false }
  ],
  en: [
    { day: 'Monday', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Tuesday', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Wednesday', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Thursday', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Friday', hours: '10:00 - 14:00 | 17:00 - 21:00', open: true },
    { day: 'Saturday', hours: '10:00 - 14:00', open: true },
    { day: 'Sunday', hours: 'Closed', open: false }
  ]
};

// Para structured data
export const OPENING_HOURS_SCHEMA = [
  'Mo-Fr 10:00-14:00',
  'Mo-Fr 17:00-21:00',
  'Sa 10:00-14:00'
];
