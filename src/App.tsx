/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingForm } from './components/BookingForm';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { VehicleGalleryCarousel } from './components/VehicleGalleryCarousel';
import { FareEstimator } from './components/FareEstimator';
import { SafetyHygieneSection } from './components/SafetyHygieneSection';
import { TicketingAssistanceSection } from './components/TicketingAssistanceSection';
import { TravelTipsSection } from './components/TravelTipsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PopularRoutes } from './components/PopularRoutes';
import { BusinessModelNotice } from './components/BusinessModelNotice';
import { ServiceAreas } from './components/ServiceAreas';
import { FaqSection } from './components/FaqSection';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { NotFound } from './components/NotFound';
import { PromotionalBanner } from './components/PromotionalBanner';
import { TripType, CarCategory } from './utils/bookingUtils';

export default function App() {
  const [selectedTripType, setSelectedTripType] = useState<TripType>('local');
  const [selectedCarCategory, setSelectedCarCategory] = useState<CarCategory>('any');
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [is404, setIs404] = useState<boolean>(false);

  useEffect(() => {
    // Check if path is a non-root route for custom 404 display
    const pathname = window.location.pathname;
    if (
      pathname &&
      pathname !== '/' &&
      pathname !== '/index.html' &&
      !pathname.endsWith('.html') &&
      !pathname.endsWith('.xml') &&
      !pathname.endsWith('.txt')
    ) {
      setIs404(true);
    }
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('fare-estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectEstimate = (
    tripType: TripType,
    carCategory: CarCategory,
    destination: string
  ) => {
    setSelectedTripType(tripType);
    setSelectedCarCategory(carCategory);
    setSelectedDestination(destination);
    scrollToBooking();
  };

  const handleSelectService = (serviceType: string, car?: string) => {
    setSelectedTripType(serviceType as TripType);
    if (car) {
      setSelectedCarCategory(car as CarCategory);
    }
    scrollToBooking();
  };

  const handleSelectTicketService = (serviceType: TripType, destination?: string) => {
    setSelectedTripType(serviceType);
    if (destination) {
      setSelectedDestination(destination);
    }
    scrollToBooking();
  };

  const handleSelectCar = (carCategory: CarCategory) => {
    setSelectedCarCategory(carCategory);
    scrollToBooking();
  };

  const handleSelectRoute = (destination: string) => {
    setSelectedDestination(destination);
    if (destination.includes('Airport')) {
      setSelectedTripType('airport_drop');
    } else {
      setSelectedTripType('outstation_roundtrip');
    }
    scrollToBooking();
  };

  const handleGoHome = () => {
    window.history.pushState({}, '', '/');
    setIs404(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPromoOffer = (tripType: TripType, destination: string) => {
    setSelectedTripType(tripType);
    setSelectedDestination(destination);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Floating Promotional Banner (Festive & Seasonal Tour Packages) */}
      <PromotionalBanner onSelectOffer={handleSelectPromoOffer} />

      {/* Top Header Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {is404 ? (
          <NotFound onGoHome={handleGoHome} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onScrollToBooking={scrollToBooking}
              onScrollToEstimator={scrollToEstimator}
            />

            {/* Embedded Interactive Booking Form Section */}
            <section className="relative -mt-8 sm:-mt-12 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <BookingForm
                initialTripType={selectedTripType}
                initialCarCategory={selectedCarCategory}
                initialDestination={selectedDestination}
              />
            </section>

            {/* Core Services Section (6 Services) with hover animations */}
            <ServicesSection onSelectService={handleSelectService} />

            {/* Fleet Section (Innova Crysta, Sedan, SUV) */}
            <FleetSection onSelectCar={handleSelectCar} />

            {/* Visual Vehicle Gallery Carousel (Innova Crysta, Ertiga, Sedan) */}
            <VehicleGalleryCarousel onSelectCar={handleSelectCar} />

            {/* Transparent Fare Estimator & Cost Comparison Utility */}
            <FareEstimator onSelectEstimate={handleSelectEstimate} />

            {/* Safety & Hygiene Section (Sanitized vehicles, driver background verification, 24/7 support) */}
            <SafetyHygieneSection onScrollToBooking={scrollToBooking} />

            {/* Ticketing, Hotel & Tour Package Assistance (Train, Flight, Bus, Hotels, Tours) */}
            <TicketingAssistanceSection onSelectService={handleSelectTicketService} />

            {/* Travel Tips for Bangalore (Airport & Car Guide) */}
            <TravelTipsSection onSelectBookingTip={handleSelectService} />

            {/* Popular Outstation & Airport Corridors */}
            <PopularRoutes onSelectRoute={handleSelectRoute} />

            {/* Customer Testimonials & Verified Feedback */}
            <TestimonialsSection />

            {/* Transparent Business Model Notice */}
            <BusinessModelNotice />

            {/* Bangalore Service Areas & Hubs */}
            <ServiceAreas />

            {/* Genuine FAQs */}
            <FaqSection />

            {/* Contact Details & Google Maps */}
            <ContactAndLocation />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (Call Now & WhatsApp) */}
      <MobileQuickBar />
    </div>
  );
}
