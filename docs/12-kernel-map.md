# Habinet Kernel Map

Status: Draft

---

# Layer 0 — Identity

Identity answers one question.

> Who or what is this?

Everything else depends on Identity.

---

# Layer 1 — Grain

Grain represents existence.

Question:

> What exists?

Depends on:

- Identity

---

# Layer 2 — Relation

Relation connects existing Grains.

Question:

> How are entities connected?

Depends on:

- Identity
- Grain

---

# Layer 3 — Event

Event represents change.

Question:

> What happened?

Depends on:

- Identity
- Grain
- Relation

---

# Layer 4 — Timeline

Timeline orders Events.

Question:

> When did it happen?

Depends on:

- Event

---

# Layer 5 — Capability

Capability defines permissions.

Question:

> Who may perform an action?

Depends on:

- Identity
- Grain
- Relation

---

# Layer 6 — View

View projects data.

Question:

> How should information appear?

Depends on:

- Grain
- Relation
- Timeline

---

# Layer 7 — Context

Context assembles everything.

Question:

> What is relevant right now?

Depends on:

- Identity
- Grain
- Relation
- Event
- Timeline
- Capability
- View

---

# Dependency Rules

Allowed:

Identity
↓

Grain
↓

Relation
↓

Event
↓

Timeline

Capability may depend on previous layers.

View may depend on previous layers.

Context may depend on everything.

---

Forbidden

Lower layers must never depend on higher layers.

Identity must not know about Grain.

Grain must not know about Relation.

Relation must not know about Event.

Event must not know about Timeline.

Timeline must not know about View.

Kernel dependencies always point downward.
