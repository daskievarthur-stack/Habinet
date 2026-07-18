import type { Grain } from '../grain';
import type { EventType } from './event-type';

export interface Event {
  readonly grain: Grain;
  readonly type: EventType;
  readonly timestamp: Date;
}
