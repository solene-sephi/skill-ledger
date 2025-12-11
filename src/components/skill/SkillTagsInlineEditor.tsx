import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import SkillTagList from "./SkillTagList";
import type { SkillTag } from "../../types/Skill";
import { useTagInput } from "../../hooks/useTagInput";

interface SkillTagsInlineEditorProps {
  initialTags: SkillTag[];
  onTagsChange?: (tags: SkillTag[]) => void;
  onRemoveTag?: (tag: string) => void;
  showLabel?: boolean;
  label?: string;
}

export default function SkillTagsInlineEditor({
  initialTags,
  onTagsChange,
  onRemoveTag,
  showLabel = false,
  label = "Tags",
}: SkillTagsInlineEditorProps) {
  const [
    tags,
    tagInput,
    isInvalid,
    errorMessage,
    handleTagInputChange,
    handleTagInputKeyDown,
    handleAddTag,
    handleRemoveTag,
  ] = useTagInput(initialTags, onTagsChange);

  return (
    <>
      <SkillTagList
        tags={tags}
        size="md"
        onRemove={(tag) => {
          handleRemoveTag(tag);
          onRemoveTag?.(tag);
        }}
      />

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
          onChange={handleTagInputChange}
          onKeyDown={handleTagInputKeyDown}
        />
        <Button
          className="flex items-center justify-center"
          type="button"
          size="square"
          variant="tertiary"
          aria-label="Ajouter un tag"
          onClick={handleAddTag}
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
