export type SkillActionTypeId = "cours" | "article" | "feedback" | "autre";

export interface Skill {
  id: number | string;
  name: string;
  tags: SkillTag[];
  recentProgress: string;
  actions: SkillAction[];
}

export type SkillTag = string;

export interface SkillAction {
  id: string;
  name: string;
  typeId: SkillActionTypeId;
  date: Date;
  link?: string;
  note?: string;
}

export interface Milestone {
  level: number;
  count: number;
  label: string;
}
