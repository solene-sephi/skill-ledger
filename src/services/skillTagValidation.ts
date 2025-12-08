export function validateTag(name: string): string | null {
  const trimmed = name.trim();

  if (!trimmed) return "Le nom du tag est obligatoire";
  if (trimmed.length < 2)
    return "Le nom du tag doit contenir au moins 2 caractères";
  if (trimmed.length > 25)
    return "Le nom du tag doit faire moins de 25 caractères";
  return null;
}
