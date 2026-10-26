import React from 'react';
import {
  Train,
  Plane,
  Bus,
  Hotel,
  Palmtree,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  PhoneCall
} from 'lucide-react';
import { TripType, generateCallUrl, generateDefaultWhatsAppUrl } from '../utils/bookingUtils';

interface TicketingAssistanceSectionProps {
  onSelectService: (serviceType: TripType, destination?: string) => void;
}

export const TicketingAssistanceSection: React.FC<TicketingAssistanceSectionProps> = ({
  onSelectService
}) => {
  const travelServices = [
    {
      id: 'train',
      title: 'Train Ticket Booking Assistance Bangalore',
      category: 'IRCTC & Railway Travel',
      badge: 'Tatkal & General Quota',
      icon: Train,
      iconColor: 'text-indigo-600 bg-indigo-50',
      tripType: 'train_ticket' as TripType,
      description:
        'Reliable assistance for Indian Railways (IRCTC) train journeys originating from Bangalore (KSR Bengaluru Majestic, Yeshwanthpur, Bangalore Cantonment, SMVT Baiyappanahalli).',
      highlights: [
        'Tatkal & General quota booking guidance',
        'Waitlist confirmation probability & alternate train routing',
        'Sleeper, 3AC, 2AC, 1AC, and Vande Bharat Express reservations',
        'Senior citizen and family berth preference assistance',
      ],
      popularTrains: 'KSR Bengaluru to Chennai, Hyderabad, Delhi, Mumbai, Tirupati, Belagavi, Hubli, Mangaluru.',
    },
    {
      id: 'flight',
      title: 'Flight Ticket Booking Assistance Bangalore',
      category: 'Domestic & International Air',
      badge: 'Kempegowda Airport BLR',
      icon: Plane,
      iconColor: 'text-sky-600 bg-sky-50',
      tripType: 'flight_ticket' as TripType,
      description:
        'Hassle-free domestic and international flight ticketing assistance connected with timely Kempegowda International Airport (BLR) cab pickup and drop.',
      highlights: [
        'Best fare route comparisons across Indigo, Air India, Akasa, Vistara',
        'Baggage allowance guidance (15kg check-in vs excess)',
        'Early morning departure scheduling with doorstep airport cab sync',
        'Web check-in assistance and terminal navigation (T1 vs T2)',
      ],
      popularTrains: 'BLR to Delhi, Mumbai, Kolkata, Goa, Dubai, Singapore, Bangkok, London.',
    },
    {
      id: 'bus',
      title: 'Bus Ticket Booking Bangalore',
      category: 'KSRTC & Private Sleepers',
      badge: 'Intercity South India',
      icon: Bus,
      iconColor: 'text-emerald-600 bg-emerald-50',
      tripType: 'bus_ticket' as TripType,
      description:
        'Intercity bus ticket reservations for KSRTC Airavat Club Class, Ambaari Dream Class, and verified private luxury AC multi-axle sleepers.',
      highlights: [
        'Doorstep pickup boarding point assistance across Bangalore',
        'Overnight sleeper buses to coastal and hill destinations',
        'Safe, family-friendly operators with verified live tracking',
        'Last-minute weekend travel seat availability checks',
      ],
      popularTrains: 'Bangalore to Mysore, Coorg, Ooty, Chikmagalur, Gokarna, Hyderabad, Chennai, Goa.',
    },
    {
      id: 'hotel',
      title: 'Hotel Booking Assistance',
      category: 'Verified Stays & Resorts',
      badge: 'Family & Corporate',
      icon: Hotel,
      iconColor: 'text-amber-600 bg-amber-50',
      tripType: 'hotel_assistance' as TripType,
      description:
        'Curated hotel and homestay recommendations aligned with your cab itinerary. Safe, sanitized, and family-approved properties at fair rates.',
      highlights: [
        'Handpicked hotels near BLR Kempegowda Airport for transit travellers',
        'Authentic coffee plantation homestays in Coorg and Chikmagalur',
        'Heritage and budget family hotels in Mysore and Ooty',
        'Pilgrim-friendly guest rooms and hotels in Tirupati and Dharmasthala',
      ],
      popularTrains: 'Bangalore transit hotels, Mysore Palace vicinity, Madikeri homestays, Tirumala accommodations.',
    },
    {
      id: 'tours',
      title: 'Tour Packages from Bangalore',
      category: 'Curated Itineraries',
      badge: 'Heritage, Hills & Temples',
      icon: Palmtree,
      iconColor: 'text-teal-600 bg-teal-50',
      tripType: 'tour_package' as TripType,
      description:
        'End-to-end customized tour packages from Bangalore combining comfortable cab travel, hotel stays, and sightseeing pacing.',
      highlights: [
        'Mysore Heritage 1-2 Day Tour (Palace, Chamundi Hill, Brindavan Gardens)',
        'Coorg Nature & Coffee Estate 3-Day Holiday (Abbey Falls, Dubare, Raja Seat)',
        'Ooty & Coonoor Queen of Hills 3-4 Day Retreat (Lake, Botanical Gardens, Tea)',
        'Tirupati Balaji Darshan Pilgrimage Package with hill-climb experienced driver',
      ],
      popularTrains: 'Chikmagalur Peak Trek, Wayanad Wildlife Safari, Hampi UNESCO Heritage Tour.',
    },
  ];

  return (
    <section id="travel-assistance" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Train className="w-3.5 h-3.5 text-blue-700" />
            <span>Complete Travel Coordination</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-heading tracking-tight">
            Train, Flight &amp; Bus Ticket Booking Assistance in Bangalore
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Beyond cab bookings, Raghavendra Tours &amp; Travels (coordinated by Sridhar) provides end-to-end travel ticketing and hotel assistance to ensure your complete journey is hassle-free.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${service.iconColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                      {service.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                    {service.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0c1e38] font-heading group-hover:text-amber-600 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2 border-t border-slate-200/70 pt-4">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Popular corridors */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                    <strong className="text-slate-700">Popular:</strong> {service.popularTrains}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.tripType)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0c1e38] hover:text-amber-600 transition-colors cursor-pointer group/btn"
                  >
                    <span>Request Booking Assistance</span>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/918088372049?text=${encodeURIComponent(`Hello Sridhar / Raghavendra Tours & Travels, I need assistance with ${service.title}. Please share details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md hover:bg-emerald-100 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Sridhar Direct Consultation Card */}
          <div className="bg-gradient-to-br from-[#0c1e38] to-[#1a3863] text-white rounded-2xl p-6 sm:p-7 border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Direct Travel Coordinator
              </span>

              <h3 className="text-xl font-extrabold text-white font-heading leading-snug">
                Speak with Sridhar Directly
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Need customized multi-city transport, combined train/flight connection with Bangalore airport cabs, or group tour planning? Talk to Sridhar directly on phone or WhatsApp.
              </p>

              <div className="mt-5 space-y-2.5 text-xs text-slate-200 border-t border-slate-700 pt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Personalized itinerary planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-emerald-400" />
                  <span>Fast response within 5-10 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Coordinated from Abbigere, Bangalore</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 flex flex-col sm:flex-row gap-2.5">
              <a
                href={generateCallUrl()}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Call 8088372049</span>
              </a>
              <a
                href={generateDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
              >
                <span>WhatsApp Sridhar</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mandatory Legal & Operator Disclaimer */}
        <div className="mt-12 bg-amber-50/90 border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5 text-amber-700" />
          </div>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-[#0c1e38] mb-1">
              Important Booking &amp; Reservation Policy:
            </p>
            <p>
              Raghavendra Tours &amp; Travels provides booking coordination and assistance for trains, flights, buses, hotels, and custom tour packages. All ticket bookings and reservations are strictly subject to seat/room availability and applicable charges of the respective transport authorities or property operators. <strong>No ticket or reservation is ever claimed as confirmed until the relevant booking is successfully completed and confirmed directly with the customer.</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
