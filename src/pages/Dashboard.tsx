import { getAllSkills } from "../services/skills";
import AddSkillForm from "../components/skill/AddSkillForm";
import { useState } from "react";
import type { Skill } from "../types/Skill";
import SkillCard from "../components/skill/SkillCard";

export default function Dashboard() {
  const [skillsList, setSkillsList] = useState<Skill[]>(() => getAllSkills());
  const totalSkills = skillsList.length;
  const totalActions = skillsList.reduce((sum, skill) => {
    const { actions } = skill;
    return sum + actions.length;
  }, 0);
  const hasSkills = totalSkills > 0;

  function handleAddSkill(skill: Skill) {
    setSkillsList((prev) => [...prev, skill]);
  }

  return (
    <div className="grid min-h-screen gap-0 lg:grid-cols-2">
      <section className="bg-white h-full">
        <div className="mx-4 my-6 border-b border-grey-500 pb-6 md:mx-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500">Nb total de compétences</p>
              <p className="text-3xl font-black text-slate-900">
                {totalSkills}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500">Nb total d&apos;actions</p>
              <p className="text-3xl font-black text-slate-900">
                {totalActions}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500">Dernière action</p>
              <p className="text-3xl font-black text-slate-900">—</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="h-2 flex-1 bg-orange-500" />
            <span className="h-2 flex-1 bg-green-500" />
            <span className="h-2 flex-1 bg-[#c084fc]" />
            <span className="h-2 flex-1 bg-[#0ea5e9]" />
          </div>
        </div>

        <div className="mx-4 my-6 md:mx-12 space-y-6">
          <h2 className="font-ubuntu text-2xl font-black">Compétences</h2>

          {hasSkills ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
              {skillsList.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          ) : (
            <p className="text-sm">
              Aucune compétence enregistrée pour le moment. Ajoutez-en une pour
              suivre vos progrès.
            </p>
          )}
        </div>
      </section>

      <section className="h-full border-l border-grey-500 bg-beige p-8 space-y-6">
        <div className="bg-white p-4 space-y-6">
          <h2 className="font-ubuntu text-2xl font-black">
            Ajouter une compétence
          </h2>
          <AddSkillForm onAdd={handleAddSkill} />
        </div>
      </section>
    </div>
  );
}
