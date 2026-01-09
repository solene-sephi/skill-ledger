import type { Skill } from "../types";

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
      {
        id: "js-4",
        name: "Kata sur les Promises",
        typeId: "autre",
        date: new Date("2025-02-20"),
      },
      {
        id: "js-5",
        name: "Lecture doc sur les AbortController",
        typeId: "article",
        date: new Date("2025-02-12"),
      },
      {
        id: "js-6",
        name: "Refonte utilitaire date-fns",
        typeId: "cours",
        date: new Date("2025-02-04"),
      },
      {
        id: "js-7",
        name: "Pairing sur l’accessibilité",
        typeId: "feedback",
        date: new Date("2025-01-28"),
      },
      {
        id: "js-8",
        name: "Atelier Web Workers",
        typeId: "cours",
        date: new Date("2025-01-22"),
      },
      {
        id: "js-9",
        name: "Article sur les pipelines de build",
        typeId: "article",
        date: new Date("2025-01-15"),
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
      {
        id: "com-4",
        name: "Coaching individuel",
        typeId: "feedback",
        date: new Date("2025-02-15"),
      },
      {
        id: "com-5",
        name: "Lecture guide CNV",
        typeId: "article",
        date: new Date("2025-02-08"),
      },
      {
        id: "com-6",
        name: "Jeu de rôle médiation",
        typeId: "autre",
        date: new Date("2025-02-01"),
      },
      {
        id: "com-7",
        name: "Retour 360° de l'équipe",
        typeId: "feedback",
        date: new Date("2025-01-25"),
      },
      {
        id: "com-8",
        name: "Lecture article sur la posture coach",
        typeId: "article",
        date: new Date("2025-01-18"),
      },
      {
        id: "com-9",
        name: "Atelier écoute active",
        typeId: "cours",
        date: new Date("2025-01-11"),
      },
      {
        id: "com-10",
        name: "Shadowing d'une rétro",
        typeId: "autre",
        date: new Date("2025-01-05"),
      },
      {
        id: "com-11",
        name: "Relecture empathique d'un conflit",
        typeId: "feedback",
        date: new Date("2024-12-28"),
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
      {
        id: "cout-4",
        name: "Atelier surjets avec surjeteuse",
        typeId: "cours",
        date: new Date("2025-01-20"),
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
        date: new Date("2025-03-15"),
      },
      {
        id: "pat-2",
        name: "Vidéo sur le tempérage du chocolat",
        typeId: "article",
        date: new Date("2025-03-10"),
      },
      {
        id: "pat-3",
        name: "Dégustation avec retour critique",
        typeId: "feedback",
        date: new Date("2025-02-18"),
      },
      {
        id: "pat-4",
        name: "Article sur les pâtes levées",
        typeId: "article",
        date: new Date("2025-02-08"),
      },
      {
        id: "pat-5",
        name: "Atelier montage d'un entremets",
        typeId: "cours",
        date: new Date("2025-01-29"),
      },
      {
        id: "pat-6",
        name: "Feedback sur une tarte au citron",
        typeId: "feedback",
        date: new Date("2025-01-20"),
      },
      {
        id: "pat-7",
        name: "Test d'une recette vegan",
        typeId: "autre",
        date: new Date("2025-01-12"),
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
      {
        id: "gp-5",
        name: "Lecture article sur les OKR",
        typeId: "article",
        date: new Date("2025-01-27"),
      },
    ],
  },
  {
    id: 6,
    name: "Gestion du stress",
    tags: ["Bien-être", "Routine"],
    recentProgress: "+1 cette semaine",
    actions: [
      {
        id: "stress-1",
        name: "Session de respiration box breathing",
        typeId: "autre",
        date: new Date("2025-03-13"),
      },
    ],
  },
];

export function getSkillsMock(): Skill[] {
  return skills.map((skill) => ({
    ...skill,
    actions: skill.actions.map((action) => ({ ...action })),
  }));
}
