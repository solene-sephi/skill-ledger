import type { Skill } from "../types";
import { getSkillsMock } from "../data/skills";

type SkillsSource = {
  list: () => Skill[];
};

const mockSource: SkillsSource = {
  list: getSkillsMock,
};

// Swap this implementation when you wire a real API client.
const source: SkillsSource = mockSource;

export function getAllSkills(): Skill[] {
  return source.list();
}

export function getSkillById(id: number): Skill | undefined {
  return source.list().find((skill) => skill.id === id);
}
