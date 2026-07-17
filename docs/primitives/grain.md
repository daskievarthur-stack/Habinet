# Primitive Specification — Grain

Status: Draft

---

# Purpose

Grain is the fundamental entity of the Habinet universe.

Every object that exists inside Habinet is represented by exactly one Grain.

Grain represents existence.

It does not represent behavior.

It does not represent presentation.

It does not represent permissions.

---

# Question

Grain answers exactly one question.

> What exists?

---

# Responsibilities

A Grain is responsible for:

- existing;
- having a permanent identity;
- belonging to exactly one kind.

---

# Non-Responsibilities

A Grain is NOT responsible for:

- attributes;
- relations;
- permissions;
- history;
- synchronization;
- user interface;
- storage implementation.

---

# Invariants

The following statements must always be true.

1. Every Grain has exactly one Identity.

2. Identity never changes.

3. Grain existence is independent of attributes.

4. Grain existence is independent of relations.

5. Grain existence is independent of views.

6. Every Grain has one Kind.

---

# Lifecycle

A Grain may be:

Created

Active

Archived

Deleted (logical)

Destroyed (physical, exceptional)

Deletion is represented as an Event.

---

# Relationships

Identity identifies Grain.

Relations connect Grains.

Events happen to Grains.

Timeline orders Events.

Capabilities define permissions over Grains.

Views present Grains.

Context is derived from all of the above.

---

# Minimal API

create()

exists()

archive()

restore()

---

# Laws

Everything that exists is a Grain.

Nothing exists without Identity.

Nothing happens outside a Grain.

Context is derived, not stored.

---

# Future

This specification intentionally stays minimal.

Additional behavior should emerge through composition rather than expanding Grain itself.
