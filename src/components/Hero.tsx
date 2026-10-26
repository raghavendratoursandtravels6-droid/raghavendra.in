import React from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Check,
  Sparkles,
  ArrowDown,
  Plane,
  Compass
} from 'lucide-react';
import {
  BUSINESS_CONFIG,
  generateDefaultWhatsAppUrl,
  generateCallUrl
} from '../utils/bookingUtils';

interface HeroProps {
  onScrollToBooking: () => void;
  onScrollToEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToBooking, onScrollToEstimator }) => {
  return (
    <section id="hero" className="relative bg-[#0c1e38] text-white overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Subtle decorative background gradient & grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Description & Primary Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Bangalore&apos;s Trusted Cab Service • Proprietor: Sridhar</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight sm:leading-none">
              Cab Service &amp; Taxi Booking in <span className="text-amber-400">Bangalore</span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dependable local city taxis, 24x7 Bangalore airport taxi transfers, and outstation cab booking from Bangalore. We arrange quality rides through verified independent car owners and courteous drivers across all Bangalore areas.
            </p>

            {/* Key feature checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>24x7 Bangalore Airport Taxi (BLR T1 &amp; T2)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Outstation Cab Booking from Bangalore</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>One-way Cab Booking &amp; Round-trip Trips</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Innova Crysta, Ertiga &amp; Sedan Available</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* WhatsApp Booking */}
              <a
                href={generateDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/40 hover:-translate-y-0.5 transition-all"
                aria-label="WhatsApp Booking"
              >
                <MessageCircle className="w-5 h-5" />
                <div className="text-left leading-tight">
                  <span className="block text-xs uppercase tracking-wider text-emerald-200">Instant Chat</span>
                  <span className="text-base font-extrabold">WhatsApp Booking</span>
                </div>
              </a>

              {/* Call Now */}
              <a
                href={generateCallUrl()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-950/30 hover:-translate-y-0.5 transition-all"
                aria-label="Call Now at 8088372049"
              >
                <Phone className="w-5 h-5 text-slate-950" />
                <div className="text-left leading-tight">
                  <span className="block text-xs uppercase tracking-wider text-amber-900">Direct Helpline • Sridhar</span>
                  <span className="text-base font-extrabold">Call 8088372049</span>
                </div>
              </a>

              {/* Get Fare Estimate Button */}
              <button
                type="button"
                onClick={onScrollToEstimator || onScrollToBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-bold text-sm transition-colors cursor-pointer"
              >
                <span>Calculate Fare</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Service Area Micro-Notice */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Serving Abbigere, Yelahanka, Yeshwanthpur, Hebbal &amp; all Bangalore areas</span>
            </div>
          </div>

          {/* Right Column: Visual Trust Card & Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/60 bg-slate-900 group">
                <img
                  src="/src/assets/images/innova_crysta_cab_1792598134839.jpg"
                  alt="Raghavendra Tours & Travels - Toyota Innova Crysta Cab near Kempegowda International Airport Bangalore"
                  width={1000}
                  height={600}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38] via-transparent to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 text-xs font-semibold text-white flex items-center gap-2">
                  <Plane className="w-3.5 h-3.5 text-amber-400" />
                  <span>BLR Kempegowda Airport Specialist</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                        Available Vehicles
                      </p>
                      <p className="text-sm font-bold text-white">
                        Sedan • Ertiga SUV • Innova Crysta
                      </p>
                    </div>
                    <span className="text-[11px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-sm">
                      On-Demand
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    * Subject to availability with our independent driver partners.
                  </p>
                </div>
              </div>

              {/* Floating Stat Pill 1 */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white text-slate-900 p-3.5 rounded-xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Customer Support</p>
                  <p className="text-sm font-extrabold text-[#0c1e38]">24 Hours / 7 Days</p>
                </div>
              </div>

              {/* Floating Stat Pill 2 */}
              <div className="absolute -top-4 -right-4 bg-white text-slate-900 p-3 rounded-xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Transparent Pricing</p>
                  <p className="text-sm font-extrabold text-emerald-700">Zero Hidden Fares</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
