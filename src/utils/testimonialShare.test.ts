import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateTestimonialShareText,
  generateTestimonialWhatsAppShareUrl,
  generateServiceRecommendationShareText,
  generateServiceRecommendationWhatsAppShareUrl,
} from './testimonialShare.ts';
import type { TestimonialShareData } from './testimonialShare.ts';

const mockTestimonial: TestimonialShareData = {
  id: 'rev-1',
  customerName: 'Suresh R.',
  travelRoute: 'Hebbal to Kempegowda Airport (BLR T2)',
  serviceType: 'Airport Drop',
  vehicleUsed: 'Sedan (Dzire)',
  rating: 5,
  comment: 'Punctual early morning 4:30 AM pickup from Hebbal. Driver arrived 10 minutes prior.',
};

test('generateTestimonialShareText includes customer review details, phone, and domain', () => {
  const text = generateTestimonialShareText(mockTestimonial);
  assert.match(text, /Raghavendra Tours & Travels/);
  assert.match(text, /Suresh R\./);
  assert.match(text, /Hebbal to Kempegowda Airport/);
  assert.match(text, /Punctual early morning 4:30 AM pickup/);
  assert.match(text, /8088372049/);
  assert.match(text, /https:\/\/www\.raghavendratravels\.in/);
  assert.match(text, /⭐⭐⭐⭐⭐/);
});

test('generateTestimonialWhatsAppShareUrl encodes share text properly', () => {
  const url = generateTestimonialWhatsAppShareUrl(mockTestimonial);
  assert.match(url, /^https:\/\/api\.whatsapp\.com\/send\?text=/);
  const textParam = new URL(url).searchParams.get('text');
  assert.ok(textParam);
  assert.match(textParam, /Suresh R\./);
  assert.match(textParam, /8088372049/);
});

test('generateServiceRecommendationShareText contains bullet points and contact info', () => {
  const text = generateServiceRecommendationShareText();
  assert.match(text, /Looking for a reliable cab in Bangalore/);
  assert.match(text, /Raghavendra Tours & Travels/);
  assert.match(text, /8088372049/);
  assert.match(text, /https:\/\/www\.raghavendratravels\.in/);
  assert.match(text, /24x7 Airport Transfers/);
});

test('generateServiceRecommendationWhatsAppShareUrl produces valid share URL', () => {
  const url = generateServiceRecommendationWhatsAppShareUrl();
  assert.match(url, /^https:\/\/api\.whatsapp\.com\/send\?text=/);
  const textParam = new URL(url).searchParams.get('text');
  assert.ok(textParam);
  assert.match(textParam, /Raghavendra Tours & Travels/);
});
