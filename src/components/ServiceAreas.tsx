import React from 'react';
import { MapPin, Check, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/bookingUtils';

export const ServiceAreas: React.FC = () => {
  const regions = [
    {
      region: 'North Bangalore (Primary Hub)',
      highlight: true,
      areas: [
        'Abbigere (Our Base)',
        'Jalahalli & Jalahalli Cross',
        'Yelahanka & Yelahanka New Town',
        'Hebbal & Hebbal Flyover',
        'Yeshwanthpur & Railway Station',
        'Peenya Industrial Area',
        'Vidyaranyapura',
        'Sahakarnagar & Kodigehalli',
        'Chikkabanavara & Hesaraghatta',
        'Devanahalli & Airport Road Corridor',
      ],
    },
    {
      region: 'Kempegowda Airport Corridor',
      highlight: false,
      areas: [
        'Kempegowda International Airport (Terminal 1 & 2)',
        'Trumpet Flyover & Bellary Road (NH 44)',
        'Doddaballapur Cross',
        'Bagalur & KIADB Aerospace Park',
        'Thanisandra & Manyata Tech Park',
        'Hennur & Nagawara',
      ],
    },
    {
      region: 'Central & West Bangalore',
      highlight: false,
      areas: [
        'Malleshwaram & Rajajinagar',
        'Majestic (KSR Bengaluru City Station)',
        'Shanthi Nagar & Shivajinagar',
        'MG Road & Brigade Road',
        'Basaveshwaranagar',
        'Vijayanagar & Chandra Layout',
        'Nagarbhavi & Kengeri',
      ],
    },
    {
      region: 'East & South Bangalore',
      highlight: false,
      areas: [
        'Whitefield & ITPL',
        'Marathahalli & Outer Ring Road (ORR)',
        'Indiranagar & Domlur',
        'Koramangala & HSR Layout',
        'Electronic City (Phase 1 & 2)',
        'Jayanagar, JP Nagar & BTM Layout',
        'Bannerghatta Road & Kanakapura Road',
      ],
    },
  ];

  return (
    <section id="areas" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>Bangalore City &amp; Suburban Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-heading tracking-tight">
            Our Cab Service Areas in Bangalore
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Based in Abbigere, we coordinate doorstep cab pickups and drop-offs across Greater Bangalore and direct airport transfers along the NH44 airport corridor.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((reg) => (
            <div
              key={reg.region}
              className={`rounded-2xl p-6 border transition-all ${
                reg.highlight
                  ? 'bg-white border-amber-400 shadow-md ring-2 ring-amber-400/20'
                  : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-extrabold text-[#0c1e38] font-heading">
                  {reg.region}
                </h3>
                {reg.highlight && (
                  <span className="text-[10px] font-bold uppercase bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full">
                    Hub
                  </span>
                )}
              </div>

              <ul className="space-y-2">
                {reg.areas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${reg.highlight ? 'text-amber-600' : 'text-emerald-600'}`} />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map Link CTA Banner */}
        <div className="mt-10 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0c1e38]">
                Find Raghavendra Tours &amp; Travels on Google Maps
              </p>
              <p className="text-xs text-slate-500">
                Abbigere, Bengaluru – 560090, Karnataka, India
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0c1e38] hover:bg-[#1a3863] text-white text-xs font-bold transition-colors"
          >
            <span>Open Location in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
