import {
  RiBookOpenLine,
  RiArticleLine,
  RiMessage2Line,
  RiQuestionLine,
} from "react-icons/ri";

export default function SkillHistoryCard() {
  return (
    <div className="bg-white border border-grey-500 border-t-4 border-t-green-900 p-5 space-y-3 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-xl uppercase tracking-wide text-grey-800">
          Historique
        </h3>
      </div>
      <div className="divide-y divide-grey-500 px-0">
        <div className="flex items-center justify-between gap-3 py-3 pt-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-grey-300 text-grey-900">
              <RiBookOpenLine className="text-lg" />
            </span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-grey-900">
                Refonte de la roadmap
              </p>
              <div className="flex items-center gap-2 text-xs text-grey-700">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
                <span className="font-semibold text-orange-700">Cours</span>
                <span className="text-grey-600">•</span>
                <span className="text-grey-700">12 mars 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-grey-300 text-grey-900">
              <RiMessage2Line className="text-lg" />
            </span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-grey-900">
                Atelier pair-programming
              </p>
              <div className="flex items-center gap-2 text-xs text-grey-700">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                <span className="font-semibold text-green-700">Feedback</span>
                <span className="text-grey-600">•</span>
                <span className="text-grey-700">03 mars 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-grey-300 text-grey-900">
              <RiArticleLine className="text-lg" />
            </span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-grey-900">
                Lecture article UX writing
              </p>
              <div className="flex items-center gap-2 text-xs text-grey-700">
                <span className="inline-block h-2 w-2 rounded-full bg-berry-500" />
                <span className="font-semibold text-berry-600">Article</span>
                <span className="text-grey-600">•</span>
                <span className="text-grey-700">18 fév. 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 py-3 pb-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-grey-300 text-grey-900">
              <RiQuestionLine className="text-lg" />
            </span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-grey-900">
                Session d'entraide
              </p>
              <div className="flex items-center gap-2 text-xs text-grey-700">
                <span className="inline-block h-2 w-2 rounded-full bg-grey-500" />
                <span className="font-semibold text-grey-800">Autre</span>
                <span className="text-grey-600">•</span>
                <span className="text-grey-700">05 fév. 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
