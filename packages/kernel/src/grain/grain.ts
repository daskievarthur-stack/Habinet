import type { Identity } from '../identity';
import type { GrainKind } from './grain-kind';

export interface Grain {
  readonly identity: Identity;
  readonly kind: GrainKind;
}
