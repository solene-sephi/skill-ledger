import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "./Button";
import type { Skill } from "../types/Skill";

interface AddSkillFormProps {
  onAdd: (skill: Skill) => void;
}

export default function AddSkillForm({ onAdd }: AddSkillFormProps) {
  // Génère un skill vide avec un nouvel id à chaque fois
  const makeEmptySkill = (): Skill => ({
    id: crypto.randomUUID(),
    name: "",
    actionNb: 0,
    tags: [],
    recentProgress: "",
  });
  const [newSkill, setNewSkill] = useState<Skill>(() => makeEmptySkill());
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(""); // Réinitialisation de l'erreur

    if (!newSkill.name.trim()) {
      setError("Le nom est obligatoire");
      return;
    }

    onAdd(newSkill);

    setNewSkill(makeEmptySkill());
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

  function handleAddTag() {
    // Vérifier si le champ est une châine de caractères vide
    if (!tagInput.trim()) {
      return;
    }

    setNewSkill((prev) => {
      // Vérifier si la valeur n'existe pas déjà
      if (prev.tags.includes(tagInput)) {
        return prev;
      }

      return {
        ...prev,
        tags: [...prev.tags, tagInput],
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
    <form onSubmit={handleSubmit} className="space-y-2">
      {/* Name input */}
      <label className="block text-sm font-medium">
        Nom <span className="text-red-600">*</span>
        <input
          name="name"
          className="border border-grey-500 font-normal block w-full px-3 py-2.5 mt-2"
          value={newSkill.name}
          onChange={handleNameChange}
          required
        />
      </label>

      {/* Tags input */}
      <label className="block text-sm font-medium mt-6">
        Tags
        <div className="mt-2 flex gap-2">
          <input
            name="tag"
            className="border border-grey-500 font-normal block w-full px-3 py-2.5"
            value={tagInput}
            onChange={handleTagInputChange}
            placeholder="Ajouter un tag puis cliquer sur +"
          />
          <Button type="button" variant="secondary" onClick={handleAddTag}>
            +
          </Button>
        </div>
      </label>

      {/* Tags list */}
      <div className="flex gap-2">
        {newSkill.tags.map((tag) => (
          <span
            key={crypto.randomUUID()}
            className="px-2 py-1 bg-green-400 text-black rounded-full text-sm"
          >
            {tag}
            <button
              type="button"
              className="ml-2 hover:cursor-pointer"
              onClick={() => handleRemoveTag(tag)}
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Submit button */}
      <div className="flex justify-end">
        <Button variant="primary" type="submit">
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
