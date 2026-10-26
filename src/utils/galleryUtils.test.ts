import test from 'node:test';
import assert from 'node:assert/strict';
import {
  VEHICLE_GALLERY_ITEMS,
  getNextSlideIndex,
  getPrevSlideIndex,
  filterGalleryItems,
  generateCarInquiryWhatsAppUrl,
} from './galleryUtils.ts';

test('VEHICLE_GALLERY_ITEMS contains Innova Crysta, Ertiga, and Sedan', () => {
  assert.ok(VEHICLE_GALLERY_ITEMS.length >= 3);
  const names = VEHICLE_GALLERY_ITEMS.map((c) => c.modelName.toLowerCase());
  assert.ok(names.some((n) => n.includes('innova')));
  assert.ok(names.some((n) => n.includes('ertiga')));
  assert.ok(names.some((n) => n.includes('sedan') || n.includes('dzire')));
});

test('Each gallery vehicle has non-empty imageSrc, specs, and features', () => {
  for (const car of VEHICLE_GALLERY_ITEMS) {
    assert.ok(car.imageSrc.length > 5);
    assert.ok(car.altText.length > 10);
    assert.ok(car.seating.length > 0);
    assert.ok(car.luggage.length > 0);
    assert.ok(car.acType.length > 0);
    assert.ok(car.features.length >= 3);
  }
});

test('getNextSlideIndex loops around correctly', () => {
  assert.equal(getNextSlideIndex(0, 5), 1);
  assert.equal(getNextSlideIndex(4, 5), 0);
  assert.equal(getNextSlideIndex(0, 0), 0);
});

test('getPrevSlideIndex loops around correctly in reverse', () => {
  assert.equal(getPrevSlideIndex(2, 5), 1);
  assert.equal(getPrevSlideIndex(0, 5), 4);
  assert.equal(getPrevSlideIndex(0, 0), 0);
});

test('filterGalleryItems filters by car category and supports all', () => {
  const all = filterGalleryItems(VEHICLE_GALLERY_ITEMS, 'all');
  assert.equal(all.length, VEHICLE_GALLERY_ITEMS.length);

  const sedans = filterGalleryItems(VEHICLE_GALLERY_ITEMS, 'sedan');
  assert.ok(sedans.length > 0);
  assert.ok(sedans.every((c) => c.category === 'sedan'));

  const innovas = filterGalleryItems(VEHICLE_GALLERY_ITEMS, 'premium_suv');
  assert.ok(innovas.length > 0);
  assert.ok(innovas.every((c) => c.category === 'premium_suv'));
});

test('generateCarInquiryWhatsAppUrl generates valid WhatsApp link with model name', () => {
  const url = generateCarInquiryWhatsAppUrl('Toyota Innova Crysta');
  assert.match(url, /^https:\/\/wa\.me\/918088372049\?text=/);
  const textParam = new URL(url).searchParams.get('text');
  assert.ok(textParam);
  assert.match(textParam, /Toyota Innova Crysta/);
  assert.match(textParam, /raghavendratravels\.in/);
});
