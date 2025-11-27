import { Link } from "react-router";
import type { Skill } from "../types/Skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="p-4 border border-gray">
      <h2 className="text-xl font-bold">{skill.name}</h2>
      <p className="mt-2 text-sm">Type : {skill.type}</p>
      <p className="text-sm">Nombre d&apos;actions : {skill.actionNb}</p>
      <div className="mt-4 flex justify-end">
        <Link to={`/skills/${skill.id}`}>
          <button className=" bg-black px-4 py-2 text-sm text-white hover:bg-black/85">
            Détails
          </button>
        </Link>
      </div>
    </div>
  );
}
