import { Link } from "react-router";
import type { Skill } from "../types/Skill";
import Button from "./Button";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="p-4 border border-grey-500 space-y-2">
      <h2 className="text-xl font-bold">{skill.name}</h2>
      <p className="text-sm text-grey-900 flex items-baseline justify-between">
        {skill.actionNb} actions
        <span className="text-black text-xs">{skill.recentProgress}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <span
            key={crypto.randomUUID()}
            className="px-2 py-1 bg-green-400 text-black rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-end">
        <Link to={`/skills/${skill.id}`}>
          <Button variant="secondary">Détails</Button>
        </Link>
      </div>
    </div>
  );
}
