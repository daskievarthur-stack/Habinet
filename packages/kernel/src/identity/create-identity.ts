import type { Identity } from "./identity";
import type { IdentityId } from "./identity-id";

/**
 * Creates a new immutable identity.
 */
export function createIdentity(id: IdentityId): Identity {
  return Object.freeze({
    id,
  });
}