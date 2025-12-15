import { type SkillAction } from "../../types/Skill";
import { getActionType } from "../../services/skillActionType";

interface SkillHistoryCardProps {
  actions: SkillAction[];
}
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function SkillHistoryCard({ actions }: SkillHistoryCardProps) {
  const actionItem = actions.map((action) => {
    const type = getActionType(action.typeId);
    const TypeIconComponent = type.icon;
    const colorVariant = type.colorVariant;
    return (
      <div
        key={action.id}
        className="flex items-center justify-between gap-3 py-3 pt-2"
      >
        <div className="flex items-center gap-3">
          <span className="flex grow shrink-0 basis-auto h-10 w-10 items-center justify-center rounded-full bg-white border border-grey-300 text-grey-900">
            <TypeIconComponent className="text-lg" />
          </span>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-grey-900">{action.name}</p>
            <div className="flex items-center gap-2 text-xs text-grey-700">
              <span
                className={`inline-block h-2 w-2 rounded-full ${colorVariant.bg}`}
              />
              <p className={`font-semibold ${colorVariant.text}`}>
                {type.label}
              </p>
              <span className="text-grey-600">•</span>
              <span className="text-grey-700">
                {action.date.toLocaleDateString(undefined, options)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white border border-grey-500 border-t-4 border-t-green-900 p-5 space-y-3 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-xl uppercase tracking-wide text-grey-800">
          Historique
        </h3>
      </div>
      <div className="divide-y divide-grey-500 px-0">{actionItem}</div>
    </div>
  );
}
