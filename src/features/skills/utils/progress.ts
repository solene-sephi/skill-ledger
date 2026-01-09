import type { Skill, SkillAction } from "../types";

export function countActions(actions: SkillAction[]): number {
  return actions.length;
}

export const countActionsInSkill = (skill: Skill) =>
  countActions(skill.actions);

export function countActionsAcrossSkills(skills: Skill[]) {
  return skills.reduce((sum, skill) => {
    const { actions } = skill;
    return sum + actions.length;
  }, 0);
}

export function getRecentProgress(actions: SkillAction[]): {
  count: number;
  period: "week" | "month" | "none";
} {
  // Sliding windows: 7 days and 30 days back from now
  const today = new Date();
  const todayDate = today.getDate();
  const todayFullYear = today.getFullYear();
  const todayMonth = today.getMonth();

  // Timestamps
  const lastWeek = new Date(todayFullYear, todayMonth, todayDate - 7).getTime();
  const lastMonth = new Date(
    todayFullYear,
    todayMonth,
    todayDate - 30
  ).getTime();

  let lastWeekCount = 0;
  let lastMonthCount = 0;

  actions.forEach((action) => {
    // Compare timestamps (support Date or number)
    const actionTime =
      typeof action.date === "number"
        ? action.date
        : new Date(action.date).getTime();

    if (actionTime >= lastMonth) {
      lastMonthCount++;

      if (actionTime >= lastWeek) {
        lastWeekCount++;
      }
    }
  });

  if (lastWeekCount > 0) return { count: lastWeekCount, period: "week" };
  if (lastMonthCount > 0) {
    return { count: lastMonthCount, period: "month" };
  }
  return { count: 0, period: "none" };
}

export function getFormattedRecentProgress(actions: SkillAction[]): string {
  const recentProgress = getRecentProgress(actions);

  switch (recentProgress.period) {
    case "month":
      return `+ ${recentProgress.count} ce mois`;
    case "week":
      return `+ ${recentProgress.count} cette semaine`;
    default:
      return "Pas de progrès récent";
  }
}
