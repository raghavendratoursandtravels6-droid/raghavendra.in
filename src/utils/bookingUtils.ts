/**
 * Raghavendra Tours & Travels - Core Booking Utilities & WhatsApp Link Generators
 */

export const BUSINESS_CONFIG = {
  name: "Raghavendra Tours & Travels",
  owner: "Sridhar",
  phone: "8088372049",
  phoneDisplay: "+91 80883 72049",
  phoneIntl: "918088372049",
  email: "raghavendratoursandtravels6@gmail.com",
  location: "Abbigere, Bengaluru – 560090, Karnataka, India",
  serviceArea: "Bangalore, Bengaluru and nearby areas, Karnataka, India",
  mapsUrl: "https://maps.app.goo.gl/kCRgW62rrj6oKTHw9?g_st=ac",
  existingSite: "https://raghavendra-tours.grexa.site",
  siteUrl: "https://www.raghavendratravels.in",
  domain: "www.raghavendratravels.in",
  domainApex: "raghavendratravels.in",
  aiStudioUrl: "https://raghavendra-tours-travels-cab-service-bangalore.ai.studio",
  defaultWhatsAppMessage: "Hello Raghavendra Tours & Travels, I need a cab booking. Please share the fare.",
  businessModelDisclaimer: "We arrange cab bookings through independent car owners and drivers. We do not claim to own a fleet of cars.",
  ticketingDisclaimer: "Train, flight and bus ticket booking assistance as well as hotel reservations and tour packages are strictly subject to seat/room availability and applicable operator charges. Bookings are never confirmed until the relevant reservation is completed.",
};

export type TripType = 
  | 'local' 
  | 'airport_pickup' 
  | 'airport_drop' 
  | 'outstation_oneway' 
  | 'outstation_roundtrip'
  | 'train_ticket'
  | 'flight_ticket'
  | 'bus_ticket'
  | 'hotel_assistance'
  | 'tour_package';

export type CarCategory = 
  | 'sedan' 
  | 'suv' 
  | 'premium_suv' 
  | 'tempo' 
  | 'any';

export interface BookingEnquiry {
  fullName: string;
  phone: string;
  tripType: TripType;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  pickupTime: string;
  passengers: number;
  carCategory: CarCategory;
  specialNotes?: string;
  returnDate?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Generates the official default WhatsApp booking link requested by business
 */
export function generateDefaultWhatsAppUrl(): string {
  const encodedText = encodeURIComponent(BUSINESS_CONFIG.defaultWhatsAppMessage);
  return `https://wa.me/${BUSINESS_CONFIG.phoneIntl}?text=${encodedText}`;
}

/**
 * Generates a direct phone call link
 */
export function generateCallUrl(): string {
  return `tel:${BUSINESS_CONFIG.phone}`;
}

/**
 * Generates an enquiry reference code
 */
export function generateBookingReference(dateStr?: string): string {
  const datePart = (dateStr || new Date().toISOString().slice(0, 10)).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `RTT-${datePart}-${randomSuffix}`;
}

/**
 * Human-readable label for trip types and travel assistance
 */
export function getTripTypeLabel(tripType: TripType): string {
  switch (tripType) {
    case 'airport_pickup':
      return 'Airport Pickup (BLR to City)';
    case 'airport_drop':
      return 'Airport Taxi Drop (City to BLR Airport)';
    case 'local':
      return 'Local Bangalore Taxi (Hourly / City)';
    case 'outstation_oneway':
      return 'Outstation One-Way Cab Booking';
    case 'outstation_roundtrip':
      return 'Outstation Round Trip Cab Booking';
    case 'train_ticket':
      return 'Train Ticket Booking Assistance (IRCTC / Tatkal)';
    case 'flight_ticket':
      return 'Flight Ticket Booking Assistance';
    case 'bus_ticket':
      return 'Bus Ticket Booking Assistance (KSRTC & Private)';
    case 'hotel_assistance':
      return 'Hotel Booking Assistance';
    case 'tour_package':
      return 'Custom Tour Package from Bangalore';
    default:
      return 'Cab & Travel Booking';
  }
}

/**
 * Human-readable label for vehicle category
 */
export function getCarCategoryLabel(category: CarCategory): string {
  switch (category) {
    case 'sedan':
      return 'Sedan (Dzire / Etios) - 4 Seater';
    case 'suv':
      return 'SUV (Ertiga) - 6 Seater';
    case 'premium_suv':
      return 'Premium SUV (Innova / Innova Crysta) - 6/7 Seater';
    case 'tempo':
      return 'Tempo Traveller / Mini Coach (9-16 Seater)';
    case 'any':
    default:
      return 'Best Available Vehicle';
  }
}

/**
 * Formats a clean, professional WhatsApp enquiry message with all form fields
 */
export function generateBookingWhatsAppUrl(booking: BookingEnquiry, refId?: string): string {
  const reference = refId || generateBookingReference(booking.travelDate);
  const tripLabel = getTripTypeLabel(booking.tripType);
  const isTicketing = ['train_ticket', 'flight_ticket', 'bus_ticket', 'hotel_assistance', 'tour_package'].includes(booking.tripType);
  const carLabel = getCarCategoryLabel(booking.carCategory);

  const header = isTicketing ? `*🎫 TRAVEL SERVICE ENQUIRY*` : `*🚕 CAB BOOKING ENQUIRY*`;

  const lines = [
    header,
    `Ref ID: ${reference}`,
    `--------------------------------`,
    `*Customer Name:* ${booking.fullName.trim()}`,
    `*Contact Phone:* ${booking.phone.trim()}`,
    `*Service / Trip:* ${tripLabel}`,
    `*Origin / Pickup:* ${booking.pickupLocation.trim()}`,
    `*Destination / Drop:* ${booking.dropLocation.trim()}`,
    `*Travel Date:* ${booking.travelDate}`,
    `*Pickup / Journey Time:* ${booking.pickupTime}`,
    `*Travellers / Passengers:* ${booking.passengers} person(s)`,
  ];

  if (!isTicketing) {
    lines.push(`*Preferred Car:* ${carLabel}`);
  }

  if (booking.tripType === 'outstation_roundtrip' && booking.returnDate) {
    lines.push(`*Return Date:* ${booking.returnDate}`);
  }

  if (booking.specialNotes && booking.specialNotes.trim().length > 0) {
    lines.push(`*Special Request:* ${booking.specialNotes.trim()}`);
  }

  lines.push(`--------------------------------`);
  if (isTicketing) {
    lines.push(`Please share availability and booking assistance details. (Attn: Sridhar)`);
  } else {
    lines.push(`Please share the best estimated fare and availability. Thank you! (Attn: Sridhar)`);
  }

  const message = lines.join('\n');
  return `https://wa.me/${BUSINESS_CONFIG.phoneIntl}?text=${encodeURIComponent(message)}`;
}

/**
 * Validates the booking enquiry form
 */
export function validateBookingForm(data: Partial<BookingEnquiry>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  // Validate 10-digit Indian phone number
  const cleanedPhone = (data.phone || '').replace(/\D/g, '');
  if (!cleanedPhone || cleanedPhone.length !== 10) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }

  if (!data.pickupLocation || data.pickupLocation.trim().length < 2) {
    errors.pickupLocation = "Please specify an origin or pickup location in Bangalore.";
  }

  if (!data.dropLocation || data.dropLocation.trim().length < 2) {
    errors.dropLocation = "Please specify a destination or drop location.";
  }

  if (!data.travelDate) {
    errors.travelDate = "Please select a travel date.";
  }

  if (!data.pickupTime) {
    errors.pickupTime = "Please specify expected time / preference.";
  }

  if (!data.passengers || data.passengers < 1) {
    errors.passengers = "Passenger count must be at least 1.";
  } else if (data.passengers > 50) {
    errors.passengers = "For over 50 travellers, please call us directly for bus arrangements.";
  }

  if (data.tripType === 'outstation_roundtrip' && !data.returnDate) {
    errors.returnDate = "Please provide expected return date for round trips.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
