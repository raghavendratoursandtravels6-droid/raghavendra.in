import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, generateDefaultWhatsAppUrl, generateCallUrl } from '../utils/bookingUtils';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Vehicle Fleet', href: '#fleet' },
    { name: 'Car Gallery', href: '#gallery' },
    { name: 'Fare Estimator', href: '#fare-estimator' },
    { name: 'Safety & Hygiene', href: '#safety' },
    { name: 'Tickets & Tours', href: '#travel-assistance' },
    { name: 'Travel Tips', href: '#travel-tips' },
    { name: 'Outstation Routes', href: '#routes' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Our Model', href: '#transparent-model' },
    { name: 'Service Areas', href: '#areas' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const desktopNavLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Fare Estimator', href: '#fare-estimator' },
    { name: 'Safety', href: '#safety' },
    { name: 'Tickets & Tours', href: '#travel-assistance' },
    { name: 'Routes', href: '#routes' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#0c1e38] text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Abbigere, Bengaluru – 560090</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>24x7 Cab &amp; Airport Transfer Assistance</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-sm border border-amber-500/20">
              <ShieldCheck className="w-3 h-3" />
              <span>Proprietor: Sridhar</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={generateCallUrl()}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-amber-400 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>8088372049 (Sridhar)</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={generateDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-13 h-13 sm:w-14 sm:h-14 shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/assets/logo.svg"
                alt="Raghavendra Tours & Travels Official Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div className="whitespace-nowrap">
              <div className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0c1e38] font-heading flex items-center gap-1.5 whitespace-nowrap">
                <span>Raghavendra</span>
                <span className="text-amber-600">Tours &amp; Travels</span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                Cab &amp; Taxi Service • Bengaluru • Sridhar
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {desktopNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0c1e38] transition-colors relative py-1 hover:border-b-2 hover:border-amber-500 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={generateCallUrl()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold shadow-xs transition-all hover:border-slate-400"
              aria-label="Call Raghavendra Tours & Travels at 8088372049"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Now</span>
            </a>

            <a
              href={generateDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              aria-label="WhatsApp Booking with Raghavendra Tours & Travels"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-200">
            <a
              href={generateCallUrl()}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-[#0c1e38] text-[#0c1e38] font-bold text-base hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-600" />
              <span>Call 8088372049</span>
            </a>
            <a
              href={generateDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 text-white font-bold text-base shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
