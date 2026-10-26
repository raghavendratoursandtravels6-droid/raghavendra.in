import React, { useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  Clock,
  HeartHandshake,
  CheckCircle2,
  Phone,
  MessageCircle,
  Car,
  FileCheck,
  UserCheck,
  LifeBuoy,
  ChevronRight,
} from 'lucide-react';
import {
  SAFETY_PILLARS,
  SAFETY_STATS,
  generateSafetyWhatsAppUrl,
  SafetyPillar,
} from '../utils/safetyProtocols';
import { BUSINESS_CONFIG, generateCallUrl } from '../utils/bookingUtils';

interface SafetyHygieneSectionProps {
  onScrollToBooking?: () => void;
}

export const SafetyHygieneSection: React.FC<SafetyHygieneSectionProps> = ({
  onScrollToBooking,
}) => {
  const [activePillarId, setActivePillarId] = useState<string>('sanitization');

  const getPillarIcon = (name: SafetyPillar['iconName']) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
    }
  };

  const activePillar =
    SAFETY_PILLARS.find((p) => p.id === activePillarId) || SAFETY_PILLARS[0];

  return (
    <section id="safety" className="scroll-mt-36 sm:scroll-mt-28 py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Safety &amp; Hygiene Standards • Certified Cab Protocols</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
            Your Safety, Health &amp; Comfort Are Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400">
              #1 Non-Negotiable Priority
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From spotless sanitized cabins and background-verified chauffeurs to round-the-clock
            oversight by Proprietor Sridhar, here is how we protect every kilometer of your journey in and out of Bangalore.
          </p>
        </div>

        {/* 4 Core Safety Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {SAFETY_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 text-center shadow-lg backdrop-blur-xs hover:border-amber-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-heading">
                {stat.metric}
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Pillar Selection Tabs (Mobile & Desktop) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {SAFETY_PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20 scale-[1.02]'
                    : 'bg-slate-800/70 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                }`}
                aria-pressed={isActive}
              >
                {getPillarIcon(pillar.iconName)}
                <span>{pillar.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Highlight Card */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 inline-flex items-center justify-center">
                  {getPillarIcon(activePillar.iconName)}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {activePillar.badge}
                  </span>
                  <p className="text-xs text-emerald-400 font-medium">
                    {activePillar.subtitle}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight mb-2">
                {activePillar.title}
              </h3>
              <p className="text-sm sm:text-base text-amber-200/90 font-medium mb-4">
                {activePillar.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {activePillar.description}
              </p>

              {/* Checklist items */}
              <div className="space-y-3">
                {activePillar.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {onScrollToBooking && (
                  <button
                    type="button"
                    onClick={onScrollToBooking}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <Car className="w-4 h-4 text-slate-950" />
                    <span>Book a Sanitized Cab</span>
                  </button>
                )}

                <a
                  href={generateSafetyWhatsAppUrl(activePillar.badge)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Safety Desk</span>
                </a>
              </div>
            </div>

            {/* Right Visual Checklist & Verification Box */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    Safety Verification Checklist
                  </span>
                </div>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                  Verified
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span>Driver Police &amp; ID Check</span>
                  </span>
                  <span className="text-emerald-400 font-bold">Passed 100%</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Cabin Sanitization Status</span>
                  </span>
                  <span className="text-amber-300 font-bold">Pre-Trip Completed</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Proprietor Live Dispatch Monitoring</span>
                  </span>
                  <span className="text-blue-300 font-bold">Active 24x7</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="flex items-center gap-2">
                    <LifeBuoy className="w-4 h-4 text-rose-400" />
                    <span>Emergency Breakdown Protocol</span>
                  </span>
                  <span className="text-slate-200 font-bold">Standby Vehicle Ready</span>
                </div>
              </div>

              {/* Call-out quote from Proprietor Sridhar */}
              <div className="mt-5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                <strong className="text-amber-300 block mb-1">
                  Proprietor Sridhar&apos;s Direct Assurance:
                </strong>
                &ldquo;You or your family members are never riding with a stranger. Every driver who represents Raghavendra Tours &amp; Travels is personally vetted for safety, punctuality, and polite behavior.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid: Sanitized Vehicles, Driver Verification, 24/7 Support */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Sanitized Vehicles */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 hover:border-amber-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Sanitized Vehicles</h4>
              <p className="text-xs text-emerald-400 mb-2 font-medium">Spotless &amp; Deep-Cleaned Cab Cabins</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Deep cleaning before outstation trips and airport rides. Disinfected touch surfaces, clean AC airflow, non-smoking policy, and crisp seat covers.
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 pt-3 border-t border-slate-700/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero cigarette odor / clean atmosphere</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Door handles &amp; seat belts wiped down</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Driver Verification */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 hover:border-emerald-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Driver Verification</h4>
              <p className="text-xs text-emerald-400 mb-2 font-medium">Police &amp; Government ID Verified</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Police record checks, valid commercial DL, and verified Aadhaar cards. Our drivers are seasoned professionals who know South Indian routes inside out.
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 pt-3 border-t border-slate-700/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>5+ years experienced chauffeurs</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Polite, multi-lingual &amp; punctual</span>
              </li>
            </ul>
          </div>

          {/* Card 3: 24/7 Support Protocols */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 hover:border-blue-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">24/7 Support Protocols</h4>
              <p className="text-xs text-emerald-400 mb-2 font-medium">Direct Owner Escalation Helpline</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Emergency escalation directly to Proprietor Sridhar. Backup car arrangements in case of unexpected delays, flight tracking for late-night landings.
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 pt-3 border-t border-slate-700/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Direct call to 8088372049 anytime</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Live location updates for family</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner with Direct Call Helpline */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/20 via-slate-800 to-emerald-500/20 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Have a Safety Question or Need Special Ride Assistance?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Call Proprietor Sridhar directly at <strong className="text-amber-400">{BUSINESS_CONFIG.phone}</strong> or send us a WhatsApp inquiry.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={generateCallUrl()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Sridhar</span>
            </a>
            <a
              href={generateSafetyWhatsAppUrl('Safety inquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
