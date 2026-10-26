import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Car,
  Phone,
  User,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Plane,
  Building2,
  Navigation,
  FileText,
  RotateCcw
} from 'lucide-react';
import {
  TripType,
  CarCategory,
  BookingEnquiry,
  BUSINESS_CONFIG,
  validateBookingForm,
  generateBookingWhatsAppUrl,
  generateBookingReference,
  generateCallUrl
} from '../utils/bookingUtils';

interface BookingFormProps {
  initialTripType?: TripType;
  initialCarCategory?: CarCategory;
  initialDestination?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialTripType = 'local',
  initialCarCategory = 'any',
  initialDestination = ''
}) => {
  const [tripType, setTripType] = useState<TripType>(initialTripType);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState(initialDestination);
  const [travelDate, setTravelDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('08:00 AM');
  const [passengers, setPassengers] = useState(4);
  const [carCategory, setCarCategory] = useState<CarCategory>(initialCarCategory);
  const [returnDate, setReturnDate] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<{
    booking: BookingEnquiry;
    refId: string;
    whatsAppUrl: string;
  } | null>(null);

  // Sync if props update
  useEffect(() => {
    if (initialTripType) setTripType(initialTripType);
  }, [initialTripType]);

  useEffect(() => {
    if (initialCarCategory) setCarCategory(initialCarCategory);
  }, [initialCarCategory]);

  useEffect(() => {
    if (initialDestination) setDropLocation(initialDestination);
  }, [initialDestination]);

  const handleTripTypeChange = (type: TripType) => {
    setTripType(type);
    if (type === 'airport_drop') {
      setDropLocation('Kempegowda International Airport (BLR)');
      if (!pickupLocation) setPickupLocation('Abbigere / Bangalore City');
    } else if (type === 'airport_pickup') {
      setPickupLocation('Kempegowda International Airport (BLR)');
      if (dropLocation === 'Kempegowda International Airport (BLR)') {
        setDropLocation('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData: BookingEnquiry = {
      fullName,
      phone,
      tripType,
      pickupLocation,
      dropLocation,
      travelDate,
      pickupTime,
      passengers,
      carCategory,
      returnDate: tripType === 'outstation_roundtrip' ? returnDate : undefined,
      specialNotes,
    };

    const validation = validateBookingForm(bookingData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    const refId = generateBookingReference(travelDate);
    const whatsAppUrl = generateBookingWhatsAppUrl(bookingData, refId);

    setSubmittedBooking({
      booking: bookingData,
      refId,
      whatsAppUrl,
    });
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormErrors({});
  };

  return (
    <div id="booking-section" className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#0c1e38] to-[#172e54] text-white p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm border border-amber-500/30 mb-2">
              Fast Enquiry & Fare Quote
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Cab Booking Enquiry Form
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Get an instant fare quotation for your Bangalore local, airport transfer, or outstation trip. Handled directly by Sridhar.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
              ⚡ Response within 5-10 minutes
            </span>
          </div>
        </div>

        {/* Service Category & Trip Type Selector Tabs */}
        <div className="mt-6 pt-4 border-t border-slate-700/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Select Service Category:
            </span>
            <span className="text-[11px] text-slate-300">
              Attn: Sridhar • 8088372049
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <button
              type="button"
              onClick={() => handleTripTypeChange('local')}
              className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-bold transition-all ${
                tripType === 'local'
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400/50'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Local Bangalore</span>
            </button>

            <button
              type="button"
              onClick={() => handleTripTypeChange('airport_drop')}
              className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-bold transition-all ${
                tripType === 'airport_drop'
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400/50'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              <Plane className="w-3.5 h-3.5 rotate-45" />
              <span>Airport Drop</span>
            </button>

            <button
              type="button"
              onClick={() => handleTripTypeChange('airport_pickup')}
              className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-bold transition-all ${
                tripType === 'airport_pickup'
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400/50'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Airport Pickup</span>
            </button>

            <button
              type="button"
              onClick={() => handleTripTypeChange('outstation_oneway')}
              className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-bold transition-all ${
                tripType === 'outstation_oneway'
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400/50'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>Outstation 1-Way</span>
            </button>

            <button
              type="button"
              onClick={() => handleTripTypeChange('outstation_roundtrip')}
              className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-bold transition-all ${
                tripType === 'outstation_roundtrip'
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400/50'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Round Trip Cab</span>
            </button>
          </div>

          {/* Additional Travel Assistance Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-700/40">
            <span className="text-[10px] uppercase font-bold text-slate-400 self-center mr-1">
              Ticket &amp; Tours:
            </span>
            {[
              { id: 'train_ticket', label: 'Train Tickets' },
              { id: 'flight_ticket', label: 'Flight Tickets' },
              { id: 'bus_ticket', label: 'Bus Tickets' },
              { id: 'hotel_assistance', label: 'Hotel Booking' },
              { id: 'tour_package', label: 'Tour Packages' },
            ].map((srv) => (
              <button
                key={srv.id}
                type="button"
                onClick={() => handleTripTypeChange(srv.id as TripType)}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors ${
                  tripType === srv.id
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {srv.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content or Submitted Success View */}
      {submittedBooking ? (
        <div className="p-6 sm:p-10 bg-emerald-50/50 animate-in fade-in zoom-in-95 duration-200">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/80 px-3 py-1 rounded-full">
              Enquiry Details Ready
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c1e38] mt-2 mb-2">
              Ready to Share with Raghavendra Tours!
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Your booking enquiry reference ID is{' '}
              <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded-sm border border-slate-300">
                {submittedBooking.refId}
              </span>
              . Tap the button below to send this directly to our WhatsApp for the fastest fare quote.
            </p>

            {/* Summary card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 text-left mb-6 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Trip Summary
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 block text-xs">Customer Name</span>
                  <span className="font-bold text-slate-800">{submittedBooking.booking.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Contact Phone</span>
                  <span className="font-bold text-slate-800">{submittedBooking.booking.phone}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Pickup Location</span>
                  <span className="font-bold text-slate-800">{submittedBooking.booking.pickupLocation}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Destination / Drop</span>
                  <span className="font-bold text-slate-800">{submittedBooking.booking.dropLocation}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Date & Time</span>
                  <span className="font-bold text-slate-800">
                    {submittedBooking.booking.travelDate} at {submittedBooking.booking.pickupTime}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Passengers & Vehicle</span>
                  <span className="font-bold text-slate-800">
                    {submittedBooking.booking.passengers} Passengers • {submittedBooking.booking.carCategory.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={submittedBooking.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/20 hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send via WhatsApp for Instant Fare</span>
              </a>

              <a
                href={generateCallUrl()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0c1e38] hover:bg-[#172e54] text-white font-bold text-base transition-colors"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call 8088372049</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto text-slate-600 hover:text-slate-900 text-sm font-semibold py-3 px-4"
              >
                Edit Enquiry
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-5">
              * Note: We coordinate bookings through independent car owners and drivers. Vehicles are subject to availability.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Row 1: Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="pickupLocation" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Pickup Location *</span>
              </label>
              <input
                id="pickupLocation"
                type="text"
                placeholder="e.g. Abbigere, Yelahanka, Majestic, or Hotel name"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formErrors.pickupLocation ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                } text-slate-800 text-sm outline-hidden transition-all`}
              />
              {formErrors.pickupLocation && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {formErrors.pickupLocation}
                </p>
              )}
              {/* Quick pickup shortcuts */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-[11px] text-slate-400 self-center">Quick:</span>
                {['Abbigere', 'Kempegowda Airport', 'Yeshwanthpur', 'Hebbal'].map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setPickupLocation(loc)}
                    className="text-[11px] bg-slate-100 hover:bg-amber-100 hover:text-amber-800 text-slate-600 px-2 py-0.5 rounded-sm transition-colors"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="dropLocation" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Destination / Drop Location *</span>
              </label>
              <input
                id="dropLocation"
                type="text"
                placeholder="e.g. BLR Airport, Mysore, Coorg, Ooty, Whitefield"
                value={dropLocation}
                onChange={(e) => setDropLocation(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formErrors.dropLocation ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                } text-slate-800 text-sm outline-hidden transition-all`}
              />
              {formErrors.dropLocation && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {formErrors.dropLocation}
                </p>
              )}
              {/* Quick drop shortcuts */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-[11px] text-slate-400 self-center">Quick:</span>
                {['Kempegowda Airport', 'Mysore', 'Coorg', 'Ooty', 'Tirupati'].map((dest) => (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => setDropLocation(dest)}
                    className="text-[11px] bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 text-slate-600 px-2 py-0.5 rounded-sm transition-colors"
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Date, Time, Passengers, Vehicle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="travelDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Travel Date *</span>
              </label>
              <input
                id="travelDate"
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg border ${
                  formErrors.travelDate ? 'border-red-500' : 'border-slate-300'
                } text-slate-800 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-hidden`}
              />
              {formErrors.travelDate && (
                <p className="text-xs text-red-600 mt-1">{formErrors.travelDate}</p>
              )}
            </div>

            {tripType === 'outstation_roundtrip' && (
              <div>
                <label htmlFor="returnDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Return Date *</span>
                </label>
                <input
                  id="returnDate"
                  type="date"
                  value={returnDate}
                  min={travelDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg border ${
                    formErrors.returnDate ? 'border-red-500' : 'border-slate-300'
                  } text-slate-800 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-hidden`}
                />
                {formErrors.returnDate && (
                  <p className="text-xs text-red-600 mt-1">{formErrors.returnDate}</p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="pickupTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Pickup Time *</span>
              </label>
              <select
                id="pickupTime"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-hidden bg-white"
              >
                {[
                  '12:00 AM (Midnight)', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM',
                  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
                  '12:00 PM (Noon)', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
                  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'
                ].map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="passengers" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-slate-500" />
                <span>Passengers *</span>
              </label>
              <select
                id="passengers"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-hidden bg-white"
              >
                <option value={1}>1 Passenger</option>
                <option value={2}>2 Passengers</option>
                <option value={3}>3 Passengers</option>
                <option value={4}>4 Passengers (Standard Sedan)</option>
                <option value={5}>5 Passengers</option>
                <option value={6}>6 Passengers (Ertiga / Innova)</option>
                <option value={7}>7 Passengers (Innova Crysta)</option>
                <option value={8}>8+ Passengers</option>
                <option value={12}>12+ (Tempo Traveller)</option>
              </select>
            </div>

            <div>
              <label htmlFor="carCategory" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-slate-500" />
                <span>Preferred Car *</span>
              </label>
              <select
                id="carCategory"
                value={carCategory}
                onChange={(e) => setCarCategory(e.target.value as CarCategory)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-800 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-hidden bg-white"
              >
                <option value="any">Any Available Vehicle</option>
                <option value="sedan">Sedan (Dzire / Etios) - 4 Seater</option>
                <option value="suv">SUV (Ertiga) - 6 Seater</option>
                <option value="premium_suv">Premium SUV (Innova / Innova Crysta)</option>
                <option value="tempo">Tempo Traveller (9-16 Seater)</option>
              </select>
            </div>
          </div>

          {/* Row 3: Customer Details (Name & Phone) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Your Name *</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  formErrors.fullName ? 'border-red-500' : 'border-slate-300'
                } text-slate-800 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-hidden`}
              />
              {formErrors.fullName && (
                <p className="text-xs text-red-600 mt-1">{formErrors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>WhatsApp / Phone Number *</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-sm font-semibold text-slate-500">
                  +91
                </span>
                <input
                  id="phone"
                  type="tel"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className={`w-full pl-12 pr-4 py-2.5 rounded-lg border ${
                    formErrors.phone ? 'border-red-500' : 'border-slate-300'
                  } text-slate-800 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-hidden`}
                />
              </div>
              {formErrors.phone && (
                <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>
              )}
            </div>
          </div>

          {/* Row 4: Special notes */}
          <div>
            <label htmlFor="specialNotes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Special Notes / Flight Number / Extra Luggage (Optional)</span>
            </label>
            <input
              id="specialNotes"
              type="text"
              placeholder="e.g. Flight 6E 421 arriving 11:30 PM, 3 large bags, need child seat if possible"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-hidden"
            />
          </div>

          {/* Transparency & Ticketing Policy Disclaimer */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs text-slate-600 space-y-2">
            <div className="flex items-start gap-2.5">
              <span className="text-amber-600 font-bold text-sm leading-none mt-0.5">ℹ️</span>
              <div>
                <p className="font-semibold text-slate-800">
                  Transparent Fleet Policy:
                </p>
                <p>
                  Cab bookings are arranged through independent associated vehicle owners and drivers. Innova, Innova Crysta, Sedan, and SUV vehicles are subject to real-time availability. Tolls, state permits, and parking charges are payable at actuals. We do not claim to own a fleet of cars.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200/60">
              <span className="text-blue-600 font-bold text-sm leading-none mt-0.5">🎫</span>
              <div>
                <p className="font-semibold text-slate-800">
                  Ticketing &amp; Reservation Policy:
                </p>
                <p>
                  Train, flight, and bus ticket booking assistance as well as hotel reservations and tour packages are strictly subject to seat/room availability and applicable booking charges. Tickets/rooms are never confirmed until the relevant booking is completed.
                </p>
              </div>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Need immediate booking? Call our helpline directly at{' '}
              <a href={generateCallUrl()} className="text-amber-700 font-bold underline">
                8088372049
              </a>
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Check Fare & Availability</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
