import { getFormattedRecentProgress } from "../../services/skillProgress";
import type { Skill } from "../../types/Skill";
import MilestoneProgress from "../MilestoneProgress";
import { RiArrowRightUpLine } from "react-icons/ri";

interface SkillProgressCardProps {
  skill: Skill;
}

export default function SkillProgressCard({ skill }: SkillProgressCardProps) {
  const actions = skill.actions;
  const actionCount = actions.length;
  const recentProgress = getFormattedRecentProgress(actions);

  return (
    <div className="bg-white border border-grey-500 border-t-4 border-t-berry-500 p-5 space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl uppercase tracking-wide text-grey-800">
          Progression
        </h3>
      </div>

      <div className="grid gap-3 md:grid-cols-3 pb-4 border-b border-grey-500">
        <div className="px-2 py-2 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-grey-700">
              Actions complétées
            </p>
            <p className="text-xl font-bold text-grey-900">{actionCount}</p>
          </div>
        </div>
        <div className="px-2 py-2 flex items-center justify-between border-l border-grey-500">
          <div>
            <p className="text-xs uppercase tracking-wide text-grey-700">
              Progrès récent
            </p>
            <p className="text-xl font-bold text-grey-900">
              <span className="inline-flex items-center gap-1">
                <RiArrowRightUpLine className="text-green-600" />
                {recentProgress}
              </span>
            </p>
          </div>
        </div>
        <div className="px-2 py-2 flex items-center justify-between border-l border-grey-500">
          <div>
            <p className="text-xs uppercase tracking-wide text-grey-700">
              Niveau actuel
            </p>
            <p className="text-xl font-bold text-grey-900">Niveau 1</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white mt-3">
        <MilestoneProgress />
      </div>
    </div>
  );
}
