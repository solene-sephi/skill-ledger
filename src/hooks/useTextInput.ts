import { useState, type ChangeEvent } from "react";

export function useTextInput(
  initialText: string,
  validate: (text: string) => string | null
) {
  const [inputValue, setInputValue] = useState(initialText);
  const [normalizedValue, setNormalizedValue] = useState(initialText.trim());
  const [touched, setTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const isInvalid = Boolean(errorMessage) && touched;

  function normalize(text: string) {
    // Clean value
    return text.trim();
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // Reset error on each change so the next validation can update it
    setErrorMessage("");

    const value = e.target.value;
    const normalized = normalize(value);

    // Keep both values: raw for display, normalized for validation/submit
    setNormalizedValue(normalized);

    const error = validate(normalized);
    if (error) {
      setErrorMessage(error);
    }

    setTouched(true);
    setInputValue(value);
  }

  function handleBlur() {
    // Mark as touched on blur so errors can show after first interaction.
    setTouched(true);
  }

  function resetInput() {
    setInputValue("");
    setNormalizedValue("");
    setTouched(false);
  }

  return [
    inputValue,
    normalizedValue,
    isInvalid,
    errorMessage,
    handleChange,
    handleBlur,
    resetInput,
  ] as const;
}
