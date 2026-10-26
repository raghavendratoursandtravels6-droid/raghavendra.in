import React from 'react';
import {
  ShieldCheck,
  Users,
  Handshake,
  CheckCircle2,
  FileCheck,
  PhoneCall,
  Sparkles,
  MapPin
} from 'lucide-react';
import { BUSINESS_CONFIG, generateCallUrl } from '../utils/bookingUtils';

export const BusinessModelNotice: React.FC = () => {
  return (
    <section id="transparent-model" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#0c1e38] via-[#112747] to-[#1c3c69] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          
          {/* Decorative subtle accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Transparent Business Model</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Honest, Reliable Cab Coordination in Bangalore
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                We believe in complete transparency. We arrange cab bookings by coordinating directly with independent car owners and professional drivers across Bangalore.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              
              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Independent Driver Network
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We do not claim to own a private fleet of cars. Instead, we collaborate with trusted, local vehicle owners and courteous drivers who take personal pride in their cars.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Clear &amp; Upfront Quotations
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We give you upfront estimates tailored to your route and car type. No automated surge multipliers — tolls, parking, and interstate permits are always at actuals.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Direct Personal Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  No bots or call centers. You talk directly with proprietor Sridhar on phone or WhatsApp (8088372049) for quick, reliable cab coordination without middle agents.
                </p>
              </div>

            </div>

            {/* Checklist of what you can count on */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-3 text-center sm:text-left">
                What you can rely on when booking with us:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Prompt punctuality for early morning airport departures &amp; pickups</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Well-maintained AC vehicles (Sedan, Ertiga, Innova Crysta subject to availability)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Experienced drivers who know Bangalore roads, traffic hours, and bypass routes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct phone assistance at 8088372049 before, during, and after your trip</span>
                </div>
              </div>
            </div>

            {/* Location context */}
            <div className="mt-8 text-center text-xs text-slate-300 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Coordinated from Abbigere, Bengaluru – 560090, Karnataka, India</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
