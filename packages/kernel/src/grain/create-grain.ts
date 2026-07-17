import type { Identity } from '../identity';
import type { Grain } from './grain';
import type { GrainKind } from './grain-kind';

export function createGrain(identity: Identity, kind: GrainKind): Grain {
  return Object.freeze({
    identity,
    kind,
  });
}
