# RFC 0012 — createNextEvent

Status: Draft

## Purpose

Creates a new Event that extends an existing history.

The previous Event is never modified.

## Input

- previous Event
- event type

## Output

- new Event

## Invariants

- previous event remains unchanged
- new event references previousEventId
- new event belongs to the same Grain
- history remains append-only
