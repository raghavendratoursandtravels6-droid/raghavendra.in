import React from 'react';
import { MapPin, Navigation, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { generateDefaultWhatsAppUrl } from '../utils/bookingUtils';

interface PopularRoutesProps {
  onSelectRoute: (destination: string) => void;
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ onSelectRoute }) => {
  const routes = [
    {
      destination: 'Kempegowda Int. Airport (BLR)',
      tag: 'Airport Transfer',
      distance: '35 - 45 km',
      duration: '45 - 75 mins',
      highlights: 'Terminal 1 & Terminal 2 direct drop/pickup, toll assist',
      badge: '24x7 Available',
    },
    {
      destination: 'Mysore (Mysuru)',
      tag: 'Heritage & Palace',
      distance: '145 km',
      duration: '2.5 - 3 hours (Expressway)',
      highlights: 'Mysore Palace, Chamundi Hill, Brindavan Gardens',
      badge: 'Top Weekend Trip',
    },
    {
      destination: 'Coorg (Madikeri)',
      tag: 'Coffee Estates & Hills',
      distance: '250 km',
      duration: '5 - 5.5 hours',
      highlights: 'Abbey Falls, Raja Seat, Dubare Elephant Camp, Homestays',
      badge: 'Family Favorite',
    },
    {
      destination: 'Ooty & Coonoor',
      tag: 'Queen of Hill Stations',
      distance: '275 km',
      duration: '6 - 6.5 hours',
      highlights: 'Botanical Gardens, Ooty Lake, Tea gardens, Nilgiri hills',
      badge: 'Scenic Hills',
    },
    {
      destination: 'Chikmagalur',
      tag: 'Mullayanagiri & Peaks',
      distance: '245 km',
      duration: '4.5 - 5 hours',
      highlights: 'Baba Budangiri, Coffee plantations, Hebbe Falls',
      badge: 'Nature & Adventure',
    },
    {
      destination: 'Tirupati Balaji',
      tag: 'Pilgrimage Darshan',
      distance: '250 km',
      duration: '4.5 - 5 hours',
      highlights: 'Tirumala Temple, Alipiri, experienced hill-road drivers',
      badge: 'Temple Special',
    },
    {
      destination: 'Nandi Hills',
      tag: 'Early Morning Sunrise',
      distance: '60 km',
      duration: '1.5 hours',
      highlights: 'Sunrise viewpoint, Tipu Drop, Bhoga Nandeeshwara temple',
      badge: 'Half-Day Trip',
    },
    {
      destination: 'Wayanad (Kerala)',
      tag: 'Waterfalls & Wildlife',
      distance: '280 km',
      duration: '6 - 6.5 hours',
      highlights: 'Banasura Sagar Dam, Chembra Peak, Edakkal Caves',
      badge: 'Outstation Tour',
    },
  ];

  return (
    <section id="routes" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Popular Travel Corridors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-heading tracking-tight">
            Outstation Cab Booking from Bangalore &amp; Popular Routes
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Planning a weekend road trip, family pilgrimage, or airport run? Here are the most frequently requested routes from Bangalore with estimated distance and travel time.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {routes.map((route) => (
            <div
              key={route.destination}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {route.tag}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {route.badge}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0c1e38] font-heading mb-2">
                  Bangalore ➔ {route.destination}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-lg">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Approx Dist</span>
                    <span className="font-bold text-slate-800">{route.distance}</span>
                  </div>
                  <div className="border-l border-slate-200 pl-4">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Duration</span>
                    <span className="font-bold text-slate-800">{route.duration}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {route.highlights}
                </p>
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectRoute(route.destination)}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group cursor-pointer"
                >
                  <span>Select Route</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/918088372049?text=${encodeURIComponent(`Hello Raghavendra Tours & Travels, I need a cab from Bangalore to ${route.destination}. Please share the fare.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-emerald-700 hover:underline"
                >
                  WhatsApp Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-8 bg-slate-100 rounded-xl p-4 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>How are outstation fares calculated?</strong> Outstation trips generally have a 250 km or 300 km daily minimum allowance, plus driver batta (night allowance if applicable). Tolls, state entry taxes, and parking fees are charged at actuals with receipts.
            </span>
          </div>
          <a
            href={generateDefaultWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold text-emerald-700 bg-white px-3 py-1.5 rounded-lg border border-slate-300 shadow-2xs hover:bg-emerald-50"
          >
            Get Custom Route Quote
          </a>
        </div>

      </div>
    </section>
  );
};
