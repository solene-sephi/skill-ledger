import {
  RiArticleLine,
  RiBookOpenLine,
  RiMessage2Line,
  RiQuestionLine,
} from "react-icons/ri";
import type { SkillActionTypeId } from "../types";

export const FALLBACK_ACTION_TYPE_ID: SkillActionTypeId = "autre";

const colorVariants = {
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-500",
  },
  green: {
    bg: "bg-green-500",
    text: "text-green-500",
  },
  berry: {
    bg: "bg-berry-500",
    text: "text-berry-500",
  },
  grey: {
    bg: "bg-grey-500",
    text: "text-grey-500",
  },
};

const SKILL_ACTION_TYPES = [
  {
    id: "cours" as SkillActionTypeId,
    label: "Cours",
    icon: RiBookOpenLine,
    colorVariant: colorVariants.orange,
  },
  {
    id: "article" as SkillActionTypeId,
    label: "Article",
    icon: RiArticleLine,
    colorVariant: colorVariants.green,
  },
  {
    id: "feedback" as SkillActionTypeId,
    label: "Feedback",
    icon: RiMessage2Line,
    colorVariant: colorVariants.berry,
  },
  {
    id: "autre" as SkillActionTypeId,
    label: "Autre",
    icon: RiQuestionLine,
    colorVariant: colorVariants.grey,
  },
] as const;

export type SkillActionType = (typeof SKILL_ACTION_TYPES)[number];

export function getSkillActionTypesMock(): readonly SkillActionType[] {
  return SKILL_ACTION_TYPES;
}
