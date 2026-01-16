import { useLoaderData } from "react-router";
import type { Skill, SkillAction, SkillTag } from "../types";
import SkillNameInlineEditor from "../components/SkillNameInlineEditor";
import { useState } from "react";
import SkillTagsInlineEditor from "../components/SkillTagsInlineEditor";
import SkillHistoryCard from "../components/SkillHistoryCard";
import SkillProgressCard from "../components/SkillProgressCard";
import AddActionForm from "../components/AddActionForm";

export default function SkillDetail() {
  const { skill }: { skill: Skill } = useLoaderData();
  const [newSkill, setNewSkill] = useState(skill);
  const [showPlusOne, setShowPlusOne] = useState(false);

  function handleUpdateName(nextName: string) {
    setNewSkill((prev) => ({ ...prev, name: nextName }));
  }

  // Update the skill with the latest tags so saving will use up-to-date data.
  function handleUpdateTags(nextTags: SkillTag[]) {
    setNewSkill((prev) => ({ ...prev, tags: nextTags }));
  }

  function handleAddAction(newAction: SkillAction) {
    setNewSkill((prev) => ({ ...prev, actions: [newAction, ...prev.actions] }));

    setShowPlusOne(true);
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
            ></SkillTagsInlineEditor>
          </div>
        </div>

        {/* Progression block */}
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

          {/* History block */}
          <div className="lg:col-span-4">
            <SkillHistoryCard actions={newSkill.actions} />
          </div>
        </div>
      </div>
    </div>
  );
}
