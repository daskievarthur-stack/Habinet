import type { Event } from '../event';

import type { Timeline } from './timeline';

export function advanceTimeline(timeline: Timeline, event: Event): Timeline {
  return Object.freeze({
    ...timeline,
    latestEventId: event.identity.id,
  });
}
