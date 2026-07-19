import type { Capability } from './capability';
import type { CapabilityName } from './capability-name';

export function createCapability(name: CapabilityName): Capability {
  return Object.freeze({
    name,
  });
}
