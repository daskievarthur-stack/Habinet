# RFC 0013 — advanceTimeline

Status: Draft

## Purpose

Returns a new Timeline pointing to a newer Event.

## Input

- Timeline
- Event

## Output

- new Timeline

## Invariants

- original Timeline is unchanged
- new Timeline belongs to the same Grain
- lastEventId becomes the supplied Event identity
