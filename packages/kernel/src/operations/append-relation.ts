import type { Grain } from "../grain";
import {
  createRelation,
  type Relation,
  type RelationType,
} from "../relation";

export interface AppendRelationInput {
  source: Grain;
  target: Grain;
  type: RelationType;
}

export function appendRelation(
  input: AppendRelationInput,
): Relation {
  return createRelation(
    input.source,
    input.target,
    input.type,
  );
}