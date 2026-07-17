import { describe, expect, it } from 'vitest';

import { createIdentity, createIdentityId } from '../identity';

import { createGrain } from './create-grain';

describe('createGrain', () => {
  it('creates an immutable grain', () => {
    const id = createIdentityId();
    const identity = createIdentity(id);

    const grain = createGrain(identity, 'document');

    expect(grain.identity).toBe(identity);
    expect(grain.kind).toBe('document');
    expect(Object.isFrozen(grain)).toBe(true);
  });
});
