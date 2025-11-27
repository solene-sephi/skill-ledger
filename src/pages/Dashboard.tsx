import { Link } from "react-router";
import SkillCard from "../components/SkillCard";
import { getAllSkills } from "../services/skills";

export default function Dashboard() {
  const skills = getAllSkills();
  const totalSkills = skills.length;
  const totalActions = skills.reduce((sum, { actionNb }) => sum + actionNb, 0);
  const hasSkills = totalSkills > 0;

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

        <div className="mx-4 my-6 md:mx-12">
          <div className="grid sm:grid-cols-2 my-6 gap-4">
            <h2 className="font-ubuntu text-2xl font-black">Compétences</h2>
            <Link to="/add" className="sm:ml-auto">
              <button className="bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600">
                Ajouter une compétence
              </button>
            </Link>
          </div>

          {hasSkills ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
              {skills.map((skill) => (
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
        <h2 className="font-ubuntu text-2xl font-black">Ajout rapide</h2>

        <div className="bg-white p-4">
          <p className="text-sm">Earnings by Referral</p>
          <div className="mt-3 flex gap-2">
            <span className="flex-1 rounded-none border border-grey-500 px-3 py-2 text-xs">
              https://skill-ledger/ref123
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
