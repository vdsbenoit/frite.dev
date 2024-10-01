import { describe, it, expect } from "vitest"
import skills from "~/assets/skills.yaml"
import type { SkillSection, SkillGroup, SkillItem } from "~/types/skills.interfaces.ts"

describe.concurrent("Skills component", () => {
  it("should not have duplicate item ids", () => {
    const ids: string[] = skills
      .flatMap((subSection: SkillSection) => subSection.groups)
      .flatMap((group: SkillGroup) => group.items)
      .map((item: SkillItem) => item.id)
    const duplicateIds = ids.filter((id: string, index: number) => ids.indexOf(id) !== index)
    expect(duplicateIds).toStrictEqual([])
  })
})
