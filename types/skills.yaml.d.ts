interface Item {
  title: string
  id: string
  icon: string
  color: string
  description: string
}

interface Group {
  title: string
  id: string
  items: Item[]
}

interface Section {
  title: string
  id: string
  groups: Group[]
}

declare module "~/assets/skills.yaml" {
  const content: Section[]
  export default content
}
