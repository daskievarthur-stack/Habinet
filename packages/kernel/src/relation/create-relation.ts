import type { Identity } from '../identity';
import type { Relation } from './relation';
import type { RelationType } from './relation-type';

export function createRelation(source: Identity, target: Identity, type: RelationType): Relation {
  return Object.freeze({
    source,
    target,
    type,
  });
}
