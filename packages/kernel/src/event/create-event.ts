import type { Grain } from '../grain';
import type { Event } from './event';
import type { EventType } from './event-type';

export function createEvent(grain: Grain, type: EventType): Event {
  return Object.freeze({
    grain,
    type,
    timestamp: new Date(),
  });
}
