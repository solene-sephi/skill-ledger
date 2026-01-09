import { useState, type ChangeEvent } from "react";
import type { SkillTag } from "../types";
import { validateTag } from "../validation/tag";

export function useTagInput(
  initialTags: SkillTag[] = [],
  onTagsChange?: (tags: SkillTag[]) => void // Use the callback when the parent needs tags synced immediately (no separate save).
  // Skip it when the parent reads tags later (e.g., on main form submit).
) {
  const [tags, setTags] = useState(initialTags);
  const [tagInput, setTagInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isInvalid = Boolean(errorMessage);

  function normalize(value: string) {
    return value.trim();
  }

  function inputReset() {
    setTagInput("");
  }

  function inputAndTagsReset() {
    inputReset();
    setTags([]);
  }

  function handleTagInputChange(e: ChangeEvent<HTMLInputElement>) {
    setErrorMessage("");
    setTagInput(e.target.value);
  }

  function handleTagInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents form submission via Enter
      handleAddTag();
    }
  }

  function handleAddTag() {
    const normalized = normalize(tagInput);
    const error = validateTag(normalized);
    if (error) {
      setErrorMessage(error);
      return;
    }

    const lowerTags = tags.map((t) => t.toLowerCase());
    if (lowerTags.includes(normalized.toLowerCase())) {
      return;
    }

    const nextTags = [...tags, normalized];
    setTags(nextTags);
    onTagsChange?.(nextTags);

    inputReset();
  }

  function handleRemoveTag(tagToRemove: string) {
    const filteredTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(filteredTags);
    onTagsChange?.(filteredTags);
  }

  return [
    tags,
    tagInput,
    isInvalid,
    errorMessage,
    handleTagInputChange,
    handleTagInputKeyDown,
    handleAddTag,
    handleRemoveTag,
    inputAndTagsReset,
  ] as const;
}
