import { describe, expect, it } from 'vitest';

import { createIdentity } from './create-identity';

describe('createIdentity', () => {
  it('creates an immutable identity', () => {
    const identity = createIdentity('user-1');

    expect(identity.id).toBe('user-1');
    expect(Object.isFrozen(identity)).toBe(true);
  });
});
