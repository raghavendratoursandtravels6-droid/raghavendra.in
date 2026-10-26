import { TripType, BUSINESS_CONFIG } from './bookingUtils';

export interface FestiveOffer {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
  discountHighlight: string;
  code: string;
  validity: string;
  targetTripType: TripType;
  targetDestination: string;
  whatsAppText: string;
}

export const FESTIVE_OFFERS: FestiveOffer[] = [
  {
    id: 'outstation_festive',
    tag: 'Festive Getaway',
    title: 'Festive Outstation Special',
    subtitle: 'Bangalore to Mysore, Coorg, Ooty & Chikmagalur Round-Trips',
    badge: '10% Estimated Savings',
    discountHighlight: 'Special Per-Km Rates on Innova Crysta & Ertiga',
    code: 'FESTIVE-OUTSTATION',
    validity: 'Limited Season Offer',
    targetTripType: 'outstation_roundtrip',
    targetDestination: 'Mysore',
    whatsAppText: 'Hello Sridhar, I want to enquire about the Festive Outstation Tour Package from Bangalore (Code: FESTIVE-OUTSTATION). Please share details and best fare.',
  },
  {
    id: 'airport_saver',
    tag: 'Airport Saver',
    title: '24x7 Airport Transfer Assistance',
    subtitle: 'Kempegowda Airport (BLR T1 & T2) Pickup & Drop',
    badge: 'Punctual Dispatch',
    discountHighlight: 'Zero Surge • Upfront Fare Consultation',
    code: 'AIRPORT-SAVER',
    validity: 'Valid 24x7',
    targetTripType: 'airport_drop',
    targetDestination: 'Kempegowda International Airport (BLR)',
    whatsAppText: 'Hello Sridhar, I am looking for Bangalore Airport Taxi booking assistance (Code: AIRPORT-SAVER). Please share the rate.',
  },
  {
    id: 'pilgrimage_special',
    tag: 'Pilgrimage Special',
    title: 'Temple Pilgrimage Tour Package',
    subtitle: 'Tirupati Balaji, Dharmasthala & Kukke Temple Circuits',
    badge: 'Family Favorite',
    discountHighlight: 'Experienced Hill-Route & Highway Drivers',
    code: 'TEMPLE-TOUR',
    validity: 'Weekend & Festival Bookings',
    targetTripType: 'outstation_roundtrip',
    targetDestination: 'Tirupati',
    whatsAppText: 'Hello Sridhar, I would like to book a Pilgrimage Tour Cab package (Code: TEMPLE-TOUR). Please share vehicle availability and estimate.',
  },
];

/**
 * Generates direct WhatsApp URL with prefilled promo offer text
 */
export function generatePromoWhatsAppUrl(offer: FestiveOffer): string {
  const message = `${offer.whatsAppText}\n(Attn: Sridhar • 8088372049)`;
  return `https://wa.me/${BUSINESS_CONFIG.phoneIntl}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a clean promo summary for display or sharing
 */
export function getPromoSummary(offer: FestiveOffer): string {
  return `${offer.title}: ${offer.discountHighlight} (${offer.subtitle})`;
}
