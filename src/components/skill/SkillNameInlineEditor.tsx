import { RiPencilFill } from "react-icons/ri";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../ui/Button";

interface SkillNameInlineEditorProps {
  name: string;
  isInvalid: boolean;
  errorMessage: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onSubmit: () => void;
}

export default function SkillNameInlineEditor({
  name,
  isInvalid,
  errorMessage,
  onChange,
  onBlur,
  onSubmit,
}: SkillNameInlineEditorProps) {
  const [isEditingName, setIsEditingName] = useState(false);

  function handleEnterEditMode() {
    setIsEditingName(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit();
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
          {name}
        </h2>
      </div>
    </div>
  );

  const nameEdit = (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <Button
        variant="tertiaryOutline"
        size="square"
        disabled={isInvalid}
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
        value={name}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
    </form>
  );

  return (
    <>
      {isEditingName ? nameEdit : nameDisplay}

      {isInvalid && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {errorMessage}
        </p>
      )}
    </>
  );
}
