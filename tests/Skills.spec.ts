import { describe, it, expect } from "vitest";
import skills from "~/assets/skills.yaml";

describe.concurrent("Skills component", () => {
  it("should not have duplicate item ids", () => {
    const ids: string[] = skills
      .flatMap((subSection: any) => subSection.groups)
      .flatMap((group: any) => group.items)
      .map((item: any) => item.id);
    const duplicateIds = ids.filter(
      (id: string, index: number) => ids.indexOf(id) !== index,
    );
    expect(duplicateIds).toStrictEqual([]);
  });
});
