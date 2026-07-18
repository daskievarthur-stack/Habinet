import type { Identity } from '../identity';

import { createEvent } from './create-event';
import type { Event } from './event';
import type { EventType } from './event-type';

export function createNextEvent(identity: Identity, previous: Event, type: EventType): Event {
  const event = createEvent(identity, previous.grain, type);

  return Object.freeze({
    ...event,
    previousEventId: previous.identity.id,
  });
}
