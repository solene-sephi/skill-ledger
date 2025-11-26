import { Link } from "react-router";
import type { Skill } from "../types/Skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="card w-[500px] rounded border border-fuchsia-900 px-4 py-2">
      <div className="card-body">
        <h2 className="card-title font-bold">{skill.name}</h2>
        <p>Type : {skill.type}</p>
        <p>Nombre d'actions : {skill.actionNb}</p>
        <div className="flex justify-end">
          <Link to={`/skills/${skill.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Détails
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
