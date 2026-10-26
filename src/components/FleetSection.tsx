import React from 'react';
import {
  Users,
  Briefcase,
  Wind,
  ShieldCheck,
  Check,
  Info,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CarCategory } from '../utils/bookingUtils';

interface FleetSectionProps {
  onSelectCar: (carCategory: CarCategory) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectCar }) => {
  const fleet = [
    {
      category: 'sedan' as CarCategory,
      name: 'Sedan (Dzire / Etios)',
      tagline: 'Economical & Comfortable',
      seating: '4 Passengers + 1 Driver',
      luggage: '2 Medium Bags + Hand Luggage',
      ac: 'Full Air Conditioning',
      idealFor: 'City travel, Airport drop, Solo / Couple trips',
      features: ['High Fuel Efficiency', 'Smooth city maneuvering', 'Ample boot space', 'Clean, comfortable cabin'],
      image: '/src/assets/images/sedan_dzire_taxi_1792598137083.jpg',
      badge: 'Best for 1-4 People',
    },
    {
      category: 'suv' as CarCategory,
      name: 'SUV (Maruti Ertiga)',
      tagline: 'Versatile Family Cruiser',
      seating: '6 Passengers + 1 Driver',
      luggage: '2-3 Medium Bags',
      ac: 'Dual AC Vents',
      idealFor: 'Family airport runs, Weekend getaways, Outstation trips',
      features: ['Flexible 3-row seating', 'Generous legroom', 'Comfortable ride quality', 'Economical group rate'],
      image: '/src/assets/images/ertiga_suv_taxi_1792598137633.jpg',
      badge: 'Popular Family Choice',
    },
    {
      category: 'premium_suv' as CarCategory,
      name: 'Premium MPV (Innova / Innova Crysta)',
      tagline: 'Executive Luxury & Long-Distance Comfort',
      seating: '6 or 7 Passengers + 1 Driver',
      luggage: '4+ Large Bags',
      ac: 'Climate Control / Dual AC',
      idealFor: 'Long outstation trips, Corporate travel, Hills & VIP tours',
      features: ['Plush captain seats (7-seater)', 'Superior suspension & safety', 'Unmatched highway comfort', 'Huge luggage capacity'],
      image: '/src/assets/images/innova_crysta_cab_1792598134839.jpg',
      badge: 'Most Requested for Outstation',
    },
    {
      category: 'tempo' as CarCategory,
      name: 'Tempo Traveller & Mini Coach',
      tagline: 'Group & Pilgrimage Excursions',
      seating: '9 to 16 Passengers',
      luggage: 'Dedicated Heavy Luggage Carrier',
      ac: 'High Capacity AC',
      idealFor: 'Extended family tours, Wedding guests, Temple circuits',
      features: ['Push-back reclining seats', 'Individual reading lamps', 'Experienced hill-station drivers', 'Spacious aisle'],
      image: '/src/assets/images/outstation_tour_cab_1792598137700.jpg',
      badge: 'Large Groups',
    },
  ];

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Vehicle Options</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-heading tracking-tight">
            Innova, Innova Crysta, Sedan &amp; SUV Bookings
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every journey deserves the right vehicle. We coordinate with independent cab owners to arrange clean, well-serviced vehicles tailored to your passenger count and comfort preferences.
          </p>

          {/* Transparent Notice */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Vehicles are subject to availability through independent driver partners.</span>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((car) => (
            <div
              key={car.name}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={car.image}
                    alt={`${car.name} - Cab Service in Bangalore - Raghavendra Tours & Travels`}
                    width={700}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-95"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#0c1e38]/90 text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded-sm backdrop-blur-xs">
                    {car.badge}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-[#0c1e38] font-heading leading-tight">
                    {car.name}
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold mt-0.5">
                    {car.tagline}
                  </p>

                  {/* Specs */}
                  <div className="mt-4 space-y-2 text-xs text-slate-700 border-t border-b border-slate-200/70 py-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>{car.seating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                      <span>{car.luggage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-3.5 h-3.5 text-slate-500" />
                      <span>{car.ac}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    {car.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectCar(car.category)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-amber-500 hover:text-slate-950 border border-slate-300 hover:border-amber-500 text-[#0c1e38] font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Enquire For This Car</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
