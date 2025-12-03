import { useLoaderData } from "react-router";
import type { Skill } from "../types/Skill";
import { RiPencilFill } from "react-icons/ri";
import SkillTagList from "../components/SkillTagList";
import Tag from "../components/Tag";
import Button from "../components/Button";
import MilestoneProgress from "../components/MilestoneProgress";

export default function SkillDetail() {
  const { skill }: { skill: Skill } = useLoaderData();
  const mockHistory = [
    {
      name: "Refonte de la roadmap",
      type: "Cours suivis",
      date: "12 mars 2025",
    },
    {
      name: "Atelier pair-programming",
      type: "Feedback reçu",
      date: "03 mars 2025",
    },
    {
      name: "Lecture article UX writing",
      type: "Articles lus",
      date: "18 fév. 2025",
    },
    {
      name: "Session d'entraide",
      type: "Autre",
      date: "05 fév. 2025",
    },
  ];

  return (
    <div className="bg-beige min-h-screen">
      <div className="container mx-auto md:grid md:grid-cols-6 md:gap-6 md:py-6 space-y-2 md:space-y-0">
        {/* Title and tags */}
        <div className="p-4 space-y-3 col-span-3 bg-beige md:bg-white md:border md:border-grey-500">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{skill.name}</h2>
            </div>
            <Button
              variant="tertiary"
              className="inline-flex items-center gap-2"
            >
              <RiPencilFill className="size-4" />
              Éditer
            </Button>
          </div>
          <SkillTagList tags={skill.tags} />
        </div>

        {/* Actions and progress */}
        <div className="p-4 border-t border-b md:border border-grey-500 bg-white col-span-3 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold text-grey-900">Niveau 1</h3>
          </div>

          <MilestoneProgress></MilestoneProgress>

          <div className="grid gap-3">
            <div className="border border-grey-500 px-3 py-3 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-grey-900">
                  Actions complétées
                </p>
                <p className="text-2xl font-bold text-grey-900">
                  {skill.actionNb}
                </p>
              </div>
              <Tag label={skill.recentProgress} variant="primaryOutline"></Tag>
            </div>
          </div>
        </div>

        {/* Add an action form */}
        <div className="p-4 border border-grey-500 space-y-2 bg-white col-span-3">
          <h3 className="text-xl uppercase tracking-wide text-grey-900">
            Ajouter une action
          </h3>
          <label className="form-label">
            Type <span className="text-red-600">*</span>
            <select name="type" className="input-base field-spacing">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
          </label>
          <label className="form-label">
            Nom <span className="text-red-600">*</span>
            <input name="name" className="input-base field-spacing" required />
          </label>
        </div>

        {/* History */}
        <div className="col-span-3 p-4 border border-grey-500 space-y-3 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xl uppercase tracking-wide text-grey-900">
              Historique
            </h3>
          </div>

          <div className="divide-y divide-grey-500">
            {mockHistory.map((entry, index) => (
              <div
                key={`${entry.name}-${entry.date}`}
                className={`flex items-start justify-between gap-3 py-3 ${
                  index === 0 ? "pt-0" : ""
                } ${index === mockHistory.length - 1 ? "pb-0" : ""}`}
              >
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-grey-900">
                    {entry.name}
                  </p>
                  <p className="text-xs text-grey-800">{entry.date}</p>
                </div>
                <Tag label={entry.type} variant="secondaryOutline" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
