import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BUSINESS_CONFIG,
  generateDefaultWhatsAppUrl,
  generateBookingWhatsAppUrl,
  generateBookingReference,
  validateBookingForm,
  getTripTypeLabel,
  getCarCategoryLabel,
} from './bookingUtils.ts';
import type { BookingEnquiry } from './bookingUtils.ts';

test('BUSINESS_CONFIG contains correct contact details', () => {
  assert.equal(BUSINESS_CONFIG.phone, '8088372049');
  assert.equal(BUSINESS_CONFIG.phoneIntl, '918088372049');
  assert.equal(BUSINESS_CONFIG.owner, 'Sridhar');
  assert.match(BUSINESS_CONFIG.location, /Abbigere.*Bengaluru/i);
  assert.match(BUSINESS_CONFIG.defaultWhatsAppMessage, /Hello Raghavendra Tours & Travels/);
  assert.equal(BUSINESS_CONFIG.siteUrl, 'https://www.raghavendratravels.in');
  assert.equal(BUSINESS_CONFIG.domain, 'www.raghavendratravels.in');
});

test('generateDefaultWhatsAppUrl matches requested query and phone', () => {
  const url = generateDefaultWhatsAppUrl();
  assert.match(url, /^https:\/\/wa\.me\/918088372049\?text=/);
  const textParam = new URL(url).searchParams.get('text');
  assert.equal(textParam, 'Hello Raghavendra Tours & Travels, I need a cab booking. Please share the fare.');
});

test('generateBookingWhatsAppUrl formats full enquiry details with reference ID', () => {
  const enquiry: BookingEnquiry = {
    fullName: 'Ramesh Kumar',
    phone: '9876543210',
    tripType: 'airport_drop',
    pickupLocation: 'Abbigere, Bangalore',
    dropLocation: 'Kempegowda International Airport Terminal 2',
    travelDate: '2026-10-25',
    pickupTime: '04:30 AM',
    passengers: 3,
    carCategory: 'premium_suv',
    specialNotes: 'Early morning flight, 2 large bags',
  };

  const url = generateBookingWhatsAppUrl(enquiry, 'RTT-20261025-9999');
  assert.match(url, /https:\/\/wa\.me\/918088372049\?text=/);
  const text = decodeURIComponent(url.split('?text=')[1]);
  assert.match(text, /RTT-20261025-9999/);
  assert.match(text, /Ramesh Kumar/);
  assert.match(text, /9876543210/);
  assert.match(text, /Abbigere, Bangalore/);
  assert.match(text, /Kempegowda International Airport/);
  assert.match(text, /Premium SUV \(Innova \/ Innova Crysta\)/);
  assert.match(text, /Early morning flight/);
});

test('validateBookingForm rejects invalid empty inputs', () => {
  const result = validateBookingForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.pickupLocation);
  assert.ok(result.errors.dropLocation);
  assert.ok(result.errors.travelDate);
  assert.ok(result.errors.pickupTime);
});

test('validateBookingForm accepts well-formed booking data', () => {
  const validData: Partial<BookingEnquiry> = {
    fullName: 'Priya Sharma',
    phone: '8088372049',
    tripType: 'local',
    pickupLocation: 'Jalahalli Cross, Bangalore',
    dropLocation: 'MG Road, Bangalore',
    travelDate: '2026-10-22',
    pickupTime: '10:00 AM',
    passengers: 2,
    carCategory: 'sedan',
  };
  const result = validateBookingForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('labels produce human readable names', () => {
  assert.equal(getTripTypeLabel('outstation_roundtrip'), 'Outstation Round Trip Cab Booking');
  assert.match(getTripTypeLabel('train_ticket'), /Train Ticket Booking Assistance/);
  assert.match(getTripTypeLabel('tour_package'), /Custom Tour Package/);
  assert.match(getCarCategoryLabel('premium_suv'), /Innova Crysta/);
});
