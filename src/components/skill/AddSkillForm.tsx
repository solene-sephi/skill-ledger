import { type FormEvent } from "react";
import Button from "../ui/Button";
import type { Skill } from "../../types/Skill";
import { validateSkillName } from "../../services/skillValidation";
import SkillTagsInlineEditor from "./SkillTagsInlineEditor";
import { useTagInput } from "../../hooks/useTagInput";
import { useTextInput } from "../../hooks/useTextInput";

interface AddSkillFormProps {
  onAdd: (skill: Skill) => void;
}

export default function AddSkillForm({ onAdd }: AddSkillFormProps) {
  const [
    tags,
    tagInput,
    tagInputIsInvalid,
    tagInputErrorMessage,
    handleTagInputChange,
    handleTagInputKeyDown,
    handleAddTag,
    handleRemoveTag,
    inputAndTagsReset,
  ] = useTagInput([]);
  const [
    nameInputValue,
    nameInputIsInvalid,
    nameInputErrorMessage,
    handleNameInputChange,
    handleNameInputBlur,
    resetInput,
  ] = useTextInput("", validateSkillName);
  const formIsInvalid = nameInputIsInvalid || tagInputIsInvalid;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formIsInvalid) return;

    // Build the skill object before calling onAdd; not using setNewSkill because it's async so newSkill won’t include the latest values yet
    const skillToAdd = {
      id: crypto.randomUUID(),
      name: nameInputValue.trim(),
      tags,
      actionNb: 0,
      recentProgress: "",
    };

    onAdd(skillToAdd);

    // Empty all form fields
    resetInput();
    inputAndTagsReset();
  }

  return (
    <form onSubmit={handleSubmit} className="form-base">
      {/* Name input */}
      <label className="form-label">
        Nom <span className="text-red-600">*</span>
        <input
          name="name"
          className="input-base field-spacing w-full"
          value={nameInputValue}
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
          required
        />
      </label>
      {/* Name error display */}
      {nameInputIsInvalid && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {nameInputErrorMessage}
        </p>
      )}

      {/* Skill tags editor */}
      <SkillTagsInlineEditor
        tags={tags}
        tagInput={tagInput}
        isInvalid={tagInputIsInvalid}
        errorMessage={tagInputErrorMessage}
        onTagInputChange={handleTagInputChange}
        onTagInputKeyDown={handleTagInputKeyDown}
        onAddTag={handleAddTag}
        onRemoveTag={handleRemoveTag}
        showLabel
      ></SkillTagsInlineEditor>

      {/* Submit button */}
      <div className="flex justify-end">
        <Button variant="primary" type="submit" disabled={formIsInvalid}>
          Ajouter une compétence
        </Button>
      </div>
    </form>
  );
}
