# RFC 0010 — Timeline

Status: Draft

## Purpose

Timeline is an ordered sequence of Events.

A Timeline does not store state.

A Timeline stores history.

The current state of a Grain can always be reconstructed
from its Timeline.

## Principles

- Timeline is immutable.
- Timeline preserves event order.
- Timeline never modifies events.
- Timeline only references events.
- Timeline belongs to exactly one Grain.

## Example

Document

↓

Created

↓

Renamed

↓

Moved

↓

Archived

## Invariants

- every Timeline belongs to one Grain
- every Event belongs to one Timeline
- event order is preserved
- events are immutable
- timeline is immutable
