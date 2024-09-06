import { describe, it, expect } from "vitest";
import skills from "~/assets/skills.yaml";
import techs from "~/assets/techs.yaml";

describe.concurrent("Skills component", () => {
  it("should not have duplicate item ids", () => {
    [skills, techs].forEach((section: any) => {
      const ids = section.items.map((item: any) => item.id);
      const duplicateIds = ids.filter(
        (id: string, index: number) => ids.indexOf(id) !== index,
      );
      expect(duplicateIds).toStrictEqual([]);
    });
  });

  it("should not have items with a group that is not listed in groups", () => {
    [skills, techs].forEach((section: any) => {
      const groupIds = section.groups.map((group: any) => group.id);
      const invalidItems = section.items.filter(
        (item: any) => !groupIds.includes(item.group),
      );
      const invalidGroups = invalidItems.map((item: any) => item.group);
      expect(invalidGroups).toStrictEqual([]);
    });
  });
});
