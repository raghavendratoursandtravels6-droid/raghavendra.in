import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { generateDefaultWhatsAppUrl, generateCallUrl } from '../utils/bookingUtils';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does booking work with Raghavendra Tours & Travels?',
      a: 'We operate as a personalized cab booking coordinator in Bangalore. When you submit an enquiry through our form, call 8088372049, or message us on WhatsApp, we verify vehicle availability with our vetted network of independent car owners and professional drivers. Once confirmed, we share the driver and car details directly with you.'
    },
    {
      q: 'How are fares calculated for local, airport, and outstation trips?',
      a: 'Fares depend on your chosen route, trip type, and vehicle category. Local city trips are charged on point-to-point or hourly package basis. Airport transfers feature clear flat estimates with toll charges at actuals. Outstation trips are calculated based on round-trip or one-way distance (with standard minimum daily km) plus driver allowance (bata). All state border permits, tolls, and parking fees are payable at actuals with receipts.'
    },
    {
      q: 'Can I specifically request an Innova or Innova Crysta?',
      a: 'Yes, we gladly accept requests for Innova, Innova Crysta, Ertiga, and Sedans (Dzire / Etios). Because we coordinate through independent vehicle owners, all bookings are strictly subject to vehicle availability on your chosen travel date and time. We recommend booking in advance for peak weekends and festivals.'
    },
    {
      q: 'Do you offer 24x7 Airport pickup and drop service?',
      a: 'Yes! We coordinate 24x7 transfers to and from Kempegowda International Airport (BLR). Whether you have a 3:00 AM departure or a midnight arrival, our drivers ensure timely doorstep pickup. For airport pickups, please share your flight number so our driver can track any arrival delays.'
    },
    {
      q: 'Are toll and parking charges included in the fare?',
      a: 'Toll charges (such as the Airport Trumpet toll or Mysore Expressway toll), parking fees at stations/airports, and interstate entry taxes (for trips to Tamil Nadu, Kerala, or Andhra Pradesh) are always charged at actuals with official receipts. This ensures 100% honesty and zero inflated estimates.'
    },
    {
      q: 'What is your cancellation policy?',
      a: 'We understand that plans can change. If you need to cancel or reschedule, please inform us as early as possible via phone or WhatsApp at 8088372049 so we can notify the independent driver partner before they commence their trip towards your location.'
    },
    {
      q: 'How can I make the payment for my ride?',
      a: 'You can pay conveniently via UPI (Google Pay, PhonePe, Paytm, BHIM) directly or pay cash to the driver upon completion of your journey. For long multi-day outstation packages, a partial fuel/trip advance is agreed upon beforehand.'
    }
  ];

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e38] font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear, honest answers about our Bangalore cab booking services, rates, and policies.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 overflow-hidden transition-all bg-white shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-heading">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-[#0c1e38]">
              Have a custom requirement or specific question?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Call our Bangalore booking desk directly or message us on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={generateCallUrl()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0c1e38] text-white text-xs font-bold hover:bg-[#1a3863] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call 8088372049</span>
            </a>
            <a
              href={generateDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
