import type { SkillActionTypeId } from "../services/skillActionType";

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
  id: string;
  name: string;
  typeId: SkillActionTypeId;
  date: Date;
  link?: string;
}
