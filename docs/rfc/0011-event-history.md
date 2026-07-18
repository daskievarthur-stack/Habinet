# RFC 0011 — Event History

Status: Draft

## Purpose

History grows only by appending events.

Past events are never modified.

Timeline only updates its latest event pointer.

## Operation

appendEvent()

Input

- Timeline
- Event

Output

- Updated Timeline

## Invariants

- Event is immutable.
- Existing events never change.
- Timeline always points to the newest event.
- previousEventId always references the previous event.
- History is append-only.
