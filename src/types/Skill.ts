export interface Skill {
  id: number | string;
  name: string;
  actionNb: number;
  tags: string[];
  recentProgress: string;
}

export type OnRemoveTag = (tag: string) => void;

export type SkillTag = string;
