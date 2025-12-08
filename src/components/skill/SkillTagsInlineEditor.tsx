import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import SkillTagList from "./SkillTagList";
import type { OnRemoveTag, SkillTag } from "../../types/Skill";
import type { ChangeEvent } from "react";

interface SkillTagsInlineEditorProps {
  tags: SkillTag[];
  tagInput: string;
  isInvalid: boolean;
  errorMessage: string | null;
  onTagInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTagInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAddTag: () => void;
  onRemoveTag?: OnRemoveTag;
  showLabel?: boolean;
  label?: string;
}

export default function SkillTagsInlineEditor({
  tags,
  tagInput,
  isInvalid,
  errorMessage,
  onTagInputChange,
  onTagInputKeyDown,
  onAddTag,
  onRemoveTag,
  showLabel = false,
  label = "Tags",
}: SkillTagsInlineEditorProps) {
  return (
    <>
      <SkillTagList tags={tags} size="md" onRemove={onRemoveTag} />

      <div className="flex flex-wrap items-center gap-2 field-spacing mt-4">
        <label
          htmlFor="skillTags"
          className={`form-label w-full ${!showLabel && "sr-only"}`}
        >
          {label ? label : "Tags"}
        </label>

        <input
          type="text"
          name="tags"
          id="skillTags"
          className="input-base"
          placeholder="Entrer un tag"
          aria-label={!showLabel ? label : undefined}
          value={tagInput}
          onChange={onTagInputChange}
          onKeyDown={onTagInputKeyDown}
        />
        <Button
          className="flex items-center justify-center"
          type="button"
          size="square"
          variant="tertiary"
          aria-label="Ajouter un tag"
          onClick={onAddTag}
        >
          <FaPlus className="size-4" />
        </Button>
      </div>
      {/* Name error display */}
      {isInvalid && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {errorMessage}
        </p>
      )}
    </>
  );
}
