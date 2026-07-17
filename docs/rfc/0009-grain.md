# RFC-0009 — Grain

Status: Draft

---

## Problem

Modern software stores different kinds of objects.

Emails.
Documents.
Tasks.
Calendar events.
Notes.
Contacts.
Chats.

Every system invents a different model for each object.

As a result, the system becomes fragmented.

Objects cannot naturally relate to one another.

Knowledge becomes isolated.

---

## Proposal

Habinet introduces one universal entity:

**Grain.**

A Grain is the smallest independent unit of knowledge.

Everything stored inside Habinet is a Grain.

Examples:

- Email
- Document
- Note
- Task
- Person
- Company
- Meeting
- Image
- Video
- Message
- AI Conversation
- Calendar Event

These are not different storage models.

They are different kinds of Grain.

---

## Responsibilities

Grain is responsible for:

- existing;
- having an identity;
- having a type.

Nothing more.

---

## Non-Responsibilities

Grain does not store:

- relations;
- history;
- permissions;
- timeline;
- behavior.

Those belong to other kernel modules.

---

## Minimal Model

Every Grain consists of:

- Identity
- Grain Type

Everything else belongs elsewhere.

---

## Philosophy

Identity answers:

> Who is this?

Grain answers:

> What is this?

Relation answers:

> How is it connected?

Event answers:

> What happened?

Timeline answers:

> When did it happen?

Together these concepts form the kernel of Habinet.

---

## Consequences

Every feature in Habinet becomes a composition of the same primitives.

Mail is Grain.

Calendar is Grain.

Documents are Grain.

AI Conversations are Grain.

Everything becomes one connected knowledge graph.
