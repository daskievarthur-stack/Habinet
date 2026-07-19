import { describe, expect, it } from "vitest";

import { createCapability } from "./create-capability";

describe("Capability invariants", () => {
  it("always has name", () => {
    const capability = createCapability("rename");

    expect(capability.name).toBeDefined();
  });

  it("stores provided name", () => {
    const capability = createCapability("rename");

    expect(capability.name).toBe("rename");
  });

  it("returns frozen object", () => {
    const capability = createCapability("rename");

    expect(Object.isFrozen(capability)).toBe(true);
  });

  it("creates independent capabilities", () => {
    const first = createCapability("rename");
    const second = createCapability("delete");

    expect(first).not.toBe(second);
    expect(first.name).toBe("rename");
    expect(second.name).toBe("delete");
  });
});
