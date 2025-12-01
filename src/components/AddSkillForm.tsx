import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "./Button";
import type { Skill } from "../types/Skill";

interface AddSkillFormProps {
  onAdd: (skill: Skill) => void;
}

function validateSkillForm(skill: Skill): string | null {
  if (!skill.name.trim()) {
    return "Le nom est obligatoire";
  }
  return null;
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
  const [error, setError] = useState("");
  const validationError = validateSkillForm(newSkill);
  const isFormValid = !validationError;
  const submitButtonDisabled = !isFormValid;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(""); // Error reset

    // Checking the validity of the form one last time and retrieve error message
    if (validationError) {
      setError(validationError);
      return;
    }

    // Add the new skill
    onAdd(newSkill);

    // Empty all form fiels
    setNewSkill(makeEmptySkill());
    setTagInput("");
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
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
            variant="secondary"
            onClick={handleAddTag}
            aria-label="Ajouter un tag"
          >
            +
          </Button>
        </div>
      </label>

      {/* Tags list */}
      <div className="flex flex-wrap gap-2">
        {newSkill.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-green-400 text-black rounded-full text-sm"
          >
            {tag}
            <button
              type="button"
              className="ml-2 hover:cursor-pointer"
              onClick={() => handleRemoveTag(tag)}
              aria-label={`Supprimer le tag ${tag}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Submit button */}
      <div className="flex justify-end">
        <Button variant="primary" type="submit" disabled={submitButtonDisabled}>
          Ajouter une compétence
        </Button>
      </div>

      {/* Error display */}
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </p>
      )}
    </form>
  );
}
