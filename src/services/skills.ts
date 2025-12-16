import type { Skill } from "../types/Skill";

const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    tags: ["Frontend", "JavaScript", "ES2023"],
    recentProgress: "+1 cette semaine",
    actions: [
      {
        id: "js-1",
        name: "Refonte du router",
        typeId: "cours",
        date: new Date("2025-03-12"),
      },
      {
        id: "js-2",
        name: "Lecture article sur les Web Workers",
        typeId: "article",
        date: new Date("2025-03-05"),
      },
      {
        id: "js-3",
        name: "Feedback pair-programming",
        typeId: "feedback",
        date: new Date("2025-02-28"),
      },
    ],
  },
  {
    id: 2,
    name: "Communication d’équipe",
    tags: ["Collaboration", "Soft skill", "Feedback"],
    recentProgress: "+2 cette semaine",
    actions: [
      {
        id: "com-1",
        name: "Atelier feedback non violent",
        typeId: "cours",
        date: new Date("2025-03-10"),
      },
      {
        id: "com-2",
        name: "Rétro d'équipe",
        typeId: "feedback",
        date: new Date("2025-03-03"),
      },
      {
        id: "com-3",
        name: "Podcast sur l'écoute active",
        typeId: "article",
        date: new Date("2025-02-22"),
      },
    ],
  },
  {
    id: 3,
    name: "Couture",
    tags: ["Couture", "DIY", "Créativité"],
    recentProgress: "+1 ce mois",
    actions: [
      {
        id: "cout-1",
        name: "Tutoriel sur les boutonnières",
        typeId: "cours",
        date: new Date("2025-02-15"),
      },
      {
        id: "cout-2",
        name: "Article sur les points élastiques",
        typeId: "article",
        date: new Date("2025-02-10"),
      },
      {
        id: "cout-3",
        name: "Session d'entraide au club",
        typeId: "autre",
        date: new Date("2025-01-30"),
      },
    ],
  },
  {
    id: 4,
    name: "Pâtisserie",
    tags: ["Cuisine", "Pâtisserie", "Créativité"],
    recentProgress: "+2 cette semaine",
    actions: [
      {
        id: "pat-1",
        name: "Cours sur les choux",
        typeId: "cours",
        date: new Date("2025-12-15"),
      },
      {
        id: "pat-2",
        name: "Vidéo sur le tempérage du chocolat",
        typeId: "article",
        date: new Date("2025-12-10"),
      },
      {
        id: "pat-3",
        name: "Dégustation avec retour critique",
        typeId: "feedback",
        date: new Date("2025-02-18"),
      },
    ],
  },
  {
    id: 5,
    name: "Gestion de projet",
    tags: ["Organisation", "Product", "Collaboration"],
    recentProgress: "+2 ce mois",
    actions: [
      {
        id: "gp-1",
        name: "MOOC sur la priorisation",
        typeId: "cours",
        date: new Date("2025-03-11"),
      },
      {
        id: "gp-2",
        name: "Article RICE vs. WSJF",
        typeId: "article",
        date: new Date("2025-02-25"),
      },
      {
        id: "gp-3",
        name: "Revue de roadmap avec feedback",
        typeId: "feedback",
        date: new Date("2025-02-17"),
      },
      {
        id: "gp-4",
        name: "Session de co-planification",
        typeId: "autre",
        date: new Date("2025-02-05"),
      },
    ],
  },
];

export function getAllSkills(): Skill[] {
  return skills;
}

export function getSkillById(id: number): Skill | undefined {
  return skills.find((skill) => skill.id === id);
}
