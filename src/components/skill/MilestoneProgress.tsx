import { getMilestoneStatus } from "../../services/milestones";
import type { SkillAction } from "../../types/Skill";

interface MilestoneProgressProps {
  actions: SkillAction[];
}

export default function MilestoneProgress({ actions }: MilestoneProgressProps) {
  const {
    currentMilestone,
    nextMilestone,
    progressPercentage,
    remainingActions,
  } = getMilestoneStatus(actions);

  return (
    <div className="space-y-2">
      <div
        className={`flex ${
          currentMilestone ? "justify-between" : "justify-end"
        } text-sm`}
      >
        {currentMilestone && <span>{currentMilestone.label}</span>}
        {nextMilestone && (
          <span className="text-right">{nextMilestone.label}</span>
        )}
      </div>
      <div className="flex items-center">
        {currentMilestone && (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-grey-900 text-white text-sm font-bold">
            {currentMilestone.level}
          </div>
        )}

        <progress
          value={progressPercentage}
          max={100}
          className="flex-1 h-2 bg-grey-500/60 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-grey-500/60 [&::-webkit-progress-value]:bg-orange-600"
        />
        {nextMilestone && (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-grey-900 text-white text-sm font-bold">
            {nextMilestone.level}
          </div>
        )}
      </div>

      {remainingActions > 0 && (
        <div className="flex justify-end">
          <p className="text-xs text-grey-900/80">
            Encore {remainingActions} action{remainingActions > 1 && "s"}
          </p>
        </div>
      )}
    </div>
  );
}
