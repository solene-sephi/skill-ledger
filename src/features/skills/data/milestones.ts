import type { Milestone } from "../types";

const milestones: Milestone[] = [
  { level: 1, count: 1, label: "Débutant du quotidien" },
  { level: 2, count: 5, label: "Chercheur d’élan" },
  { level: 3, count: 10, label: "Forgeur d’habitudes" },
  { level: 4, count: 20, label: "Gardien du rythme" },
  { level: 5, count: 35, label: "Pilier de constance" },
  { level: 6, count: 50, label: "Architecte de progrès" },
  { level: 7, count: 75, label: "Maître du flux" },
];

export function getMilestonesMock(): Milestone[] {
  return milestones;
}
