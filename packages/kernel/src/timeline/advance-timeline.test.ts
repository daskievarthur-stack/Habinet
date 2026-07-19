import { describe, expect, it } from 'vitest';

import { createIdentity, createIdentityId } from '../identity';

import { createGrain } from '../grain';

import { createEvent } from '../event';
import { createNextEvent } from '../event/create-next-event';

import { createTimeline } from './create-timeline';
import { advanceTimeline } from './advance-timeline';

describe('advanceTimeline', () => {
  it('returns a new timeline', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(
      createIdentity(createIdentityId()),
      grain,
      'created',
    );

    const updated = createNextEvent(
      createIdentity(createIdentityId()),
      created,
      'updated',
    );

    const timeline = createTimeline(grain, created);

    const next = advanceTimeline(timeline, updated);

    expect(next).not.toBe(timeline);
  });

  it('updates latestEventId', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(
      createIdentity(createIdentityId()),
      grain,
      'created',
    );

    const updated = createNextEvent(
      createIdentity(createIdentityId()),
      created,
      'updated',
    );

    const timeline = createTimeline(grain, created);

    const next = advanceTimeline(timeline, updated);

    expect(next.latestEventId).toBe(updated.identity.id);
  });

  it('keeps the same grain', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(
      createIdentity(createIdentityId()),
      grain,
      'created',
    );

    const updated = createNextEvent(
      createIdentity(createIdentityId()),
      created,
      'updated',
    );

    const timeline = createTimeline(grain, created);

    const next = advanceTimeline(timeline, updated);

    expect(next.grain).toBe(grain);
  });

  it('does not modify original timeline', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(
      createIdentity(createIdentityId()),
      grain,
      'created',
    );

    const updated = createNextEvent(
      createIdentity(createIdentityId()),
      created,
      'updated',
    );

    const timeline = createTimeline(grain, created);

    advanceTimeline(timeline, updated);

    expect(timeline.latestEventId).toBe(created.identity.id);
  });
});
