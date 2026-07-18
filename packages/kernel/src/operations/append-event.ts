import {
  createNextEvent,
  advanceTimeline,
} from "..";

import type { EventType } from "../event";
import type { Event } from "../event";
import type { Identity } from "../identity";
import type { Timeline } from "../timeline";

export interface AppendEventInput {
  readonly timeline: Timeline;
  readonly previousEvent: Event;
  readonly identity: Identity;
  readonly type: EventType;
}

export interface AppendEventResult {
  readonly event: Event;
  readonly timeline: Timeline;
}

export function appendEvent(
  input: AppendEventInput,
): AppendEventResult {
  const event = createNextEvent(
  input.identity,
  input.previousEvent,
  input.type,
);

  const timeline = advanceTimeline(
    input.timeline,
    event,
  );

  return {
    event,
    timeline,
  };
}