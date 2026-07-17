# RFC 0008 — Identity

Status: Draft

---

## Problem

The kernel must be able to distinguish one entity from another.

Names can change.

Properties can change.

State can change.

Identity must remain stable.

---

## Proposal

Identity is a permanent identifier assigned exactly once.

Identity never changes.

Identity has no business meaning.

Identity exists only to preserve continuity.

---

## Invariants

1. Identity is immutable.
2. Identity is globally unique.
3. Identity never depends on user data.
4. Identity is assigned once.
5. Identity cannot be reused.

---

## Examples

Same identity:

- person changes name
- document changes title
- task changes status

Different identity:

- new document
- copied note
- another user

---

## Open Questions

- UUID or ULID?
- Client-generated or server-generated?
- Human-readable aliases?
