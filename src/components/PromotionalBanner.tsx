import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Tag,
  ArrowRight,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  Gift
} from 'lucide-react';
import { FESTIVE_OFFERS, FestiveOffer, generatePromoWhatsAppUrl } from '../utils/promoOffers';
import { TripType } from '../utils/bookingUtils';

interface PromotionalBannerProps {
  onSelectOffer: (tripType: TripType, destination: string) => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ onSelectOffer }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Trigger subtle slide-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Automatic cycling between festive offers every 6 seconds unless paused
  useEffect(() => {
    if (!isVisible || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FESTIVE_OFFERS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const activeOffer: FestiveOffer = FESTIVE_OFFERS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FESTIVE_OFFERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FESTIVE_OFFERS.length) % FESTIVE_OFFERS.length);
  };

  const handleBookNow = () => {
    onSelectOffer(activeOffer.targetTripType, activeOffer.targetDestination);
  };

  return (
    <>
      {/* Floating Re-Open Pill when banner is dismissed */}
      {!isVisible && (
        <button
          type="button"
          onClick={() => setIsVisible(true)}
          className="fixed top-24 right-4 z-40 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs px-3.5 py-2 rounded-full shadow-lg border border-amber-300 flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer animate-in fade-in duration-300"
          aria-label="Re-open seasonal discounts banner"
        >
          <Gift className="w-4 h-4 text-slate-950" />
          <span>Festive Offers (10% Off)</span>
        </button>
      )}

      {/* Main Floating Promotional Banner at the top */}
      {isVisible && (
        <aside
          role="region"
          aria-label="Festive & Seasonal Promotional Banner"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className={`relative z-50 bg-gradient-to-r from-[#08182f] via-[#102a50] to-[#08182f] text-white border-b-2 border-amber-500/60 shadow-xl transition-all duration-500 ease-out transform ${
            hasEntered ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          {/* Subtle festive light pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.18),transparent)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              
              {/* Left & Center: Festive Offer Content */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
                
                {/* Offer Carousel Controls (Prev/Next) */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-1 rounded-md text-amber-300/80 hover:text-amber-300 hover:bg-white/10 transition-colors"
                    aria-label="Previous festive offer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Sparkling Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-extrabold tracking-wide uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span className="hidden sm:inline">Seasonal Special:</span>
                    <span>{activeOffer.tag}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-1 rounded-md text-amber-300/80 hover:text-amber-300 hover:bg-white/10 transition-colors"
                    aria-label="Next festive offer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Offer Headline and Highlight */}
                <div className="text-left flex-1 md:flex-initial">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {activeOffer.title}
                    </span>
                    <span className="hidden lg:inline-block text-amber-400/60">•</span>
                    <span className="text-xs font-semibold text-amber-300 hidden sm:inline">
                      {activeOffer.discountHighlight}
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded-sm font-mono font-bold ml-1">
                      {activeOffer.code}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-1 hidden md:block">
                    {activeOffer.subtitle} • Personal coordination by Sridhar
                  </p>
                </div>

              </div>

              {/* Right Side: CTAs & Dismiss */}
              <div className="flex items-center justify-end gap-2 w-full md:w-auto shrink-0 pt-1 md:pt-0 border-t border-white/10 md:border-t-0">
                
                {/* Book Package Button */}
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-transform active:scale-95 shadow-xs cursor-pointer"
                >
                  <span>Book Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* WhatsApp Enquiry Button */}
                <a
                  href={generatePromoWhatsAppUrl(activeOffer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
                  aria-label={`Enquire via WhatsApp for ${activeOffer.title}`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Enquire via WhatsApp</span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>

                {/* Dismiss Banner Button */}
                <button
                  type="button"
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                  aria-label="Dismiss promotional banner"
                  title="Close banner"
                >
                  <X className="w-4 h-4" />
                </button>

              </div>

            </div>
          </div>
        </aside>
      )}
    </>
  );
};
