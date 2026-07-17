# Kernel Specification

**Status:** Draft v0.1

---

# Purpose

The Habinet Kernel is the smallest independent part of the system.

Its purpose is to preserve the evolution of human understanding.

The kernel does not implement applications.

Applications are built on top of the kernel.

---

# Scope

The kernel is responsible for:

- identity
- history
- events
- relations
- projections
- consistency

The kernel is NOT responsible for:

- Mail
- Calendar
- Notes
- Chat
- Documents
- Whiteboard
- AI

---

# Design Principles

The kernel must be:

- deterministic
- immutable
- explainable
- composable
- testable
- independent

---

# Core Concepts

## Identity

Represents a stable identity.

Examples:

- person
- organization
- workspace
- AI agent

---

## Event

Represents something that happened.

Events are immutable.

The kernel never rewrites history.

---

## Event Store

Stores events.

Supports append-only operations.

Never mutates existing history.

---

## Projection

A projection is a way of interpreting history.

Examples:

- Mail
- Notes
- Calendar
- Tasks
- Documents

The kernel does not know these projections.

---

## Grain

A Grain is a coherent unit reconstructed from events.

It is not the source of truth.

Events are.

---

## Relation

Represents semantic links between Grains.

Examples:

- supports
- contradicts
- references
- refines
- derives-from

---

## Timeline

Represents chronological evolution.

Everything exists within time.

---

# Invariants

These rules must never be violated.

## Rule 1

History is immutable.

## Rule 2

Every event belongs to an identity.

## Rule 3

Every event has a timestamp.

## Rule 4

The source of truth is history.

## Rule 5

Applications are projections.

---

# Development Order

The kernel will be implemented in the following order.

1. Identity
2. Event
3. Event Store
4. Projection Engine
5. Grain
6. Relation
7. Timeline
8. Query API

---

# Scenario 0001

## Birth of an Idea

A person has an idea.

The idea is written down.

The idea evolves.

Previous history is preserved.

A projection reflects the latest understanding.

History remains unchanged.

---

# Open Questions

The following questions remain intentionally open.

- What is the exact definition of a Grain?
- Can multiple Grains emerge from the same events?
- Is Context stored or derived?
- Should Timeline be a projection?
- Which relations are fundamental?

These questions are expected to evolve together with the kernel.

---

# Philosophy

The kernel is not built around applications.

The kernel is built around history.

Applications are temporary.

History is permanent.
