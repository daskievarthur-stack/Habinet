# RFC 0016 — Append Relation Operation

## Status

Draft

---

## Goal

Provide a single kernel operation that creates a new relation between two grains.

---

## Motivation

Creating relations should be treated as a first-class kernel operation rather than requiring callers to manually construct relation objects.

This keeps all mutations consistent and provides a stable API for future stores.

---

## API

```ts
appendRelation(input): Relation
```

---

## Input

- source grain
- target grain
- relation type

---

## Output

A new immutable Relation.

---

## Invariants

- source cannot equal target
- relation is immutable
- relation type is valid
- grains remain unchanged

---

## Future

Later this operation will become transactional inside KernelStore.
