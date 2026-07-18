import { describe, expect, it } from 'vitest';

import { createIdentity, createIdentityId } from '../identity';

import { createGrain } from '../grain';

import { createTimeline } from './create-timeline';

describe('Timeline invariants', () => {
  it('always belongs to one grain', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const timeline = createTimeline(grain);

    expect(timeline.grain).toBe(grain);
  });

  it('starts empty', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const timeline = createTimeline(grain);

    expect(timeline.latestEventId).toBeUndefined();
  });
});
