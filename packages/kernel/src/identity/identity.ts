import type { IdentityId } from './identity-id';

/**
 * Stable identity of any entity in the Habinet kernel.
 *
 * Identity never changes.
 * All other data may change over time.
 */
export interface Identity {
  readonly id: IdentityId;
}
