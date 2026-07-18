import { describe, expect, it } from 'vitest';

import { createIdentity, createIdentityId } from '../identity';

import { createGrain } from '../grain';

import { createEvent } from './create-event';
import { createNextEvent } from './create-next-event';

describe('createNextEvent', () => {
  it('creates a new event', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(createIdentity(createIdentityId()), grain, 'created');

    const renamed = createNextEvent(createIdentity(createIdentityId()), created, 'updated');

    expect(renamed.type).toBe('updated');
  });

  it('inherits grain', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(createIdentity(createIdentityId()), grain, 'created');

    const renamed = createNextEvent(createIdentity(createIdentityId()), created, 'updated');

    expect(renamed.grain).toBe(grain);
  });

  it('references previous event', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(createIdentity(createIdentityId()), grain, 'created');

    const renamed = createNextEvent(createIdentity(createIdentityId()), created, 'updated');

    expect(renamed.previousEventId).toBe(created.identity.id);
  });

  it('does not modify previous event', () => {
    const grain = createGrain(createIdentity(createIdentityId()), 'document');

    const created = createEvent(createIdentity(createIdentityId()), grain, 'created');

    createNextEvent(createIdentity(createIdentityId()), created, 'updated');

    expect(created.type).toBe('created');
  });
});
