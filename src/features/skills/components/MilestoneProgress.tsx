import type { Milestone } from "../types";

interface MilestoneProgressProps {
  status: {
    currentMilestone: Milestone | null;
    nextMilestone: Milestone | null;
    progressPercentage: number;
    remainingActions: number;
  };
}

export default function MilestoneProgress({ status }: MilestoneProgressProps) {
  const {
    currentMilestone,
    nextMilestone,
    progressPercentage,
    remainingActions,
  } = status;

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

        <div
          role="progressbar"
          aria-label="Progression"
          aria-valuenow={Math.round(progressPercentage)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="progress-track"
        >
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
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
