import { RiPencilFill } from "react-icons/ri";
import { useState, type FormEvent } from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../ui/Button";
import { useTextInput } from "../../hooks/useTextInput";
import { validateSkillName } from "../../services/skillValidation";

interface SkillNameInlineEditorProps {
  skillName: string;
  onSaveName: (name: string) => void;
}

export default function SkillNameInlineEditor({
  skillName,
  onSaveName,
}: SkillNameInlineEditorProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [
    nameInputValue,
    nameNormalizedValue,
    nameInputIsInvalid,
    nameInputErrorMessage,
    handleNameInputChange,
    handleNameInputBlur,
  ] = useTextInput(skillName, validateSkillName);

  function handleEnterEditMode() {
    setIsEditingName(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nameInputIsInvalid) return;

    onSaveName(nameNormalizedValue);
    setIsEditingName(false);
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
        disabled={nameInputIsInvalid}
        type="submit"
        aria-label="Éditer le nom de la compétence"
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
        value={nameInputValue}
        onChange={handleNameInputChange}
        onBlur={handleNameInputBlur}
        required
      />
    </form>
  );

  return (
    <>
      {isEditingName ? nameEdit : nameDisplay}

      {nameInputIsInvalid && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {nameInputErrorMessage}
        </p>
      )}
    </>
  );
}
