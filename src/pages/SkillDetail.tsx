import { useLoaderData } from "react-router";
import type { Skill } from "../types/Skill";
import Button from "../components/ui/Button";
import SkillNameInlineEditor from "../components/skill/SkillNameInlineEditor";
import { useState } from "react";
import SkillTagsInlineEditor from "../components/skill/SkillTagsInlineEditor";
import { useTagInput } from "../hooks/useTagInput";
import { useTextInput } from "../hooks/useTextInput";
import { validateSkillName } from "../services/skillValidation";
import SkillHistoryCard from "../components/skill/SkillHistoryCard";
import SkillProgressCard from "../components/skill/SkillProgressCard";

export default function SkillDetail() {
  const { skill }: { skill: Skill } = useLoaderData();
  const [newSkill, setNewSkill] = useState(skill);
  const [
    tags,
    tagInput,
    tagsIsInvalid,
    tagsErrorMessage,
    handleTagInputChange,
    handleTagInputKeyDown,
    handleAddTag,
    handleRemoveTag,
  ] = useTagInput(newSkill.tags, handleUpdateTags);
  const [
    nameInputValue,
    nameInputIsInvalid,
    nameInputErrorMessage,
    handleNameInputChange,
    handleNameInputBlur,
  ] = useTextInput(newSkill.name, validateSkillName);

  function handleUpdateName() {
    if (nameInputIsInvalid) return;
    setNewSkill((prev) => ({ ...prev, name: nameInputValue.trim() }));
  }

  // Update the skill with the latest tags so saving will use up-to-date data.
  function handleUpdateTags(nextTags: SkillTag[]) {
    setNewSkill((prev) => ({ ...prev, tags: nextTags }));
  }

  return (
    <div className="min-h-screen bg-beige py-6">
      <div className="container mx-auto max-w-6xl space-y-6 px-4">
        {/* Name + tags block */}
        <div className="bg-white border border-grey-500 border-t-4 border-t-lavender-500 p-5 space-y-3">
          <SkillNameInlineEditor
            name={nameInputValue}
            isInvalid={nameInputIsInvalid}
            errorMessage={nameInputErrorMessage}
            onChange={handleNameInputChange}
            onBlur={handleNameInputBlur}
            onSubmit={handleUpdateName}
          />
          <div className="border-t border-grey-500 space-y-3 pt-4">
            <SkillTagsInlineEditor
              tags={tags}
              tagInput={tagInput}
              isInvalid={tagsIsInvalid}
              errorMessage={tagsErrorMessage}
              onTagInputChange={handleTagInputChange}
              onTagInputKeyDown={handleTagInputKeyDown}
              onAddTag={handleAddTag}
              onRemoveTag={handleRemoveTag}
            ></SkillTagsInlineEditor>
          </div>
        </div>

        {/* Progression block */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-6">
            <SkillProgressCard skill={newSkill} />

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
            <SkillHistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
