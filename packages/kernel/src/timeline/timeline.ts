import type { Grain } from '../grain';
import type { IdentityId } from '../identity';

export interface Timeline {
  readonly grain: Grain;

  readonly latestEventId: IdentityId;
}
