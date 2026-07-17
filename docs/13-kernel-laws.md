# Kernel Laws

Status: Living Document

---

# Law 1

Everything is a Grain.

---

# Law 2

Every Grain has exactly one Identity.

Identity never changes.

---

# Law 3

Grains are immutable.

Changes are represented as Events.

---

# Law 4

Relations connect Grains.

Relations never own data.

---

# Law 5

Events describe history.

History is append-only.

Events never rewrite the past.

---

# Law 6

Timeline orders Events.

Timeline never changes Event contents.

---

# Law 7

Capabilities grant actions.

Capabilities never contain business logic.

---

# Law 8

Views never own data.

Views project existing knowledge.

---

# Law 9

Context is assembled.

Context is never stored as a primitive.

---

# Law 10

Kernel primitives are independent.

Each primitive has one responsibility.

---

# Law 11

Kernel is deterministic.

Given identical input,
Kernel produces identical output.

---

# Law 12

Lower layers never depend on higher layers.

Identity

↓

Grain

↓

Relation

↓

Event

↓

Timeline

Capability

↓

View

↓

Context

Dependencies only move downward.

---

# Law 13

Kernel never depends on UI.

No React.

No HTML.

No CSS.

No Framework logic.

---

# Law 14

Kernel never depends on storage.

Database adapters belong outside the Kernel.

---

# Law 15

Kernel describes reality.

Applications describe behavior.
