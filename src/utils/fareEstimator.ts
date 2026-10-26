import { BUSINESS_CONFIG, CarCategory, TripType } from './bookingUtils';

export interface CommonRouteOption {
  id: string;
  label: string;
  from: string;
  to: string;
  distanceKm: number;
  recommendedTripType: TripType;
  popularFor: string;
}

export const COMMON_POPULAR_ROUTES: CommonRouteOption[] = [
  {
    id: 'abbigere-airport',
    label: 'Abbigere to Kempegowda Airport (BLR)',
    from: 'Abbigere, Bengaluru',
    to: 'Kempegowda International Airport (BLR)',
    distanceKm: 34,
    recommendedTripType: 'airport_drop',
    popularFor: '24x7 Airport Transfer',
  },
  {
    id: 'hebbal-airport',
    label: 'Hebbal to Kempegowda Airport (BLR)',
    from: 'Hebbal, Bengaluru',
    to: 'Kempegowda International Airport (BLR)',
    distanceKm: 30,
    recommendedTripType: 'airport_drop',
    popularFor: 'Airport Drop / Pickup',
  },
  {
    id: 'yeshwanthpur-airport',
    label: 'Yeshwanthpur to Kempegowda Airport',
    from: 'Yeshwanthpur, Bengaluru',
    to: 'Kempegowda International Airport (BLR)',
    distanceKm: 33,
    recommendedTripType: 'airport_drop',
    popularFor: 'Railway & Metro Hub Transfer',
  },
  {
    id: 'whitefield-airport',
    label: 'Whitefield to Kempegowda Airport',
    from: 'Whitefield / ITPL, Bengaluru',
    to: 'Kempegowda International Airport (BLR)',
    distanceKm: 42,
    recommendedTripType: 'airport_drop',
    popularFor: 'Tech Park Airport Corridor',
  },
  {
    id: 'electronic-city-airport',
    label: 'Electronic City to Kempegowda Airport',
    from: 'Electronic City, Bengaluru',
    to: 'Kempegowda International Airport (BLR)',
    distanceKm: 54,
    recommendedTripType: 'airport_drop',
    popularFor: 'South Bangalore Airport Cab',
  },
  {
    id: 'bangalore-mysore',
    label: 'Bangalore to Mysore (Expressway)',
    from: 'Bengaluru',
    to: 'Mysore (Heritage City)',
    distanceKm: 145,
    recommendedTripType: 'outstation_roundtrip',
    popularFor: 'Sightseeing & Palace Tours',
  },
  {
    id: 'bangalore-coorg',
    label: 'Bangalore to Coorg (Madikeri)',
    from: 'Bengaluru',
    to: 'Coorg (Madikeri)',
    distanceKm: 260,
    recommendedTripType: 'outstation_roundtrip',
    popularFor: 'Coffee Plantation Holiday',
  },
  {
    id: 'bangalore-tirupati',
    label: 'Bangalore to Tirupati Balaji',
    from: 'Bengaluru',
    to: 'Tirupati (Temple Circuit)',
    distanceKm: 250,
    recommendedTripType: 'outstation_roundtrip',
    popularFor: 'Family Pilgrimage',
  },
  {
    id: 'bangalore-ooty',
    label: 'Bangalore to Ooty Hill Station',
    from: 'Bengaluru',
    to: 'Ooty (Nilgiris)',
    distanceKm: 275,
    recommendedTripType: 'outstation_roundtrip',
    popularFor: 'Hill Station Getaway',
  },
  {
    id: 'bangalore-nandi-hills',
    label: 'Bangalore to Nandi Hills (Sunrise Trip)',
    from: 'Bengaluru',
    to: 'Nandi Hills',
    distanceKm: 65,
    recommendedTripType: 'outstation_roundtrip',
    popularFor: 'Early Morning Viewpoint',
  },
];

export interface FareCalculationResult {
  minFare: number;
  maxFare: number;
  effectiveKm: number;
  ratePerKm: number;
  driverBatta: number;
  billingBreakdown: string;
  isFlatAirport: boolean;
  notes: string;
}

export interface FareCategoryQuote {
  category: CarCategory;
  carName: string;
  minFare: number;
  maxFare: number;
  ratePerKm: number;
  seating: string;
  luggage: string;
  idealFor: string;
}

/**
 * Calculates fare range based on distance, trip type, and vehicle category
 */
export function calculateCategoryFare(
  distanceKm: number,
  tripType: TripType,
  category: CarCategory
): FareCalculationResult {
  const safeKm = Math.max(10, Math.min(1500, Math.round(distanceKm)));

  // Airport transfer flat ranges based on standard Bangalore distance tiers
  if (tripType === 'airport_pickup' || tripType === 'airport_drop') {
    let minFare = 1100;
    let maxFare = 1350;
    let ratePerKm = 14;

    if (category === 'sedan') {
      if (safeKm > 45) {
        minFare = 1400;
        maxFare = 1650;
      } else if (safeKm > 35) {
        minFare = 1250;
        maxFare = 1450;
      } else {
        minFare = 1100;
        maxFare = 1300;
      }
      ratePerKm = 14;
    } else if (category === 'suv') {
      if (safeKm > 45) {
        minFare = 1900;
        maxFare = 2200;
      } else if (safeKm > 35) {
        minFare = 1700;
        maxFare = 1950;
      } else {
        minFare = 1500;
        maxFare = 1750;
      }
      ratePerKm = 18;
    } else if (category === 'premium_suv') {
      if (safeKm > 45) {
        minFare = 2600;
        maxFare = 3000;
      } else if (safeKm > 35) {
        minFare = 2300;
        maxFare = 2700;
      } else {
        minFare = 2100;
        maxFare = 2450;
      }
      ratePerKm = 22;
    } else {
      // Any or tempo
      minFare = 1300;
      maxFare = 1600;
      ratePerKm = 16;
    }

    return {
      minFare,
      maxFare,
      effectiveKm: safeKm,
      ratePerKm,
      driverBatta: 0,
      billingBreakdown: `Airport Point-to-Point Package (${safeKm} km approx)`,
      isFlatAirport: true,
      notes: 'Toll plaza charges & airport parking at actuals. Zero surge pricing.',
    };
  }

  // Local Bangalore 8hr / 80km package
  if (tripType === 'local') {
    let minFare = 1800;
    let maxFare = 2000;
    let ratePerKm = 13;

    if (category === 'sedan') {
      minFare = 1800;
      maxFare = 2050;
      ratePerKm = 13;
    } else if (category === 'suv') {
      minFare = 2400;
      maxFare = 2750;
      ratePerKm = 17;
    } else if (category === 'premium_suv') {
      minFare = 3300;
      maxFare = 3700;
      ratePerKm = 21;
    }

    return {
      minFare,
      maxFare,
      effectiveKm: Math.max(80, safeKm),
      ratePerKm,
      driverBatta: 0,
      billingBreakdown: `8 Hours / 80 Km Local Bangalore Package`,
      isFlatAirport: false,
      notes: `Extra distance @ ₹${ratePerKm}/km, extra hours @ ₹150/hr after 8 hrs.`,
    };
  }

  // Outstation: One-Way or Round Trip
  // Round trips calculate for 2-way distance with a daily minimum of 250km (or 300km for Crysta)
  const isRoundTrip = tripType === 'outstation_roundtrip';
  const totalKm = isRoundTrip ? safeKm * 2 : safeKm;

  let minBillingKm = isRoundTrip ? 250 : 150;
  let ratePerKm = 13.5;
  let driverBatta = 400;

  if (category === 'sedan') {
    ratePerKm = 13.5;
    driverBatta = 400;
    minBillingKm = isRoundTrip ? 250 : 150;
  } else if (category === 'suv') {
    ratePerKm = 17.5;
    driverBatta = 450;
    minBillingKm = isRoundTrip ? 250 : 180;
  } else if (category === 'premium_suv') {
    ratePerKm = 21.0;
    driverBatta = 500;
    minBillingKm = isRoundTrip ? 300 : 200;
  }

  const effectiveKm = Math.max(totalKm, minBillingKm);
  const baseCalc = Math.round(effectiveKm * ratePerKm);
  const minFare = baseCalc + driverBatta;
  const maxFare = Math.round(minFare * 1.12);

  return {
    minFare,
    maxFare,
    effectiveKm,
    ratePerKm,
    driverBatta,
    billingBreakdown: `${effectiveKm} km @ ₹${ratePerKm}/km + ₹${driverBatta} driver allowance`,
    isFlatAirport: false,
    notes: 'State permit, highway tolls, and parking at actuals. Transparent receipts provided.',
  };
}

/**
 * Returns quotes for all 3 primary car categories for side-by-side comparison
 */
export function getComparativeFareEstimates(
  distanceKm: number,
  tripType: TripType
): FareCategoryQuote[] {
  const categories: Array<{ category: CarCategory; carName: string; seating: string; luggage: string; idealFor: string }> = [
    {
      category: 'sedan',
      carName: 'Sedan (Dzire / Etios)',
      seating: '4 Passengers + Driver',
      luggage: '2 Medium Bags',
      idealFor: 'Couples, Solo, Budget City & Airport',
    },
    {
      category: 'suv',
      carName: 'SUV (Maruti Ertiga)',
      seating: '6 Passengers + Driver',
      luggage: '3 Bags',
      idealFor: 'Small Family, Extra Legroom & Luggage',
    },
    {
      category: 'premium_suv',
      carName: 'Premium MPV (Innova Crysta)',
      seating: '7 Passengers + Driver',
      luggage: '4+ Bags',
      idealFor: 'VIP, Senior Citizens, Long Highway Rides',
    },
  ];

  return categories.map((cat) => {
    const calc = calculateCategoryFare(distanceKm, tripType, cat.category);
    return {
      category: cat.category,
      carName: cat.carName,
      minFare: calc.minFare,
      maxFare: calc.maxFare,
      ratePerKm: calc.ratePerKm,
      seating: cat.seating,
      luggage: cat.luggage,
      idealFor: cat.idealFor,
    };
  });
}

/**
 * Generates WhatsApp URL prefilled with fare inquiry details
 */
export function generateFareInquiryWhatsAppUrl(params: {
  routeLabel?: string;
  distanceKm: number;
  tripType: TripType;
  carCategory: CarCategory;
  estimatedFareRange: string;
}): string {
  const routeText = params.routeLabel ? ` for *${params.routeLabel}*` : '';
  const message =
    `Hello Sridhar Sir, I used your Fare Estimator on raghavendratravels.in${routeText}:\n` +
    `• Distance: ~${params.distanceKm} km\n` +
    `• Trip Type: ${params.tripType}\n` +
    `• Vehicle: ${params.carCategory}\n` +
    `• Estimated Range: ${params.estimatedFareRange}\n\n` +
    `Please share the final confirmed quote and car availability.`;

  return `https://wa.me/${BUSINESS_CONFIG.phoneIntl}?text=${encodeURIComponent(message)}`;
}
