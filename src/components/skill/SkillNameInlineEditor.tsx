import { RiPencilFill } from "react-icons/ri";
import type { Skill } from "../../types/Skill";
import { useState } from "react";

interface SkillNameInlineEditorProps {
  skill: Skill;
}

export default function SkillNameInlineEditor({
  skill,
}: SkillNameInlineEditorProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  console.log(isEditingName);

  function handleEnterEditMode() {
    setIsEditingName(true);
  }

  const nameDisplay = <div className="flex items-center gap-2">
      <h2 className="text-3xl font-bold text-grey-900">{skill.name}</h2>
      <button
        type="button"
        className="p-2 border border-grey-500 text-grey-900 hover:bg-grey-100"
        aria-label="Éditer le nom et les tags de la compétence"
        onClick={handleEnterEditMode}
      >
        <RiPencilFill className="size-4" />
      </button>
    </div>

  return (
    {isEditingName ? nameDisplay : 'e'}
  );
}
