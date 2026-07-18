import { describe, expect, it } from 'vitest';

import { createIdentity, createIdentityId } from '../identity';

import { createGrain } from '../grain';

import { createEvent } from './create-event';

describe('Event invariants', () => {
  it('is immutable', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const event = createEvent(grain, 'created');

    expect(Object.isFrozen(event)).toBe(true);
  });

  it('always belongs to a grain', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const event = createEvent(grain, 'created');

    expect(event.grain).toBe(grain);
  });

  it('always has an event type', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const event = createEvent(grain, 'created');

    expect(event.type).toBe('created');
  });

  it('always has a timestamp', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const event = createEvent(grain, 'created');

    expect(event.timestamp).toBeInstanceOf(Date);
  });
});
