import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SAFETY_PILLARS,
  SAFETY_STATS,
  generateSafetyWhatsAppUrl,
  getSafetyPillarById,
} from './safetyProtocols.ts';

test('SAFETY_PILLARS contains all essential safety categories', () => {
  assert.equal(SAFETY_PILLARS.length, 4);
  const ids = SAFETY_PILLARS.map((p) => p.id);
  assert.ok(ids.includes('sanitization'));
  assert.ok(ids.includes('driver-verification'));
  assert.ok(ids.includes('support-protocols'));
  assert.ok(ids.includes('women-family-safety'));
});

test('Each safety pillar has non-empty descriptions and key points', () => {
  for (const pillar of SAFETY_PILLARS) {
    assert.ok(pillar.title.length > 5);
    assert.ok(pillar.subtitle.length > 5);
    assert.ok(pillar.description.length > 20);
    assert.ok(pillar.keyPoints.length >= 3);
    assert.ok(pillar.badge.length > 2);
  }
});

test('generateSafetyWhatsAppUrl creates correct URL without topic', () => {
  const url = generateSafetyWhatsAppUrl();
  assert.match(url, /^https:\/\/wa\.me\/918088372049\?text=/);
  const textParam = new URL(url).searchParams.get('text');
  assert.match(textParam || '', /Safety & Hygiene standards/);
  assert.match(textParam || '', /Raghavendra Tours & Travels/);
});

test('generateSafetyWhatsAppUrl includes custom topic when provided', () => {
  const url = generateSafetyWhatsAppUrl('child seat and sanitization');
  const textParam = new URL(url).searchParams.get('text');
  assert.match(textParam || '', /regarding child seat and sanitization/);
});

test('getSafetyPillarById finds existing pillar and handles missing gracefully', () => {
  const pillar = getSafetyPillarById('sanitization');
  assert.ok(pillar);
  assert.equal(pillar?.id, 'sanitization');

  const missing = getSafetyPillarById('non-existent');
  assert.equal(missing, undefined);
});

test('SAFETY_STATS defines 4 core trust metrics', () => {
  assert.equal(SAFETY_STATS.length, 4);
  for (const stat of SAFETY_STATS) {
    assert.ok(stat.metric.length > 0);
    assert.ok(stat.label.length > 0);
  }
});
