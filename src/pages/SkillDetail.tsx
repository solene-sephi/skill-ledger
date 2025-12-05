import { useLoaderData } from "react-router";
import type { Skill } from "../types/Skill";
import {
  RiPencilFill,
  RiBookOpenLine,
  RiArticleLine,
  RiMessage2Line,
  RiQuestionLine,
  RiArrowRightUpLine,
} from "react-icons/ri";
import SkillTagList from "../components/skill/SkillTagList";
import Button from "../components/ui/Button";
import MilestoneProgress from "../components/MilestoneProgress";

export default function SkillDetail() {
  const { skill }: { skill: Skill } = useLoaderData();

  return (
    <div className="min-h-screen bg-beige py-6">
      <div className="container mx-auto max-w-6xl space-y-6 px-4">
        {/* Name + tags block */}
        <div className="bg-white border border-grey-500 border-t-4 border-t-lavender-500 p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold text-grey-900">{skill.name}</h2>
              <button
                type="button"
                className="p-2 border border-grey-500 text-grey-900 hover:bg-grey-100"
                aria-label="Éditer le nom et les tags de la compétence"
              >
                <RiPencilFill className="size-4" />
              </button>
            </div>
            <SkillTagList tags={skill.tags} />
          </div>
        </div>

        {/* Progression block */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-6">
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
                    <p className="text-xl font-bold text-grey-900">
                      {skill.actionNb}
                    </p>
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
                        +1 cette semaine
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

            <div className="bg-white border border-grey-500 border-t-4 border-t-lavender-500 p-5 space-y-4">
              <h3 className="text-xl uppercase tracking-wide text-grey-800">
                Ajouter une action
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="form-label">
                  Type <span className="text-red-600">*</span>
                  <select name="type" className="input-base field-spacing">
                    <option value="cours">Cours</option>
                    <option value="article">Article</option>
                    <option value="feedback">Feedback</option>
                    <option value="autre">Autre</option>
                  </select>
                </label>
                <label className="form-label">
                  Nom <span className="text-red-600">*</span>
                  <input
                    name="name"
                    className="input-base field-spacing"
                    required
                  />
                </label>
              </div>
              <Button className="self-start">Ajouter</Button>
            </div>
          </div>

          {/* History block */}
          <div className="lg:col-span-4">
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
                        <span className="font-semibold text-orange-700">
                          Cours
                        </span>
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
                        <span className="font-semibold text-green-700">
                          Feedback
                        </span>
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
                        <span className="font-semibold text-berry-600">
                          Article
                        </span>
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
                        <span className="font-semibold text-grey-800">
                          Autre
                        </span>
                        <span className="text-grey-600">•</span>
                        <span className="text-grey-700">05 fév. 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
