import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COMMON_POPULAR_ROUTES,
  calculateCategoryFare,
  getComparativeFareEstimates,
  generateFareInquiryWhatsAppUrl,
} from './fareEstimator.ts';

test('COMMON_POPULAR_ROUTES contains expected Bangalore airport and outstation routes', () => {
  assert.ok(COMMON_POPULAR_ROUTES.length >= 8);
  const labels = COMMON_POPULAR_ROUTES.map((r) => r.label);
  assert.ok(labels.some((l) => l.includes('Abbigere')));
  assert.ok(labels.some((l) => l.includes('Airport')));
  assert.ok(labels.some((l) => l.includes('Mysore')));
  assert.ok(labels.some((l) => l.includes('Coorg')));
});

test('calculateCategoryFare handles airport drops with realistic fares', () => {
  const result = calculateCategoryFare(34, 'airport_drop', 'sedan');
  assert.ok(result.minFare >= 1100 && result.minFare <= 1350);
  assert.ok(result.maxFare >= result.minFare);
  assert.equal(result.isFlatAirport, true);
  assert.match(result.notes, /Toll plaza/);
});

test('calculateCategoryFare handles local 8hr/80km package', () => {
  const result = calculateCategoryFare(80, 'local', 'sedan');
  assert.ok(result.minFare >= 1800);
  assert.match(result.billingBreakdown, /8 Hours \/ 80 Km Local Bangalore Package/);
});

test('calculateCategoryFare handles outstation roundtrip with minimum km threshold', () => {
  // Bangalore to Mysore is 145km, roundtrip is 290km (exceeds 250km min)
  const result = calculateCategoryFare(145, 'outstation_roundtrip', 'sedan');
  assert.equal(result.effectiveKm, 290);
  assert.ok(result.minFare > 3500);
  assert.equal(result.driverBatta, 400);

  // Short outstation roundtrip of 50km (100km total) should enforce 250km minimum billing
  const shortResult = calculateCategoryFare(50, 'outstation_roundtrip', 'sedan');
  assert.equal(shortResult.effectiveKm, 250);
});

test('getComparativeFareEstimates provides quotes for Sedan, SUV, and Premium MPV', () => {
  const quotes = getComparativeFareEstimates(145, 'outstation_roundtrip');
  assert.equal(quotes.length, 3);
  assert.equal(quotes[0].category, 'sedan');
  assert.equal(quotes[1].category, 'suv');
  assert.equal(quotes[2].category, 'premium_suv');

  // Verify pricing hierarchy: Sedan < SUV < Premium MPV
  assert.ok(quotes[0].minFare < quotes[1].minFare);
  assert.ok(quotes[1].minFare < quotes[2].minFare);
});

test('generateFareInquiryWhatsAppUrl formats details correctly', () => {
  const url = generateFareInquiryWhatsAppUrl({
    routeLabel: 'Abbigere to Airport',
    distanceKm: 34,
    tripType: 'airport_drop',
    carCategory: 'sedan',
    estimatedFareRange: '₹1,100 – ₹1,300',
  });
  assert.match(url, /^https:\/\/wa\.me\/918088372049\?text=/);
  const textParam = new URL(url).searchParams.get('text');
  assert.ok(textParam);
  assert.match(textParam, /Abbigere to Airport/);
  assert.match(textParam, /34 km/);
  assert.match(textParam, /₹1,100 – ₹1,300/);
});
