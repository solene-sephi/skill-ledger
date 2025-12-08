import { useState, type ChangeEvent } from "react";

export function useTextInput(
  initialText: string,
  validate: (text: string) => string | null
) {
  const [inputValue, setInputValue] = useState(initialText);
  const [touched, setTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const isInvalid = Boolean(errorMessage) && touched;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setErrorMessage("");

    const value = e.target.value;
    const error = validate(value.trim());
    if (error) {
      setErrorMessage(error);
    }

    setTouched(true);
    setInputValue(value);
  }

  function handleBlur() {
    setTouched(true);
  }

  function resetInput() {
    setInputValue("");
    setTouched(false);
  }

  return [
    inputValue,
    isInvalid,
    errorMessage,
    handleChange,
    handleBlur,
    resetInput,
  ] as const;
}
