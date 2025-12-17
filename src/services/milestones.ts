import type { SkillAction } from "../types/Skill";
import { countActions } from "./skillProgress";

const milestones: Milestone[] = [
  //   { level: 1, count: 1, label: "Débutant du quotidien" },
  //   { level: 2, count: 5, label: "Chercheur d’élan" },
  //   { level: 3, count: 10, label: "Forgeur d’habitudes" },
  { level: 4, count: 20, label: "Gardien du rythme" },
  { level: 5, count: 35, label: "Pilier de constance" },
  { level: 6, count: 50, label: "Architecte de progrès" },
  { level: 7, count: 75, label: "Maître du flux" },
];

interface Milestone {
  level: number;
  count: number;
  label: string;
}

export function getAllMilestones(): Milestone[] {
  return milestones;
}

export function getMilestoneStatus(actions: SkillAction[]): {
  currentMilestone: Milestone | null;
  nextMilestone: Milestone | null;
  progressPercentage: number;
  remainingActions: number;
} {
  const totalActions = countActions(actions);
  const milestonesList = getAllMilestones();

  const nextMilestoneIndex = milestones.findIndex(
    (milestone) => totalActions < milestone.count
  );

  //   Before first milestone
  if (nextMilestoneIndex === 0) {
    const currentMilestone = null;
    const nextMilestone = milestonesList[nextMilestoneIndex];
    const progressPercentage = (totalActions / nextMilestone.count) * 100;
    const remainingActions = nextMilestone.count - totalActions;
    return {
      currentMilestone,
      nextMilestone,
      progressPercentage,
      remainingActions,
    };
  }

  //   After last milestone
  if (nextMilestoneIndex === -1) {
    const nextMilestone = null;
    const currentMilestone = milestonesList[milestonesList.length - 1];
    const progressPercentage = 100;
    const remainingActions = 0;
    return {
      currentMilestone,
      nextMilestone,
      progressPercentage,
      remainingActions,
    };
  }

  // Il y a `c` actions à réaliser pour passer au niveau suivant. `b` ont été réalisées pour le moment. Note : le nombre à gauche est zéro pour le moment – c'est donc le premier palier.
  // Visuellement :
  // 0         b       c
  // |---------o       |
  //
  // `b` actions sur les `c` à accomplir pour passer au niveau suivant
  // ont étés réalisées : on calcule donc `b` sur `c`, c'est à dire `b / c`.
  //
  // Ça transforme en une jauge qui varie entre 0 et 1. En effet, si on a réalisé 0 actions, alors `0 / c = 0`. Autrement, si on a réalisé toutes les actions, alors `c / c = 1`. Pour passer en pourcentage, il suffit de multiplier par 100. De cette manière, si on a réalisé 0 actions, on a `100 * 0 / c = 0%`. Si on a réalisé c actions, on a `100 * c / c = 100 * 1 = 100%`.
  //
  // Autre cas de figure, ce n'est pas le premier palier :
  // a         b       c
  // |---------o       |
  //
  // Dans ce cas là, il faut soustraire `a` partout. Pour passer au palier suivant, on doit réaliser `c - a` actions. Et depuis le palier précédent, on a réalisé `b - a` actions.
  //
  // En reprenant la logique vue précédemment on a : `b - a` actions ont étés réalisées sur les `c - a` à accomplir. En termes de maths, ça donne `(b - a) / (c - a)`. Encore une fois, ça varie entre 0 et 1. Si on a réalisé 0 actions depuis le début du palier (donc on a réalisé `a` actions depuis le début), on a `(a - a) / (c - a) = 0 / (c - a) = 0`. De la même manière, si on a réalisé toutes les actions pour accéder au palier suivant, on en a réalisé `c`, c'est à dire que `(c - a) / (c - a) = 1`. Pour passer en pourcent, il faut donc encore multiplier le résultat par 100.
  const currentMilestone = milestonesList[nextMilestoneIndex - 1];
  const nextMilestone = milestonesList[nextMilestoneIndex];
  const currentMilestoneCount = currentMilestone.count;
  const nextMilestoneCount = nextMilestone.count;
  const nextMilestoneCountOffset = nextMilestoneCount - currentMilestoneCount;
  const totalActionsOffset = totalActions - currentMilestoneCount;
  const progressPercentage =
    (totalActionsOffset * 100) / nextMilestoneCountOffset;
  const remainingActions = nextMilestoneCountOffset - totalActionsOffset;

  return {
    currentMilestone,
    nextMilestone,
    progressPercentage,
    remainingActions,
  };
}
