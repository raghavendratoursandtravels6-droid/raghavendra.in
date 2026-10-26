import React, { useState } from 'react';
import {
  Calculator,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Car,
  Users,
  Briefcase,
  Info,
  Sparkles,
  Plane,
  RotateCcw,
  Sliders,
} from 'lucide-react';
import {
  COMMON_POPULAR_ROUTES,
  CommonRouteOption,
  calculateCategoryFare,
  getComparativeFareEstimates,
  generateFareInquiryWhatsAppUrl,
  FareCategoryQuote,
} from '../utils/fareEstimator';
import { CarCategory, TripType, BUSINESS_CONFIG, generateCallUrl } from '../utils/bookingUtils';

interface FareEstimatorProps {
  onSelectEstimate?: (
    tripType: TripType,
    carCategory: CarCategory,
    destination: string
  ) => void;
}

export const FareEstimator: React.FC<FareEstimatorProps> = ({ onSelectEstimate }) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>('abbigere-airport');
  const [distanceKm, setDistanceKm] = useState<number>(34);
  const [tripType, setTripType] = useState<TripType>('airport_drop');
  const [routeLabel, setRouteLabel] = useState<string>('Abbigere to Kempegowda Airport (BLR)');

  const handleSelectRoute = (route: CommonRouteOption) => {
    setSelectedRouteId(route.id);
    setDistanceKm(route.distanceKm);
    setTripType(route.recommendedTripType);
    setRouteLabel(route.label);
  };

  const handleDistanceChange = (newDistance: number) => {
    setSelectedRouteId('custom');
    setDistanceKm(Math.max(10, Math.min(600, newDistance)));
    setRouteLabel(`Custom Trip (${newDistance} km)`);
  };

  const handleTripTypeChange = (newType: TripType) => {
    setTripType(newType);
  };

  const quotes: FareCategoryQuote[] = getComparativeFareEstimates(distanceKm, tripType);

  const handleBookQuote = (category: CarCategory) => {
    if (onSelectEstimate) {
      onSelectEstimate(tripType, category, routeLabel);
    }
  };

  return (
    <section
      id="fare-estimator"
      className="scroll-mt-36 sm:scroll-mt-28 py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 text-slate-900 relative"
      aria-label="Fare Estimator and Cost Calculator"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>Instant Fare Estimator • Transparent Rates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0c1e38] tracking-tight leading-tight">
            Transparent Pricing with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
              Zero Hidden Surges
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose from common Bangalore airport or outstation corridors, or adjust the distance to get a fair, upfront price estimate for your upcoming trip.
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 mb-12">
          
          {/* Top Step 1: Common Popular Routes Quick Buttons */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-500" />
                <span>1. Choose a Popular Route (or pick custom distance below)</span>
              </label>
              <span className="text-xs text-slate-500 hidden sm:inline">
                Click any route for automatic distance &amp; trip type
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {COMMON_POPULAR_ROUTES.map((route) => {
                const isSelected = selectedRouteId === route.id;
                return (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => handleSelectRoute(route)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#0c1e38] text-white border-[#0c1e38] shadow-md scale-[1.02]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{route.label}</span>
                    <span className="ml-1.5 text-[11px] font-medium text-amber-500">
                      ({route.distanceKm} km)
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Distance Slider + Trip Type Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
            {/* Left: Distance Controller */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-600" />
                  <span>Trip Distance:</span>
                  <span className="text-base sm:text-lg font-black text-[#0c1e38] bg-white px-2.5 py-0.5 rounded-lg border border-slate-300">
                    {distanceKm} km
                  </span>
                </label>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleDistanceChange(Math.max(10, distanceKm - 10))}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    -10 km
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDistanceChange(Math.min(600, distanceKm + 10))}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    +10 km
                  </button>
                </div>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={distanceKm}
                onChange={(e) => handleDistanceChange(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                aria-label="Adjust trip distance in kilometers"
              />

              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>10 km (City/Local)</span>
                <span>150 km (Mysore)</span>
                <span>260 km (Coorg/Tirupati)</span>
                <span>500 km (Long Highway)</span>
              </div>
            </div>

            {/* Right: Trip Type Selector */}
            <div className="lg:col-span-5 space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-800 block">
                Trip Category:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { type: 'airport_drop' as TripType, label: 'Airport Transfer' },
                  { type: 'outstation_roundtrip' as TripType, label: 'Outstation Round Trip' },
                  { type: 'outstation_oneway' as TripType, label: 'One-Way Drop' },
                  { type: 'local' as TripType, label: 'Local (8hr / 80km)' },
                ].map((item) => {
                  const isActive = tripType === item.type;
                  return (
                    <button
                      key={item.type}
                      type="button"
                      onClick={() => handleTripTypeChange(item.type)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold text-left transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 3: Comparative Quotes (Sedan vs Ertiga vs Innova Crysta) */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0c1e38] flex items-center gap-2">
                <Car className="w-5 h-5 text-amber-500" />
                <span>Estimated Price Comparison ({routeLabel})</span>
              </h3>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-bold border border-emerald-200">
                Guaranteed No Surge
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quotes.map((quote) => {
                const isPopular = quote.category === 'suv';
                const isPremium = quote.category === 'premium_suv';
                const fareRangeStr = `₹${quote.minFare.toLocaleString('en-IN')} – ₹${quote.maxFare.toLocaleString('en-IN')}`;

                return (
                  <div
                    key={quote.category}
                    className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between relative ${
                      isPopular
                        ? 'bg-gradient-to-b from-amber-50/50 to-white border-amber-300 shadow-md ring-1 ring-amber-300'
                        : isPremium
                        ? 'bg-gradient-to-b from-slate-50 to-white border-slate-300 shadow-sm'
                        : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                    }`}
                  >
                    {isPopular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-sm">
                        Popular Family Choice
                      </span>
                    )}

                    {isPremium && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0c1e38] text-amber-400 text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-sm">
                        Executive Long Distance
                      </span>
                    )}

                    <div>
                      {/* Car Title */}
                      <h4 className="text-lg font-extrabold text-[#0c1e38] font-heading">
                        {quote.carName}
                      </h4>
                      <p className="text-xs text-slate-500 mb-3">{quote.idealFor}</p>

                      {/* Estimated Fare Block */}
                      <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 mb-4 text-center">
                        <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                          Estimated Cost Range
                        </span>
                        <div className="text-2xl sm:text-3xl font-black text-[#0c1e38] font-heading mt-0.5">
                          {fareRangeStr}
                        </div>
                        <span className="text-[11px] text-slate-500 mt-0.5 block">
                          Base rate: approx ₹{quote.ratePerKm}/km
                        </span>
                      </div>

                      {/* Capacity & Luggage */}
                      <div className="space-y-2 text-xs text-slate-600 mb-6 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-500" />
                          <span>Capacity: <strong>{quote.seating}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-slate-500" />
                          <span>Luggage: <strong>{quote.luggage}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>Sanitized vehicle with verified chauffeur</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-2">
                      <button
                        type="button"
                        onClick={() => handleBookQuote(quote.category)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                      >
                        <span>Book at this Estimate</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={generateFareInquiryWhatsAppUrl({
                          routeLabel,
                          distanceKm,
                          tripType,
                          carCategory: quote.category,
                          estimatedFareRange: fareRangeStr,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Confirm via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transparency Guarantee Callout Box */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span>What is included and what is billed at actuals?</span>
              </div>
              <p>
                • <strong>Included:</strong> Clean sanitized cab, dedicated driver, fuel, and base driver allowance (batta).
              </p>
              <p>
                • <strong>At Actuals:</strong> Fastag toll plaza charges, airport parking slips, and inter-state permits. Original receipts shared.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
              <a
                href={generateCallUrl()}
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0c1e38] hover:bg-slate-800 text-white text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Sridhar: 8088372049</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
