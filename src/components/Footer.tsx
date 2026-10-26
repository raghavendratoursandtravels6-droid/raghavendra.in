import React from 'react';
import { Car, Phone, MessageCircle, MapPin, Mail, ExternalLink, Heart } from 'lucide-react';
import {
  BUSINESS_CONFIG,
  generateDefaultWhatsAppUrl,
  generateCallUrl
} from '../utils/bookingUtils';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061325] text-slate-300 border-t border-slate-800 pt-16 pb-28 sm:pb-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & About (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-white p-0.5 shadow-md">
                <img
                  src="/assets/logo.svg"
                  alt="Raghavendra Tours & Travels Emblem"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white font-heading block">
                  Raghavendra Tours &amp; Travels
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  Cab &amp; Taxi Service in Bangalore • Proprietor: Sridhar
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Providing dependable local Bangalore taxi bookings, 24x7 Kempegowda Airport pickup &amp; drop, and customized outstation trips with courteous drivers and clean vehicles.
            </p>

            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-[11px] text-slate-400 max-w-sm">
              <strong className="text-slate-200">Transparent Business Model:</strong> We arrange cab bookings through independent car owners and drivers across Bangalore. Vehicles are subject to real-time availability.
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={generateCallUrl()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>8088372049</span>
              </a>
              <a
                href={generateDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-white font-bold font-heading text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Local Bangalore Taxi
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Airport Pickup &amp; Drop (BLR)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Outstation Cab Booking
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">
                  Innova &amp; Innova Crysta
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">
                  Sedan &amp; SUV Rentals
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-amber-300 hover:text-amber-200 font-semibold transition-colors">
                  Vehicle Models Gallery (Photos)
                </a>
              </li>
              <li>
                <a href="#fare-estimator" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                  Instant Fare Estimator (Pricing)
                </a>
              </li>
              <li>
                <a href="#safety" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  Safety &amp; Hygiene Standards (Sanitized Cabs)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Family Sightseeing Tours
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  One-Way &amp; Round-Trip Cabs
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Bangalore Corridors */}
          <div>
            <h4 className="text-white font-bold font-heading text-sm uppercase tracking-wider mb-4">
              Popular Routes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#routes" className="hover:text-amber-400 transition-colors">
                  Bangalore to Airport (BLR)
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-400 transition-colors">
                  Bangalore to Mysore
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-400 transition-colors">
                  Bangalore to Coorg
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-400 transition-colors">
                  Bangalore to Ooty
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-400 transition-colors">
                  Bangalore to Chikmagalur
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-400 transition-colors">
                  Bangalore to Tirupati
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-400 transition-colors">
                  Bangalore to Nandi Hills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold font-heading text-sm uppercase tracking-wider mb-4">
              Contact &amp; Location
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Proprietor / Coordinator: Sridhar</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Abbigere, Bengaluru – 560090, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={generateCallUrl()} className="hover:text-white transition-colors">
                  +91 80883 72049 (Sridhar)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={generateDefaultWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  8088372049 (WhatsApp)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="break-all">{BUSINESS_CONFIG.email}</span>
              </div>
              <div className="pt-2 space-y-1.5">
                <a
                  href={BUSINESS_CONFIG.siteUrl}
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                >
                  <span>Website: www.raghavendratravels.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <div>
                  <a
                    href={BUSINESS_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
                  >
                    <span>Google Maps Listing</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500">
          <p className="mb-2 font-bold text-slate-400 uppercase tracking-wider">
            All Bangalore Tours &amp; Travels Keywords &amp; Services:
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 leading-relaxed text-slate-400">
            <a href="#hero" className="hover:text-amber-400 transition-colors font-semibold text-slate-300">Bangalore Tours and Travels</a>
            <span>•</span>
            <a href="#services" className="hover:text-amber-400 transition-colors">Tours and Travels in Bangalore</a>
            <span>•</span>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">Best Tours and Travels Bangalore</a>
            <span>•</span>
            <a href="#services" className="hover:text-amber-400 transition-colors">Cab Service in Bangalore</a>
            <span>•</span>
            <a href="#services" className="hover:text-amber-400 transition-colors">Taxi Booking in Bangalore</a>
            <span>•</span>
            <a href="#fare-estimator" className="hover:text-amber-400 transition-colors">Bangalore Taxi Fare Estimator</a>
            <span>•</span>
            <a href="#services" className="hover:text-amber-400 transition-colors">Bangalore Airport Taxi Booking (BLR)</a>
            <span>•</span>
            <a href="#services" className="hover:text-amber-400 transition-colors">Kempegowda Airport Cab Service</a>
            <span>•</span>
            <a href="#routes" className="hover:text-amber-400 transition-colors">Outstation Cabs from Bangalore</a>
            <span>•</span>
            <a href="#routes" className="hover:text-amber-400 transition-colors">Outstation Taxi Booking Bangalore</a>
            <span>•</span>
            <a href="#routes" className="hover:text-amber-400 transition-colors">Bangalore to Mysore Cab</a>
            <span>•</span>
            <a href="#routes" className="hover:text-amber-400 transition-colors">Bangalore to Coorg Taxi</a>
            <span>•</span>
            <a href="#routes" className="hover:text-amber-400 transition-colors">Bangalore to Ooty Cab Package</a>
            <span>•</span>
            <a href="#routes" className="hover:text-amber-400 transition-colors">Bangalore to Tirupati Cab Package</a>
            <span>•</span>
            <a href="#routes" className="hover:text-amber-400 transition-colors">Bangalore to Nandi Hills Cab</a>
            <span>•</span>
            <a href="#fleet" className="hover:text-amber-400 transition-colors">Innova Crysta Rental Bangalore</a>
            <span>•</span>
            <a href="#fleet" className="hover:text-amber-400 transition-colors">Ertiga Cab Booking Bangalore</a>
            <span>•</span>
            <a href="#fleet" className="hover:text-amber-400 transition-colors">Sedan Taxi Booking Bangalore</a>
            <span>•</span>
            <a href="#fleet" className="hover:text-amber-400 transition-colors">Tempo Traveller Bangalore</a>
            <span>•</span>
            <a href="#services" className="hover:text-amber-400 transition-colors">One Way Cab Booking Bangalore</a>
            <span>•</span>
            <a href="#services" className="hover:text-amber-400 transition-colors">Round Trip Taxi Booking Bangalore</a>
            <span>•</span>
            <a href="#fare-estimator" className="hover:text-amber-400 transition-colors">Local Bangalore Cab (8hr / 80km)</a>
            <span>•</span>
            <a href="#travel-assistance" className="hover:text-amber-400 transition-colors">Train Ticket Booking Assistance Bangalore</a>
            <span>•</span>
            <a href="#travel-assistance" className="hover:text-amber-400 transition-colors">Flight Ticket Booking Assistance</a>
            <span>•</span>
            <a href="#travel-assistance" className="hover:text-amber-400 transition-colors">Bus Ticket Booking Bangalore</a>
            <span>•</span>
            <a href="#travel-assistance" className="hover:text-amber-400 transition-colors">Hotel &amp; Tour Packages from Bangalore</a>
            <span>•</span>
            <a href="#areas" className="hover:text-amber-400 transition-colors">Abbigere Tours and Travels</a>
            <span>•</span>
            <a href="#areas" className="hover:text-amber-400 transition-colors">Yelahanka Cab Service</a>
            <span>•</span>
            <a href="#areas" className="hover:text-amber-400 transition-colors">Hebbal Airport Taxi</a>
            <span>•</span>
            <a href="#areas" className="hover:text-amber-400 transition-colors">Yeshwanthpur Cab Booking</a>
            <span>•</span>
            <a href="#contact" className="hover:text-amber-400 transition-colors">24x7 Cab Service Bangalore</a>
            <span>•</span>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Sridhar Travels Bangalore</a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Raghavendra Tours &amp; Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a href="#transparent-model" className="hover:text-slate-300">
              Business Model
            </a>
            <span>•</span>
            <a href="#travel-tips" className="hover:text-slate-300">
              Travel Tips
            </a>
            <span>•</span>
            <a href="#testimonials" className="hover:text-slate-300">
              Reviews
            </a>
            <span>•</span>
            <a href="#faqs" className="hover:text-slate-300">
              FAQs &amp; Policies
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300">
              Contact
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
