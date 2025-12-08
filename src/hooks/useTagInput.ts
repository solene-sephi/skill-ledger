import { useState, type ChangeEvent } from "react";
import type { SkillTag } from "../types/Skill";
import { validateTag } from "../services/skillTagValidation";

export function useTagInput(initialTags: SkillTag[] = []) {
  const [tags, setTags] = useState(initialTags);
  const [tagInput, setTagInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isInvalid = Boolean(errorMessage);

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
    const value = tagInput.trim();
    const error = validateTag(value);
    if (error) {
      setErrorMessage(error);
      return;
    }

    setTags((prev) => {
      // Check if the value does not already exist
      const lowerTags = prev.map((t) => t.toLowerCase());
      if (lowerTags.includes(value.toLowerCase())) {
        return prev;
      }

      return [...prev, value];
    });

    inputReset();
  }

  function handleRemoveTag(tagToRemove: string) {
    setTags((prev) => {
      const filteredTags = prev.filter((tag) => tag !== tagToRemove);
      return filteredTags;
    });
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
