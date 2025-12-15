import { useState, type ChangeEvent, type FormEvent } from "react";
import { type SkillAction } from "../../types/Skill";
import Button from "../ui/Button";
import {
  validateSkillActionLink,
  validateSkillActionName,
  validateSkillActionNote,
} from "../../services/skillActionValidation";
import { useTextInput } from "../../hooks/useTextInput";
import {
  getActionType,
  getAllActionTypes,
  type SkillActionTypeId,
} from "../../services/skillActionType";

interface AddActionFormProps {
  onAdd: (action: SkillAction) => void;
}

const actionTypes = getAllActionTypes();
const initialSelectedType = actionTypes[0].id;

export default function AddActionForm({ onAdd }: AddActionFormProps) {
  const [
    nameInputValue,
    nameNormalizedValue,
    nameIsInvalid,
    nameErrorMessage,
    handleNameChange,
    handleNameBlur,
    resetNameInput,
  ] = useTextInput("", validateSkillActionName);
  const [
    linkInputValue,
    linkNormalizedValue,
    linkIsInvalid,
    linkErrorMessage,
    handleLinkChange,
    handleLinkBlur,
    resetLinkInput,
  ] = useTextInput("", validateSkillActionLink);
  const [
    noteInputValue,
    noteNormalizedValue,
    noteIsInvalid,
    noteErrorMessage,
    handleNoteChange,
    handleNoteBlur,
    resetNoteInput,
  ] = useTextInput("", validateSkillActionNote);
  const [selectedType, setSelectedType] =
    useState<SkillActionTypeId>(initialSelectedType);
  const formIsInvalid = nameIsInvalid || linkIsInvalid || noteIsInvalid;

  function handleSelectTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    // Checks whether the passed value exists
    const skillType = getActionType(e.target.value);
    if (!skillType) return;

    setSelectedType(skillType.id);
  }

  function resetSelectedType() {
    setSelectedType(initialSelectedType);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formIsInvalid) return;

    const actionToAdd = {
      id: crypto.randomUUID(),
      name: nameNormalizedValue,
      typeId: selectedType,
      date: new Date(), // now
      ...(linkNormalizedValue && { link: linkNormalizedValue }), // includes link property only if link value provided
      ...(noteNormalizedValue && { note: noteNormalizedValue }),
    };

    onAdd(actionToAdd);

    resetNameInput();
    resetSelectedType();
    resetLinkInput();
    resetNoteInput();
  }

  return (
    <form onSubmit={handleSubmit} className="form-base">
      <label className="form-label">
        Type <span className="text-red-600">*</span>
        <select
          name="type"
          className="input-base field-spacing"
          value={selectedType}
          onChange={handleSelectTypeChange}
        >
          {actionTypes.map((action) => (
            <option key={action.id} value={`${action.id}`}>
              {action.label}
            </option>
          ))}
        </select>
      </label>
      <label className="form-label">
        Nom <span className="text-red-600">*</span>
        <input
          name="name"
          className="input-base field-spacing w-full"
          value={nameInputValue}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          required
        />
      </label>
      {nameIsInvalid && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {nameErrorMessage}
        </p>
      )}

      <label className="form-label">
        Lien (optionnel)
        <input
          name="link"
          type="url"
          className="input-base field-spacing w-full"
          value={linkInputValue}
          onChange={handleLinkChange}
          onBlur={handleLinkBlur}
        />
      </label>
      {linkIsInvalid && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {linkErrorMessage}
        </p>
      )}
      <label className="form-label">
        Note (optionnel)
        <textarea
          name="note"
          className="input-base field-spacing w-full min-h-24"
          value={noteInputValue}
          onChange={handleNoteChange}
          onBlur={handleNoteBlur}
        />
      </label>
      {noteIsInvalid && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {noteErrorMessage}
        </p>
      )}
      <Button type="submit" className="self-start" disabled={formIsInvalid}>
        Ajouter
      </Button>
    </form>
  );
}
