import type { Identity } from '../identity';
import type { RelationType } from './relation-type';

export interface Relation {
  readonly source: Identity;
  readonly target: Identity;
  readonly type: RelationType;
}
