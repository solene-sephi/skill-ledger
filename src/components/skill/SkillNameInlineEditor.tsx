import { RiPencilFill } from "react-icons/ri";
import type { Skill } from "../../types/Skill";
import { useState, type ChangeEvent } from "react";
import { FaCheck } from "react-icons/fa";

interface SkillNameInlineEditorProps {
  skill: Skill;
  onSaveName: (name: string) => void;
}

export default function SkillNameInlineEditor({
  skill,
}: SkillNameInlineEditorProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setname] = useState(skill.name);

  function handleEnterEditMode() {
    setIsEditingName(true);
  }

  function handleValidateName() {
    onSaveName(name);
    setIsEditingName(false);
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setname(e.target.value);
  }

  const nameDisplay = (
    <>
      <h2 className="input-readonly-display text-3xl font-bold text-grey-900 w-auto">
        {skill.name}
      </h2>
      <button
        type="button"
        className="p-2 border border-grey-500 text-grey-900 hover:bg-grey-100"
        aria-label="Éditer le nom et les tags de la compétence"
        onClick={handleEnterEditMode}
      >
        <RiPencilFill className="size-4" />
      </button>
    </>
  );

  const nameEdit = (
    <>
      <label htmlFor="skillName" hidden>
        Nom
      </label>
      <input
        name="skillName"
        id="skillName"
        className="input-base text-3xl font-bold text-grey-900 field-sizing-content w-auto"
        value={name}
        onChange={handleNameChange}
        required
      />

      <button
        type="button"
        className="p-2 border border-grey-500 text-grey-900 hover:bg-grey-100"
        aria-label="Éditer le nom et les tags de la compétence"
        onClick={handleValidateName}
      >
        <FaCheck className="size-4" />
      </button>
    </>
  );

  return (
    <div className="flex items-center gap-2">
      {isEditingName ? nameEdit : nameDisplay}
    </div>
  );
}
