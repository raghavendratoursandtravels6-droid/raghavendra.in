import React from 'react';
import {
  MapPin,
  Plane,
  Compass,
  Car,
  Users2,
  Repeat,
  CheckCircle,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { generateDefaultWhatsAppUrl } from '../utils/bookingUtils';

interface ServicesSectionProps {
  onSelectService: (serviceType: string, carCategory?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'local',
      title: 'Cab Service & Taxi Booking in Bangalore',
      category: 'Hourly & City Travel',
      badge: 'Popular for Daily Travel',
      image: '/src/assets/images/sedan_dzire_taxi_1792598137083.jpg',
      description:
        'Hassle-free point-to-point and hourly cab bookings across Bangalore. Ideal for office commutes, hospital visits, railway station transfers, shopping, or full-day city travel.',
      features: [
        'Hourly rental packages (4hr/40km, 8hr/80km)',
        'City drop & pickup across all tech parks and hubs',
        'Courteous drivers well-versed with Bangalore routes',
        'Clean, sanitized, and air-conditioned cars'
      ],
      actionLabel: 'Book Local Taxi',
      tripType: 'local',
      car: 'sedan',
      icon: MapPin,
      iconBg: 'bg-amber-500/15 text-amber-600',
    },
    {
      id: 'airport',
      title: 'Bangalore Airport Taxi (BLR Kempegowda Airport)',
      category: '24x7 Airport Transfers',
      badge: 'On-Time Guarantee',
      image: '/src/assets/images/bangalore_airport_taxi_1792598135912.jpg',
      description:
        'Punctual airport taxi service to and from Kempegowda International Airport (BLR). Early morning flights or late-night arrivals — our drivers arrive promptly to ensure stress-free transit.',
      features: [
        'Flight arrival monitoring & buffer time assistance',
        'Direct terminal pickup & drop (T1 and T2)',
        'Spacious boots for international & domestic luggage',
        'Toll & parking clarity with transparent billing'
      ],
      actionLabel: 'Book Airport Cab',
      tripType: 'airport_drop',
      car: 'sedan',
      icon: Plane,
      iconBg: 'bg-blue-500/15 text-blue-600',
    },
    {
      id: 'outstation',
      title: 'Outstation Cab Booking from Bangalore',
      category: 'Intercity Trips',
      badge: 'Flexible Packages',
      image: '/src/assets/images/outstation_tour_cab_1792598137700.jpg',
      description:
        'Comfortable intercity cab travel from Bangalore to top South Indian destinations including Mysore, Coorg, Ooty, Chikmagalur, Tirupati, Wayanad, and beyond.',
      features: [
        'Both One-Way drops & Round-Trip packages available',
        'Experienced highway drivers with safety-first mindset',
        'Clear daily kilometer minimums & driver allowances',
        'Custom halts for dining and scenic viewpoints'
      ],
      actionLabel: 'Plan Outstation Trip',
      tripType: 'outstation_roundtrip',
      car: 'suv',
      icon: Compass,
      iconBg: 'bg-emerald-500/15 text-emerald-600',
    },
    {
      id: 'innova',
      title: 'Innova Crysta Booking Bangalore & SUV Rentals',
      category: 'Vehicle Options',
      badge: 'Subject to Availability',
      image: '/src/assets/images/innova_crysta_cab_1792598134839.jpg',
      description:
        'Choose from comfortable Sedans (Dzire, Etios), versatile Compact SUVs (Ertiga), and premium MPVs (Toyota Innova & Innova Crysta). Arranged through trusted vehicle owners.',
      features: [
        'Toyota Innova & Innova Crysta for executive comfort',
        'Maruti Ertiga for economical family groups (6 pax)',
        'Sedans for agile city commuting & solo / couple travel',
        'Strictly maintained vehicles with AC & music system'
      ],
      actionLabel: 'Choose Preferred Vehicle',
      tripType: 'local',
      car: 'premium_suv',
      icon: Car,
      iconBg: 'bg-amber-500/15 text-amber-600',
    },
    {
      id: 'family',
      title: 'Family Trips & Sightseeing Tour Packages',
      category: 'Leisure & Heritage',
      badge: 'Customized Itineraries',
      image: '/src/assets/images/ertiga_suv_taxi_1792598137633.jpg',
      description:
        'Special sightseeing cabs for families, relatives, and tourist groups. Explore Bangalore landmarks (Lalbagh, Bangalore Palace, Bannerghatta) or scenic weekend getaways.',
      features: [
        'Pilgrimage packages (Tirupati, Dharmasthala, Kukke)',
        'Relaxed family getaways with ample luggage space',
        'Child-friendly and senior-citizen friendly pacing',
        'Flexible custom stopovers upon request'
      ],
      actionLabel: 'Enquire for Family Tour',
      tripType: 'outstation_roundtrip',
      car: 'premium_suv',
      icon: Users2,
      iconBg: 'bg-purple-500/15 text-purple-600',
    },
    {
      id: 'oneway_round',
      title: 'One-way Cab Booking & Round-trip Taxi Booking',
      category: 'Smart Travel Solutions',
      badge: 'Cost Effective',
      image: '/src/assets/images/sedan_dzire_taxi_1792598137083.jpg',
      description:
        'Flexible travel options designed around your itinerary. Pay only for one-way drops on popular corridors without paying two-way return fares, or book multi-day round trips.',
      features: [
        'Dedicated one-way rates to major nearby cities',
        'Multi-day round-trip packages with night stay flexibility',
        'Doorstep pickup from any locality in Bangalore',
        'Transparent quote before you start your journey'
      ],
      actionLabel: 'Enquire for One-Way / Round',
      tripType: 'outstation_oneway',
      car: 'sedan',
      icon: Repeat,
      iconBg: 'bg-teal-500/15 text-teal-600',
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Comprehensive Travel Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-heading tracking-tight">
            Our Cab &amp; Taxi Services in Bangalore
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From quick city drops to multi-day outstation tours, Raghavendra Tours &amp; Travels connects you with reliable, independent drivers and verified cars for every requirement.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col group cursor-pointer"
              >
                {/* Card Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={`${service.title} - Raghavendra Tours & Travels Bangalore`}
                    width={800}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category Badge & Animated Floating Icon */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-[#0c1e38]/90 text-amber-300 text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-xs border border-amber-500/20">
                      {service.category}
                    </div>

                    {/* Subtle hover animated icon badge */}
                    <div className={`w-9 h-9 rounded-xl ${service.iconBg} bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md transform transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:shadow-lg`}>
                      <IconComponent className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-sm">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0c1e38] font-heading group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.tripType, service.car)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0c1e38] hover:text-amber-600 transition-colors group/btn cursor-pointer"
                  >
                    <span>{service.actionLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-amber-500" />
                  </button>

                  <a
                    href={generateDefaultWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md hover:bg-emerald-100 transition-colors"
                  >
                    Ask Fare
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Fleet Availability Transparency Notice */}
        <div className="mt-12 bg-amber-50/80 border border-amber-200/80 rounded-xl p-5 text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-amber-700" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-[#0c1e38]">Important note on vehicle assignment: </span>
            Raghavendra Tours &amp; Travels arranges bookings through independent car owners and drivers. All car models (Innova, Innova Crysta, Sedan, and SUV) are assigned strictly subject to availability at the time of your confirmed booking.
          </div>
        </div>

      </div>
    </section>
  );
};
