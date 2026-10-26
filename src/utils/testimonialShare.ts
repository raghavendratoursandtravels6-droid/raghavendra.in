import { BUSINESS_CONFIG } from './bookingUtils';

export interface TestimonialShareData {
  id: string;
  customerName: string;
  travelRoute: string;
  serviceType: string;
  vehicleUsed: string;
  rating: number;
  comment: string;
}

/**
 * Generates formatted text for sharing a specific testimonial with friends & family
 */
export function generateTestimonialShareText(item: TestimonialShareData): string {
  const stars = '⭐'.repeat(Math.max(1, Math.min(5, item.rating)));
  return (
    `🚗 *Raghavendra Tours & Travels – Customer Experience*\n\n` +
    `"${item.comment}"\n` +
    `— *${item.customerName}* (${item.travelRoute})\n` +
    `Rating: ${stars} (${item.serviceType} • ${item.vehicleUsed})\n\n` +
    `Need a clean, verified cab in Bangalore for Airport, City, or Outstation trips?\n` +
    `📞 Call/WhatsApp Sridhar: ${BUSINESS_CONFIG.phone}\n` +
    `🌐 Book online: ${BUSINESS_CONFIG.siteUrl}`
  );
}

/**
 * Generates WhatsApp URL that opens the friend/family contact picker with the review
 */
export function generateTestimonialWhatsAppShareUrl(item: TestimonialShareData): string {
  const text = generateTestimonialShareText(item);
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
}

/**
 * Generates formatted recommendation message for sharing the service generally
 */
export function generateServiceRecommendationShareText(): string {
  return (
    `🚕 *Looking for a reliable cab in Bangalore?*\n\n` +
    `I recommend *Raghavendra Tours & Travels* (Abbigere, Bengaluru).\n` +
    `✅ 24x7 Airport Transfers (Kempegowda BLR)\n` +
    `✅ Sanitized Sedans, Ertiga & Innova Crysta\n` +
    `✅ Outstation Trips (Mysore, Coorg, Ooty, Tirupati)\n` +
    `✅ Transparent pricing with zero hidden surges\n\n` +
    `📞 Contact Proprietor Sridhar: ${BUSINESS_CONFIG.phone}\n` +
    `🌐 Website: ${BUSINESS_CONFIG.siteUrl}`
  );
}

/**
 * Generates WhatsApp URL for general service recommendation
 */
export function generateServiceRecommendationWhatsAppShareUrl(): string {
  const text = generateServiceRecommendationShareText();
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
}
