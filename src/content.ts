// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 15 de septiembre de 2026,
// más el enlace de Instagram aportado directamente por el cliente
// (ver /data/contacto.json).

export const content = {
  name: 'Neneng Bar / Filipino Restaurant',
  shortName: 'Neneng Bar',
  tagline: 'El único restaurante filipino de Valencia, en Camins al Grau',
  description:
    'Neneng Bar es el primer y único restaurante filipino de Valencia, un rincón acogedor en Camins al Grau donde se cocina con mimo la receta tradicional de casa: sisig recién hecho en plancha caliente, lumpias crujientes, adobo, bicol express y pancit bihon, además de cócteles de autor y bebidas bien fresquitas. Un lugar pequeño y familiar, con terraza y trato cercano, pensado para descubrir Filipinas plato a plato.',
  metaDescription:
    'Neneng Bar / Filipino Restaurant: el único restaurante filipino de Valencia. Sisig, lumpias, adobo y cocina casera filipina en Camins al Grau. Reservas por WhatsApp.',
  keywords: [
    'Neneng Bar',
    'restaurante filipino Valencia',
    'comida filipina Valencia',
    'Camins al Grau',
    'sisig',
    'lumpias',
    'adobo filipino',
    'restaurante cerca del puerto Valencia',
  ],
  priceRange: '10 € - 20 €',
  priceRangeDisplay: '10 € – 20 € por persona',
  cuisine: 'Restaurante filipino',

  rating: { value: 4.7, count: 272, countDisplay: '272 reseñas' },
  highlights: [
    'El único restaurante filipino de toda Valencia, con recetas tradicionales y caseras.',
    'El sisig, su plato estrella, servido en plancha caliente con huevo recién frito.',
    'Cócteles de autor y bebidas frescas, como su limonada tan recomendada.',
    'Terraza, ambiente familiar y trato cercano de Grace y Ronnie.',
  ],

  address: {
    streetAddress: 'Avinguda del Port, 122',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46023',
    addressCountry: 'ES',
    full: 'Av. del Port, 122, Camins al Grau, 46023 València, Valencia',
  },
  geo: { lat: 39.4651007, lng: -0.3503707 },

  phone: '+34 632 00 23 76',
  phoneDisplay: '632 00 23 76',
  whatsappNumber: '34632002376',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/neneng-bar-filipino-restaurant/',

  social: {
    instagram: 'https://www.instagram.com/neneng.bar',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '12:00 – 1:00' },
    { day: 'Miércoles', hours: '12:00 – 1:00' },
    { day: 'Jueves', hours: '12:00 – 1:00' },
    { day: 'Viernes', hours: '12:00 – 1:30' },
    { day: 'Sábado', hours: '12:30 – 1:30' },
    { day: 'Domingo', hours: '12:30 – 1:30' },
  ],
  openingHoursSchema: [
    { dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '12:00', closes: '23:59' },
    { dayOfWeek: ['Friday'], opens: '12:00', closes: '23:59' },
    { dayOfWeek: ['Saturday', 'Sunday'], opens: '12:30', closes: '23:59' },
  ],

  gallery: [
    {
      src: '/gallery/neneng-bar-fachada.jpg',
      alt: 'Fachada de Neneng Bar / Filipino Restaurant en Camins al Grau, Valencia',
    },
    {
      src: '/gallery/neneng-bar-sisig.jpg',
      alt: 'Sisig servido en plancha caliente con huevo frito, plato estrella de Neneng Bar',
    },
    {
      src: '/gallery/neneng-bar-silog-lumpia.jpg',
      alt: 'Plato de longganisa con arroz y huevo, junto a lumpias filipinas en Neneng Bar',
    },
    {
      src: '/gallery/neneng-bar-parrilla-filipina.jpg',
      alt: 'Brochetas y carne a la parrilla estilo filipino en Neneng Bar',
    },
    {
      src: '/gallery/neneng-bar-halo-halo.jpg',
      alt: 'Bebida de ube con nata y galleta junto al letrero de neón de Neneng Bar',
    },
    {
      src: '/gallery/neneng-bar-comedor.jpg',
      alt: 'Comedor de Neneng Bar con jardín vertical y ambiente familiar',
    },
    {
      src: '/gallery/neneng-bar-barra.jpg',
      alt: 'Barra e interior de Neneng Bar, restaurante filipino en Valencia',
    },
    {
      src: '/gallery/neneng-bar-noche.jpg',
      alt: 'Entrada de Neneng Bar de noche en Camins al Grau, Valencia',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Neneng Bar Filipino Restaurant, Av. del Port 122, 46023 València') +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=14123653824825527095&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Neneng Bar y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Neneng Bar y me gustaría hacer una reserva.'

// Sin sistema de reservas propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}
