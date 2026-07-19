import type { Grain } from '../grain';
import type { RelationType } from './relation-type';

export interface Relation {
  readonly source: Grain;
  readonly target: Grain;
  readonly type: RelationType;
}
