import type { Skill } from "../types/Skill";

const skills: Skill[] = [
  {
    id: 1,
    name: "Javascript",
    type: "hard",
    actionNb: 7,
  },
  {
    id: 2,
    name: "Communication d’équipe",
    type: "soft",
    actionNb: 12,
  },
];

export function getAllSkills(): Skill[] {
  return skills;
}

export function getSkillById(id: number): Skill | undefined {
  return skills.find((skill) => skill.id === id);
}
