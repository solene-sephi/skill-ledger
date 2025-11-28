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

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label className="block text-sm font-medium">
        Nom <span className="text-red-600">*</span>
        <input
          name="name"
          className="border border-grey-500 font-normal block w-full px-3 py-2.5 mt-2"
          value={newSkill.name}
          onChange={(e) => handleNameChange(e)}
          required
        />
      </label>

      <div className="flex justify-end">
        <Button variant="primary" type="submit">
          Ajouter une compétence
        </Button>
      </div>
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </p>
      )}
    </form>
  );
}
