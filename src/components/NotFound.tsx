import React from 'react';
import { Car, Home, Phone, MessageCircle, MapPin, ArrowLeft } from 'lucide-react';
import { generateCallUrl, generateDefaultWhatsAppUrl } from '../utils/bookingUtils';

interface NotFoundProps {
  onGoHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-lg w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
        
        {/* Emblem */}
        <div className="w-16 h-16 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
          <Car className="w-8 h-8 text-amber-600" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0c1e38] font-heading mt-3 mb-2">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          The page or travel route you are looking for doesn&apos;t exist or may have been relocated. You can return to our main booking portal below or call us directly.
        </p>

        {/* Quick Route Links */}
        <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-200 mb-6 text-xs text-slate-700 space-y-2">
          <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
            Popular Bangalore Travel Pages:
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a href="/#services" className="hover:text-amber-700 flex items-center gap-1 font-semibold">
              <span>• Cab Service in Bangalore</span>
            </a>
            <a href="/#services" className="hover:text-amber-700 flex items-center gap-1 font-semibold">
              <span>• Bangalore Airport Taxi</span>
            </a>
            <a href="/#routes" className="hover:text-amber-700 flex items-center gap-1 font-semibold">
              <span>• Outstation Cab Booking</span>
            </a>
            <a href="/#services" className="hover:text-amber-700 flex items-center gap-1 font-semibold">
              <span>• One-way &amp; Round-trip</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onGoHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0c1e38] hover:bg-[#1a3863] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span>Return to Homepage</span>
          </button>

          <a
            href={generateCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call 8088372049</span>
          </a>

          <a
            href={generateDefaultWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          <span>Raghavendra Tours &amp; Travels • Abbigere, Bengaluru – 560090</span>
        </div>

      </div>
    </div>
  );
};
