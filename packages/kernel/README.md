# Habinet Kernel

The Habinet Kernel is the domain engine.

The kernel knows nothing about:

- UI
- Applications
- Storage
- Databases
- Network

The kernel knows only domain concepts.

Everything is modeled as immutable domain objects connected by history.

---

## Domain Objects

- Identity
- Grain
- Relation
- Event
- Timeline
- Capability

---

## Operations

- appendEvent()
- appendRelation()
- advanceTimeline()

---

## Development

```bash
pnpm typecheck
pnpm test
```
