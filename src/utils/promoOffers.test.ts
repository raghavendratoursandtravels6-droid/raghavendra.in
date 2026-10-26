import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FESTIVE_OFFERS,
  generatePromoWhatsAppUrl,
  getPromoSummary,
} from './promoOffers.ts';

test('FESTIVE_OFFERS contains at least 3 distinct seasonal tour packages', () => {
  assert.ok(FESTIVE_OFFERS.length >= 3);
  const ids = FESTIVE_OFFERS.map((o) => o.id);
  assert.ok(ids.includes('outstation_festive'));
  assert.ok(ids.includes('airport_saver'));
  assert.ok(ids.includes('pilgrimage_special'));
});

test('each offer has non-empty titles, promo code, and target parameters', () => {
  for (const offer of FESTIVE_OFFERS) {
    assert.ok(offer.title.length > 3);
    assert.ok(offer.code.length > 2);
    assert.ok(offer.targetTripType.length > 0);
    assert.ok(offer.targetDestination.length > 0);
    assert.ok(offer.whatsAppText.includes(offer.code));
  }
});

test('generatePromoWhatsAppUrl includes Sridhar phone and promo code in URL', () => {
  const offer = FESTIVE_OFFERS[0];
  const url = generatePromoWhatsAppUrl(offer);
  assert.match(url, /^https:\/\/wa\.me\/918088372049\?text=/);
  const text = decodeURIComponent(url.split('?text=')[1]);
  assert.match(text, /FESTIVE-OUTSTATION/);
  assert.match(text, /Sridhar/);
  assert.match(text, /8088372049/);
});

test('getPromoSummary formats title and subtitle', () => {
  const summary = getPromoSummary(FESTIVE_OFFERS[0]);
  assert.match(summary, /Festive Outstation Special/);
  assert.match(summary, /Mysore/);
});
