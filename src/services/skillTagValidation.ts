export function validateTag(name: string): string | null {
  // Validation expectsalready cleaned inputs (trimmed, etc.)
  if (!name) return "Le nom du tag est obligatoire";
  if (name.length < 2)
    return "Le nom du tag doit contenir au moins 2 caractères";
  if (name.length > 25)
    return "Le nom du tag doit faire moins de 25 caractères";
  return null;
}
