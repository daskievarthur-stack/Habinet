import type { IdentityId } from './identity-id';

export function createIdentityId(): IdentityId {
  return crypto.randomUUID();
}
