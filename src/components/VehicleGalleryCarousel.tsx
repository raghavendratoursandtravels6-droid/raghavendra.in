import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Users,
  Briefcase,
  Wind,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import {
  VEHICLE_GALLERY_ITEMS,
  GalleryCarItem,
  getNextSlideIndex,
  getPrevSlideIndex,
  filterGalleryItems,
  generateCarInquiryWhatsAppUrl,
} from '../utils/galleryUtils';
import { CarCategory } from '../utils/bookingUtils';

interface VehicleGalleryCarouselProps {
  onSelectCar?: (category: CarCategory) => void;
}

export const VehicleGalleryCarousel: React.FC<VehicleGalleryCarouselProps> = ({
  onSelectCar,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<CarCategory | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems: GalleryCarItem[] = filterGalleryItems(
    VEHICLE_GALLERY_ITEMS,
    selectedFilter
  );

  // Keep currentIndex within bounds if filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedFilter]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => getNextSlideIndex(prev, filteredItems.length));
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => getPrevSlideIndex(prev, filteredItems.length));
  }, [filteredItems.length]);

  // Auto-play interval (4.5s), pauses when user hovers or explicitly pauses
  useEffect(() => {
    if (!isPlaying || isHovered || filteredItems.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, handleNext, filteredItems.length]);

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const currentCar = filteredItems[currentIndex] || filteredItems[0];

  return (
    <section
      id="gallery"
      className="scroll-mt-36 sm:scroll-mt-28 py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Vehicle Models Visual Gallery Carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Subtle ambient gradient highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Real Vehicle Fleet Showcase • Photo Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
            High-Quality Fleet for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400">
              Every Travel Need
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore our sanitized Innova Crysta, Maruti Ertiga, Swift Dzire &amp; Etios Sedans, and
            luxury tour coaches. What you see is what arrives at your doorstep.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {[
            { label: 'All Models (Full Fleet)', value: 'all' as const },
            { label: 'Innova Crysta', value: 'premium_suv' as const },
            { label: 'Ertiga SUV', value: 'suv' as const },
            { label: 'Sedans (Dzire / Etios)', value: 'sedan' as const },
            { label: 'Group Coach', value: 'tempo' as const },
          ].map((tab) => {
            const isActive = selectedFilter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20 scale-[1.02]'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Carousel Stage */}
        <div
          ref={carouselContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-slate-800/90 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md"
        >
          {/* Main Slide Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left 7 Cols: High-Resolution Vehicle Image with Badges */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] lg:min-h-[480px] bg-slate-950 overflow-hidden group">
              <img
                src={currentCar.imageSrc}
                alt={currentCar.altText}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-black shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentCar.badge}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-xs text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Sanitized</span>
                </span>
              </div>

              {/* Previous / Next Controls Over Image */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/20 flex items-center justify-center shadow-xl transition-all cursor-pointer backdrop-blur-xs"
                aria-label="Previous vehicle slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/20 flex items-center justify-center shadow-xl transition-all cursor-pointer backdrop-blur-xs"
                aria-label="Next vehicle slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Bottom Image Caption Overlay on Mobile */}
              <div className="absolute bottom-4 left-4 right-4 z-10 lg:hidden">
                <div className="bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700">
                  <h3 className="text-lg font-black text-white font-heading">
                    {currentCar.modelName}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    {currentCar.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Vehicle Specs & Booking Actions */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-900/95 border-t lg:border-t-0 lg:border-l border-slate-800">
              <div>
                {/* Desktop Model Title */}
                <div className="hidden lg:block mb-4">
                  <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">
                    Verified Bangalore Fleet
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading leading-tight">
                    {currentCar.modelName}
                  </h3>
                  <p className="text-sm text-amber-300 font-medium mt-1">
                    {currentCar.tagline}
                  </p>
                </div>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-0.5">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>Capacity</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {currentCar.seating}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-0.5">
                      <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                      <span>Luggage</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {currentCar.luggage}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-0.5">
                      <Wind className="w-3.5 h-3.5 text-blue-400" />
                      <span>Air Conditioning</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {currentCar.acType}
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Vehicle Highlights
                  </div>
                  {currentCar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal Routes */}
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs text-slate-300 mb-6">
                  <strong className="text-amber-300 block mb-0.5">Best For:</strong>
                  {currentCar.idealFor}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                {onSelectCar && (
                  <button
                    type="button"
                    onClick={() => onSelectCar(currentCar.category)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Model</span>
                  </button>
                )}

                <a
                  href={generateCarInquiryWhatsAppUrl(currentCar.modelName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Bottom Control Toolbar: Play/Pause, Slide Indicators, and Slide Counter */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {filteredItems.map((item, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'w-8 bg-amber-400'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}: ${item.modelName}`}
                  aria-current={isSelected ? 'true' : undefined}
                />
              );
            })}
          </div>

          {/* Slide Controls & Counter */}
          <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
            {/* Auto-Play Toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause slideshow' : 'Start auto-play slideshow'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pause Auto-play</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Auto-play Carousel</span>
                </>
              )}
            </button>

            <span className="text-slate-600">|</span>

            {/* Slide Index Display */}
            <span>
              Vehicle <strong className="text-white">{currentIndex + 1}</strong> of{' '}
              <strong className="text-white">{filteredItems.length}</strong>
            </span>
          </div>
        </div>

        {/* Thumbnail Quick Selector Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {filteredItems.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`p-2 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-slate-800 border-amber-400 shadow-md ring-1 ring-amber-400'
                    : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70 hover:border-slate-600'
                }`}
                aria-label={`Select ${item.modelName}`}
              >
                <div className="w-14 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-950 relative">
                  <img
                    src={item.imageSrc}
                    alt={item.modelName}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-amber-500/20 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-amber-300" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-xs font-bold truncate ${
                      isSelected ? 'text-amber-400' : 'text-slate-200'
                    }`}
                  >
                    {item.modelName}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {item.seating}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
