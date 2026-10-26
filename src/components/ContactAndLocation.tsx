import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ExternalLink,
  Globe,
  Clock,
  Car,
  ShieldCheck
} from 'lucide-react';
import {
  BUSINESS_CONFIG,
  generateDefaultWhatsAppUrl,
  generateCallUrl
} from '../utils/bookingUtils';

export const ContactAndLocation: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/20">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Contact Raghavendra Tours &amp; Travels
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Need a cab urgently or planning an upcoming journey? Reach out directly via Phone or WhatsApp for quick coordination and fare confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-white font-heading mb-1 flex items-center gap-2">
                <span>Raghavendra Tours &amp; Travels</span>
              </h3>
              <p className="text-xs text-amber-400 font-semibold">
                Cab &amp; Taxi Service in Bangalore
              </p>
            </div>

            {/* Direct Contact Items */}
            <div className="space-y-4 pt-2">
              
              {/* Contact Person */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">Owner &amp; Travel Coordinator</span>
                  <p className="text-base font-bold text-white">
                    Sridhar
                  </p>
                  <p className="text-[11px] text-slate-400">Direct booking &amp; route coordination</p>
                </div>
              </div>

              {/* Phone / Call */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">Phone / Helpline</span>
                  <a
                    href={generateCallUrl()}
                    className="text-lg font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-400">24x7 Cab &amp; Travel Assistance</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">WhatsApp Booking</span>
                  <a
                    href={generateDefaultWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-400">Instant fare quote &amp; car details</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">Email Address</span>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="text-sm font-semibold text-slate-200 hover:text-white transition-colors break-all"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">Location &amp; Service Base</span>
                  <p className="text-sm font-medium text-slate-200 leading-snug">
                    {BUSINESS_CONFIG.location}
                  </p>
                  <p className="text-[11px] text-amber-300/90 font-medium mt-1">
                    Service Area: Bangalore, Bengaluru and nearby areas, Karnataka, India
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-slate-400">Operating Hours</span>
                  <p className="text-sm font-semibold text-slate-200">
                    Open 24 Hours / 7 Days a Week
                  </p>
                  <p className="text-[11px] text-slate-400">Advance bookings recommended for early morning flights &amp; outstation</p>
                </div>
              </div>

            </div>

            {/* Quick action buttons */}
            <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row gap-3">
              <a
                href={generateCallUrl()}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call 8088372049</span>
              </a>

              <a
                href={generateDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Official Website Link */}
            <div className="pt-2 text-center space-y-1">
              <a
                href={BUSINESS_CONFIG.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Official Website: www.raghavendratravels.in</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </a>
              <div>
                <a
                  href={BUSINESS_CONFIG.existingSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-slate-500 hover:text-slate-400 inline-flex items-center gap-1"
                >
                  <span>Ref: raghavendra-tours.grexa.site</span>
                </a>
              </div>
            </div>

          </div>

          {/* Google Maps Embed & Interactive Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-full">
            
            {/* Map Top Bar */}
            <div className="p-4 sm:p-5 bg-slate-850 border-b border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Google Maps Business Location
                  </h4>
                  <p className="text-xs text-slate-400">
                    Abbigere, Bengaluru, Karnataka 560090
                  </p>
                </div>
              </div>

              <a
                href={BUSINESS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors self-start sm:self-center"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Embed Frame */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-900">
              <iframe
                title="Raghavendra Tours & Travels Google Maps Location in Abbigere Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.986877969857!2d77.5147879!3d13.0677569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae232c4e6ec35b%3A0xe54d8ec5a98299a9!2sAbbigere%2C%20Bengaluru%2C%20Karnataka%20560090!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Travel notice below map */}
            <div className="p-4 bg-slate-850 border-t border-slate-700 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Doorstep Cab Dispatch:</strong> You do not need to visit our base in Abbigere in person. Our drivers are dispatched directly to your residential address, hotel, IT park, or Kempegowda Airport terminal anywhere in Bangalore.
                </span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
