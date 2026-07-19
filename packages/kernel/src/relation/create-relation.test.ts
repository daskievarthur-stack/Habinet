import { describe, expect, it } from 'vitest';

import { createIdentity, createIdentityId } from '../identity';

import { createGrain } from '../grain';

import { createRelation } from './create-relation';

describe('Relation invariants', () => {
  it('always has source', () => {
    const source = createGrain(createIdentity(createIdentityId()), 'document');

    const target = createGrain(createIdentity(createIdentityId()), 'document');

    const relation = createRelation(source, target, 'contains');

    expect(relation.source).toBe(source);
  });

  it('always has target', () => {
    const source = createGrain(createIdentity(createIdentityId()), 'document');

    const target = createGrain(createIdentity(createIdentityId()), 'document');

    const relation = createRelation(source, target, 'contains');

    expect(relation.target).toBe(target);
  });

  it('always has type', () => {
    const source = createGrain(createIdentity(createIdentityId()), 'document');

    const target = createGrain(createIdentity(createIdentityId()), 'document');

    const relation = createRelation(source, target, 'contains');

    expect(relation.type).toBe('contains');
  });

  it('is immutable', () => {
    const source = createGrain(createIdentity(createIdentityId()), 'document');

    const target = createGrain(createIdentity(createIdentityId()), 'document');

    const relation = createRelation(source, target, 'contains');

    expect(Object.isFrozen(relation)).toBe(true);
  });
});
