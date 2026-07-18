import { describe, expect, it } from "vitest";

import {
  createIdentity,
  createIdentityId,
  createGrain,
  createEvent,
  createTimeline,
} from "../..";

import { appendEvent } from "./append-event";

describe("appendEvent", () => {
  it("creates next event and advances timeline", () => {
    const grain = createGrain(
      createIdentity(createIdentityId()),
      "document",
    );

    const author = createIdentity(createIdentityId());

    const created = createEvent(
      author,
      grain,
      "created",
    );

    const timeline = createTimeline(
      grain,
      created,
    );

    const result = appendEvent({
      timeline,
      previousEvent: created,
      identity: author,
      type: "updated",
    });

    expect(result.event.previousEventId).toBe(
      created.identity.id,
    );

    expect(result.timeline.latestEventId).toBe(
      result.event.identity.id,
    );
  });
});