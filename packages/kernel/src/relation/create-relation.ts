import type { Grain } from "../grain";
import type { Relation } from "./relation";
import type { RelationType } from "./relation-type";

export function createRelation(
  source: Grain,
  target: Grain,
  type: RelationType,
): Relation {
  return Object.freeze({
    source,
    target,
    type,
  });
}
