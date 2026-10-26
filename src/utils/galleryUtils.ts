import { BUSINESS_CONFIG, CarCategory } from './bookingUtils';

export interface GalleryCarItem {
  id: string;
  category: CarCategory;
  modelName: string;
  fullName: string;
  badge: string;
  tagline: string;
  seating: string;
  luggage: string;
  acType: string;
  idealFor: string;
  features: string[];
  imageSrc: string;
  altText: string;
}

export const VEHICLE_GALLERY_ITEMS: GalleryCarItem[] = [
  {
    id: 'innova-crysta-exterior',
    category: 'premium_suv',
    modelName: 'Toyota Innova Crysta',
    fullName: 'Toyota Innova Crysta 2.4 VX/ZX (7-Seater)',
    badge: 'Executive Long-Distance Choice',
    tagline: 'Plush Captain Seats & Highway Comfort',
    seating: '6 or 7 Passengers + Driver',
    luggage: '4 Large Bags + 2 Trolleys',
    acType: 'Tri-Zone Automatic Climate Control',
    idealFor: 'Bangalore to Mysore, Coorg, Ooty, Chikmagalur & Corporate Trips',
    features: ['Plush Reclining Captain Seats', 'Superior Highway Suspension', 'Odorless Sanitized Cabin', 'Dedicated Roof AC Vents'],
    imageSrc: '/src/assets/images/innova_crysta_cab_1792598134839.jpg',
    altText: 'White Toyota Innova Crysta taxi on Bangalore highway with sunset background',
  },
  {
    id: 'ertiga-suv-exterior',
    category: 'suv',
    modelName: 'Maruti Suzuki Ertiga',
    fullName: 'Maruti Suzuki Ertiga Smart Hybrid ZXi',
    badge: 'Most Popular Family SUV',
    tagline: 'Versatile 6-Seater with Dual AC & Flexible Seating',
    seating: '6 Passengers + Driver',
    luggage: '2-3 Medium Trolley Bags',
    acType: 'Dual Roof Air Conditioning',
    idealFor: 'Airport Family Drops, Nandi Hills, Tirupati & Weekend Getaways',
    features: ['3-Row Adjustable Seating', 'Ample Legroom & Headroom', 'Quiet Petrol Engine', 'High Luggage Flexibility'],
    imageSrc: '/src/assets/images/ertiga_suv_taxi_1792598137633.jpg',
    altText: 'Maruti Suzuki Ertiga taxi cruising on modern Bangalore highway road',
  },
  {
    id: 'sedan-dzire-exterior',
    category: 'sedan',
    modelName: 'Maruti Dzire / Etios Sedan',
    fullName: 'Maruti Suzuki Dzire & Toyota Etios Sedan',
    badge: 'Economical & Smooth City Cruiser',
    tagline: 'Fast City Maneuvering, Airport Drops & High Fuel Efficiency',
    seating: '4 Passengers + Driver',
    luggage: '2 Medium Suitcases + Handbags',
    acType: 'Chilled Air Conditioning with Rear Vents',
    idealFor: '24x7 Kempegowda Airport Runs, Local Bangalore Meetings & Couples',
    features: ['Deep 378L Boot Space', 'Quick City Navigation', 'Clean Sanitized Seats', 'Zero-Surge Transparent Fares'],
    imageSrc: '/src/assets/images/sedan_dzire_taxi_1792598137083.jpg',
    altText: 'White Maruti Dzire sedan taxi driving near Bangalore Airport terminal',
  },
  {
    id: 'airport-specialist-cab',
    category: 'sedan',
    modelName: '24x7 Airport Transfer Cab',
    fullName: 'Dedicated Bangalore Airport Taxi (BLR Terminal 1 & 2)',
    badge: '24/7 On-Time Flight Transfer',
    tagline: 'Pre-Booked Doorstep Pickup with Zero Flight Delays',
    seating: '4 to 6 Passengers',
    luggage: 'Full Flight Luggage Capacity',
    acType: 'Full Chilled AC',
    idealFor: 'Midnight & Early Morning Flights to/from Kempegowda Airport',
    features: ['Live Flight Tracking', 'No Mid-Route Toll Gouging', '15-Min Advance Arrival', 'Direct Driver Coordination'],
    imageSrc: '/src/assets/images/bangalore_airport_taxi_1792598135912.jpg',
    altText: 'Bangalore Airport taxi with terminal signage and sunset lighting',
  },
  {
    id: 'tempo-group-coach',
    category: 'tempo',
    modelName: 'Tempo Traveller & Mini Coach',
    fullName: 'Force Tempo Traveller 12-16 Seater Luxury Coach',
    badge: 'Extended Family & Tour Groups',
    tagline: 'High-Roof Luxury for Pilgrimages & Marriage Groups',
    seating: '12 to 16 Passengers',
    luggage: 'Heavy Rooftop Carrier & Rear Boot',
    acType: 'High-Capacity Multi-Vent AC',
    idealFor: 'Tirupati, Shirdi, Dharmasthala, Wedding Guests & Corporate Outings',
    features: ['Push-Back Reclining Seats', 'Audio System & LED Cabin', 'Experienced Hill Chauffeur', 'Spacious Walking Aisle'],
    imageSrc: '/src/assets/images/outstation_tour_cab_1792598137700.jpg',
    altText: 'Tempo Traveller luxury coach parked on scenic green outstation road',
  },
];

/**
 * Calculates next slide index with loop-around logic
 */
export function getNextSlideIndex(currentIndex: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  return (currentIndex + 1) % totalSlides;
}

/**
 * Calculates previous slide index with loop-around logic
 */
export function getPrevSlideIndex(currentIndex: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  return (currentIndex - 1 + totalSlides) % totalSlides;
}

/**
 * Filters vehicle gallery items by category ('all' returns full list)
 */
export function filterGalleryItems(
  items: GalleryCarItem[],
  selectedCategory: CarCategory | 'all'
): GalleryCarItem[] {
  if (selectedCategory === 'all') {
    return items;
  }
  return items.filter((item) => item.category === selectedCategory);
}

/**
 * Generates direct WhatsApp inquiry link for a specific car model
 */
export function generateCarInquiryWhatsAppUrl(modelName: string): string {
  const message = `Hello Sridhar Sir, I am viewing the *${modelName}* in your vehicle gallery on raghavendratravels.in and would like to check availability and fare for my journey.`;
  return `https://wa.me/${BUSINESS_CONFIG.phoneIntl}?text=${encodeURIComponent(message)}`;
}
