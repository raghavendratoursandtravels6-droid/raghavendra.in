import { BUSINESS_CONFIG } from './bookingUtils';

export interface SafetyPillar {
  id: string;
  category: 'hygiene' | 'driver' | 'support' | 'family';
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  badge: string;
  iconName: 'Sparkles' | 'ShieldCheck' | 'Clock' | 'HeartHandshake';
}

export const SAFETY_PILLARS: SafetyPillar[] = [
  {
    id: 'sanitization',
    category: 'hygiene',
    title: '100% Sanitized & Clean Vehicles',
    subtitle: 'Pre-Trip Disinfection & Deep Sanitization',
    tagline: 'Spotless interiors, sanitized high-touch surfaces, and fresh cabin airflow',
    description:
      'We understand how important personal hygiene and clean travel are for you and your family. Every cab undergoes a strict clean-up routine before being dispatched from our Abbigere hub.',
    keyPoints: [
      'High-touch surface wipe-downs (door handles, window switches, seatbelts, and AC vents)',
      'Odor-free, non-smoking interiors with freshly washed seat covers',
      'Regular AC evaporator cleaning & clean cabin air filters for dust-free journeys',
      'Daily vacuuming and exterior washing prior to all airport & outstation bookings',
    ],
    badge: 'Hygiene Assured',
    iconName: 'Sparkles',
  },
  {
    id: 'driver-verification',
    category: 'driver',
    title: 'Strict Driver Background Verification',
    subtitle: 'Police Vetted & Government ID Verified Chauffeurs',
    tagline: 'Government ID verified, vetted driving records, and courteous hospitality',
    description:
      'We only work with trusted independent owner-drivers whom Proprietor Sridhar personally vets. We do not dispatch anonymous random app drivers to your home.',
    keyPoints: [
      'Government ID (Aadhaar Card) & Commercial Driving License strictly verified',
      'Clean police record and zero-tolerance policy for reckless driving and alcohol',
      'Minimum 5+ years of highway experience across Karnataka, Tamil Nadu, Kerala & AP',
      'Courteous drivers fluent in Kannada, English, Hindi, and regional languages',
    ],
    badge: '100% Vetted Drivers',
    iconName: 'ShieldCheck',
  },
  {
    id: 'support-protocols',
    category: 'support',
    title: '24/7 Real-Time Support Protocols',
    subtitle: 'Direct Owner Helpline & Emergency SOS Escalation',
    tagline: 'Direct mobile access to Proprietor Sridhar throughout your trip',
    description:
      'Never get stuck dealing with an automated chatbot or unresolved support ticket. If you have an inquiry, delay, or special request at 3 AM, you speak directly with Sridhar.',
    keyPoints: [
      'Direct owner helpline (8088372049) available 24 hours a day, 7 days a week',
      'Standby replacement cab network across Bangalore corridors in case of vehicle breakdown',
      'Proactive driver dispatch 15 minutes before scheduled pickup time for airport runs',
      'Transparent upfront pricing — no surprise night surge or hidden toll inflation',
    ],
    badge: '24/7 Human Helpline',
    iconName: 'Clock',
  },
  {
    id: 'women-family-safety',
    category: 'family',
    title: 'Family & Women Traveler Safeguards',
    subtitle: 'Family & Solo Women Passenger Safety Measures',
    tagline: 'Special care for early morning airport transfers, solo women, and elderly passengers',
    description:
      'Safety and respect are non-negotiable. We ensure safe pickups and drop-offs right at your doorstep with verified driver identification shared in advance.',
    keyPoints: [
      'Driver details (name, photo, vehicle registration number) shared before departure',
      'Live trip sharing via WhatsApp with your loved ones upon request',
      'Safe waiting protocol: driver remains at pickup/drop till passenger is safely inside',
      'Luggage assistance for senior citizens and families traveling with children',
    ],
    badge: 'Family Friendly',
    iconName: 'HeartHandshake',
  },
];

export interface SafetyStat {
  metric: string;
  label: string;
  sublabel: string;
}

export const SAFETY_STATS: SafetyStat[] = [
  { metric: '100%', label: 'Vetted Drivers', sublabel: 'Aadhaar & Police Verified' },
  { metric: '50-Point', label: 'Vehicle Check', sublabel: 'Brakes, Tyres & AC Inspected' },
  { metric: '24x7', label: 'Owner Helpline', sublabel: 'Direct assistance by Sridhar' },
  { metric: '0%', label: 'Hidden Surges', sublabel: 'Transparent agreed fares' },
];

/**
 * Generates a pre-filled WhatsApp link specifically for safety & hygiene questions
 */
export function generateSafetyWhatsAppUrl(customTopic?: string): string {
  const base = `https://wa.me/${BUSINESS_CONFIG.phoneIntl}`;
  const topicText = customTopic
    ? ` regarding ${customTopic}`
    : '';
  const message = `Hello Sridhar Sir, I want to inquire about the Safety & Hygiene standards${topicText} for my upcoming cab booking with Raghavendra Tours & Travels.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Validates safety pillar lookup by ID
 */
export function getSafetyPillarById(id: string): SafetyPillar | undefined {
  return SAFETY_PILLARS.find((pillar) => pillar.id === id);
}
