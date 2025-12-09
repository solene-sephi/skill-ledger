export interface Skill {
  id: number | string;
  name: string;
  actionNb: number;
  tags: SkillTag[];
  recentProgress: string;
  actions: SkillAction[];
}

export type SkillTag = string;

export interface SkillAction {
  id: number | string;
  name: string;
  type: SkillActionType;
  date: Date;
}

export const SKILL_ACTION_TYPES = [
  { value: "cours", label: "Cours" },
  { value: "article", label: "Article" },
  { value: "feedback", label: "Feedback" },
  { value: "autre", label: "Autre" },
] as const;

export type SkillActionType = (typeof SKILL_ACTION_TYPES)[number]["value"];
