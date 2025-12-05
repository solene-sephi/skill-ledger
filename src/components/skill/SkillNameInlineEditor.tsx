import { RiPencilFill } from "react-icons/ri";
import type { Skill } from "../../types/Skill";
import { useState, type ChangeEvent } from "react";
import { FaCheck } from "react-icons/fa";
import { validateSkillName } from "../../services/skillValidation";
import Button from "../ui/Button";

interface SkillNameInlineEditorProps {
  skillName: string;
  onSaveName: (name: string) => void;
}

export default function SkillNameInlineEditor({
  skillName,
  onSaveName,
}: SkillNameInlineEditorProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState(skillName);
  const validationError = validateSkillName(nameDraft); // Derived validation so we can disable the submit button and refresh errors live; handleSubmit still rechecks as a last guard.
  const displayError = Boolean(validationError);

  function handleEnterEditMode() {
    setIsEditingName(true);
  }

  function handleSubmit() {
    // Checking the validity of the form one last time
    if (validationError) {
      return;
    }

    onSaveName(nameDraft);
    setIsEditingName(false);
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setNameDraft(e.target.value);
  }

  const nameDisplay = (
    <div className="flex items-center gap-2">
      <Button
        variant="tertiaryOutline"
        size="square"
        aria-label="Éditer le nom et les tags de la compétence"
        onClick={handleEnterEditMode}
      >
        <RiPencilFill className="size-4" />
      </Button>
      <div className="flex-1 min-w-0">
        <h2 className="input-readonly-display text-3xl font-bold text-grey-900 wrap-break-word">
          {skillName}
        </h2>
      </div>
    </div>
  );

  const nameEdit = (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <Button
        variant="tertiaryOutline"
        size="square"
        disabled={displayError}
        type="submit"
        aria-label="Éditer le nom et les tags de la compétence"
      >
        <FaCheck className="size-4" />
      </Button>
      <label htmlFor="skillName" hidden>
        Nom
      </label>
      <input
        name="skillName"
        id="skillName"
        className="input-base text-3xl font-bold text-grey-900"
        value={nameDraft}
        onChange={handleNameChange}
        required
      />
    </form>
  );

  return (
    <>
      {isEditingName ? nameEdit : nameDisplay}

      {displayError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {validationError}
        </p>
      )}
    </>
  );
}
