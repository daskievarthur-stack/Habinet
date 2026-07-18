import { describe, expect, it } from 'vitest';

import { createIdentity, createIdentityId } from '../identity';

import { createGrain } from '../grain';

import { createTimeline } from './create-timeline';

import { createEvent } from "../event";

describe('Timeline invariants', () => {
  it('always belongs to one grain', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(
  createIdentity(createIdentityId()),
  grain,
  "created",
);

const timeline = createTimeline(
  grain,
  created,
);

    expect(timeline.grain).toBe(grain);
  });

  it("starts from first event", () => {
  const grain = createGrain(
    createIdentity(createIdentityId()),
    "document",
  );

  const created = createEvent(
    createIdentity(createIdentityId()),
    grain,
    "created",
  );

  const timeline = createTimeline(
    grain,
    created,
  );

  expect(timeline.latestEventId).toBe(
    created.identity.id,
  );
});
});
