import type { Grain } from '../grain';
import type { Identity, IdentityId } from '../identity';

import type { EventType } from './event-type';

export interface Event {
  readonly identity: Identity;

  readonly previousEventId?: IdentityId;

  readonly grain: Grain;

  readonly type: EventType;

  readonly timestamp: Date;
}
