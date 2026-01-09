import type { Milestone, SkillAction } from "../types";
import { getMilestonesMock } from "../data/milestones";
import { countActions } from "./progress";

export function getAllMilestones(): Milestone[] {
  return getMilestonesMock();
}

/**
 * Internal helper that computes all milestone-related data.
 * This function is the single source of truth for milestone logic.
 *
 * If you need multiple properties (e.g. currentMilestone, remainingActions, progressPercentage),
 * prefer calling `getMilestoneStatus()` instead of individual accessors
 * to avoid unnecessary recomputation.
 */
export function computeMilestoneData(actions: SkillAction[]): {
  currentMilestone: Milestone | null;
  nextMilestone: Milestone | null;
  progressPercentage: number;
  remainingActions: number;
} {
  const totalActions = countActions(actions);
  const milestonesList = getAllMilestones();

  const nextMilestoneIndex = milestonesList.findIndex(
    (milestone) => totalActions < milestone.count
  );

  // Case 1: Before the first milestone
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

  // Case 2: After the last milestone
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

  /* Il y a `c` actions à réaliser pour passer au niveau suivant. `b` ont été réalisées pour le moment. Note : le nombre à gauche est zéro pour le moment – c'est donc le premier palier.
  Visuellement :
  0         b       c
  |---------o       |
  
  `b` actions sur les `c` à accomplir pour passer au niveau suivant
  ont étés réalisées : on calcule donc `b` sur `c`, c'est à dire `b / c`.
  
  Ça transforme en une jauge qui varie entre 0 et 1. En effet, si on a réalisé 0 actions, alors `0 / c = 0`. Autrement, si on a réalisé toutes les actions, alors `c / c = 1`. Pour passer en pourcentage, il suffit de multiplier par 100. De cette manière, si on a réalisé 0 actions, on a `100 * 0 / c = 0%`. Si on a réalisé c actions, on a `100 * c / c = 100 * 1 = 100%`.
  
  Autre cas de figure, ce n'est pas le premier palier :
  a         b       c
  |---------o       |
  
  Dans ce cas là, il faut soustraire `a` partout. Pour passer au palier suivant, on doit réaliser `c - a` actions. Et depuis le palier précédent, on a réalisé `b - a` actions.
  
  En reprenant la logique vue précédemment on a : `b - a` actions ont étés réalisées sur les `c - a` à accomplir. En termes de maths, ça donne `(b - a) / (c - a)`. Encore une fois, ça varie entre 0 et 1. Si on a réalisé 0 actions depuis le début du palier (donc on a réalisé `a` actions depuis le début), on a `(a - a) / (c - a) = 0 / (c - a) = 0`. De la même manière, si on a réalisé toutes les actions pour accéder au palier suivant, on en a réalisé `c`, c'est à dire que `(c - a) / (c - a) = 1`. Pour passer en pourcent, il faut donc encore multiplier le résultat par 100.
*/

  // Case 3: Between two milestones
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

/**
 * Returns the full milestone progress status (recommended for most use cases).
 *
 * Includes:
 * - currentMilestone
 * - nextMilestone
 * - progressPercentage
 * - remainingActions
 */
export function getMilestoneStatus(actions: SkillAction[]) {
  return computeMilestoneData(actions);
}

/**
 * Returns only the current milestone.
 *
 * Performance note:
 * This function recomputes the entire milestone state internally.
 * If you need multiple properties (e.g. currentMilestone + remainingActions),
 * prefer using `getMilestoneStatus(actions)` instead to avoid redundant computation.
 */
export function getCurrentMilestone(actions: SkillAction[]) {
  return computeMilestoneData(actions).currentMilestone;
}
