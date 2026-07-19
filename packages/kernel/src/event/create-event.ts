import type { Grain } from '../grain';
import type { Identity } from '../identity';

import type { Event } from './event';
import type { EventType } from './event-type';

export function createEvent(
  identity: Identity,
  grain: Grain,
  type: EventType,
): Event {
  return Object.freeze({
    identity,
    grain,
    type,
    timestamp: new Date(),
  });
}
