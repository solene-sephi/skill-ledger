import { getFormattedRecentProgress, countActions } from "../utils/progress";
import type { Skill } from "../types";
import MilestoneProgress from "./MilestoneProgress";
import { RiArrowRightUpLine } from "react-icons/ri";
import InfoTooltip from "../../../components/ui/InfoTooltip";
import { getCurrentMilestone, getMilestoneStatus } from "../utils/milestones";

interface SkillProgressCardProps {
  skill: Skill;
  showPlusOne: boolean;
  onPlusOneAnimationEnd: () => void;
}

export default function SkillProgressCard({
  skill,
  showPlusOne,
  onPlusOneAnimationEnd,
}: SkillProgressCardProps) {
  const actions = skill.actions;
  const actionCount = countActions(actions);
  const recentProgress = getFormattedRecentProgress(actions);
  const milestoneStatus = getMilestoneStatus(actions);

  return (
    <div className="bg-white border border-grey-500 border-t-4 border-t-berry-500 p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg uppercase tracking-wide text-grey-800">
          Progression
        </h3>
      </div>

      <div className="relative flex flex-col gap-3 border-b border-grey-500 pb-2 text-base text-grey-800 md:flex-row md:items-center md:justify-between">
        <span className="inline-flex items-center gap-2">
          <span className="text-grey-800 whitespace-nowrap">
            Actions complétées :
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="text-base font-semibold text-grey-800">
              {actionCount}
            </span>
            {showPlusOne && (
              <span
                onAnimationEnd={onPlusOneAnimationEnd}
                aria-hidden="true"
                className="text-sm font-semibold text-orange-600 animate-puff-out-center"
              >
                +1
              </span>
            )}
          </span>
        </span>
        <span
          className="hidden md:block absolute left-1/2 top-1/2 h-4 -translate-x-1/2 -translate-y-1/2 border-l border-grey-500"
          aria-hidden="true"
        />
        <span className="inline-flex items-center gap-2 md:justify-end">
          <RiArrowRightUpLine className="text-green-600" />
          <span className="font-semibold text-grey-800">{recentProgress}</span>
          <InfoTooltip
            className="ml-1"
            iconClassName="size-4 md:size-4"
            text={"Calcul en jours glissants"}
            tooltipId="calculation-type-info"
          />
        </span>
      </div>

      <div className="bg-white pt-2">
        <MilestoneProgress status={milestoneStatus} />
      </div>
    </div>
  );
}
