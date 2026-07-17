import { describe, expect, it } from 'vitest';

import { createIdentity, createIdentityId } from '../identity';

import { createRelation } from './create-relation';

describe('Relation invariants', () => {
  it('is immutable', () => {
    const source = createIdentity(createIdentityId());
    const target = createIdentity(createIdentityId());

    const relation = createRelation(source, target, 'contains');

    expect(Object.isFrozen(relation)).toBe(true);
  });

  it('always has source', () => {
    const source = createIdentity(createIdentityId());
    const target = createIdentity(createIdentityId());

    const relation = createRelation(source, target, 'contains');

    expect(relation.source).toBe(source);
  });

  it('always has target', () => {
    const source = createIdentity(createIdentityId());
    const target = createIdentity(createIdentityId());

    const relation = createRelation(source, target, 'contains');

    expect(relation.target).toBe(target);
  });

  it('always has relation type', () => {
    const source = createIdentity(createIdentityId());
    const target = createIdentity(createIdentityId());

    const relation = createRelation(source, target, 'contains');

    expect(relation.type).toBe('contains');
  });
});
