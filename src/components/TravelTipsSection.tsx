import React from 'react';
import {
  Plane,
  Users,
  Clock,
  Luggage,
  ShieldAlert,
  Compass,
  Car,
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { generateDefaultWhatsAppUrl } from '../utils/bookingUtils';

interface TravelTipsSectionProps {
  onSelectBookingTip?: (tripType: string, carCategory: string) => void;
}

export const TravelTipsSection: React.FC<TravelTipsSectionProps> = ({ onSelectBookingTip }) => {
  return (
    <section id="travel-tips" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>Smart Travel Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-heading tracking-tight">
            Travel &amp; Cab Booking Tips for Bangalore
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Essential advice on timing your airport taxi, choosing the ideal vehicle for your group size, and beating Bangalore traffic.
          </p>
        </div>

        {/* 2 Major Columns: Airport Travel & Car Selection Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Airport Travel Tips */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0c1e38] font-heading">
                  Bangalore Airport Taxi Booking &amp; Timing Advice
                </h3>
                <p className="text-xs text-slate-500">
                  Kempegowda International Airport (BLR T1 &amp; T2)
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Book Early for Dawn &amp; Late-Night Flights
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      For departures between 2:00 AM and 6:00 AM, reserve your cab at least 6–12 hours ahead so we can confirm driver dispatch without last-minute stress.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Bangalore Traffic Buffer Recommendations
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      From South or East Bangalore (Electronic City, Whitefield, Koramangala), allow at least <strong>3.5 to 4 hours</strong> before domestic flight departures. From North Bangalore (Abbigere, Yelahanka, Hebbal), <strong>2 to 2.5 hours</strong> is recommended.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Know Your Terminal (T1 vs. T2)
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      BLR Terminal 2 operates Air India, Vistara, and all International flights. Indigo, Akasa, and SpiceJet fly from Terminal 1. Mention your terminal so your driver takes the optimal ramp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Arrival Pickup Tracking
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Provide your flight number when requesting an airport pickup. Our driver monitors your actual landing time so you have zero waiting after collecting luggage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Need an airport transfer?</span>
              <button
                type="button"
                onClick={() => onSelectBookingTip && onSelectBookingTip('airport_drop', 'sedan')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 group cursor-pointer"
              >
                <span>Book Bangalore Airport Taxi</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Vehicle Selection Guide */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0c1e38] font-heading">
                  Choosing the Right Car by Group Size
                </h3>
                <p className="text-xs text-slate-500">
                  Comfort, Seating &amp; Luggage Capacity
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              
              {/* Sedan */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-slate-700" />
                    <h4 className="font-bold text-slate-900">
                      1 to 4 Passengers • Sedan (Dzire / Etios)
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded-sm border border-slate-200">
                    City &amp; Quick Trips
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Best for couples, small families, or solo airport commuters. Accommodates up to 2 standard trolley suitcases plus hand baggage comfortably in the boot.
                </p>
              </div>

              {/* Ertiga SUV */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-emerald-700" />
                    <h4 className="font-bold text-slate-900">
                      4 to 6 Passengers • Compact SUV (Ertiga)
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-sm">
                    Family Choice
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Ideal for 4 adults with 3-4 bags, or 5-6 adults with light luggage. Offers flexible rear seating and air-conditioning vents for all rows.
                </p>
              </div>

              {/* Innova Crysta */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-700" />
                    <h4 className="font-bold text-slate-900">
                      6 to 7 Passengers • Innova &amp; Innova Crysta
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-sm">
                    Premium Highway
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  The undisputed champion for long-distance outstation journeys (Mysore, Coorg, Ooty, Tirupati). Plush captain seats, supreme road stability, and huge cargo room.
                </p>
              </div>

              {/* Tempo Traveller */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-700" />
                    <h4 className="font-bold text-slate-900">
                      8+ Passengers • Tempo Traveller / Mini Bus
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-100/60 px-2 py-0.5 rounded-sm">
                    Group Tours
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Best for extended family outings, temple pilgrimage groups, and corporate team events. Push-back reclining seats with top carrier for heavy luggage.
                </p>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Need help picking?</span>
              <button
                type="button"
                onClick={() => onSelectBookingTip && onSelectBookingTip('outstation_roundtrip', 'premium_suv')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 group cursor-pointer"
              >
                <span>Select Innova Crysta</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Highway & Toll Guidelines Bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Luggage className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0c1e38]">
                Luggage Capacity Reminder
              </h4>
              <p className="text-xs text-slate-600">
                Sedans accommodate 2 medium suitcases; for 3 or more large check-in bags, we strongly recommend booking an Ertiga or Innova Crysta for passenger comfort.
              </p>
            </div>
          </div>

          <a
            href={generateDefaultWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold text-[#0c1e38] bg-amber-500 hover:bg-amber-400 px-4 py-2.5 rounded-xl transition-colors"
          >
            Ask Driver on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
