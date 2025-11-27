import type { Skill } from "../types/Skill";

const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    actionNb: 7,
    tags: ["Frontend", "JavaScript", "ES2023"],
    recentProgress: "+1 cette semaine",
  },
  {
    id: 2,
    name: "Communication d’équipe",
    actionNb: 12,
    tags: ["Collaboration", "Soft skill", "Feedback"],
    recentProgress: "+2 cette semaine",
  },
  {
    id: 3,
    name: "Couture",
    actionNb: 4,
    tags: ["Couture", "DIY", "Créativité"],
    recentProgress: "+1 ce mois",
  },
  {
    id: 4,
    name: "Pâtisserie",
    actionNb: 6,
    tags: ["Cuisine", "Pâtisserie", "Créativité"],
    recentProgress: "+2 cette semaine",
  },
  {
    id: 5,
    name: "Gestion de projet",
    actionNb: 8,
    tags: ["Organisation", "Product", "Collaboration"],
    recentProgress: "+2 ce mois",
  },
];

export function getAllSkills(): Skill[] {
  return skills;
}

export function getSkillById(id: number): Skill | undefined {
  return skills.find((skill) => skill.id === id);
}
