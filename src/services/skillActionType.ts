import {
  RiArticleLine,
  RiBookOpenLine,
  RiMessage2Line,
  RiQuestionLine,
} from "react-icons/ri";

export type SkillActionTypeId = "cours" | "article" | "feedback" | "autre";

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

// Main list of action types (could come from API/DB later)
const SKILL_ACTION_TYPES = [
  {
    id: "cours",
    label: "Cours",
    icon: RiBookOpenLine,
    colorVariant: colorVariants.orange,
  },
  {
    id: "article",
    label: "Article",
    icon: RiArticleLine,
    colorVariant: colorVariants.green,
  },
  {
    id: "feedback",
    label: "Feedback",
    icon: RiMessage2Line,
    colorVariant: colorVariants.berry,
  },
  {
    id: "autre",
    label: "Autre",
    icon: RiQuestionLine,
    colorVariant: colorVariants.grey,
  },
] as const;

// Index for quick lookup by id; not exported
const SKILL_ACTION_TYPES_BY_ID = Object.fromEntries(
  SKILL_ACTION_TYPES.map((t) => [t.id, t])
);

export function getActionType(id: string) {
  const type = SKILL_ACTION_TYPES_BY_ID[id];

  if (!type) return SKILL_ACTION_TYPES_BY_ID.autre;

  return type;
}

export function getAllActionTypes() {
  return SKILL_ACTION_TYPES;
}
