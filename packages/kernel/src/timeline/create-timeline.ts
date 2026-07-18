import type { Event } from "../event";
import type { Grain } from "../grain";

import type { Timeline } from "./timeline";

export function createTimeline(
  grain: Grain,
  firstEvent: Event,
): Timeline {
  return Object.freeze({
    grain,
    latestEventId: firstEvent.identity.id,
  });
}
