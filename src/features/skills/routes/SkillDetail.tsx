import { useLoaderData } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";

import type { Skill, SkillAction, SkillTag } from "../types";
import SkillNameInlineEditor from "../components/SkillNameInlineEditor";
import SkillTagsInlineEditor from "../components/SkillTagsInlineEditor";
import SkillHistoryCard from "../components/SkillHistoryCard";
import SkillProgressCard from "../components/SkillProgressCard";
import AddActionForm from "../components/AddActionForm";
import { milestoneLeveledUp } from "../utils/milestones";

export default function SkillDetail() {
  const { skill }: { skill: Skill } = useLoaderData();
  const [newSkill, setNewSkill] = useState(skill);
  const [showPlusOne, setShowPlusOne] = useState(false);

  function handleUpdateName(nextName: string) {
    setNewSkill((prev) => ({ ...prev, name: nextName }));
  }

  function handleUpdateTags(nextTags: SkillTag[]) {
    setNewSkill((prev) => ({ ...prev, tags: nextTags }));
  }

  function handleAddAction(action: SkillAction) {
    const savedAction = action; // plus tard : résultat API

    let leveledUp = false;

    setNewSkill((prev) => {
      const nextActions = [savedAction, ...prev.actions];
      leveledUp = milestoneLeveledUp(prev.actions, nextActions);

      return { ...prev, actions: nextActions };
    });

    setShowPlusOne(true);
    toast("Action ajoutée.");

    if (leveledUp) {
      toast("Palier atteint.");
    }
  }

  return (
    <div className="min-h-screen bg-beige py-6">
      <div className="container mx-auto max-w-6xl space-y-6 px-4">
        {/* Name + tags block */}
        <div className="bg-white border border-grey-500 border-t-4 border-t-lavender-500 p-5 space-y-3">
          <SkillNameInlineEditor
            key={newSkill.id}
            skillName={newSkill.name}
            onSaveName={handleUpdateName}
          />

          <div className="border-t border-grey-500 space-y-3 pt-4">
            <SkillTagsInlineEditor
              key={newSkill.id}
              initialTags={newSkill.tags}
              onTagsChange={handleUpdateTags}
            />
          </div>
        </div>

        {/* Progression + Add action + History */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-6">
            <SkillProgressCard
              skill={newSkill}
              showPlusOne={showPlusOne}
              onPlusOneAnimationEnd={() => setShowPlusOne(false)}
            />

            <div className="bg-white border border-grey-500 border-t-4 border-t-lavender-500 p-5 space-y-3">
              <h3 className="text-lg uppercase tracking-wide text-grey-800">
                Ajouter une action
              </h3>

              <AddActionForm onAdd={handleAddAction} />
            </div>
          </div>

          <div className="lg:col-span-4">
            <SkillHistoryCard actions={newSkill.actions} />
          </div>
        </div>
      </div>
    </div>
  );
}
