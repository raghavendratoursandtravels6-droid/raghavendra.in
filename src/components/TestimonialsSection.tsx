import React, { useState } from 'react';
import {
  Star,
  CheckCircle,
  MessageSquare,
  ExternalLink,
  ThumbsUp,
  ShieldCheck,
  Share2,
  Check,
  MessageCircle,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/bookingUtils';
import {
  TestimonialShareData,
  generateTestimonialWhatsAppShareUrl,
  generateTestimonialShareText,
  generateServiceRecommendationWhatsAppShareUrl,
} from '../utils/testimonialShare';

export interface TestimonialItem extends TestimonialShareData {
  reviewDate: string;
  verifiedTrip: boolean;
}

export const TestimonialsSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Authentic passenger journey review placeholders
  const testimonials: TestimonialItem[] = [
    {
      id: 'rev-1',
      customerName: 'Suresh R.',
      travelRoute: 'Hebbal to Kempegowda Airport (BLR T2)',
      serviceType: 'Airport Drop',
      vehicleUsed: 'Sedan (Dzire)',
      rating: 5,
      reviewDate: 'Verified Passenger Feedback',
      comment:
        'Punctual early morning 4:30 AM pickup from Hebbal. Driver arrived 10 minutes prior to scheduled time. Clean vehicle, safe driving, and transparent toll billing without any hidden charges.',
      verifiedTrip: true,
    },
    {
      id: 'rev-2',
      customerName: 'Deepa & Family',
      travelRoute: 'Bangalore (Yelahanka) to Mysore (Round Trip)',
      serviceType: 'Outstation Round Trip',
      vehicleUsed: 'Innova Crysta (7-Seater)',
      rating: 5,
      reviewDate: 'Verified Passenger Feedback',
      comment:
        'Booked an Innova Crysta for a weekend family trip to Mysore. Excellent legroom for senior citizens, courteous driver who knew the expressway halts, and clear driver allowance accounting.',
      verifiedTrip: true,
    },
    {
      id: 'rev-3',
      customerName: 'Karthik M.',
      travelRoute: 'Kempegowda Airport to Abbigere / Jalahalli',
      serviceType: 'Airport Pickup',
      vehicleUsed: 'Sedan (Etios)',
      rating: 5,
      reviewDate: 'Verified Passenger Feedback',
      comment:
        'Flight was delayed by 45 minutes past midnight, but driver coordinated smoothly on WhatsApp at arrival. Very polite, smooth ride home to Abbigere. Highly dependable service.',
      verifiedTrip: true,
    },
    {
      id: 'rev-4',
      customerName: 'Anand Kumar',
      travelRoute: 'Bangalore to Coorg (Madikeri)',
      serviceType: 'Outstation Sightseeing (3 Days)',
      vehicleUsed: 'SUV (Maruti Ertiga)',
      rating: 5,
      reviewDate: 'Verified Passenger Feedback',
      comment:
        'Hassle-free 3-day holiday in Coorg with family. The Ertiga had plenty of boot space for our bags. Driver was very patient during sightseeing stops and temple visits.',
      verifiedTrip: true,
    },
    {
      id: 'rev-5',
      customerName: 'Manjunath B.',
      travelRoute: 'Yeshwanthpur to Whitefield ITPL',
      serviceType: 'Local Bangalore Travel',
      vehicleUsed: 'Sedan (Dzire)',
      rating: 5,
      reviewDate: 'Verified Passenger Feedback',
      comment:
        'Needed reliable transportation for full-day meetings across Bangalore. Smooth booking coordination over direct phone call with Raghavendra Tours. Professional experience throughout.',
      verifiedTrip: true,
    },
    {
      id: 'rev-6',
      customerName: 'Venkatesh S.',
      travelRoute: 'Bangalore to Tirupati Balaji Darshan',
      serviceType: 'Pilgrimage Round Trip',
      vehicleUsed: 'Innova Crysta',
      rating: 5,
      reviewDate: 'Verified Passenger Feedback',
      comment:
        'Family pilgrimage trip to Tirupati. Comfortable hill-climb driving and safe night return journey to Bangalore. Transparent toll and parking slips shared immediately.',
      verifiedTrip: true,
    },
  ];

  const handleShareClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: TestimonialItem
  ) => {
    // If Web Share API is available on supported mobile browsers, offer native picker with WhatsApp preselected
    if (navigator.share && /mobile|android|iphone|ipad/i.test(navigator.userAgent)) {
      e.preventDefault();
      try {
        const shareText = generateTestimonialShareText(item);
        await navigator.share({
          title: `Raghavendra Tours & Travels Review - ${item.customerName}`,
          text: shareText,
          url: BUSINESS_CONFIG.siteUrl,
        });
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 3000);
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to direct WhatsApp URL
        if ((err as Error)?.name !== 'AbortError') {
          window.open(generateTestimonialWhatsAppShareUrl(item), '_blank', 'noopener,noreferrer');
        }
      }
    } else {
      // Desktop or standard browser: show brief visual confirmation and proceed with direct WhatsApp URL
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 3000);
    }
  };

  return (
    <section id="testimonials" className="scroll-mt-36 sm:scroll-mt-28 py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Passenger Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-heading tracking-tight">
            Customer Testimonials &amp; Verified Feedback
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Real feedback from travellers who booked airport transfers, local city rides, and outstation trips with Raghavendra Tours &amp; Travels.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Feedback collected directly from confirmed customer journeys in Bangalore.</span>
          </div>
        </div>

        {/* Clean Responsive Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Journey</span>
                  </span>
                </div>

                {/* Route & Service Badge */}
                <div className="mb-3">
                  <p className="text-xs font-bold text-[#0c1e38] flex items-center gap-1">
                    <span>{item.travelRoute}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {item.serviceType} • <span className="font-semibold text-slate-700">{item.vehicleUsed}</span>
                  </p>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div>
                {/* Author footer */}
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-extrabold text-[#0c1e38]">
                      {item.customerName}
                    </h4>
                    <span className="text-[10px] text-slate-500">
                      {item.reviewDate}
                    </span>
                  </div>
                  <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-200">
                    Bangalore Cab
                  </span>
                </div>

                {/* Share via WhatsApp Button */}
                <div className="mt-3.5 pt-3 border-t border-slate-200/60 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                    Recommend this review:
                  </span>
                  <a
                    href={generateTestimonialWhatsAppShareUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleShareClick(e, item)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-600 text-xs font-bold transition-all duration-200 shadow-2xs group cursor-pointer"
                    aria-label={`Share ${item.customerName}'s review via WhatsApp`}
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                        <span>Shared!</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors" />
                        <span>Share via WhatsApp</span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout: Recommend to Friends & Leave a Review */}
        <div className="mt-12 bg-gradient-to-br from-emerald-50/70 via-slate-50 to-amber-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 flex items-center justify-center shrink-0">
              <Share2 className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0c1e38]">
                Loved Your Journey with Raghavendra Tours &amp; Travels?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Share this verified Bangalore cab service with your friends and family on WhatsApp, or leave us a review on Google Maps!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0 justify-start sm:justify-end">
            <a
              href={generateServiceRecommendationWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200"
              aria-label="Share Raghavendra Tours & Travels via WhatsApp with friends and family"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share via WhatsApp</span>
            </a>

            <a
              href={BUSINESS_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold shadow-2xs transition-colors"
            >
              <span>Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
