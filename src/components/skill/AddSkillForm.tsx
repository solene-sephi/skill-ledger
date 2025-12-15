import { type FormEvent, useState } from "react";
import Button from "../ui/Button";
import type { Skill, SkillTag } from "../../types/Skill";
import { validateSkillName } from "../../services/skillValidation";
import SkillTagsInlineEditor from "./SkillTagsInlineEditor";
import { useTextInput } from "../../hooks/useTextInput";

interface AddSkillFormProps {
  onAdd: (skill: Skill) => void;
}

export default function AddSkillForm({ onAdd }: AddSkillFormProps) {
  const [tags, setTags] = useState<SkillTag[]>([]);
  const [tagEditorKey, setTagEditorKey] = useState(0);
  const [
    nameInputValue,
    nameNormalizedValue,
    nameInputIsInvalid,
    nameInputErrorMessage,
    handleNameInputChange,
    handleNameInputBlur,
    resetInput,
  ] = useTextInput("", validateSkillName);
  const formIsInvalid = nameInputIsInvalid;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formIsInvalid) return;

    // Build the skill object before calling onAdd; not using setNewSkill because it's async so newSkill won’t include the latest values yet
    const skillToAdd = {
      id: crypto.randomUUID(),
      name: nameNormalizedValue,
      tags,
      actionNb: 0,
      recentProgress: "",
      actions: [],
    };

    onAdd(skillToAdd);

    // Empty all form fields
    resetInput();
    setTags([]);
    setTagEditorKey((prev) => prev + 1);
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
        key={tagEditorKey}
        initialTags={tags}
        onTagsChange={setTags}
        showLabel
      />

      {/* Submit button */}
      <div className="flex justify-end">
        <Button variant="primary" type="submit" disabled={formIsInvalid}>
          Ajouter une compétence
        </Button>
      </div>
    </form>
  );
}
