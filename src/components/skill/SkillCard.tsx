import { Link } from "react-router";
import type { Skill } from "../../types/Skill";
import Button from "../ui/Button";
import SkillTagList from "./SkillTagList";

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

      <SkillTagList tags={skill.tags} />

      <div className="flex justify-end">
        <Link to={`/skills/${skill.id}`}>
          <Button variant="tertiary">Détails</Button>
        </Link>
      </div>
    </div>
  );
}
