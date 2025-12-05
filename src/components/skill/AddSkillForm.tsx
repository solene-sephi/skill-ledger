import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../ui/Button";
import type { Skill } from "../../types/Skill";
import SkillTagList from "./SkillTagList";
import { validateSkillName } from "../../services/skillValidation";

interface AddSkillFormProps {
  onAdd: (skill: Skill) => void;
}

function validateSkillForm(skill: Skill): string | null {
  return validateSkillName(skill.name);
}

function makeEmptySkill(): Skill {
  return {
    id: crypto.randomUUID(),
    name: "",
    actionNb: 0,
    tags: [],
    recentProgress: "",
  };
}

export default function AddSkillForm({ onAdd }: AddSkillFormProps) {
  const [newSkill, setNewSkill] = useState<Skill>(() => makeEmptySkill());
  const [tagInput, setTagInput] = useState("");
  const [touchedName, setTouchedName] = useState(false);
  const validationError = validateSkillForm(newSkill); // Derived validation so we can disable the submit button and refresh errors live; handleSubmit still rechecks as a last guard.
  const displayError = touchedName && Boolean(validationError);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Checking the validity of the form one last time
    if (validationError) {
      return;
    }

    // Add the new skill
    onAdd(newSkill);

    // Empty all form fiels
    setNewSkill(makeEmptySkill());
    setTagInput("");
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setTouchedName(true);

    setNewSkill((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }

  function handleTagInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTagInput(e.target.value);
  }

  function handleTagInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents form submission via Enter
      handleAddTag();
    }
  }

  function handleAddTag() {
    const value = tagInput.trim();

    // Check if the field is an empty string
    if (!value) return;

    setNewSkill((prev) => {
      // Check if the value does not already exist
      const lowerTags = prev.tags.map((t) => t.toLowerCase());
      if (lowerTags.includes(value.toLowerCase())) {
        return prev;
      }

      return {
        ...prev,
        tags: [...prev.tags, value],
      };
    });
    setTagInput("");
  }

  function handleRemoveTag(tagToRemove: string) {
    setNewSkill((prev) => {
      const filteredTags = prev.tags.filter((tag) => tag !== tagToRemove);
      return {
        ...prev,
        tags: filteredTags,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form-base">
      {/* Name input */}
      <label className="form-label">
        Nom <span className="text-red-600">*</span>
        <input
          name="name"
          className="input-base field-spacing"
          value={newSkill.name}
          onChange={handleNameChange}
          required
        />
      </label>

      {/* Tags input */}
      <label className="form-label">
        Tags
        <div className="flex gap-2 field-spacing">
          <input
            name="tag"
            className="input-base"
            value={tagInput}
            onChange={handleTagInputChange}
            onKeyDown={handleTagInputKeyDown}
            placeholder="Ajouter un tag puis cliquer sur +"
          />
          <Button
            type="button"
            variant="tertiary"
            onClick={handleAddTag}
            aria-label="Ajouter un tag"
          >
            +
          </Button>
        </div>
      </label>

      {/* Tags list */}
      <SkillTagList
        tags={newSkill.tags}
        isRemovable
        onRemove={handleRemoveTag}
      ></SkillTagList>
      {/* Submit button */}
      <div className="flex justify-end">
        <Button variant="primary" type="submit" disabled={displayError}>
          Ajouter une compétence
        </Button>
      </div>

      {/* Error display */}
      {displayError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {validationError}
        </p>
      )}
    </form>
  );
}
