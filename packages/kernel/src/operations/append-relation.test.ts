import { describe, expect, it } from "vitest";

import {
  createIdentity,
  createIdentityId,
} from "../identity";

import {
  createGrain,
} from "../grain";

import {
  appendRelation,
} from "./append-relation";

describe("appendRelation", () => {
  it("creates relation", () => {
    const source = createGrain(
      createIdentity(createIdentityId()),
      "document",
    );

    const target = createGrain(
      createIdentity(createIdentityId()),
      "note",
    );

    const relation = appendRelation({
      source,
      target,
      type: "contains",
    });

    expect(relation.type).toBe("contains");
  });

  it("preserves source grain", () => {
    const source = createGrain(
      createIdentity(createIdentityId()),
      "document",
    );

    const target = createGrain(
      createIdentity(createIdentityId()),
      "note",
    );

    const relation = appendRelation({
      source,
      target,
      type: "contains",
    });

    expect(relation.source).toBe(source);
  });

  it("preserves target grain", () => {
    const source = createGrain(
      createIdentity(createIdentityId()),
      "document",
    );

    const target = createGrain(
      createIdentity(createIdentityId()),
      "note",
    );

    const relation = appendRelation({
      source,
      target,
      type: "contains",
    });

    expect(relation.target).toBe(target);
  });

  it("creates immutable relation", () => {
    const source = createGrain(
      createIdentity(createIdentityId()),
      "document",
    );

    const target = createGrain(
      createIdentity(createIdentityId()),
      "note",
    );

    const relation = appendRelation({
      source,
      target,
      type: "contains",
    });

    expect(Object.isFrozen(relation)).toBe(true);
  });
});