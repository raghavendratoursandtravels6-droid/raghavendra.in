import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { generateDefaultWhatsAppUrl, generateCallUrl } from '../utils/bookingUtils';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl sm:hidden">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={generateCallUrl()}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#0c1e38] text-white font-extrabold text-sm active:scale-95 transition-transform shadow-md"
          aria-label="Call Raghavendra Tours & Travels at 8088372049"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Booking Button */}
        <a
          href={generateDefaultWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-extrabold text-sm active:scale-95 transition-transform shadow-md"
          aria-label="WhatsApp Booking with prefilled message"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

