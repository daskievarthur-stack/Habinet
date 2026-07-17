# Primitive Specification — Relation

Status: Draft

---

# Purpose

Relation connects two existing Grains.

Relation does not store meaning.

It represents the existence of a connection.

Meaning belongs to relation kind.

---

# Question

Relation answers exactly one question.

> How are two Grains connected?

---

# Responsibilities

A Relation is responsible for:

- connecting exactly two Grains;
- having one relation kind;
- existing independently of UI;
- remaining immutable.

---

# Non-Responsibilities

Relation is NOT responsible for:

- attributes;
- permissions;
- presentation;
- storage;
- ordering;
- history.

---

# Invariants

1. Every Relation connects exactly two Grains.

2. Both Grains must exist.

3. Relation has exactly one kind.

4. Relation never changes after creation.

5. Multiple Relations between the same Grains are allowed.

---

# Lifecycle

Created

Active

Archived

Deleted (logical)

Destroyed (physical, exceptional)

Deletion is represented as an Event.

---

# Minimal API

create()

exists()

archive()

restore()

---

# Laws

No Grain exists in isolation.

Knowledge emerges from Relations.

Context is derived from Relations.

---

# Future

Relations may later support:

- direction
- weights
- temporal validity
- semantic constraints
